<!-- ---
layout: post
title: Launch a production TOSCA orchestrator
root: ../
categories: DOCUMENTATION-1.4.0
parent: [new_getting_started]
node_name: going_further_cfy
weight: 10
---

In this first going further tutorial we will explain how you can bootstrap an open-source TOSCA orchestrator that is a bit more heavy than Puccini and that we currently recommend for production environments. This orchestrator is cloudify.

Some features that are not yet supported by puccini are supported in Cloudify so this will probably be your choice for more advanced scenarios with alien4cloud. But first of all let's look how to bootstrap it.

# Bootstraping cloudify

To bootstrap cloudify on Amazon we will actually leverage puccini as it provides support for every features requested to actually launch a TOSCA recipe that describe a cloudify orchestrator. First thing we have to do is to import the cloudify types into our alien4cloud.



#cloud-config
runcmd:
  - echo 'Defaults:ec2-user !requiretty' > /etc/sudoers.d/999-puccini-cloud-init-requiretty -->
