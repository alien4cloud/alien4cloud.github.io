---
layout: post
title:  Relationship type
root: ../../../
categories: DOCUMENTATION-3.2.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_relationship_type
weight: 50
---

A Relationship Type is a reusable entity that defines the type of one or more relationships between Node Types or Node Templates.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| derived_from | no | string | An optional parent Relationship Type name the Relationship Type derives from. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| version __(1)__ | no | version | An optional version for the Entity Type definition. | N.A. |
| metadata __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| tags __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| description | no | string | An optional description for the Relationship Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| attributes | no | map of [attribute definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/attribute_definition.html) | An optional list of attribute definitions for the Relationship Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| properties | no | map of [property definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html) | An optional list of property definitions for the Relationship Type.| alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| interfaces | no | [interface definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/interface_definition.html) | An optional list of named interfaces for the Relationship Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| valid_target_types | yes | string[] | A required list of one or more valid target entities or entity types (i.e., a Node Types or Capability Types). | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ version at type level is defined in TOSCA but they are optional and there is no example on how it should be managed. We believe in alien4cloud that versions should be managed at the service template/archive level and dispatched to every elements defined in the service template/archive.
* __(2)__ metadata appeared in TOSCA while alien4cloud already had tags supported, support for metadata keyword has been added in 1.3.1 version. note that if you specify both metadata and tags one may silently override the other (this should be avoided).

## Grammar

{% highlight yaml %}
<relationship_type_name>:
  derived_from: <parent_relationship_type_name>
  description: <relationship_description>
  properties:
    <property_definitions>
  attributes:
    <attribute_definitions>
  interfaces:
    <interface_definitions>
  valid_target_types: [ <entity_name_or_type_1>, ..., <entity_name_or_type_n> ]
{% endhighlight %}

See:

- [property_definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html)
- [attribute definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/attribute_definition.html)
- [interface definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/interface_definition.html)

## Example

{% highlight yaml %}
mycompanytypes.myrelationships.AppDependency:
  derived_from: tosca.relationships.DependsOn
  valid_target_types: [ mycompanytypes.mycapabilities.SomeAppCapability ]
{% endhighlight %}
