---
layout: post
title: Clouds
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [concepts]
node_name: concepts-clouds
weight: 100
---

In Alien 4 Cloud every deployment is done on what we call a *Cloud*. Clouds are used to describe a logical deployment target that offers a set of resources (e.g. machines, storage, network, firewalls etc.). A cloud may refer to a real _cloud_, to a specific _tenant on a cloud_, to a _set of physical machines_ (BYON), or even _docker_ containers.

{% info %}
You can create and configure as many clouds as you like to have as many deployment targets (environments) as required.
{% endinfo %}

For example a cloud can refer to an Amazon configuration using a specific account while another cloud could be configured to work on a specific Tenant on an OpenStack cloud.

To make it simple a cloud is a logical set of available resources that Alien 4 Cloud can use to deploy applications. In order to do so A4C relies on orchestration technologies that are easily pluggable.

{%note%}
<h5>Note</h5>
We are currently supporting the opensource orchestrators cloudify 3 (Full re-written engine with new DSL - much better and flexible but that we felt prior to the up-comming 3.2 a bit light for production use).
{%endnote%}

{%info%}
<h5>Role and security</h5>
Only a user with the global ADMIN role can define, configure, enable and grant deployment role to other users or groups on a cloud.
{%endinfo%}

To find more on clouds and how to configure them in Alien 4 Cloud please look at the [Getting started](deadlink) guide if you don't already have an Alien instance running and at the [cloud setup guide](deadlink) in order to learn cloud configuration.

A _cloud_ supported the following resources :

 * Compute: TOSCA node who represents a real or virtual machine or ‘server’
 * Storage: TOSCA node who represents a server-local block storage device
 * Availability zone: Alien feature to separate your node into separate geographic area
 * Network:  Alien feature based on the TOSCA expressiveness to control the mapping of software component to the network
