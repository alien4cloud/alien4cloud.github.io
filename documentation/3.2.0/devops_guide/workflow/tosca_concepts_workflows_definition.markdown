---
layout: post
title:  Workflow definition
root: ../../
categories: DOCUMENTATION-3.2.0
parent: [devops, workflows]
node_name: workflow_definition
weight: 100
---

# Workflow

A topology can contains workflows section with multiple workflows identified by its **workflow_id**.
A workflow is a collection of steps with dependencies between them.
You can imagine a workflow as an acyclic directed graph, steps are the graph's nodes and dependencies between them are the graph's edges.

### Grammar

{% highlight yaml %}
  workflows:
    <workflow_id>:
      inputs:
        <property_definitions>
      steps:
        <step_id>:
            ...
{% endhighlight %}

# Workflow Inputs

**inputs** in worflow is an optional map of [property definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html) that defines inputs for a given workflow. Input values will be asked to end-user when launching a workflow that requires inputs. An node [operation](#/documentation/3.0.0/devops_guide/tosca_grammar/operation_definition.html) can refer to a workflow input by using [get_input](/#/documentation/3.0.0/devops_guide/tosca_grammar/get_input.html) function for it's own input.

# Step definition

A step can be related to a node or a relationship of the topology and may contains one or multiple activities.
Each activity describes the action that will be done on the node or the relationship.

### Node step grammar

{% highlight yaml %}
  workflows:
    install:
      steps:
      ...
        <step_id>:
          target: <node_id>
          activities: <activities_list>
          on_success: <following_steps>
      ...
{% endhighlight %}

{% info %}
 * **step_id**: identification of the step inside the workflow
 * **node_id**: the node's id which the step concerns
 * **activities_list**: list of activities that will be executed by the step
 * **on_success**: list of steps that depends on this step (executed after this step)
{% endinfo %}

### Relationship step grammar

{% highlight yaml %}
  workflows:
    install:
      steps:
      ...
        <step_id>:
          target: <source_id>
          target_relationship: <relationship_id>
          operation_host: <host>
          activities: <activities_list>
          on_success: <following_steps>
      ...
{% endhighlight %}

{% info %}
 * **step_id**: identification of the step inside the workflow
 * **source_id**: the source's id of the relationship
 * **relationship_id**: the relationship's id
 * **host**: SOURCE or TARGET, to know if the step will be executed on the source or on the target
 * **activities_list**: list of activities that will be executed by the step
 * **on_success**: list of steps that depends on this step (executed after this step)
{% endinfo %}

# Activity definition

An activity is an action related to a node or a relationship. There are three types of activities:

 * **delegate**: the execution of this activity is managed by the tosca orchestrator (cloud resources provisioning ...)
 * **call_operation**: execute a node or a relationship's operation
 * **set_state**: set the state of a node (created, started, stopped ...), usually before and after an operation on a node, its state is changed.
 * **inline**: execute another workflow inside the current workflow as an activity (Cloudify orchestrator does not support this functionality)

### Activity grammar
{% highlight yaml %}
  workflows:
    install:
      steps:
        my_compute_step:
          target: my_compute
          activities:
            - delegate: <delegated_workflow_name>
          on-success:
            - my_relationship_step
        my_relationship_step:
          target: my_node
          target_relationship: my_node_hosted_on_my_compute
          operation_host: SOURCE
          activities:
            - call_operation: <interface_name>.<operation_name>
          on-success:
            - my_node_step
        my_node_step:
          target: my_node
          activities:
            - call_operation: <interface_name>.<operation_name>
          on-success:
            - my_node_set_state_step
        my_node_set_state_step:
          target: my_node
          activities:
            - set_state: <new_state>
          on-success:
            - my_inline_step
        my_inline_step:
          target: my_compute
          activities:
            - inline: <inline_workflow>
{% endhighlight %}

{% info %}
 * **delegated_workflow_name**: the name of the workflow, which is delegated and will be executed by the tosca orchestrator
 * **interface_name**: the name of the interface (Configure for relationship step, Standard for node step)
 * **operation_name**: the name of the operation (start, stop, pre_configure_source ...)
 * **new_state**: the new state of the node
 * **inline_workflow**: the workflow that will be inlined inside this workflow
{% endinfo %}
