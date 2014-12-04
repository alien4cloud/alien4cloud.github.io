---
layout: post
title:  Capability type
root: ../../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_definitions]
node_name: tosca_ref_types_capability_type
weight: 200
---

A Capability Type is a reusable entity that describes a kind of capability that a Node Type can declare to expose.  Requirements (implicit or explicit) that are declared as part of one node can be matched to (i.e., fulfilled by) the Capabilities declared by other node.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| derived_from | string | no | An optional parent Capability Type name the Capability Type derives from. |
| description | string | no | An optional description for the Capability Type. |
| properties | [property definitions](#/documentation/tosca_ref/tosca_grammar/property_definition.html) | no | An optional list of property definitions for the Capability Type. |

## Grammar

{% highlight yaml %}
<capability_type_name>:
  derived_from: <parent_capability_type_name>
  description: <capability_description>
  properties:
    <property_definitions>
{% endhighlight %}

See:

- [property_definitions](#/documentation/tosca_ref/tosca_grammar/property_definition.html)

## Example

The following example shows how to define a node type with operation:

{% highlight yaml %}

mycompany.mytypes.myapplication.MyFeature:
  derived_from: tosca.capabilities.Feature
  description: a custom feature of my company’s application
  properties:
    my_feature_setting:
      type: string
    my_feature_value:
      type: integer

{% endhighlight %}
