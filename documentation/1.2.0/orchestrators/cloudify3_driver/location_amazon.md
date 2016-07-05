---
layout: post
title:  Amazon (AWS)
root: ../../../
categories: DOCUMENTATION-1.2.0
parent: [orchestrators, cloudify_3, supported_locations]
node_name: amazon
weight: 1000
---

The open source cloudify 3 orchestrator plugin allows you to deploy applications on Amazon.

## Configuration
The configuration of the location is done while configuring the orchestrator, before or after activation.
Normally there is nothing to do here, as the default provided configurations are good enough to have the location working.

## Tosca mapped / location exposed types
The Amazon location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` on the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the amazon nodes:

 - `alien.cloudify.aws.nodes.Compute` for a linux compute,
 - `alien.cloudify.aws.nodes.WindowsCompute` for a windows compute.

To help you generate those, configuration resources `alien.cloudify.aws.nodes.Image` and `alien.cloudify.aws.nodes.InstanceType` can be created, and then used to auto generate Computes nodes.

### Network
The tosca type `tosca.nodes.Network` can be mapped as two types of network:

#### Public Network
Exposed as the location type a public network `alien.nodes.aws.PublicNetwork`, which will result to the attribution of an elastic ip to the linked resource (compute).  

#### Private Network
{% warning %}
No supported yet.
{% endwarning %}

### Volumes
The tosca type `tosca.nodes.BlockStorage` can be mapped as two types of volumes:  

#### Deletable volumes
Exposed as the location type `alien.cloudify.aws.nodes.DeletableVolume`, this is a volume that will ALWAYS be DELETED when undeploying the application, leading therefore to the lost of all data stored on it.

#### Reusable volumes
Exposed as the location type `alien.cloudify.aws.nodes.Volume`, this is a volume that will not be deleted at the end of the application life-cycle. It can therefore, between two deployment of the same application on the same environment and location, be re-used and attached to a compute, rending accessible the data previously stored on it.

## Scaling
{% warning %}
For now, Scaling is supported on for a single compute, ie a Compute which is not linked to a network, or doesn't have any volumes attached to.  
This should be fixed with the cloudify 3.4 version.
{% endwarning %}

