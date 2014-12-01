---
layout: post
title:  Capability definition
root: ../../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_definitions]
node_name: tosca_ref_capability_definition
weight: 100
---

A capability definition defines a named, typed set of data that can be associated with Node Type or Node Template to describe a transparent capability or feature of the software component the node describes.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type            | string              | yes      | Type of capability or node that is required by the current node. |
| properties      | list of properties values | no      | Properties values for the properties defined on the node type. |
| upper_bound     | integer (or _unbounded_ string) | no       | Specifies the upper boundary of client requirements the defined capability can serve. A value of unbounded indicates that there is no upper boundary. Defaults to 1. |

{% info %}
upper_bound is an Alien specific property that is currently not part of the official specification for the TOSCA simple profile in YAML.
{% endinfo %}

## Grammar

{% highlight yaml %}
<capability_name>:
  type: <capability_type>
  lower_bound: <lower_bound>
  upper_bound: <upper_bound>
{% endhighlight %}

## Example

{% highlight yaml %}
node_types:
  fastconnect.nodes.CapabilitySample:
    capabilities:
      test_capability:
        type: tosca.capabilities.Feature
        lower_bound: 1
        upper_bound: unbounded
{% endhighlight %}
