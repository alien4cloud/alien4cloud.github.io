---
layout: post
title:  Capability definition
root: ../../../
categories: DOCUMENTATION-1.2.0
parent: [devops, tosca_concepts, tosca_ref_definitions]
node_name: tosca_ref_capability_definition
weight: 600
---

A capability definition defines a named, typed set of data that can be associated with Node Type or Node Template to describe a transparent capability or feature of the software component the node describes.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type            | string              | yes      | Type of capability or node that is required by the current node. |
| description     | string              | no       | The optional description of the Capability Type. |
| properties      | list of properties values | no      | Properties values for the properties defined on the capability type. |
| attributes      | list of attributes values | no      | Attributes values for the attributes defined on the capability type. |
| upper_bound     | integer (or _unbounded_ string) | no       | Specifies the upper boundary of client requirements the defined capability can serve. A value of unbounded indicates that there is no upper boundary. Defaults to unbounded. |

{% info %}
upper_bound is an Alien specific property that is currently not part of the official specification for the TOSCA simple profile in YAML.
{% endinfo %}

## Grammar

{% highlight yaml %}
# Simple definition is as follows:
<capability_defn_name>: <capability_type>

# The full definition is as follows:
<capability_defn_name>:
  type: <capability_type>
  description: <capability_defn_description>
  properties:
    <property_values>
  attributes:
    <attribute_values>
  upper_bound: <upper_bound>
{% endhighlight %}

## Example

{% highlight yaml %}
node_types:
  fastconnect.nodes.CapabilitySample:
    capabilities:
      # Simple form, no properties defined or augmented
      test_capability: mytypes.mycapabilities.MyCapabilityTypeName

      # Full form, augmenting properties of the referenced capability type
      some_capability:
        type: mytypes.mycapabilities.MyCapabilityTypeName
        properties:
          limit: 100
        upper_bound: 3
{% endhighlight %}
