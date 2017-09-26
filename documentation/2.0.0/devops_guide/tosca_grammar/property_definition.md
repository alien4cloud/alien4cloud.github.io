---
layout: post
title: Property definition
root: ../../../
categories: "DOCUMENTATION-2.0.0"
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_property_definition
weight: 80
---

A property definition defines a named, typed value that can be associated with an entity defined in this specification.  It is used to associate a transparent property or characteristic of that entity which can either be set (configured) on or retrieved from it.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| type            | yes      | string              | The required data type for the property. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| description     | no       | string              | The optional description for the property. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| required        | no (default true) | boolean             | Optional key to define if the property is requied (true) or not (false). If this key is not declared for the property definition, then the property SHALL be considered required by default. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| default         | no | N/A                 | An optional key that may provide a value to be used as a default if not provided by another means. This value SHALL be type compatible with the type declared by the property definition’s type keyname. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| status __(1)__ | no | string (default: supported) | The optional status of the property relative to the specification or implementation. See table below for valid values. | N.A. |
| constraints     | no | [list of constraints](#/documentation/2.0.0/devops_guide/tosca_grammar/constraints.html) | The optional list of sequenced constraints for the property. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| entry_schema __(2)__ | no | [entry schema](#/documentation/2.0.0/devops_guide/tosca_grammar/entry_schema.html) | An optional key used to declare the schema definition for entries of "container" types such as list or map. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ Status has been added in the latest versions of the specification and is not yet supported in alien4cloud. Table below details the supported values as defined in the TOSCA specification.
* __(2)__ Entry schema definition in TOSCA specification is inconsistent as it is stated you can use a string but the grammar example actually defines a complex object as defined [here](#/documentation/2.0.0/devops_guide/tosca_grammar/entry_schema.html). Alien4cloud supports the complex definition as stated in the grammar section of the specification.

Status valid values:
{: .table .table-striped }
| Value         | Description |
|:--------------|:------------|
| supported  | Indicates the property is supported.  This is the default value for all property definitions. |
| unsupported | Indicates the property is not supported. |
| experimental | Indicates the property is experimental and has no official standing. |
| deprecated | Indicates the property has been deprecated by a new specification version. |

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

- [constraints](#/documentation/2.0.0/devops_guide/tosca_grammar/constraints.html)

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
