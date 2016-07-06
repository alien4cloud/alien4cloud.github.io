---
layout: post
title: New in 1.2.0
root: ../
categories: DOCUMENTATION-1.2.0
parent: []
node_name: whatsnew
weight: 75
published: true
---

{%summary%}{%endsummary%}

This section is incomplete and we suggest you to refer to the roadmap section in order to have a preview on the planned features for 1.2.0 version.

# UI improvements

* Better visibility of required properties
* Location and orchestrator informations on runtime view.

# TOSCA Support

TOSCA Support has been improved in 1.2.0 even if still not fully compliant with 1.0.0 TOSCA Simple Profile in YAML. More details and explanations can be found [here](#/documentation/1.2.0/devops_guide/dev_ops_guide.html).

# Premium version

1.2.0 introduce our premium version that is based on the OpenSource version and provide some advanced features through additional plugins.

## Logs plugin

The log plugin allows to fetch orchestrator logs in alien4cloud and to display them directly from the runtime view.

## SAML integration

Premium users can now leverage SAML authentication in alien4cloud, [more here](#/documentation/1.2.0/admin_guide/saml.html).

## Improved Security

Alien 4 Cloud now support mutual authentication with ElasticSearch and SSL connection to ElasticSearch. Cloudify plugin also supports mutual authentication to the cloudify manager. [more here](#/documentation/1.2.0/admin_guide/security.html)

## Dashboard plugin

First version of the dashboard plugin allows to view the resource usages under multiple axis and to view the global nodes usages of the platform.

TODO link to doc

## Portability insights plugin

Portability insights plugin allows to check the portability of a Topology against the TOSCA standard and the locations configured in alien4cloud [more here](#/documentation/1.2.0/user_guide/topology_portability.html).

## Patch and Runtime operation support

Patch and runtime operation support allows to dynamically change the lifecycle of components in a topology by adding some patches to be applied on a topology. Patches are triggered manually on the first time, can be applied to a subset of instances in a first time or to all instances of nodes. They are also added to the node lifecycle so that scale up or self healing take them into account.

The runtime operations features is similar to patches except that it doesn't impact node lifecycle. This is more dedicated to post deployment management operations (backup etc.).

[more here](#/documentation/1.2.0/user_guide/post_deployment.html)

## IaaS support

We now support deployment on Azure through cloudify 3.

[more here](#/documentation/1.2.0/orchestrators/cloudify3_driver/location_azure.html)
