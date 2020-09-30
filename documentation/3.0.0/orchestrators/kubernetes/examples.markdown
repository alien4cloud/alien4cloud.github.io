---
layout: post
title:  Examples
root: ../../../../
categories: DOCUMENTATION-3.0.0
parent: [orchestrators, kubernetes, kubernetespluginabstractmode]
node_name: examples
weight: 5000
---

## Prerequisites

{%info%}
In this page, we will use AWS features so you will need a Kubernetes cluster integrated with a AWS account.
However if you want to deploy a basic Kubernetes cluster you can use our TOSCA types based on kubeadm which can be found [here](https://github.com/alien4cloud/csar-public-library/tree/develop/org/alien4cloud/kubernetes/kubeadm)
{%endinfo%}

To deploy onto Kubernetes cluster through ALIEN, you will need:

- A Kubernetes cluster deployed on AWS with AWS extensions (ability to provision EBS) with at least 2 nodes
- A Yorc orchestrator:
  - the binary [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) must be installed on the manager.
  - the K8S cluster config file must be placed in `/etc/kubernetes/admin.conf`.
  - the K8S cluster API must be reachable from the manager.
- An alien with:
  - a valid orchestrator linked to the CFY manager with an AWS location.
  - the kubernetes plugin
  - the http repository plugin (the samples use an http repository)
  - the following archives imported from GIT:
    - https://github.com/alien4cloud/tosca-normative-types.git branch **3.0.0-SM6**
    - https://github.com/alien4cloud/alien4cloud-extended-types.git branch **3.0.0-SM6** folder **alien-base-types**
    - https://github.com/alien4cloud/docker-tosca-types.git **3.0.0-SM6** folder **docker-types**

## Location configuration

You'll need to setup a location in order to be able to deploy onto a K8S cluster. Let's create an AWS location on a Yorc orchestrator.

### Topology modifiers

You'll need to setup modifiers on your location. On the location screen, in the **Topology Modifier** tab:

- add a **Kubernetes modifier** at the phase `post-location-match`
- add a **Kubernetes spec generator modifier** at the phase `post-matched-node-setup`

{% info %}
The phase define the deployment flow step where the modifier will act upon the topology. The **Kubernetes modifier** will act at the `post-location-match` phase, ie. just after you have selected the location during deployment. The **Kubernetes spec generator modifier** will act at the `post-matched-node-setup` phase ie. just after the matched nodes are configured by the user.
{% endinfo %}

![Location modifiers](../../images/kubernetes_walkthrough/location_modifiers.png){: margin: 50}

The fisrt modifier will transform your abstract components (deployment units, containers) into kubernetes abstract nodes (deployment, services ...). The second one will generate types that are ready to be deployed onto a Kubernetes cluster.

### On demand resources

You will need to setup some Kubernetes On demand resources on the location. You will find them in the catalog (search for 'kube') :

- `org.alien4cloud.kubernetes.api.types.Container` : it will be used to match and optionally configure Kubernetes containers.
- `org.alien4cloud.kubernetes.api.types.Deployment` : it will be used to match and optionally configure Kubernetes deployments (AKA Pods).
- `org.alien4cloud.kubernetes.api.types.Service` : it will be used to match and optionally configure Kubernetes services (used to connect containers and to expose endpoint).

For volumes, you can add the followings resources :

- `org.alien4cloud.kubernetes.api.types.volume.AWSElasticBlockStoreVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.EmptyDirVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.HostPathVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.PersistentVolumeClaimSource`

We will explain these different kind of K8S volumes implementations.

### Policies

In the location tab **Policies**, you can add the following policies provided by the Kubernetes plugin (you will find them in the catalog):

- `org.alien4cloud.kubernetes.api.policies.AntiAffinityLabel`
- `org.alien4cloud.kubernetes.api.policies.AutoscalingPolicy`
- `org.alien4cloud.kubernetes.api.policies.NodeAffinityLabel`

![Location policies](../../images/kubernetes_walkthrough/location-policies.png){: margin: 50}

# Examples walkthrough

All the samples bellow can be found in the [samples](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube) repository https://github.com/alien4cloud/samples (folder org/alien4cloud/doc/kube)

## A simple Apache container

Our first trivial topology help us validate our setup : a single Apache container. You can find it [here](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/01-simple-apache) (or use the **01-simple-apache** if you have imported the samples).

![Topology](../../images/kubernetes_walkthrough/topo-01-simple-apache.png){: style="width: 200px; margin: 0 auto"}

{% info %}
You can see that our node named **Container** of type `org.alien4cloud.extended.container.types.ContainerRuntime` is not hosted on a `ContainerDeploymentUnit`. Since a container can not be deployed without being hosted on a Pod in K8S, the modifier will create for you a `ContainerDeploymentUnit` for each 'orphan' container.
{% endinfo %}

Deploy it using the location you have setup. The topology transformed by the first modifier will contain abstract kubernetes nodes that will be auto matched with the concrete on demand resource you have setup before.

At kubernetes level few things will be started:

- a kubernetes deployment containing your container.
- a service of type NodePort, exposing the apache endpoint.

{% info %}
For each endpoint found in the topology, the topology modifier will create a service of type NodePort. This allow others containers to connect to underlying endpoint and eventually to connect to the endpoint from outside the cluster.
{% endinfo %}

{% warning %}
For the moment, we don't expose automatically endpoint to the outside. We only use services of type [NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport) that open a port on the hosting node. You'll have to change your security rules if you want to access your endpoint from outside.

Find the service on the Kubernetes dashboard and open the yaml.
<br>
![Services](../../images/kubernetes_walkthrough/k8s-service-find.png)
<br>
Find the **nodePort** value.

![ServiceNodePort](../../images/kubernetes_walkthrough/k8s-service-nodePort.png)

Open this port on all the nodes of your cluster if you want to access to your endpoint (use a dedicated security group that is associated to all your cluster nodes).
{% endwarning %}

You can test your apache using one of the cluster node public IP and the nodePort exposed by your service.
<br>
![ServiceNodePort](../../images/kubernetes_walkthrough/working-apache.png){: style="width: 400px; margin: 0 auto"}

{% info %}
When a endpoint is exposed by a service, it is joinable through one of the cluster node external IP.
{% highlight bash%}
[ec2-user@ip-172-31-42-102 ~]$ kubectl --kubeconfig=/etc/kubernetes/admin.conf get nodes
NAME                                          STATUS    ROLES     AGE       VERSION
ip-172-31-34-200.eu-west-1.compute.internal   Ready     <none>    6d        v1.8.4
[ec2-user@ip-172-31-42-102 ~]$ kubectl --kubeconfig=/etc/kubernetes/admin.conf get node ip-172-31-34-200.eu-west-1.compute.internal -o=json | grep -C 1 ExternalIP
                "address": "52.31.250.27",
                "type": "ExternalIP"
            },
{% endhighlight %}
{% endinfo %}

### Add the node label affinity policy

For this example, we'll use the [02-simple-apache-affinity](https://github.com/alien4cloud/samples/blob/master/org/alien4cloud/doc/kube/topology/02-simple-apache-affinity/tosca.yaml) topology.

![Topology](../../images/kubernetes_walkthrough/02-simple-apache-affinity-topology.png){: style="width: 200px; margin: 0 auto"}

We now want to specify the node onto our pod will be deployed. For that we'll use a placement policy (`tosca.policies.Placement`).

You must tag get an existing tag for a given node of your Kube cluster (the tag will be used by the concrete Kube policy).

{% highlight bash%}
[ec2-user@ip-172-31-42-102 xdeWork]$ kubectl --kubeconfig=/etc/kubernetes/admin.conf get nodes
NAME                                          STATUS    ROLES     AGE       VERSION
ip-172-31-34-200.eu-west-1.compute.internal   Ready     <none>    6d        v1.8.4
[ec2-user@ip-172-31-42-102 xdeWork]$ kubectl --kubeconfig=/etc/kubernetes/admin.conf label nodes ip-172-31-34-200.eu-west-1.compute.internal Mylabel=MyLabelValue1
node "ip-172-31-34-200.eu-west-1.compute.internal" labeled
{% endhighlight %}

At deployment stage, ensure the topology policy match the location policy of type `org.alien4cloud.kubernetes.api.policies.NodeAffinityLabel`. Edit the policy property **matchExpressions** in order to have :

{% highlight yaml%}
key: Mylabel
operator: In
values:
  - MyLabelValue1
{% endhighlight %}

Deploy and ensure the Deployment is effectively deployed on the chosen node. To be sure it wasn't due to chance, undeploy, change the tag value, deploy again and check again !

### Attach a hostpath volume

For this example, we'll use the [03-simple-apache-hostPath](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/03-simple-apache-hostPath/tosca.yaml) topology.

![Topology](../../images/kubernetes_walkthrough/topologie-03-simple-apache-hostPath.png){: style="width: 200px; margin: 0 auto"}

In this topology we have added a volume to the deployment unit.
We'll match it to a [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) volume. With this kind of volume, we can mount a given directory of the hosting node as a volume for the container. In our example, we will mount the `/var/log` volume at the `/usr/local/apache2/htdocs` mount point on the container. By this way we'll be able to display our logs through our webserver ! It's not very usefull and not very secured IRL but just simple and fun in this boarding context ;)

Deploy the topology, and at matching stage, choose the resource of type `org.alien4cloud.kubernetes.api.types.volume.HostPathVolumeSource` for the node named 'Volume'. Set the property `spec.path` to `/var/log` and deploy.

Find the port exposed by the nodes :

{% highlight bash%}
ubuntu@ip-172-31-19-47:~$ kubectl get services
NAME                                       TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
apache-http-endpoint-service--1667037327   NodePort    10.152.183.176   <none>        80:31455/TCP   17m
default-http-backend                       ClusterIP   10.152.183.167   <none>        80/TCP         3d
kubernetes                                 ClusterIP   10.152.183.1     <none>        443/TCP        3d
ubuntu@ip-172-31-19-47:~$ kubectl get service apache-http-endpoint-service--1667037327 -o=jsonpath={.spec.ports[0].nodePort} && echo
31455
{% endhighlight %}

The port is 31455. Change security group and test the endpoint.
<br>

![ServiceNodePort](../../images/kubernetes_walkthrough/ApacheHostPathTest.png){: style="width: 600px; margin: 0 auto"}

### Attach an emptyDir volume

For this example, we'll use the [04-simple-apache-emptyDir](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/04-simple-apache-emptyDir/tosca.yaml) topology.

In this example, we'll see how we can share a same volume between 2 containers in the same pod.

![Topology](../../images/kubernetes_walkthrough/topologie-04-simple-apache-emptyDir.png){: style="width: 200px; margin: 0 auto"}

The volume is attached to the 2 container:

- mounted at `/usr/local/apache2/htdocs` for the Apache container.
- mounted at `/tmp/emptyDir` for the sidecar container.

This time, we'll match the volume to an [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) volume (on demand resource of type `org.alien4cloud.kubernetes.api.types.volume.EmptyDirVolumeSource`).

The SidecarContainer is a busybox that just just echo 'Hello World' into a file (see the **docker_run_cmd** property of the **BusyboxBash** container node) . Since the same directory is mount by the apache at `/usr/local/apache2/htdocs`, this index.html become the welcome page of our fabulous website !
<br>

![ServiceNodePort](../../images/kubernetes_walkthrough/workingApacheEmptyDir.png){: style="width: 600px; margin: 0 auto"}

## A Nodecellar connecting to a Mongo

For this example, we'll use the [05-nodecellar-mongo](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/05-nodecellar-mongo/tosca.yaml) topology.

In this example, we'll connect 2 containers: the Nodecellar will connect to a Mongo database. The modifier will create a service in front of the Mongo container so it can be accessed using a [clusterIp](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services---service-types), wherever it is deployed on the cluster.

![Topology](../../images/kubernetes_walkthrough/05-nodecellar-mongo-topology.png){: style="width: 500px; margin: 0 auto"}

Find the port of the Nodecellar service:

{% highlight bash%}
[ec2-user@ip-172-31-42-102 ~]$ kubectl --kubeconfig=/etc/kubernetes/admin.conf get services
NAME                                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)           AGE
default-http-backend                            ClusterIP   10.152.183.167   <none>        80/TCP            6d
kubernetes                                      ClusterIP   10.152.183.1     <none>        443/TCP           6d
mongo-mongo-db-service--601356641               NodePort    10.152.183.158   <none>        27017:31992/TCP   5m
nodecellar-nodecellar-app-service--1210144207   NodePort    10.152.183.153   <none>        3000:32353/TCP    4m
{% endhighlight %}

Here, the port was **32353**.

![Test](../../images/kubernetes_walkthrough/06-nodecellar-mongo-antiaffinity-test.png){: style="width: 600px; margin: 0 auto"}

To ensure the Nocellar is actually connected to the Mongo, start browsing the cellar.

### Manually scale the Nodecellar

To manually scale the application frontend, go to the runtime view and click to the **CellarDeployment_Resource** node and use the `org.alien4cloud.management.ClusterControl.scale` operation.

![Test](../../images/kubernetes_walkthrough/05-nodecellar-mongo-manuallyscale.png)

### Add the anti-affinity policy

For this example, we'll use the [05-nodecellar-mongo](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/06-nodecellar-mongo-antiaffinity/tosca.yaml) topology.

In this topology we want to avoid the Nodecellar and the Mongo deployments to be collocated (deployed on the same cluster node). For that we use an `org.alien4cloud.policies.AntiAffinity` that targets these two nodes.

![Topology](../../images/kubernetes_walkthrough/06-nodecellar-mongo-antiaffinity-topology.png){: style="width: 500px; margin: 0 auto"}

At the deployment setup, during the matching phase, ensure the policy is matched using `org.alien4cloud.kubernetes.api.policies.AntiAffinityLabel`. The K8S modifier will generate the rigth config to make sure both deployments are not deployed on the same node (expecting you have at least 2 nodes in your cluster).

### Add the auto scaling policy

For this example, we'll use the [07-nodecellar-mongo-autoscalling](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/07-nodecellar-mongo-autoscalling/tosca.yaml) topology.

In this topology we have added a policy of type `tosca.policies.Scaling`. At rutime, we want the front end server (the Nodecallar) to be scaled if the CPU utilization is greater than 10%.

![Topology](../../images/kubernetes_walkthrough/07-nodecellar-mongo-autoscalling-topology.png){: style="width: 500px; margin: 0 auto"}

During mathcing phase, ensure the **AutoScale** policy is matched to the location policy of type `org.alien4cloud.kubernetes.api.policies.AutoscalingPolicy` and setup this one to make sure that it's properties are:

{% highlight bash %}
minReplicas: 1
maxReplicas: 4
metrics:
  - type: Resource
    resource:
      name: cpu
      targetAverageUtilization: 10
{% endhighlight %}

Generate load on the server (use JMeter for example) and ensure the frontend pod is actually scalled.

Inspired from [K8S doc](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/) you can try this (replace nodeIp:nodePort by the correct values):

{% highlight bash %}
$ kubectl run -i --tty load-generator --image=busybox /bin/sh

Hit enter for command prompt

$ while true; do wget -q -O- http://nodeIp:nodePort; done
{% endhighlight %}

{% info %}
Since the wget will be done from inside the cluster (on a container hosted on the cluster), we are able to target the cluster IP and the port 3000 of the service (the one defined in the Nodecellar container).

{% highlight bash %}
[ec2-user@ip-172-31-42-102 ~]$ kubectl --kubeconfig=/etc/kubernetes/admin.conf get services
NAME                                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)           AGE
default-http-backend                            ClusterIP   10.152.183.167   <none>        80/TCP            6d
kubernetes                                      ClusterIP   10.152.183.1     <none>        443/TCP           6d
mongo-mongo-db-service--1451478299              NodePort    10.152.183.174   <none>        27017:31239/TCP   11m
nodecellar-nodecellar-app-service--1142367332   NodePort    10.152.183.219   <none>        3000:30966/TCP    10m
{% endhighlight %}

In this example, from inside the cluster, we are able to target the url **http://10.152.183.219:3000**
{% endinfo %}

When the Pod has been scaled, stop the load generator and wait for minutes, the Autoscaler will scale down to 1 instance.

## A Nodecellar container connecting to a Mongo DB deployed on a VM (hybrid topology)

For this example, we'll use the [08-nodecellar-mongo-hybrid](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/08-nodecellar-mongo-hybrid) topology.

In this example, we'll connect a container to an external service: the Nodecellar will connect to a Mongo database that is deployed onto a classical VM (a container/VM hybrid topology). The modifier will create a [selector less service](https://kubernetes.io/docs/concepts/services-networking/service/#services-without-selectors) in front of the Mongo.

![Topology](../../images/kubernetes_walkthrough/08-nodecellar-mongo-hybrid-topology.png){: style="width: 500px; margin: 0 auto"}

## A simple Apache container behind a AWS Elastic Load Balancer

In this example, we'll use a new kind of [LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#type-loadbalancer) service to expose our apache web server : our apache endpoint we be exposed by an AWS ELB.

To deploy this example, you'll need a K8S cluster configured for AWS.

We'll reuse the  [simple apache container topology](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/doc/kube/topology/01-simple-apache) (or use the **01-simple-apache** if you have imported the samples).

![Topology](../../images/kubernetes_walkthrough/topo-01-simple-apache.png){: style="width: 200px; margin: 0 auto"}

In your location, you must add a new on-demand resource of type `org.alien4cloud.kubernetes.api.types.Service` with the property `spec.service_type` set to `LoadBalancer`.

During the deployment, matche the `Apache_http_endpoint_Service` node to this new service and deploy. After the deployment success, you'll find the link to the external endpoint in the service list:

![Topology](../../images/kubernetes_walkthrough/apacheBehindELBexternalEndpoint.png){: style="width: 700px; margin: 0 auto"}

You can follow the link:

![Topology](../../images/kubernetes_walkthrough/apacheBehindELBtest.png){: style="width: 700px; margin: 0 auto"}

## A simple Linux container deployed with a configMap

ConfigMap is an important element inside a Pod. In fact, the properties in ConfigMap should be configured from the properties of component. In A4C, we are now able to make the configMap configurable for each Pod. In this example, we will deploy a linux container together with a configMap.

We will use the topology [09-simple-alpine-configmap](https://github.com/alien4cloud/samples/tree/develop/org/alien4cloud/doc/kube/topology/09-simple-alpine-configmap) to create a new application.
In the editor of this application, the property *config_settings* is dedicated to the configuration of ConfigMap. The principle is to set up some parameters needed for creating the ConfigMap.
![Topology](../../images/kubernetes_walkthrough/09-simple-alpine-configmap.jpg)

 There are four parameters to configure:

 * mount_path: The path where the ConfigMap will be mounted.
 * mount_subPath: The subpath of the ConfigMap
 * input_prefix: The prefix used to point out the variables in the files found *config_path* which will be replaced with the concrete value before the creation of ConfigMap.
 * config_path: The path to the files found in the topology used to create the ConfigMap.

In this example, we will create a ConfigMap from the file under the path *configFiles* whereas the ConfigMap will be mounted under */config*.

In the file *application.conf* under *configFiles*, the variable **${NAME}** is supposed to be replaced with an input value named **${CFG_NAME}** under the *create* operation (please see the [type](https://github.com/alien4cloud/samples/blob/develop/org/alien4cloud/doc/kube/config-container/types.yml)) which fetches the property named **container_name**.

When the deployment is finished, we can see the generated configmap in k8s. It turns out that the variable **${NAME}** is replaced with **alpine**.

Except that, we are also able to deal with the starting command of docker container with the property **docker_run_cmd** and **docker_run_args**.
![Topology](../../images/kubernetes_walkthrough/09-simple-alpine-configmap-docker_cmd.jpg)

## A simple Apache container exposing an ingress service

Ingress service is an API allowing external access and some other advanced features such as load balancing to a Pod. The new version of A4C is able to create an ingress service with a hostname with or without a secret. Here we will show you how to set up a Http ingress service simply with a host name.

We will use the topology [10-simple-apache-ingress](https://github.com/alien4cloud/samples/tree/develop/org/alien4cloud/doc/kube/topology/10-simple-apache-ingress) to walk through this example.

Firstly, please go to **Administration** -> **Orchestrator** -> *Click on one of the orchestrator* -> **Location(s)** -> **On demand resources**. A type of resource **org.alien4cloud.kubernetes.api.types.IngressService** needed to be created in the level of location. Just find out the **org.alien4cloud.kubernetes.api.types.IngressService** and then drag and drop from right to left. And then we fill out the **host** with a hostname **known-hostname.zone1** which should be known in K8S.

![Resources](../../images/kubernetes_walkthrough/10-simple-apache-ingress-resources.png)

Secondly, in the level of TOSCA, the ingress service showed up in the form of capability, here named **web_service**, which will be replaced with a concrete resource configured in advance in the first step.

Thirdly, there is only one step to be done before the deployment. Go to the **matching** tab, we need to select the concrete service, here named **Mock K8S Ingress Service** for the ingress service.

![Resources](../../images/kubernetes_walkthrough/10-simple-apache-ingress-matching.png)

Finally, we are able to kick off the deployment.