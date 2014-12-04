---
layout: post
title:  Interface definition
root: ../../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_definitions]
node_name: tosca_ref_types_interface_definition
weight: 700
---

An interface definition defines a named interface that can be associated with a Node or Relationship Type.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| inputs          | string              | no       | The optional list of input parameter definitions. |
| description     | string              | no       | Alien 4 Cloud specific key to specify the description of the interface. |

{% warning %}
Current implementation of Alien 4 Cloud doesn't take in account inputs global to an interface but only inputs specified on opertions.
{% endwarning %}

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
