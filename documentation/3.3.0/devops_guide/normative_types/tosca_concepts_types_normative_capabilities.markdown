---
layout: post
title: Capabilities
root: ../../
categories: DOCUMENTATION-3.3.0
parent: [devops, tosca_ref_types_normative]
node_name: tosca_ref_types_normative_capa
weight: 100
published: true
---


{% summary %}Normatives capability types in TOSCA{% endsummary %}

# tosca.capabilities.Root

This is the default (root) TOSCA Capability Type definition that all other TOSCA Capability Types derive from.

## Definition

{% highlight yaml %}
capability_types:
  tosca.capabilities.Root:
    description: >
      This is the default (root) TOSCA Capability Type definition that all other TOSCA Capability Types derive from.
{% endhighlight %}

# tosca.capabilities.Container

The Container capability, when included on a Node Type or Template definition, indicates that the node can act as a container for (or a host for) one or more other declared Node Types.


## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| valid_node_types | true | string[] | A list of one or more names of Node Types that are supported as containees that declare the Container type as a Capability. |

## Definition

{% highlight yaml %}
  tosca.capabilities.Container:
    derived_from: tosca.capabilities.Root
    properties:
      valid_node_types:
        type: string[]
        required: true
        description: Array of node types that are valid node types to be contained.
    description: >
      A list of one or more names of Node Types that are supported as containees that declare the Container type as a Capability.
{% endhighlight %}

# tosca.capabilities.Endpoint

This is the default TOSCA type that should be used or extended to define a network endpoint capability.

## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| protocol	| yes	| string  | None	                                      |The name of the protocol (i.e., the protocol prefix) that the endpoint accepts. Examples: http, https, tcp, udp, etc.|
| port	    | yes	| integer | greater_or_equal:1 <br> less_or_equal:65535	| The port of the endpoint.|
| secure	  | no	| boolean | default = false                             | Indicates if the endpoint is a secure endpoint.|

## Definition

{% highlight yaml %}
tosca.capabilities.Endpoint:
  derived_from: tosca.capabilities.Feature
  properties:
    protocol:
      type: string
      default: http
    port:
      type: integer
      constraints:
        - greater_or_equal: 1
        - less_or_equal: 65535
    secure:
      type: boolean
      default: false
{% endhighlight %}

# tosca.capabilities.DatabaseEndpoint

This is the default TOSCA type that should be used or extended to define a specialized database endpoint capability.

## Definition

{% highlight yaml %}
tosca.capabilities.DatabaseEndpoint:
  derived_from: tosca.capabilities.Endpoint
{% endhighlight %}

# tosca.capabilities.Attachment

This is the default TOSCA type that should be used or extended to define a block storage capability.

## Definition

{% highlight yaml %}
tosca.capabilities.Attachment:
  derived_from: tosca.capabilities.Root
{% endhighlight %}
