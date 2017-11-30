---
layout: post
title:  Kubernetes Walkthrough
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [orchestrators]
node_name: kubernetes_walkthrough
weight: 1000
---

Starting from 2.0.0 the way we manage Kubernetes integration has changed and is now independent from the orchestrator. Any orchestrator that can fullfill the prerequisites will now be able to leverage on Kubernetes scheduler.

Here, We will explain concepts, describe the kubernetes plugin, and try it using simple examples.

# TOSCA types

Our base types for container based topology design has evolved to take into account the specificities of container schedulers (Kubernetes, AWS EC2 ...).

Container images still being described with the abstract type `tosca.nodes.Container.Application.DockerContainer`. You can consider it as a wrapper for the docker image. It handles the capabilities and requirements related to the application it runs.

A new type has been introduced: a `org.alien4cloud.extended.container.types.ContainerRuntime` represents the container itself, independently of the image the container will host. A `ContainerRuntime` hosts one and only one `DockerContainer`.

Another type has been introduced: a `org.alien4cloud.extended.container.types.ContainerDeploymentUnit` is a unit that will group several containers and deploy them as a single unit. It can host several `ContainerRuntime`s but also volumes. When using Kubernetes, it will become a [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) (or a [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)).

So we now have `ContainerDeploymentUnit` that can host several `ContainerRuntime`s and volumes. A `ContainerRuntime` hosts one single containerized application (A node of a type that extends `tosca.nodes.Container.Application.DockerContainer` and that offers capabilities and specify it's requirements).

In the example below, we have 1 deployment unit (node CDU) that host 2 container runtime (the two CRs) and 1 volume. Each container runtime host its containrized application (Apache and Mongod)

![Container sample topology](../../images/kubernetes_walkthrough/containers_types_sample_topology.png){: style="width: 200px; margin: 0 auto"}

Note that all these types are abstract (except the container images). They will be replaced by the Kubernetes modifier at deployment setup.

{% info %}
A modifier is a piece of code that can transform a topology before you deploy it. It can be associated to a location or to a policy. It is generally embedded into a plugin.
A **Topology modifier** can add nodes, transform nodes ... It will be executed at the deployment stage you configure: after location matching, after location resource matching ...
A **Policy modifier** is associated with a concrete policy and will be executed when you match a policy during the deployment setup. It also can add or modify nodes to make the policy work.
{% endinfo %}

# Kubernetes plugin

The [kubernetes plugin](https://fastconnect.org/a4c-gitlab/alien4cloud-premium/alien4cloud-kubernetes-plugin) comes with:

- A CSAR with dedicated Kubernetes abstract and concrete types and policies.
- 2 topology modifiers that transform an abstract container based topology into something deployable onto a Kubernetes cluster.
- policies' modifiers

The plugins offers the following features:

- you can deploy containers into [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) (group of containers that are deployed as a single unit).
- you can connect container between each others: we use [kubernetes services](https://kubernetes.io/docs/concepts/services-networking/service/) to expose endpoint.
- you can attach a volume to several containers of the same unit. For the moment, the following volume types are managed:
  - [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)
  - [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath)
  - [awsElasticBlockStore](https://kubernetes.io/docs/concepts/storage/volumes/#awselasticblockstore)
  - [persistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/volumes/#persistentvolumeclaim)
- you can use the following policies:
  - **AntiAffinityLabel**: this policy will help you ensure some given pods are not colocated (for example if you want some pods not to be deployed on the same [node](https://kubernetes.io/docs/concepts/architecture/nodes/)).
  - **NodeAffinityLabel**: this policy can be used to ensure a pod will be deployed on a specific node.
  - **AutoscalingPolicy**: this policy will create an [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/).

# Prerequisites

To deploy onto Kubernetes cluster through ALIEN, you will need:

- A Kubernetes cluster deployed on AWS with AWS extensions (ability to provision EBS) with at least 2 nodes
- A Cloudify manager:
  - the binary [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) must be installed on the manager.
  - the K8S cluster config file must be placed in `/etc/kubernetes/admin.conf`.
  - the K8S cluster API must be reachable from the manager.
- An alien with:
  - a valid orchestrator linked to the CFY manager with an AWS location.
  - the kubernetes plugin
  - the http repository plugin (the samples use an http repository)
  - the following archives imported from GIT:
    - https://github.com/alien4cloud/tosca-normative-types.git branch **2.0.0-SM4**
    - https://github.com/alien4cloud/alien4cloud-extended-types.git branch **2.0.0-SM4** folder **alien-base-types**
    - https://github.com/alien4cloud/docker-tosca-types.git **2.0.0-SM4** folder **docker-types**

## Location configuration

You'll need to setup a location in order to be able to deploy onto a K8S cluster. Let's create an AWS location on a Cloudify orchestrator.

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

Our first trivial topology help us validate our setup : a single Apache container.

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

### Add the node label affinity policy

We now want to specify the node onto our pod will be deployed. We'll use a placement policy.



### Attach a hostpath volume

03-simple-apache-hostPath

![Topology](../../images/kubernetes_walkthrough/topologie-03-simple-apache-hostPath.png){: style="width: 200px; margin: 0 auto"}

In this topology we have added a volume to the deployment unit.
We'll match it to a [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath) volume. With this kind of volume, we can mount a given directory of the hosting node as a volume for the container. In our example, we will mount the `/var/log` volume at the `/usr/local/apache2/htdocs` mount point on the container. By this way we'll be able to display our logs through our webserver !

Deploy the topology, and at matching stage, choose the resource of type `org.alien4cloud.kubernetes.api.types.volume.HostPathVolumeSource` for the node named 'Volume'. Set the property `spec.path` to `/usr/local/apache2/htdocs` and deploy.

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

### Attach a emptyDir volume

In this example, we'll see how we can share a same volume between 2 containers in the same pod.

![Topology](../../images/kubernetes_walkthrough/topologie-04-simple-apache-emptyDir.png){: style="width: 400px; margin: 0 auto"}

The volume is attached to the 2 container:

- mounted at `/usr/local/apache2/htdocs` for the Apache container.
- mounted at `/tmp/emptyDir` for the Busybox container.

This time, we'll match the volume to an [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir) volume (on demand resource of type `org.alien4cloud.kubernetes.api.types.volume.EmptyDirVolumeSource`).

The Busybox container just echo 'Hello World' into a file (see the **docker_run_cmd** property of the **BusyboxBash** container node) . Since the same directory is mount by the apache at `/usr/local/apache2/htdocs`, this index.html become the welcome page of our fabulous website !
<br>

![ServiceNodePort](../../images/kubernetes_walkthrough/workingApacheEmptyDir.png){: style="width: 600px; margin: 0 auto"}

## A nodecellar connecting to a mongo

TBD

### Add the anti-affinity policy

TBD

### Add the auto scaling policy

TBD
