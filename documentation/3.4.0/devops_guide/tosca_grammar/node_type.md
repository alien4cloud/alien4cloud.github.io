---
layout: post
title:  Node type
root: ../../../
categories: DOCUMENTATION-3.4.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_node_type
weight: 60
---

A Node Type is a reusable entity that defines the type of one or more Node Templates. As such, a Node Type defines the structure of observable properties via a Properties Definition, the Requirements and Capabilities of the node as well as its supported interfaces.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| derived_from | no | string | An optional parent Node Type name the Node Type derives from. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| version __(1)__ | no | version | An optional version for the Entity Type definition. | N.A. |
| metadata __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| tags __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| description | no | string | An optional description for the Node Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| abstract __(3)__     | no | boolean | Optional flag to specify if a component is abstract and has no implementation. Defaults to false. | alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| attributes | no | map of [attribute definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/attribute_definition.html) | An optional list of attribute definitions for the Node Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| properties | no | map of [property definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html) | An optional list of property definitions for the Node Type.| alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| requirements | no | list of [requirement definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/requirement_definition.html) | An optional sequenced list of requirement definitions for the Node Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| capabilities | no | map of [capability definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/capability_definition.html) | An optional list of capability definitions for the Node Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| interfaces | no | map of [interface definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/interface_definition.html) | An optional list of named interfaces for the Node Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| artifacts | no | map of [artifact definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/artifact_definition.html) | An optional sequenced list of named artifact definitions for the Node Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ version at type level is defined in TOSCA but they are optional and there is no example on how it should be managed. We believe in alien4cloud that versions should be managed at the service template/archive level and dispatched to every elements defined in the service template/archive.
* __(2)__ metadata appeared in TOSCA while alien4cloud already had tags supported, support for metadata keyword has been added in 1.3.1 version. note that if you specify both metadata and tags one may silently override the other (this should be avoided).
* __(3)__ Abstract flag is specific to Alien 4 Cloud and is not part of TOSCA Simple Profile in YAML. In TOSCA nodes are considered as abstract as long as the create method of the node is not implemented.

{% warning %}
<h5>Requirement definitions name</h5>
Requirement definitions on a node type is specified as a list because the ordering should define the order in which the relationships will be managed when building the workflow out of the declarative model.
However TOSCA _does not authorize duplication_ of the name of a requirement definition that must be unique for a given node type.
{% endwarning %}

## Grammar

{% highlight yaml %}
<node_type_name>:
  derived_from: <parent_node_type_name>
  description: <node_type_description>
  properties:
    <property_definitions>
  attributes:
    <attribute_definitions>
  requirements:
    - <requirement_definition_1>
    ...
    - <requirement_definition_n>
  capabilities:
    <capability_definitions>
  interfaces:
    <interface_definitions>
  artifacts:
    <artifact_definitions>
{% endhighlight %}

See:

- [property_definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html)
- [attribute definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/attribute_definition.html)
- [requirement definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/requirement_definition.html)
- [capability definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/capability_definition.html)
- [artifact definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/artifact_definition.html)
- [interface definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/interface_definition.html)

## Example

{% highlight yaml %}
my_company.my_types.my_app_node_type:
  derived_from: tosca.nodes.SoftwareComponent
  description: My company’s custom applicaton
  properties:
    my_app_password:
      type: string
      description: application password
      constraints:
      - min_length: 6
      - max_length: 10
  my_app_port:
    type: number
    description: application port number
  requirements:
    - host: tosca.nodes.Compute
  interfaces: [ Standard ]
{% endhighlight %}
