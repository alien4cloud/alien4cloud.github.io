---
layout: post
title:  TOSCA types
root: ../../../../
categories: DOCUMENTATION-3.2.0
parent: [orchestrators, kubernetes]
node_name: TOSCA types
weight: 1000
---

## What's new in TOSCA types

Our base types for container based topology design has evolved to take into account the specifications of container schedulers (Kubernetes, AWS EC2 ...).

Container images still being described with the abstract type `tosca.nodes.Container.Application.DockerContainer`. You can consider it as a wrapper for the docker image. It handles the capabilities and requirements related to the application it runs.

A new type has been introduced: a `org.alien4cloud.extended.container.types.ContainerRuntime` represents the container itself, independently of the image the container will host. A `ContainerRuntime` hosts one and only one `DockerContainer`.

Another type has been introduced: a `org.alien4cloud.extended.container.types.ContainerDeploymentUnit` is a unit that will group several containers and deploy them as a single unit. It can host sow have `ContainerDeploymentUnit` that can host several `ContainerRuntime`s and volumes. A `ContainerRuntime` hosts one single containerized application (A node of a type that extends `tosca.nodes.Container.Application.DockerContainer` and that offers capabilities and specify it's requirements).

In the example below, we have 1 deployment unit (node CDU) that host 2 container runtime (the two CRs) and 1 volume. Each container runtime host its containrized application (Apache and Mongod)

![Container sample topology](../../images/kubernetes_walkthrough/containers_types_sample_topology.png){: style="width: 200px; margin: 0 auto"}

Note that all these types are abstract (except the container images). They will be replaced by the Kubernetes modifier at deployment setup.

{% info %}
A modifier is a piece of code that can transform a topology before you deploy it. It can be associated to a location or to a policy. It is generally embedded into a plugin.
A **Topology modifier** can add nodes, transform nodes ... It will be executed at the deployment stage you configure: after location matching, after location resource matching ...
A **Policy modifier** is associated with a concrete policy and will be executed when you match a policy during the deployment setup. It also can add or modify nodes to make the policy work.
{% endinfo %}everal `ContainerRuntime`s but also volumes. When using Kubernetes, it will become a [Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) (or a [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)).

So we now have `ContainerDeploymentUnit` that can host several `ContainerRuntime`s and volumes. A `ContainerRuntime` hosts one single containerized application (A node of a type that extends `tosca.nodes.Container.Application.DockerContainer` and that offers capabilities and specify it's requirements).

In the example below, we have 1 deployment unit (node CDU) that host 2 container runtime (the two CRs) and 1 volume. Each container runtime host its containerized application (Apache and Mongod)