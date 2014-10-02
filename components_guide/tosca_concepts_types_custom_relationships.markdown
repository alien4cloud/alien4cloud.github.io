---
layout: post
title:  Relationships
root: ../
categories: COMPONENTS_GUIDE
parent: tosca_concepts_types_custom.html
weight: 300
---

A Relationship Type is a reusable entity that defines the type of one or more relationships between Node Types or Node Templates.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| derived_from    | string              | no       | Parent Relationship Type name the Relationship Type derives from. |
| documentation   | string              | no       | Description for the Relationship Type. |
| tags            | Map with string key and string value | no       | Optional additional meta-informations that can be added. In Alien 4 Cloud the specific _calm-icon_ tag allows to specify the location of the icon image for the node. |
| properties      | list of [property definitions](tosca_concepts_types_custom_properties.html).    | no       | List of property definitions for the Relationship Type. |
| interfaces      | list of [interfaces definitions](tosca_concepts_types_custom_properties.html).  | no       | List of named interfaces for the Relationship Type. |
| valid_sources   | List of strings.    | no       | A list of named Node Types or Capability Types. |
| valid_targets   | List of strings.    | no       | A list of named Node Types or Capability Types. |

{% info %}
It is recommended when adding a new relationship to derive from one of the normative _tosca.relationships.DependsOn_, _tosca.relationships.HostedOn_ or _tosca.relationships.ConnectsTo_ relationship. Details on normative relationships can be found [here](tosca_concepts_types_normative_relationships.html).
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
