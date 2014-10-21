---
layout: post
title:  Capability definition
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_types]
node_name: tosca_ref_types_capability_def
weight: 700
---

The Capabilities element describes one or more typed capabilities of a node type.

## Keynames

| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type            | string              | yes      | Type of capability or node that is required by the current node. |
| lower_bound     | integer             | no       | Specifies the lower boundary of requiring nodes that the defined capability can serve. Valid values are any positive number, 0 is invalid. Defaults to 1. |
| upper_bound     | integer (or _unbounded_ string) | no       | Specifies the upper boundary of client requirements the defined capability can serve. A value of unbounded indicates that there is no upper boundary. Defaults to 1. |

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
