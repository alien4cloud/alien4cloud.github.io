---
layout: post
title:  Node type
root: ../../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts, tosca_ref_definitions]
node_name: tosca_ref_types_node_type
weight: 300
---

A Node Type is a reusable entity that defines the type of one or more Node Templates. As such, a Node Type defines the structure of observable properties via a Properties Definition, the Requirements and Capabilities of the node as well as its supported interfaces.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| abstract*     | boolean | no | Optional flag to specify if a component is abstract and has no valid implementation. Defaults to false. |
| derived_from | string | no* | An optional parent Relationship Type name the Relationship Type derives from. |
| description | string | no | An optional description for the Relationship Type. |
| properties | [property definitions](#/documentation/devops_guide/tosca_grammar/property_definition.html) | no | An optional list of property definitions for the Relationship Type.|
| attributes | [attribute definitions](#/documentation/devops_guide/tosca_grammar/attribute_definition.html) | no | An optional list of attribute definitions for the Relationship Type. |
| requirements | [requirement definitions](#/documentation/devops_guide/tosca_grammar/requirement_definition.html) | no | An optional sequenced list of requirement definitions for the Node Type. |
| capabilities | [capability definitions](#/documentation/devops_guide/tosca_grammar/capability_definition.html) | no | An optional list of capability definitions for the Node Type. |
| artifacts | [artifact definitions](#/documentation/devops_guide/tosca_grammar/artifact_definition.html) | no | An optional sequenced list of named artifact definitions for the Node Type. |
| interfaces | [interface definitions](#/documentation/devops_guide/tosca_grammar/interface_definition.html) | no | An optional list of named interfaces for the Relationship Type. |

{% info %}
 - Abstract flag is specific to Alien 4 Cloud and is not part of TOSCA Simple Profile in YAML.
 - derived_from is not required however node types SHOULD all extends from a normative type (tosca.nodes.Root, tosca.nodes.SoftwareComponent etc.).
{% endinfo %}

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

- [property_definitions](#/documentation/devops_guide/tosca_grammar/property_definition.html)
- [attribute definitions](#/documentation/devops_guide/tosca_grammar/attribute_definition.md)
- [requirement definitions](#/documentation/devops_guide/tosca_grammar/requirement_definition.html)
- [capability definitions](#/documentation/devops_guide/tosca_grammar/capability_definition.html)
- [artifact definitions](#/documentation/devops_guide/tosca_grammar/artifact_definition.html)
- [interface definitions](#/documentation/devops_guide/tosca_grammar/interface_definition.md)

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
