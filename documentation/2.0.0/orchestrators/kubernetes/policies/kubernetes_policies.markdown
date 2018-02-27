---
layout: post
title:  Kubernetes policies
root: ../../../../
categories: DOCUMENTATION-2.0.0
parent: [orchestrators]
node_name: Kubernetes_policies
weight: 1000
---

The new Kubernetes integration comes along with a bunch of policies:

- **NodeAffinityLabel**: this policy can be used to ensure a pod will be deployed on a specific node.
- **AntiAffinityLabel**: this policy will help you ensure some given pods are not colocated (for example if you want some pods not to be deployed on the same [node](https://kubernetes.io/docs/concepts/architecture/nodes/)).
- **AutoscalingPolicy**: this policy will create an [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/).

More are still to come.  

This part of the documentation aims to go through the supported kubernetes policies, explaining how they should be configured and used.  

For this documentation, we will be working on Amazon Cloud (AWS EC2), but you can still follow with your prefered location.

# Prerequisites

In the next sections, we will assume the *Cloudify4 Orchestrator and a location* is configured as below.  
This part should be done by the user bearing the **Administrator** role.

##Plugins

The following plugins are required:

- **Cloudify 4 Orchestrator** (*alien-cloudify-4-orchestrator*)
- **kubernetes topology processing plugin** (*alien4cloud-kubernetes-plugin*)

## Orchestrator and location

Create an orchestrator using the ***cloudify 4 Orchestrator*** plugin. Configure it according to your running cloudify4 manager and enable it. Then create a location of your chosen type (We will use Amazon for this tutorial).  

See  [Kubernetes walkthrough, Prerequisites section](#/documentation/2.0.0/orchestrators/kubernetes/kubernetes_walkthrough.html) for setting up your Cloudify4 manager and the kubernetes cluster.  

If not familiar to Cloudify4, see more about [cloudify4 orchestrator and locations here](#/documentation/2.0.0/orchestrators/cloudify4_driver/index.html).

## On demand resources
Add the following resources to your location:

- `org.alien4cloud.kubernetes.api.types.Container`
- `org.alien4cloud.kubernetes.api.types.Deployment`
- `org.alien4cloud.kubernetes.api.types.Service`

![Preq on-demand resources](../../../images/2.0.0/user_guide/policies/prereq_config_ondemand_resources.png){: margin: 50}   

No particular configuration on these resources is required for this tutorial.

## Topology modifiers
We need to link some modifiers to the location. Make sure when doing so to specify the proper deployment phase:

- **kubernetes modifier** (*kubernetes-modifier*)
    - **Deployment phase**: *post-location-match*
- **Kubernetes spec generator modifier** (*kubernetes-final-modifier*)
    - **Deployment phase**: *post-matched-node-setup*

![Location modifiers](../../../images/kubernetes_walkthrough/location_modifiers.png){: margin: 50}    

#Security and authorization
Make sure the authorization are set properly for the user to be able to deploy on this location and use all the resources created.  
See [Location / resources autorization](#/documentation/2.0.0/user_guide/location_autorization.html).
