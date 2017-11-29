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

# Orchestrator prerequisites

- the binary [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) must be installed on the manager.
- the K8S cluster config file must be placed in `/etc/kubernetes/admin.conf`.
- the K8S cluster API must be reachable from the manager.

# TOSCA types

Our base types for container based topology design has evolved to take into account the specificities of container schedulers (Kubernetes, AWS EC2 ...).

Container images still being described with the abstract type `tosca.nodes.Container.Application.DockerContainer`. You can consider it as a wrapper for the docker image. It handles the capabilities and requirements related to the application it runs.

A new type has been introduced: a `org.alien4cloud.extended.container.types.ContainerRuntime` represents the container itself, independently of the image the container will host. A `ContainerRuntime` hosts one and only one `DockerContainer`.

Another type has been introduced: a `org.alien4cloud.extended.container.types.ContainerDeploymentUnit` is a unit that will group several containers and deploy them as a single unit. It can host several `ContainerRuntime`s but also volumes. When using Kubernetes, it will become a Pod (or a Deployment).

So we now have `ContainerDeploymentUnit` that can host several `ContainerRuntime`s and volumes. A `ContainerRuntime` hosts one single containerized application (A node of a type that extends `tosca.nodes.Container.Application.DockerContainer` and that offers capabilities and specify it's requirements).

In the example below, we have 1 deployment unit (node CDU) that host 2 container runtime (the two CRs) and 1 volume. Each container runtime host its containrized application (Apache and Mongod)

![Container sample topology](../../images/kubernetes_walkthrough/containers_types_sample_topology.png){: style="width: 200px; margin: 0 auto"}

Note that all these types are abstract. They will be replaced by a Kubernetes modifier at deployment stage.

{% info %}
A modifier is a piece of code that can transform a topology before you deploy it. It can be associated to a location or to a policy. It is generally embedded into a plugin. It can add nodes, transform nodes ... It will be executed at the deployment stage you configure: after location matching, after location resource matching ...
{% endinfo %}

# Kubernetes plugin

The [kubernetes plugin](https://fastconnect.org/a4c-gitlab/alien4cloud-premium/alien4cloud-kubernetes-plugin) comes with:

- A CSAR with dedicated Kubernetes abstract and concrete types and policies.
- 2 topology modifiers that transform an abstract container based topology into something deployable onto a Kubernetes cluster.
- policies' modifiers

# Prerequisites

To deploy onto Kubernetes cluster through ALIEN, you will need:

- A Kubernetes cluster deployed on AWS with AWS extensions (ability to provision EBS) with at least 2 nodes
- A Cloudify manager:
  - the binary [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) must be installed on the manager.
  - the K8S cluster config file must be placed in `/etc/kubernetes/admin.conf`.
  - the K8S cluster API must be reachable from the manager.
- An alien with:
  - a valid orchestrator linked to the CFY manager with an AWS location.
  - the following archives imported from GIT:
    - https://github.com/alien4cloud/tosca-normative-types.git (tests/2.0.0)
    - https://github.com/alien4cloud/alien4cloud-extended-types.git (tests/2.0.0 alien-base-types)
    - https://github.com/alien4cloud/docker-tosca-types.git (tests/2.0.0-alt docker-types)
