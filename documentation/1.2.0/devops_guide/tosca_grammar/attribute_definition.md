---
layout: post
exclude_from_search: true
title:  Attribute definition
root: ../../../
categories: DOCUMENTATION-1.2.0
parent: [devops, tosca_concepts, tosca_ref_definitions]
node_name: tosca_ref_types_attribute_definition
weight: 1200
---

An attribute definition defines a named, typed value that can be associated with an entity defined in this specification (e.g., a Node Type or Relationship Type).  Specifically, it is used to expose a value that is set by the orchestrator after the entity has been instantiated (as part of an instance model).  Typically, this value can be retrieved via a function from the instance model and used as inputs to other entities or implementation artifacts.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type            | string              | yes      | The required data type for the attribute. |
| description     | string              | no       | The optional description for the attribute. |
| default         | N/A                 | no | An optional key that may provide a value to be used as a default if not provided by another means. This value SHALL be type compatible with the type declared by the attribute definition’s type keyname. |

## Grammar

{% highlight yaml %}
<attribute_name>:
  type: <attribute_type>
  description: <attribute_description>
  default: <attribute_default_value>
{% endhighlight %}

## Example

The following example shows how to define a node type with attributes:

{% highlight yaml %}
node_types:
  fastconnect.nodes.AttributeSample:
    attributes:
      property_1:
        type: string
      property_2:
        type: string
        description: this is the second attribute of the node
        default: This is the default value of the attribute
      property_3:
        type: integer
        default: 45
{% endhighlight %}
