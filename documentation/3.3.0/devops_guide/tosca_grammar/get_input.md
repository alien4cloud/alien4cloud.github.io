---
layout: post
title:  get_input
root: ../../../
categories: DOCUMENTATION-3.3.0
parent: [devops, tosca_grammar, tosca_ref_types_function_definition]
node_name: tosca_ref_get_input
weight: 100
---

The **get_input** function is used to:

* retrieve the values of properties declared within the inputs section of a TOSCA Service Template.
* retrieve the value of a workflow input for a node operation.

## Grammar

{% highlight yaml %}
get_input: <input_property_name>
{% endhighlight %}

## Example

{% highlight yaml %}
inputs:
  cpus:
    type: integer
  node_templates:
    my_server:
      type: tosca.nodes.Compute
      properties:
        num_cpus: { get_input: cpus }
{% endhighlight %}

For retrieving a workflow input:

{% highlight yaml %}
org.alien4cloud.sample.nodes.NodeWithWorkflowInput:
  derived_from: tosca.nodes.Root
  interfaces:
    Custom:
      custom:
        inputs:
          comment: { get_input: [ comment ] }
          an_int: { get_input: [ an_int ] }
        implementation: scripts/operation.sh
{% endhighlight %}
