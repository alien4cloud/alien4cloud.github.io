---
layout: post
title: Custom On-demand Resources Nodes
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_custom_resources
weight: 400
---

Custom on-demand resources are resources provided by TOSCA catalog but instanciated and managed by the orchestrator.

Usually, on-demand resources (computes, block storage, networks ...) are provided by the orchestrator as types. They are defined in the locations as nodes to be matched with their abstract versions in topology templates. Only the orchestrator knows how to provide a compute on EC2, OpenStack and so on (depending on orchestrator capabilities) ...

Since 1.3.1, you can provide your own types as on-demand resources. This page will explain you how to build your own on demand custom resources types and use them as custom resource nodes in your topologies.

A custom resource node is defined by the facts that:

- it is not hosted on another node.
- it's type is not provided by the orchestrator.

{%note%}
When a node that is identified as a custom resource node is encountered by the orchestrator, its scripts should be executed on the 'manager'.
This is the way the cloudify3 orchestrator manages custom resources.
{%endnote%}

You can find samples in the following CSARs:

- [aws-custom-resources](https://github.com/alien4cloud/samples/tree/master/aws-custom-resources) : custom on-demand types that use AWS CLI to provision AWS resources (EC2 instance, MariaDB).
- [aws-ansible-custom-resources](https://github.com/alien4cloud/samples/tree/master/aws-ansible-custom-resources) : custom on-demand resource that use Ansible to provision AWS resources.

## On-demand compute

To be usable, a compute must expose it's IP address as an attribute named 'ip_address'.

{%note%}
For the alien4cloud cloudify orchestrator plugin, an optional *agent_config* complex property can be used to specify:

- *install_method*: if an agent should be installed or not on the instance (remote, none).
- *user*: the username to use to connect to the instance (default is the one defined while bootstrapping).
- *key*: the path to the key (on the manager) to use to connect to the instance (default is the path to key defined while bootstrapping).
{%endnote%}

## Known limitations

- on-demand resources other than computes can't be scaled
