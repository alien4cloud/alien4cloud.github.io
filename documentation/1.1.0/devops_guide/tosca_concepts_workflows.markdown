---
layout: post
exclude_from_search: true
title:  Workflows
root: ../
categories: COMPONENTS_GUIDE
parent: tosca_concepts.html
weight: 300
---

TOSCA Specification defines the notion of _Plans_. Plans are basically workflows that the tosca container will be able to leverage to administrate the defined tosca application.

The specification defines two basic workflow (plans):

 * **build**: Used to instanciate and start a topology.
 * **terminate**: Used to tear down a topology.

{% info %}
In order to ease TOSCA usage the normative types specification include default lifecycle operations on node types and relationship types that can be used in order to automatically generate workflows (plans). This is why most of users won't have to define plans.
{% endinfo %}

# Workflow definition

Workflow definition is inspired by BPMN2 but focus on required events, gateways and activities for TOSCA. The following section defines the available elements and the way to define them in a TOSCA Simple profile in YAML.
Definition of elements is also adapted to match the TOSCA Simple profile in YAML concepts.

## Events

### Start event

Every plan should start with the start event, if omitted the container will automatically add it as first element of the workflow.

#### Graphical representation

The following symbol represents the start event.

<svg width="32px" height="32px">
  <circle cx="16" cy="16" r="12" style="fill:none; stroke:green; stroke-width:3"/>
</svg>

#### Grammar

{% highlight yaml %}
workflows:
  <flow_id>:
    <id>: startEvent
{% endhighlight %}

### End event

Every plan should finish with the end event, if omitted the container will automatically add it as last element of the workflow.

#### Graphical representation

The following symbol represents the end event.

<svg width="32px" height="32px">
  <g>
    <circle cx="16" cy="16" r="12" style="fill:none; stroke:firebrick; stroke-width:2"/>
    <circle cx="16" cy="16" r="9" style="fill:firebrick; stroke:firebrick; stroke-width:1"/>
  </g>
</svg>

#### Grammar

{% highlight yaml %}
workflows:
  <flow_id>:
    <id>: endEvent
{% endhighlight %}

### Update State send message event

Update the state of a node template or relationship template.

#### Graphical representation

The following symbol represents the end event.

<svg width="300px" height="32px">
  <g>
    <circle cx="16" cy="16" r="12" style="fill:none; stroke:blue; stroke-width:2"/>
    <circle cx="16" cy="16" r="9" style="fill:none; stroke:blue; stroke-width:2"/>
    <rect x="11" y="12" width="10" height="8" style="fill:none; stroke:blue; stroke-width:1" />
    <path d="M11 12 L16 16 L21 12 Z" style="fill:none; stroke:blue; stroke-width:1" />
    <text x="34" y="20" font-family="Verdana" font-size="12" fill="blue">
      target: state
    </text>
  </g>
</svg>

#### Grammar

{% highlight yaml %}
workflows:
  <flow_id>:
    # Simple notation
    <id>:
      stateUpdate:<target>#<state>
    # Detailed notation
    <id>:
      stateUpdate:
        target: <target>
        state: <state>
{% endhighlight %}

### Update State receive message event

Receive a state update to trigger next operation.

#### Graphical representation

The following symbol represents the end event.

<svg width="300px" height="32px">
  <g>
    <circle cx="16" cy="16" r="12" style="fill:none; stroke:blue; stroke-width:2"/>
    <circle cx="16" cy="16" r="9" style="fill:none; stroke:blue; stroke-width:2"/>
    <rect x="11" y="12" width="10" height="8" style="fill:lightblue; stroke:blue; stroke-width:1" />
    <path d="M11 12 L16 16 L21 12 Z" style="fill:none; stroke:blue; stroke-width:1" />
    <text x="34" y="20" font-family="Verdana" font-size="12" fill="blue">
      target: state
    </text>
  </g>
</svg>

#### Grammar

{% highlight yaml %}
workflows:
  <flow_id>:
    # Simple notation
    <id>:
      receiveStateUpdate:<target>#<state>
    # Detailed notation
    <id>:
      receiveStateUpdate:
        target: <target>
        state: <state>
{% endhighlight %}

## Activities

The single activity a TOSCA plan can contains is a specific execute operation Task activity.

### Execute task

Execute allows to execute an operation defined on an entity's (node or relationship) interface.

#### Graphical representation



#### Grammar

{% highlight yaml %}

workflows:
  <flow_id>:
   # Simple notation
     <id>:
       execute: <target>#<interface>#<operation>
   # Detailed notation
     <id>:
       execute:
         target: <target>
         interface: <interface>
         operation: <operation>

{% endhighlight %}

## Gateways

The only gateways used to define the TOSCA workflows is the parallel gateway. A parallel gateway can be diverging or converging.
To ease configuration of the flow the two gateways are considered here a separate elements.

### Parallel Diverging gateway

A parallel diverging gateway allows to specify subflows that will run concurrently. Note that if a task is specified in the flow after a Parallel Diverging Gateway, a Parallel Converging Gateway including all elements from the previous converging gateway is automatically added to the flow.

#### Graphical representation



#### Grammar

{% highlight yaml %}

workflows:
  <flow_id>:
    <id>:
      divergingGateway:
        <subflow_id_1>:
          <task_id>...
        <subflow_id_2>
          <task_id>...
        ...
        <subflow_id_n>
          <task_id>...

{% endhighlight %}

### Parallel Converging gateway

A Parallel Converging gateway allows

#### Graphical representation



#### Grammar

{% highlight yaml %}

workflows:
  <flow_id>:
    <id>:
      convergingGateway:
        <id_1>
        <id_2>
        ...
        <id_n>

{% endhighlight %}
