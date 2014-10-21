---
layout: post
title:  Property definition
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_types]
node_name: tosca_ref_types_properties
weight: 400
---

A property definition defines a named, typed value that can be associated with an entity defined in this specification.  It is used to associate a transparent property or characteristic of that entity which can either be set (configured) on or retrieved from it.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type            | string              | yes      | The required data type for the property. |
| scope           | string              | no       | Declares a property as required, optional or provided (meaning that the property will be available at runtime). Valid values are "required", "optional" and "provided". If this key is not declared for property definition, then the property is considered required by default. |
| default         | N/A                 | no | An optional key that may provide a value to be used as a default if not provided by another means. This value SHALL be type compatible with the type declared by the property definition’s type keyname. |
| description     | string              | no | The optional description for the property. |
| constraints     | [list of constraints](tosca_concepts_types_custom_constraints.html) | no | The optional list of sequenced constraints for the property. |

## Grammar

{% highlight yaml %}
<property_name>:
  type: <property_type>
  scope: <property_scope>
  default: <property_default_value>
  description: <property_description>
  constraints:
    - <property_constraint_1>
    - ...
    - <property_constraint_n>
{% endhighlight %}

{% info %}
More informations on available constraints can be found [here](tosca_concepts_types_custom_constraints.html).
{% endinfo %}

## Example

The following example shows how to define a node type with properties:

{% highlight yaml %}
node_types:
  fastconnect.nodes.PropertiesSample:
    properties:
      property_1:
        type: string
      property_2:
        type: string
        scope: optional
        default: This is the default value of the property
        description: this is the second property of the node
        constraints:
          - min_length : 4
          - max_length : 8
      property_3:
        type: integer
        default: 45
{% endhighlight %}
