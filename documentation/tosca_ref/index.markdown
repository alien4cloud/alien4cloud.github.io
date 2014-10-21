---
layout: post
title:  Components and TOSCA ref.
root: ../../
categories: DOCUMENTATION
parent: []
node_name: tosca_ref_root
weight: 100
---

This section contains details on how to configure new middlewares, relationships and other elements form Alien 4 Cloud.

Alien 4 Cloud is designed so you can easily add your own components and leverage your existing scripts, puppet or chef recipes, using a simple YAML based DSL.

{% warning %}Only shellscripts are supported in current version.{% endwarning %}

## TOSCA

Alien 4 Cloud is compliant with OASIS's TOSCA standard to model it's different components (nodes, relationships, capabilities and requirements).

In order to define components in TOSCA you can use the XML or YAML profile (TOSCA Simple Profile). We recommend using the simple profile and thus this documentation describe only the way to configure elements using the simple profile.

{% warning %}We currently only supports TOSCA Simple Profile in YAML.{% endwarning %}
