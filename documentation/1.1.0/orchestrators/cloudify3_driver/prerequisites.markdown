---
layout: post
title:  Prerequisites
root: ../../../
categories: DOCUMENTATION-1.1.0
parent: [orchestrators, cloudify_3]
node_name: cloudify_3_prerequisites
weight: 1000
---

Here are some prerequisite steps that need to be done in order to use the cloudify 3 driver.

## Install Cloudify 3.2 ##

How to install cloudify 3.2 is described [here.](http://getcloudify.org/guide/3.2/installation.html)

## Bootstrap your manager ##

How to bootstrap cloudify 3.2 is described [here.](http://getcloudify.org/guide/3.2/getting-started-bootstrapping.html)

You should customize the manager's blueprint in order to expose the port 8100 of the management server as it's the entry point for Cloudify Rest API.

{%warning%}
Note that Cloudify 3.2 only support bootstraping on Ubuntu Precise.
{%endwarning%}

An example of Openstack manager blueprint that we use for our test can be found [here.](../../files/cloudify3_driver/openstack-manager-blueprint-example.zip)
