---
layout: post
title:  Workflows
root: ../../
categories: DOCUMENTATION-3.5.0
parent: [devops]
node_name: workflows
weight: 300
---

TOSCA Specification defines the notion of _Plans_. Plans are basically workflows that the tosca orchestrator will be able to leverage to administrate the defined tosca application.

The specification defines two default basic workflows (plans):

 * **install**: Used to deploy a topology.
 * **uninstall**: Used to tear down a topology.

Alien4Cloud defines 2 additional default workflows:

 * **stop**: Used in conjunction with the **start** workflow to stop all components a topology (for maintenance purpose for example).
 * **start**: Used in conjunction with the **stop** workflow to start all components of a topology.

{% info %}
In order to ease TOSCA usage the normative types specification include default lifecycle operations on node types and relationship types that can be used in order to automatically generate workflows (plans).
This is why in most of the case, users don't need to define workflow, except specific needs for custom workflow (backup, restore, update workflow ...) or in some really rare cases custom default workflows (install, uninstall, start, stop).
{% endinfo %}

{% warning %}
Breaking changes for workflow in the 3.0.0 version (alien_dsl_2.0.0):

 * Custom workflow not supported anymore in older dsl versions than alien_dsl_2.0.0, all existing topologies will see their workflow section replaced with default workflows by migration tool.
 * In alien_dsl_1_4_0 and older, the default workflow is generated differently for different types of relationships (HostedOn is different to other types), in alien_dsl_2.0.0, every relationship behaves exactly like HostedOn. The workflow is a lots more flattened, no more concurrent creations between the source and the target of a relationship. Please see [Workflow generation](#workflow/tosca_concepts_workflows_default.html).
{% endwarning %}