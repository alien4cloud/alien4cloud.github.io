---
layout: post
title: Dev Ops Guide
root: ../../
categories: "DOCUMENTATION-1.1.0"
parent: []
node_name: devops
weight: 500
published: true
---


This section contains reference to the TOSCA Simple profile in YAML specification as it is now supported in Alien. TOSCA is a standard specification that allow dev_ops and architects to define reusable components and topologies that can be easily ported across clouds and orchestrators.

Alien 4 Cloud is designed so you can easily add your own components and leverage your existing scripts, puppet or chef recipes, using the TOSCA YAML based DSL.

## TOSCA

Alien 4 Cloud is compliant with OASIS's TOSCA standard to model it's different components (nodes, relationships, capabilities and requirements).

In order to define components in TOSCA you can use the XML or YAML profile (TOSCA Simple Profile). We recommend using the simple profile and thus this documentation describe only the way to configure elements using the simple profile.

{% warning %}
<h5>Tosca support in ALien 4 Cloud</h5>
Alien 4 Cloud only supports TOSCA Simple Profile in YAML. Simple profile v1 is not released yet and still evolves, a release is planned by the TC for half of 2015.

We currently have a partial support of the latest working drafts, being closer to wd03 than wd05. Our goal is to maintain support for the various Simple profile releases but we don't intend to support all working drafts as they will not be used by the community.
{% endwarning %}
