---
layout: post
title:  Artifact type
root: ../../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts, tosca_ref_definitions]
node_name: tosca_ref_types_artifact_type
weight: 100
---

An Artifact Type is a reusable entity that defines the type of one or more files which Node Types or Node Templates can have dependent relationships and used during operations such as during installation or deployment.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| derived_from | string | no | An optional parent Artifact Type name the Artifact Type derives from. |
| description | string | no | An optional description for the Artifact Type. |
| mime_type | string | yes | The required mime type property for the Artifact Type. |
| file_ext | string[] | yes | The required file extension property for the Artifact Type. |
| properties | [property definitions](#/documentation/devops_guide/tosca_grammar/property_definition.html) | no | An optional list of property definitions for the Artifact Type. |

## Grammar

{% highlight yaml %}
<artifact_type_name>:
  derived_from: <parent_artifact_type_name>
  description: <artifact_description>
  mime_type: <mime_type_string>
  file_ext: [ <file_extension_1>, ..., <file_extension_n> ]
  properties:
    <property_definitions>
{% endhighlight %}

See:

- [property_definitions](#/documentation/devops_guide/tosca_grammar/property_definition.html)

## Example

The following example shows how to define a node type with operation:

{% highlight yaml %}

my_artifact_type:
  description: Java Archive artifact type
  derived_from: tosca.artifact.Root
  mime_type: application/java-archive
  file_ext: [ jar ]

{% endhighlight %}
