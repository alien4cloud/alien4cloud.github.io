---
layout: post
title: BYON
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [orchestrators, puccini_main_page, supported_locations]
node_name: location_byon
weight: 1000
---

The puccini orchestrator plugin allows you to deploy applications on existing machines.

## Prerequisites
The physical or virtual machines should be given before doing the configuration for the resources. It is easy to bring on your virtual machines with **vagrant**.

## Tosca mapped / location exposed types
The BYON location exposes some types to help you configure a deployment and map the native Tosca types. These nodes are exposed as `on demand resources` on the location management view.  

### Compute
The resource type `org.alien4cloud.puccini.byon.nodes.Compute` is provided for mapping a compute.

* `ip_address`: IP address for the machines
* `user`: The user for login onto the machine
* `key_content`: The private key for login onto the machine
