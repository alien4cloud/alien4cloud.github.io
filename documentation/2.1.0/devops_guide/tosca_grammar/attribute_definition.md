---
layout: post
title:  Attribute definition
root: ../../../
categories: DOCUMENTATION-2.1.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_attribute_definition
weight: 110
---

An attribute definition defines a named, typed value that can be associated with an entity defined in this specification (e.g., a Node Type or Relationship Type).  Specifically, it is used to expose a value that is set by the orchestrator after the entity has been instantiated (as part of an instance model).  Typically, this value can be retrieved via a function from the instance model and used as inputs to other entities or implementation artifacts.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| type __(1)__    | yes      |string              |  The required data type for the attribute. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| description     | no       |string              |  The optional description for the attribute. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| default         | no       | N.A.               | An optional key that may provide a value to be used as a default if not provided by another means. This value SHALL be type compatible with the type declared by the attribute definition’s type keyname. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| status __(2)__ | no (default supported) | string | The optional status of the attribute relative to the specification or implementation.  See supported status values defined under the [property definition](#/documentation/2.1.0/devops_guide/tosca_grammar/property_definition.html) section. | N.A. |
| entry_schema __(1)__ | no | string | The optional key that is used to declare the name of the Datatype definition for entries of set types such as the TOSCA list or map. | N.A. |

* __(1)__ Alien 4 cloud currently support primitive types only on an attribute. Entry schema is therefore not supported as it is used only to specify the type of entries for the complex list and map types.
* __(2)__ Status has been added in the latest versions of the specification and is not yet supported in alien4cloud. Table below details the supported values as defined in the TOSCA specification.

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
