---
layout: post
title:  Interface definition
root: ../../../
categories: DOCUMENTATION-2.2.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_interface_definition
weight: 140
---

An interface definition defines a named interface that can be associated with a Node or Relationship types and templates.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| description __(1)__ | no | string | An optional description for the interface. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| inputs  | no | string | The optional list of input parameter definitions, common to all underling operations | alien_dsl_1_4_0 |

* __(1)__ TOSCA 1.0.0 does not specifies description for interface definition but this sounds more like a miss. Therefore our tosca_simple_yaml_1_0 support includes support for description keyword.

## Grammar

{% highlight yaml %}
<interface_definition_name>:
  inputs:
    <parameter_definitions>
  <operation_definition_1>
  ...
  <operation_definition_n>
{% endhighlight %}

## Example

The following example shows how to define a node type with operation:

{% highlight yaml %}
node_types:
  fastconnect.nodes.OperationSample:
    interfaces:
      Standard:
        desciption: Normative interface that defines a node standard lifecycle.
        create: /scripts/install.sh
        configure:
          description: This is the configuration description.
          implementation: /scripts/setup.sh
          inputs:
            value_input: 4

{% endhighlight %}
