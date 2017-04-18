---
layout: post
title: New in 1.4.0
root: ../
categories: DOCUMENTATION-1.4.0
parent: []
node_name: whatsnew
weight: 75
published: true
---

{%summary%}{%endsummary%}

Alien 4 cloud 1.4.0 is a very important version and we are really proud to deliver it as it brings major improvements in many various aspects of alien4cloud:
 - Many bug fixes
 - Much better platform stability and scale support
 - Great new features that will really ease TOSCA edition, bring better reusability and more opening and better operations on existing deployments.

We are also very exited also to start working on alien 4 cloud 1.5.0 that will be a major version with a particular focus on both networking support improvements and post deployment management.

# Location resources right management



# On-demand custom location resource templates

Custom on demand resources can now be defined as location resource templates, directly in the on-demand tab of the location view. (For more info, see [the documentation](#/documentation/1.4.0/user_guide/orchestrator_location_management.html))

Having created such a template, this means that it is now possible to match abstract nodes to custom resources in a topology, allowing for more flexibility and reusability.

# Topology variants

It is now possible to defined in alien4cloud multiple variants of topologies for a single application version. This basically allows to define for example a development topology that contains all elements on a single compute node (to reduce costs), and a production topology that contains the database and web-application on different servers and eventually add scaling.

For more information on ALM concepts in alien4cloud and topology variants go [here](#/documentation/1.4.0/concepts/applications.html). In order to see how to configure versions and topology variants (also referred as topology versions) go [here](#/documentation/1.4.0/user_guide/application_management.html).

# Services

Services is a brand new concept in alien4cloud that allow to separate the lifecycle and responsabilities of various elements of your application(s). From a consumer point of view services are really much like on demand resources, the difference here is that while on-demand resources lifecycle is controlled by the consumer, the service lifecycle is actually controlled and managed by the service owner.

Find out more on:
* how admin can define a service to reuse existing external applications here
* how an application in alien4cloud can become a service to be reused by other applications
* how to consume a service

# Improved deployment setup



# Topology update



# TOSCA support

While support of the network elements are planned for 1.5.0 we already added the support of the PortDef data type support in the new version of the normative types we actually support.

We also added the support of private_address that is the new TOSCA name for ip_address and public_address that replaces the deprecated public_ip_address. You can still use any in alien4cloud.

The most important improvement on the TOSCA support is the management and injection of the Endpoints ip_address attribute. It is a major improvement as is finally allow to define self-sufficient capabilities and requirements to build efficient relationships.

# Documentation and sizing recommendations

Previous versions of alien4cloud where less robust than the current one and in addition to better response to wrong platform sizing we also provide a more comprehensive sizing guide that will hopefully help you to get the most of the alien4cloud platform.
