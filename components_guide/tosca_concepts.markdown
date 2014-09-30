---
layout: post
title:  TOSCA concepts
root: ../
categories: COMPONENTS_GUIDE
parent: none
weight: 100
---

TOSCA specification allows users to speciy a cloud application's topology by defining a set of nodes that are connected to other using relationships.

The goal of the TOSCA specification is to focus on a good meta-definition of cloud applications and their components and focus on the following goals:

* Reusability of components
* Interoperability of TOSCA archive through the different TOSCA containers

In order to manage reusability of components and defined recipes, TOSCA allows definition of NodeTypes that specify the available components and eventually their implementation (for example a Java NodeType and the script implementation to install it on a virtual server). The defined NodeTypes can then be reused when a developer or application architect want to define the topology of a cloud application.

# TOSCA Simple Profile in YAML

TOSCA Simple profile in YAML allows definition of TOSCA elements in a YAML format rather than XML. The YAML format is simpler to write and offers some shorter ways to defined a TOSCA definition.

{% warning %}
_Note: TOSCA Simple profile is a working draft and is not released yet to public. Current CALM version is using a CALM's specific DSL that is really close to the latest TOSCA Simple Profile in YAML TC work. This may be subject to some updates in the future._
{% endwarning %}

# TOSCA in CALM

In CALM, TOSCA can be used to define both Types (this is required) and Applications (This is optional as you can use CALM editor instead). Of course if you choose to define your applications using CALM's editor you will still be able to export it as a TOSCA archive for portability to other systems.
