---
layout: post
title:  Nodes
root: ../
categories: COMPONENTS_GUIDE
parent: tosca_concepts_types_custom.html
weight: 200
---

A Node Type is a reusable entity that defines the type of the entities that can be used in a topology.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| abstract        | boolean             | no       | Flag to now if the type is instanciable (meaning it defines it's implementation) or if this is an abstract meta-type. Defaults to false. |
| derived_from    | string              | no       | Name of the node type from which the defined node type derives (i.e. it's parent type). |
| documentation   | string              | no       | Description of the capability. |
| tags            | Map with string key and string value | no       | Optional additional meta-informations that can be added. In CALM the specific _calm-icon_ tag allows to specify the location of the icon image for the node. |
| properties      | list of [property definitions](tosca_concepts_types_custom_properties.html).    | no       | Optional list of properties that the node type defines. |
| requirements    | list of [requirement definitions](tosca_concepts_types_custom_requirements.html). | no       | Optional list of requirements for the Node Type. |
| capabilities    | list of [capability definitions](tosca_concepts_types_custom_capabilities.html).  | no       | Optional list of capabilities for the Node Type. |
| interfaces      | list of [interfaces definitions](tosca_concepts_types_custom_interfaces.html).  | no       | Optional list of interfaces for the Node Type. |
| artifacts       | list of [artifacts definitions](tosca_concepts_types_custom_artifacts.html).  | no       | Optional list of artifacts for the Node Type. |

{% info %}
It is recommended when adding a new node to derive from the normative _tosca.nodes.Root_ node or another [normative node](tosca_concepts_types_normative_node.html).
{% endinfo %}

## Grammar

{% highlight yaml %}
<node_type_name>:
  abstract: <abstract_flag>
  derived_from: <parent_node_type_name>
  documentation: <documentation>
  tags:
    <tag_key>: <tag_value>
  properties:
    <property_definitions>
  requirements:
    <requirement_definitions>
  capabilities:
    <capability_definitions>
  interfaces:
    <interface_definitions>
{% endhighlight %}

Nodes find documentation for:

 - [property definitions](tosca_concepts_types_custom_properties.html).
 - [capability definitions](tosca_concepts_types_custom_properties.html).
 - [requirement definitions](tosca_concepts_types_custom_properties.html).
 - [interface definitions](tosca_concepts_types_custom_properties.html).

## Example

Example of the definition of a capability

{% highlight yaml %}
node_types:
  fastconnect.nodes.NodeSample:
    abstract: true
    derived_from: tosca.nodes.Root
    documentation: A sample node.
    tags:
      my_tag: tag value
    properties:
      property_1:
        type: string
{% endhighlight %}
