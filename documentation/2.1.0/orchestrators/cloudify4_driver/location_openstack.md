---
layout: post
title:  Openstack
root: ../../../
categories: DOCUMENTATION-2.1.0
parent: [orchestrators, cloudify_4, supported_locations]
node_name: openstack
weight: 1000
---

The open source cloudify 4 orchestrator plugin allows you to deploy applications on openstack.

## Configuration
The configuration of the location is done while configuring the orchestrator, before or after activation.

{% warning %}
if you didn't patched the iaas credentials described [here](#/documentation/2.1.0/orchestrators/cloudify4_driver/prerequisites_patches.html).
You must set some of the locations properties.
{% endwarning %}

In addition to the base configuration that are DSL and imports you'll need to provide some informations such as:

  - __management network__: The name of the network to which the manager is linked to.
  - __security group name__: The default security group name to add to the agent's machines.
  - __agentConfig/agent key path__: The path to the agent ssh key.
  - __openstackConfig__: Properties to connect to Openstack's API.

Exemple:
[![Openstack location configuration][config_location_openstack]][config_location_openstack]

{% warning %}
Note that you must store your openstack password inside Cloudify's vault. 
To do so, you can connect to the Cloudify's webui or use the cloudify cli.

For instance:
{% highlight bash %}
cfy secrets create -s myvalue mykey
{% endhighlight %}

The property `password secret key` in Alien4Cloud's openstack location configuration must contain the key name of the Cloudify's vault.  
  
For more details about [cloudify's secret](http://docs.getcloudify.org/4.3.0/manager/using-secrets/)
{% endwarning %}

You also need to add the *iaas-property-modifier* at *post-node-match* phase.
[![Openstack IaaS property modifier][iaas_property_modifier]][iaas_property_modifier]


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
Scaling is now fully supported. Means we can scale a single `Compute`, or a `Compute + Storage + IP-Address` association.

## Availability zone
You can add a `alien.cloudify.openstack.nodes.AvailabilityZone` with the value of your availability zone on OpenStack. To use the non affitinity placement policy, at least two zones are necessery. After that, you can add your node (on the topology view) to the a same group, Alien will try to put this server on different zones during the deployment. When you redeploy an application with volume, Alien try to put all volumes attached to a server on the same zone, and, if a volume has already a zone, on the zone of this volume. The algorithm of placement policy equitably distributed the server on eatch zones.


[pub_net_floatingIP]: ../../images/cloudify3_driver/pub_net_config.png  "public network config"
[config_location_openstack]: ../../images/cloudify3_driver/config_location_openstack.png  "Openstack location configuration"
[iaas_property_modifier]: ../../images/cloudify4_driver/a4c-openstack-iaas-property-modifier.png  "Openstack IaaS property modifier"