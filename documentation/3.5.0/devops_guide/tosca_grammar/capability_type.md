---
layout: post
title:  Capability type
root: ../../../
categories: DOCUMENTATION-3.5.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_capability_type
weight: 40
---

A Capability Type is a reusable entity that describes a kind of capability that a Node Type can declare to expose.  Requirements (implicit or explicit) that are declared as part of one node can be matched to (i.e., fulfilled by) the Capabilities declared by other node.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| derived_from | no | string | An optional parent Capability Type name the Capability Type derives from. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| version __(1)__ | no | version | An optional version for the Entity Type definition. | N.A. |
| metadata __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| tags __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| description | no | string | An optional description for the Capability Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| properties | no | map of [property definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html) | An optional list of property definitions for the Capability Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| attributes | no | map of [attribute definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/attribute_definition.html) | An optional list of attribute definitions for the Capability Type.<br>Not supported on alien4cloud. | N.A. |
| valid_source_types | no | string[] | An optional list of one or more valid target entities or entity types (i.e., a Node Types or Capability Types). | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ version at type level is defined in TOSCA but they are optional and there is no example on how it should be managed. We believe in alien4cloud that versions should be managed at the service template/archive level and dispatched to every elements defined in the service template/archive.
* __(2)__ metadata appeared in TOSCA while alien4cloud already had tags supported, support for metadata keyword has been added in 1.3.1 version. note that if you specify both metadata and tags one may silently override the other (this should be avoided).

## Grammar

{% highlight yaml %}
<capability_type_name>:
  derived_from: <parent_capability_type_name>
  description: <capability_description>
  properties:
    <property_definitions>
{% endhighlight %}

See:

- [property_definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html)

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
