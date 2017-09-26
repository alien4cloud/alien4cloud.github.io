---
layout: post
title:  Amazon (AWS)
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [orchestrators, cloudify_4, supported_locations]
node_name: amazon
weight: 1000
---

The open source cloudify 4 orchestrator plugin allows you to deploy applications on Amazon.

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
Scaling is now fully supported. Means we can scale a single `Compute`, or a `Compute + Storage + IP-Address` association.

{% warning %}
**Known limitation when scaling a reusable volume**  
When scaling a compute with a reusable volume, A4C will keep trace of the volume ID and zone (more details [here](/#/documentation/2.0.0/orchestrators/cloudify3_driver/index.html)).  
Unfortunately the zone information are not correctly handled when the volumes are in the same availability zone thus make sure to check the volumes id and zones properties before redeploying your application.  
**_This limitation will be fixed very shortly._**
{% endwarning%}