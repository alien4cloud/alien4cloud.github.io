---
layout: post
exclude_from_search: true
title:  Openstack
root: ../../../
categories: DOCUMENTATION-1.2.0
parent: [orchestrators, cloudify_3, supported_locations]
node_name: openstack
weight: 1000
---

The open source cloudify 3 orchestrator plugin allows you to deploy applications on openstack.

## Configuration
The configuration of the location is done while configuring the orchestrator, before or after activation.
Normally there is nothing to do here, as the default provided configurations are good enough to have the location working.

## Tosca mapped / location exposed types
The Openstack location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` on the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the openstack nodes:

 - `alien.nodes.openstack.Compute` for a linux compute,
 - `alien.nodes.openstack.WindowsCompute` for a windows compute.

To help you generate those, configuration resources `alien.nodes.openstack.Image` and `alien.nodes.openstack.Flavor` can be created, and then used to auto generate Computes nodes.

### Network
The tosca type `tosca.nodes.Network` can be mapped as two types of network:

#### Public Network
Exposed as the location type a public network `alien.nodes.openstack.PublicNetwork`, which will result to the attribution of a floating ip to the linked resource (compute).  
Make sure to fill in the required property *`floatingip`*, by providing the name of an existing network name on which the linked resources will be connected.

[![public network config][pub_net_floatingIP]][pub_net_floatingIP]

#### Private Network
The tosca type `tosca.nodes.Network` can also be mapped as a private network using a location node of type `alien.nodes.openstack.PrivateNetwork`.  

### Volumes
The tosca type `tosca.nodes.BlockStorage` can be mapped as two types of volumes:  

#### Deletable volumes
Exposed as the location type `alien.cloudify.openstack.nodes.DeletableVolume`, this is a volume that will ALWAYS be DELETED when undeploying the application, leading therefore to the lost of all data stored on it.

#### Reusable volumes
Exposed as the location type `alien.cloudify.openstack.nodes.Volume`, this is a volume that will not be deleted at the end of the application life-cycle. It can therefore, between two deployment of the same application on the same environment and location, be re-used and attached to a compute, rending accessible the data previously stored on it.

## Scaling
Scaling a topology like Compute + Network + storage is supported on the openstack location.
see [Scalability section](#/documentation/1.2.0/orchestrators/cloudify3_driver/index.html)

[pub_net_floatingIP]: ../../images/cloudify3_driver/pub_net_config.png  "public network config"

## Availability zone
You can add a `alien.cloudify.openstack.nodes.AvailabilityZone` with the value of your availability zone on OpenStack. To use the non affitinity placement policy, at least two zones are necessery. After that, you can add your node (on the topology view) to the a same group, Alien will try to put this server on different zones during the deployment. When you redeploy an application with volume, Alien try to put all volumes attached to a server on the same zone, and, if a volume has already a zone, on the zone of this volume. The algorithm of placement policy equitably distributed the server on eatch zones.
