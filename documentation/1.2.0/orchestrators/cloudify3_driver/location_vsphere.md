---
layout: post
title:  vSphere
root: ../../../
categories: DOCUMENTATION-1.2.0
parent: [orchestrators, cloudify_3, supported_locations]
node_name: vsphere
weight: 1000
---

{%info%}
<h5>Premium feature</h5>
vSphere is a Premium feature.
{%endinfo%}

## Configuration
The configuration of the location is done while configuring the orchestrator, before or after activation.
Normally there is nothing to do here, as the default provided configurations are good enough to have the location working.

## Tosca mapped / location exposed types
The vSphere location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` on the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the openstack nodes:

 - `alien.cloudify.vsphere.nodes.Compute` for a linux compute,
 - `alien.cloudify.vsphere.nodes.WindowsCompute` for a windows compute.

To help you generate those, configuration resources `alien.cloudify.vsphere.nodes.Image` and `alien.cloudify.vsphere.nodes.InstanceType
` can be created, and then used to auto generate Computes nodes.

### Network
{% warning %}
Not supported yet
{% endwarning %}

### Volumes
The tosca type `alien.cloudify.vsphere.nodes.Volume` can be mapped as two types of volumes:  

#### Deletable volumes
Exposed as the location type `alien.cloudify.openstack.nodes.DeletableVolume`, this is a volume that will ALWAYS be DELETED when undeploying the application, leading therefore to the lost of all data stored on it.

#### Reusable volumes
Exposed as the location type `alien.cloudify.openstack.nodes.Volume`, this is a volume that will not be deleted at the end of the application life-cycle. It can therefore, between two deployment of the same application on the same environment and location, be re-used and attached to a compute, rending accessible the data previously stored on it.

{% warning %}
Known limitation: Using multiple volumes per compute is not supported at the moment due to some contraint on Cloudify’s vSphere plugin.
{% endwarning %}

## Scaling
{% warning %}
For now, scaling is supported on for a single compute, i.e. a compute which is not linked to a network or doesn’t have any volumes attached to it.
This should be fixed with the cloudify 3.4 version.
{% endwarning %}
