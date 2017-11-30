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
  - the following archives imported from GIT:
    - https://github.com/alien4cloud/tosca-normative-types.git 2.0.0-SM4
    - https://github.com/alien4cloud/alien4cloud-extended-types.git 2.0.0-SM4 alien-base-types
    - https://github.com/alien4cloud/docker-tosca-types.git 2.0.0-SM4 docker-types

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

Work in progess ...

## A simple Apache container

### Add the node label affinity policy

### Attach a hostpath volume

## A nodecellar connecting to a mongo

### Add the anti-affinity policy

### Add the auto scaling policy
