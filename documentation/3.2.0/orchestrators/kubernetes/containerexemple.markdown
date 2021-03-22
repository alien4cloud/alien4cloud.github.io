---
layout: post
title:  Containers Examples
root: ../../../../
categories: DOCUMENTATION-3.2.0
parent: [orchestrators, kubernetes, kubernetespluginconcretemode]
node_name: containerexamples
weight: 2000
---
{% summary %}{% endsummary %}

# Prerequisites

{%info%}
In this page, we will use AWS features so you will need a Kubernetes cluster integrated with a AWS account.
However if you want to deploy a basic Kubernetes cluster you can use our TOSCA types based on kubeadm which can be found [here](https://github.com/alien4cloud/csar-public-library/tree/develop/org/alien4cloud/kubernetes/kubeadm)
{%endinfo%}

To deploy onto Kubernetes cluster through ALIEN, you will need:

- A Kubernetes cluster deployed on AWS with AWS extensions (ability to provision EBS) with at least 2 nodes
- An alien with:
  - the kubernetes plugin
  - the http repository plugin (the samples use an http repository)
  - the following archives imported from GIT:
    - https://github.com/alien4cloud/tosca-normative-types.git branch **3.0.x**
    - https://github.com/alien4cloud/alien4cloud-extended-types.git branch **3.0.x** folder **alien-base-types**
    - https://github.com/alien4cloud/docker-tosca-types.git **3.0.x** folder **docker-types**


## Topology modifiers

You'll need to setup modifiers on your location. On the location screen, in the **Topology Modifier** tab:


- add a **kubernetes-adapter-modifier** at the phase `post-matched-node-setup`

{% info %}
The phase define the deployment flow step where the modifier will act upon the topology. The **Kubernetes adapter modifier** will act at the `post-matched-node-setup` phase ie. just after the matched nodes are configured by the user.
{% endinfo %}

![Location modifiers](../../images/3.2.0/orchestrators/kubernetes/adapter_modifier_configuration.png)

The modifier will generate types that are ready to be deployed onto a Kubernetes cluster.

## On demand resources

You will need to setup some Kubernetes On demand resources on the location. You will find them in the catalog (search for 'kube') :

- `org.alien4cloud.kubernetes.api.types.KubeContainer` : it will be used to match and optionally configure Kubernetes containers.
- `org.alien4cloud.kubernetes.api.types.KubeConfigurableContainer`: it will be used to match and optionally configure Kubernetes containers using Kubernetes configmaps feature.
- `org.alien4cloud.kubernetes.api.types.KubeDeployment` : it will be used to match and optionally configure Kubernetes deployments (AKA Pods).
- `org.alien4cloud.kubernetes.api.types.KubeService` : it will be used to match and optionally configure Kubernetes services (used to connect containers and to expose endpoint).

For volumes, you can add the followings resources :

- `org.alien4cloud.kubernetes.api.types.volume.AWSElasticBlockStoreVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.EmptyDirVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.HostPathVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.PersistentVolumeClaimSource`




# A simple Apache container
Our first trivial topology help us validate our setup : a single Apache container. You can find it [here](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers/01-Apache/topology/types.yml) (or use the **01-Apache** if you have imported the samples).

![Topology](../../images/3.2.0/orchestrators/kubernetes/apache_simple_container.png)


{% info %}
You can see that our node named **Apache01** derived of type `org.alien4cloud.kubernetes.api.types.KubeContainer` is not hosted on a `ContainerDeploymentUnit`. Since a container can not be deployed without being hosted on a Pod in K8S, the modifier will create for you a `KubeDeployment` for each 'orphan' container.
{% endinfo %}

Deploy it using the location you have setup. The topology transformed by the first modifier will contain abstract kubernetes nodes that will be auto matched with the KubeCluster service  you have setup before.

At kubernetes level few things will be started:

- a kubernetes deployment containing your container.
- a service of type NodePort, exposing the apache endpoint.

{% info %}
For each endpoint found in the topology, the topology modifier will create a service of type NodePort. This allow others containers to connect to underlying endpoint and eventually to connect to the endpoint from outside the cluster.
{% endinfo %}

When the deployment succeeds, the full service external URL is displayed 
![Deployment outputs](../../images/3.2.0/orchestrators/kubernetes/apache_simple_container_deployment.png)

![Apache index page](../../images/3.2.0/orchestrators/kubernetes/apache_simple_container_service.png)

# Volume management

## EmptyDir Volumes

Using the previous simple Apache Container modelization, we add in the `org.alien4cloud.kubernetes.api.types.KubeDeployment` an `org.alien4cloud.kubernetes.api.types.volume.EmptyDirVolumeSource`

![Deployment modelization](../../images/3.2.0/orchestrators/kubernetes/emptyDir.png)
The emptyDir volume properties appear by clicking on the EmptyDirVolumeSource  node :

![emptyDir properties](../../images/3.2.0/orchestrators/kubernetes/emptyDir_2.png)

- the property `container_path` has to be set to the target folder of the Apache container  

To see more information by the use of an emptyDir, the [sample](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers/10-Volume-EmptyDir) describes an emptyDir volume shared by 2 containers.

## HostPath Volume

Using the previous simple Apache Container modelization, we add in the `org.alien4cloud.kubernetes.api.types.KubeDeployment` an `org.alien4cloud.kubernetes.api.types.volume.HostPathVolumeSource`

![Deployment modelization](../../images/3.2.0/orchestrators/kubernetes/Hostpath_1.png)

The HostPath volume properties appear by clicking on the HostPathVolumeSource node :

- Volume mount properties on the Kubernetes Cluster filesytem :

![Volume on the K8S cluster filesytem - properties](../../images/3.2.0/orchestrators/kubernetes/Hostpath_2.png)

![Volume on the K8S cluster filesytem - path](../../images/3.2.0/orchestrators/kubernetes/Hostpath_3.png)

{% info %}
It is a complex property, displayed in a modal window
{% endinfo %}

- Volume mount properties on the container :

![Volume on the container](../../images/3.2.0/orchestrators/kubernetes/Hostpath_4.png)

To see more information by the use of a HostPath, the [sample](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers/11-Volume-HostPath) describes an HostPath volume on an Apache container.

## Secret Volume
Using the previous simple Apache Container modelization, we add in the `org.alien4cloud.kubernetes.api.types.KubeDeployment` an `org.alien4cloud.kubernetes.api.types.volume.SecretSource`

![Deployment modelization](../../images/3.2.0/orchestrators/kubernetes/Secret_1.png)

- The Secret volume properties appear by clicking on the SecretSource node :

![Secret volume properties](../../images/3.2.0/orchestrators/kubernetes/Secret_2.png)

- Properties on container which hosts it

![Secret volume properties](../../images/3.2.0/orchestrators/kubernetes/Secret_3.png)

{% info %}
It is a complex property, displayed in a modal window
{% endinfo %}

- Volume mount properties on the container :

![Volume on the container](../../images/3.2.0/orchestrators/kubernetes/Secret_4.png)

- Topology folder which containers files to be put in secret :

![Volume on the container](../../images/3.2.0/orchestrators/kubernetes/Secret_5.png)

![Volume on the container](../../images/3.2.0/orchestrators/kubernetes/Secret_6.png)

To see more information by the use of a environment variables , the [sample](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers/09-Volume-Secret)  describes a Secret volume on an Apache container.

# Config Map

Our exemple is based on the topology you can find  [here](https://github.com/alien4cloud/samples/blob/3.0.x/org/alien4cloud/doc/kube/kcontainers/03-Apache-cfg/topology/types.yml) (or use the **03-Apache-cfg** if you have imported the samples).
{% info %}
You can see that our node named **ApacheConfigmap03** derived of type `org.alien4cloud.kubernetes.api.types.KubeConfigurableContainer` is  hosted on a `KubeDeployment`. Since a container can not be deployed without being hosted on a Pod in K8S, the modifier will create for you a `ContainerDeploymentUnit` for each 'orphan' container.
{% endinfo %}

![Topology](../../images/3.2.0/orchestrators/kubernetes/apache_configMap_1.png)

The configMap properties must be set to config_setting property. 
{% info %}
It is a complex property, displayed in a modal window
{% endinfo %}

![Config map properties](../../images/3.2.0/orchestrators/kubernetes/apache_configMap_2.png)

The content of the config maps is set into the topology folder of specified `config_path`previously set (config in the example)

![Config map contents](../../images/3.2.0/orchestrators/kubernetes/apache_configMap_3.png)

To set the variables in the configMap, $CONTENT in the exemple, it has to be specified in the Tosca modelization of the type `ApacheConfigMap` derived of `org.alien4cloud.kubernetes.api.types.KubeConfigurableContainer` in the interface block

![Config map variables](../../images/3.2.0/orchestrators/kubernetes/apache_configMap_4.png)

CFG_ prefix is used for variable substitution (its value is set in `input_prefix` property in `config_setting` property

To see more information by the use of a configMaps, the [sample](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers/03-Apache-cfg)  fills a configMap file with a node property value on an Apache container.


# Environnement variables
Our exemple is based on the topology you can find  [here](https://github.com/alien4cloud/samples/blob/3.0.x/org/alien4cloud/doc/kube/kcontainers/02-Apache-env/types/types.yml) (or use the **02-Apache-env** if you have imported the samples).
{% info %}
You can see that our node named **Apache02** derived of type `org.alien4cloud.kubernetes.api.types.KubeContainer` is  hosted on a `KubeDeployment`. Since a container can not be deployed without being hosted on a Pod in K8S, the modifier will create for you a `ContainerDeploymentUnit` for each 'orphan' container.
{% endinfo %}

![Topology](../../images/3.2.0/orchestrators/kubernetes/apache_env_2.png)

To set the environment variables, $CONTENT in this exemple, it has to be specified in the Tosca modelization of the type `Apache02` derived of `org.alien4cloud.kubernetes.api.types.KubeContainer` in the interface block

![Environnement variables specification](../../images/3.2.0/orchestrators/kubernetes/apache_env_1.png)

To see more information by the use of a environment variables , the [sample](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers/02-Apache-env)  describes the usage of container environment variable to configure it.


# Scaling and autoscaling

Scaling and autoscaling are working like in other Portable modeling.
To see more information by the use of autoscaling , the [sample](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers/24-autoscaling)  shows how to autoscale a pod using CPU as metric.

# Debug mode

It is possible to display in the deployment **Output properties** the json specification of the created Kubernetes components by setting in the A4C configuration file the parameter **alien4cloud-kubernetes-plugin.debugK8SSpec**  to **true**.

![Deployment outputs debug mode](../../images/3.2.0/orchestrators/kubernetes/apache_simple_container_deployment_debug.png)

