---
layout: post
title:  Openstack
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [orchestrators, puccini_main_page, supported_locations]
node_name: location_openstack
weight: 1000
---

The puccini orchestrator plugin allows you to deploy applications on Openstack.

## Configuration
The configuration of the location needs to be done while configuring the orchestrator before its activation.

You need to fill in the informations with your Openstack account. In the configuration of orchestrator, go to `locationConfiguration` -> `openstack` -> `defaultConfiguration`.

* `keystoneUrl`: The url of the keystone service
* `tenant`: The tenant where the applications will be deployed.
* `user`: The username of your account
* `password`: The password of your account
* `region`: The name of the region

## Tosca mapped / location exposed types
The Openstack location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` on the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the openstack nodes:

 - `org.alien4cloud.puccini.openstack.nodes.Compute` for a linux compute

Normally, you need to provide the basic information for the resource:

* `image`: The image id
* `flavor`: The flavor id
* `key_pair_name`: The name of the key pair
* `security_group_names`: You can provide the security group for this resource
* `user`: The user name for login on the instance.
* `key_content`: The private key of authentication for login on the instance. ***Pay attention*** when doing the copy paste. You need to select the multi-line mode before filling in the private key because the private key contains multiple line.
* `puccini_concurrent_restriction`: The number of the task can be executed concurrently on the compute instance.

### Network
The tosca type `tosca.nodes.Network` can be mapped as two types of network:

* `org.alien4cloud.puccini.openstack.nodes.ExternalNetwork`
* `org.alien4cloud.puccini.openstack.nodes.Network`

#### Public Network
Exposed as the location type a public network `org.alien4cloud.puccini.openstack.nodes.ExternalNetwork`, which will result to the attribution of a floating ip to the linked resource (compute).  
Make sure to fill in the required property *`network_name`* which will be the ***same name of the public network*** on Openstack, by providing the name of an existing network name on which the linked resources will be connected.

#### Private Network
The tosca type `org.alien4cloud.puccini.openstack.nodes.Network` is a mapping node for the private network.
Normally, the property `cidr` and `network_name` should be given.  

### Volumes
{% warning %}
TODO.
{% endwarning %}

### Deletable volumes
{% warning %}
TODO.
{% endwarning %}
