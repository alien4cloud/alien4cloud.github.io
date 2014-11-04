---
layout: post
title:  Stack Application Topology
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_application
weight: 800
---

In Alien 4 Cloud you can design your applications by adding multiple components to a topology and defining relationships between them. The definition of components and topologies is based on TOSCA standard.

Alien 4 Cloud allow you to add components into an indexed catalog that users can browser, search and filter to find the components they need.

{% note %}
Adding components require ADMIN or COMPONENTS_MANAGER roles.
{% endnote %}

# TOSCA Normative types

TOSCA standard defines some normative types that are the one you should leverage to get started. You can read more about TOSCA and the normative types in the TOSCA section of the documentation.

In order to add Normative types in Alien 4 Cloud you must download the content of the tosca normative types repository as a Zip and drag and drop it in the Components view of Alien 4 Cloud.

{% note %}
Alien 4 Cloud leverage TOSCA Simple Profile in YAML with a few changes allowing to support versioning of the components as well as imports based on the components catalog.
We will soon allow however to export your components and topologies as pure TOSCA archives.
{% endnote %}
