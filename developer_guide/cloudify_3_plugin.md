---
layout: post
exclude_from_search: true
title:  Cloudify 3 Plugin
root: ../
categories: DEVELOPER_GUIDE
parent: [orchestrator_plugins]
node_name: cloudify_plugin
weight: 100
---

Cloudify 3 plugin allows deployments of TOSCA topologies defined in Alien 4 Cloud to a cloudify 3 manager. This section is not dedicated to users of the plugin but to developers who have created Cloudify 3 plugins and want to integrate them with Alien 4 Cloud.

# Adding a new location type

When defining a cloudify 3 plugin to support a new location type (openstack, azure, amazon etc.) users will define their types, for example the official openstack plugin defines the following types (amongst others):
 - cloudify.openstack.nodes.Server
 - cloudify.openstack.nodes.FloatingIP
 - cloudify.openstack.nodes.Network
 - cloudify.openstack.nodes.Subnet
 - cloudify.openstack.nodes.Volume

In order to integrate these types with alien 4 cloud two solutions exists:
 - Map them to normative types so a normative topology can be configured.
 - Map them to pure cloudify types (this solution is actually not supported by Alien 4 Cloud official cloudify 3 plugin)

## Define location types into Alien 4 Cloud

## Define mapping rules from TOSCA types to Location types

## Define mapping rules from Location Types to the cloudify types

### DSL mapping

Mapping of types from tosca nodes to the cloudify dsl is done through velocity. When the type exposed to the tosca world is matching the same definition as the one in the cloudify world mapping is straightforward and it is possible to use the generic mapping:


For more advanced mapping (properties getting placed elseware etc.) you can use a more advanced mapping by providing your own velocity template.

It is even possible to map a single node from TOSCA into multiple nodes in cloudify. For example the tosca.nodes.Network type can be mapped to various definitions:


### Attributes mapping

In cloudify all attributes are actually runtime properties. Some naming in cloudify are not the same as in the TOSCA world. Cloudify 3 plugin allows mapping of the attributes so they match the required TOSCA normative naming.

In order to do so developer of a location can add some attribute mapping in a TOSCA way when they define the location types. Theses attributes will be reused by cloudify 3 plugin to generate mapping code.

TODO EXAMPLE WITH THE COMPUTE NODE FROM CLOUDIFY 3
