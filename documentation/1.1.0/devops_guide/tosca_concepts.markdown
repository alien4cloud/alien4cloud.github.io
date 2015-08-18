---
layout: post
title:  TOSCA concepts
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [devops]
node_name: tosca_concepts
weight: 400
---

{%info%}
To understand all TOSCA concepts, please refer to [this section](#/documentation/1.1.0/concepts/tosca.html).
{%endinfo%}

# TOSCA in Alien 4 Cloud

In Alien 4 Cloud, TOSCA can be used to define both Types (catalog elements) and Applications topologies (Templates). Alien 4 Cloud tools like the topology editor allows you to create Application topologies that can be exported to Tosca Templates.

{% note %}
Alien 4 Cloud support a slightly modified version of TOSCA Simple Profile in YAML in order to add features that are specific to Alien 4 Cloud context. However we are able to load pure TOSCA compliant templates and also export topologies as pure TOSCA templates.
{% endnote %}

{% warning %}
Export feature will be available in the next release.
{% endwarning %}
