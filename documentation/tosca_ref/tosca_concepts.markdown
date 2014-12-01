---
layout: post
title:  TOSCA concepts
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root]
node_name: tosca_ref
weight: 400
---

TOSCA specification allows users to speciy a cloud application's topology by defining a set of nodes that are connected to other using relationships.

The goal of the TOSCA specification is to focus on a good meta-definition of cloud applications and their components and focus on the following goals:

* Reusability of components
* Interoperability of TOSCA archive through the different TOSCA containers

In order to manage reusability of components and defined recipes, TOSCA allows definition of NodeTypes that specify the available components and eventually their implementation (for example a Java NodeType and the script implementation to install it on a virtual server). The defined NodeTypes can then be reused when a developer or application architect want to define the topology of a cloud application.

# TOSCA Simple Profile in YAML

TOSCA Simple profile in YAML allows definition of TOSCA elements in a YAML format rather than XML. The YAML format is simpler to write and offers some shorter ways to defined a TOSCA definition.

{% warning %}
_Note: TOSCA Simple profile is a working draft and is not released yet to public. Current Alien 4 Cloud version is using a Alien 4 Cloud's specific DSL that is really close to the latest TOSCA Simple Profile in YAML TC work. This may be subject to some updates in the future._
{% endwarning %}

# TOSCA in Alien 4 Cloud

In Alien 4 Cloud, TOSCA can be used to define both Types (catalog elements) and Applications topologies (Templates). Alien 4 Cloud tools like the topology editor allows you to create Application topologies that can be exported to Tosca Templates.

{% note %}
Alien 4 Cloud support a slightly modified version of TOSCA Simple Profile in YAML in order to add features that are specific to Alien 4 Cloud context. However we are able to load pure TOSCA compliant templates and also export topologies as pure TOSCA templates.
{% endnote %}

{% warning %}
Export feature will be available in the next release.
{% endwarning %}
