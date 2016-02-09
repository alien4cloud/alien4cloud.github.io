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

## Install Cloudify 3.3 ##

How to install cloudify 3.3 is described [here.](http://docs.getcloudify.org/3.3.0/intro/what-is-cloudify/)

## Bootstrap your manager ##

How to bootstrap cloudify 3.3 is described [here.](http://docs.getcloudify.org/3.3.0/manager/bootstrapping/)

You should customize the manager's blueprint in order to expose the port 8100 of the management server as it's the entry point for Cloudify Rest API.

{%warning%}
Note that Cloudify 3.3 only support bootstraping on CentOS 7.x or RHEL 7.x.
{%endwarning%}

An example of Openstack manager blueprint that we use for our test can be found [here.](../../files/cloudify3_driver/openstack-manager-blueprint-example.zip)
