---
layout: post
title:  Artifact type
root: ../../../
categories: DOCUMENTATION-3.0.0
parent: [devops, tosca_grammar]
node_name: tosca_grammar_types_artifact_type
weight: 20
---

An Artifact Type is a reusable entity that defines the type of one or more files which Node Types or Node Templates can have dependent relationships and used during operations such as during installation or deployment.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| derived_from | no | string | An optional parent Artifact Type name the Artifact Type derives from. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| version __(1)__ | no | version | An optional version for the Entity Type definition. | N.A. |
| metadata __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| tags __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| description | no | string | An optional description for the Artifact Type. |
| mime_type | no | string | The required mime type property for the Artifact Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| file_ext | no | string[] | The required file extension property for the Artifact Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| properties | no | map of [property definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html) | An optional list of property definitions for the Artifact Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ version at type level is defined in TOSCA but they are optional and there is no example on how it should be managed. We believe in alien4cloud that versions should be managed at the service template/archive level and dispatched to every elements defined in the service template/archive.
* __(2)__ metadata appeared in TOSCA while alien4cloud already had tags supported, support for metadata keyword has been added in 1.3.1 version. note that if you specify both metadata and tags one may silently override the other (this should be avoided).

## Grammar

{% highlight yaml %}
<artifact_type_name>:
  derived_from: <parent_artifact_type_name>
  metadata:
    <map of string>
  description: <artifact_description>
  mime_type: <mime_type_string>
  file_ext: [ <file_extension_1>, ..., <file_extension_n> ]
  properties:
    <property_definitions>
{% endhighlight %}

See:

- [property_definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html)

## Example

The following example shows how to define a node type with operation:

{% highlight yaml %}
my_artifact_type:
  description: Java Archive artifact type
  derived_from: tosca.artifact.Root
  mime_type: application/java-archive
  file_ext: [ jar ]
{% endhighlight %}
