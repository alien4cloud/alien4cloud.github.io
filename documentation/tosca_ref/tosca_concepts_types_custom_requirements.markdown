---
layout: post
title:  Requirement definition
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_types]
node_name: tosca_ref_types_requirements
weight: 600
---

A requirement definition allows specification of a requirement that a node need to fulfill to be instanciated.

## Keynames

| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type            | string              | yes      | Type of capability or node that is required by the current node. |
| lower_bound     | integer             | no       | Lower boundary by which a requirement MUST be matched. Valid values are any positive number, 0 meaning that the requirement is optional. Defaults to 1. |
| upper_bound     | integer (or _unbounded_ string) | no       | Upper boundary by which a requirement MUST be matched for Node Templates. Valid values are any positive number or _unbounded_ string that means that there is no upper limit. Defaults to 1. |
| properties      | list of [property definitions](tosca_concepts_types_custom_properties.html).    | no       | Optional list of properties values to apply to the capability. |

## Grammar

{% highlight yaml %}
<requirement_name>:
  type: <capability_type or node_type>
  lower_bound: <lower_bound>
  upper_bound: <upper_bound>
  properties:
    <property_definitions>
{% endhighlight %}

## Example

{% highlight yaml %}
node_types:
  fastconnect.nodes.RequirementSample:
    requirements:
      test_requirement:
        type: tosca.nodes.Compute
        lower_bound: 0
        upper_bound: unbounded
        properties:
          num_cpus:
            constraints:
             - equals: 4
{% endhighlight %}
