---
layout: post
title: Property definition
root: ../../../
categories: "DOCUMENTATION-1.2.0"
parent: 
  - devops
  - tosca_concepts
  - tosca_ref_definitions
node_name: tosca_ref_types_property_definition
weight: 1300
published: true
---

A property definition defines a named, typed value that can be associated with an entity defined in this specification.  It is used to associate a transparent property or characteristic of that entity which can either be set (configured) on or retrieved from it.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type            | string              | yes      | The required data type for the property. |
| description     | string              | no       | The optional description for the property. |
| required        | boolean             | no (default true) | Optional key to define if the property is requied (true) or not (false). If this key is not declared for the property definition, then the property SHALL be considered required by default. |
| default         | N/A                 | no | An optional key that may provide a value to be used as a default if not provided by another means. This value SHALL be type compatible with the type declared by the property definition’s type keyname. |
| constraints     | [list of constraints](#/documentation/1.2.0/devops_guide/tosca_grammar/constraints.html) | no | The optional list of sequenced constraints for the property. |
| entry_schema    | schema              | no | An optional key used to declare the schema definition for entries of "container" types such as list or map. |

## Grammar

{% highlight yaml %}
<property_name>:
  type: <property_type>
  description: <property_description>
  required: <property_required>
  default: <property_default_value>
  constraints:
    - <property_constraint_1>
    - ...
    - <property_constraint_n>
{% endhighlight %}

### Example of a "container" type (list or map)
{% highlight yaml %}
<property_name>:
  type: <property_type>
  description: <property_description>
  required: <property_required>
  default: <property_default_value>
  entry_schema:
    description: <schema_description>
    type: <entries_type>
    constraints:
      - <entries_constraint_1>
      - ...
      - <entries_constraint_n>
{% endhighlight %}

See:

- [constraints](#/documentation/1.2.0/devops_guide/tosca_grammar/constraints.html)

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
        required: false
        default: This is the default value of the property
        description: this is the second property of the node
        constraints:
          - min_length : 4
          - max_length : 8
      property_3:
        type: integer
        default: 45
      property_4:
        type: list
        entry_schema:
          type: integer
          constraints:
            - valid_values: [ 2, 4, 5, 8]        
{% endhighlight %}
