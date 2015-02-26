---
layout: post
title:  Prerequisites
root: ../../
categories: DOCUMENTATION
parent: [cloudify_3_index]
node_name: cloudify_3_prerequisites
weight: 1000
---

Here are some prerequisite steps that need to be done in order to use the cloudify 3 driver.

## Install Cloudify 3.1 ##

How to install cloudify 3.1 is described [here.](http://getcloudify.org/guide/3.1/installation-cli.html)

We recommend to use the method from PyPi as it will be the only supported method by Cloudify from the version 3.2.

## Bootstrap your manager ##

{%warning%}
For the moment Alien only supports Openstack.
{%endwarning%}

How to bootstrap cloudify 3.1 is described [here.](http://getcloudify.org/guide/3.1/installation-bootstrapping.html)

You should customize the manager's blueprint in order to at least expose the port 8100 of the management server as it's the entry point for Cloudify Rest API.

An example of Openstack manager blueprint that we use for our test can be found [here.](../../files/cloudify3_driver/openstack-manager-blueprint-example.zip)
