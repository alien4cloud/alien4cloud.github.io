---
layout: post
title: BYON 
root: ../../../
categories: DOCUMENTATION-2.1.0
parent: [orchestrators, cloudify_4, supported_locations]
node_name: byon
weight: 1000
---

The open source cloudify 4 orchestrator plugin allows you to deploy applications on existing machines.

## Configuration
The configuration of the location is done while configuring the orchestrator, before or after activation.
Normally there is nothing to do here, as the default provided configurations are good enough to have the location working.

## Tosca mapped / location exposed types
The BYON location exposes some types to help you configure a deployment and map the native Tosca types. These nodes are exposed as `on demand resources` on the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the openstack nodes:

 - `alien.cloudify.byon.nodes.LinuxCompute` for a linux compute,
 - `alien.cloudify.byon.nodes.WindowsCompute` for a windows compute.

{% warning %}
Note that on each Compute, you will have to fill the `host_pool_service_endpoint` properties. This is the url to the Host-Pool Service.  
More information about the Host-Pool Service on cloudify official [documentation](http://docs.getcloudify.org/3.4.0/plugins/host-pool/#host-pool-service){:target="_blank"} or on their [github project](https://github.com/cloudify-cosmo/cloudify-host-pool-service/tree/1.1)
{% endwarning %}
{% info %}
Alien4Cloud has a blueprint to help you deploy the Host-Pool Service that can be found on our [github](https://github.com/alien4cloud/samples/tree/master/host-pool-service).
{% endinfo %}
