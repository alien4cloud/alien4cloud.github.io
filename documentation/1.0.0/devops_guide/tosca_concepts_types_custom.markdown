---
layout: post
title:  Writing custom types
root: ../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts]
node_name: tosca_ref_types
weight: 200
---

TOSCA specification allows definition of a cloud application by defining a set of nodes that are connected to other using relationships.

In order to improve reusability of components and defined recipes, TOSCA allow the definition of NodeTypes that defines components and eventually their implementation (for example a Java NodeType and the script implementation to install it on a virtual server). The defined NodeTypes can then be reused when a developer or application architect want to define the topology of a cloud application.

{% info %}
TOSCA and thus Alien 4 Cloud allows you to define some abstract types (basically meta-types without implementation). This allows of course to dissociate the specific technical implementations from the actual definition of a component (writing an abstract Java node and several implementations with chef, puppet etc.).

This can also be leveraged in order to meta-model your applications for the cloud even if you don't need to deploy them right now. Alien 4 Cloud advisory features for moving to the cloud leverage this to quiclky map your Information System and get feedback on your application's cloud maturity and migration advisory.
{% endinfo %}

The sub-sections details how you can write your own Capability Types, Node Types and Relationship Types to extends the one that Alien 4 Cloud already provides to you.

{% info %}
Definition of Node Types and other elements in TOSCA should be done in a definition file and packaged in a [Cloud Service Archive](#/documentation/1.0.0/devops_guide/cloud_service_archive.html)
{% endinfo %}
