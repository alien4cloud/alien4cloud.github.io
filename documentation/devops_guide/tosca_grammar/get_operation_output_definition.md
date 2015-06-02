---
layout: post
title:  get_operation_output
root: ../../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts, tosca_ref_definitions, tosca_ref_types_function_definition]
node_name: tosca_ref_get_operation_output_definition
weight: 400
---

The **get_operation_output** function is used to retrieve the values of variables exposed / exported from an interface operations.  
Use this function for inputs parameters and/or attributes.

## Keynames

{: .table .table-bordered}
| Keyname                   | Type                | Required | Description |
|:----------------          |:--------------------|:---------|:------------|
| modelable_entity_name     | string              | yes      | The  required  name of a modelable entity (e.g., Node Template  or Relationship  Template name) as declared in the service template that implements the named interface and operation. Can be one of the reserved keywords: SELF, SOURCE, TARGET, HOST |
| interface_name           | string              | yes       | The required name of the interface which defines the operation.|
| operation_name           | string              | yes       | The required name of the operation whose output value we would like to retrieve.|
| output_variable_name     | string              | yes       | The required name of the output variable that is exposed / exported by the operation.|

## Grammar

{% highlight yaml %}
get_operation_output: [ <modelable_entity_name | SELF | SOURCE | TARGET | HOST>, <interface_name>, <operation_name>, <output_variable_name> ] 
{% endhighlight %}

## Example

The following example shows how to define an attribute and an input parameter using get_operation_output function:

{% highlight yaml %}
node_types:
  fastconnect.nodes.FunctionSample:
    attributes:
      port: { get_operation_output: [SELF, Standard, configure, bound_port]}
    interfaces:
      Standard:
        configure: config.sh  #the  config.sh script should expose an environment variable (output) named "bound_port"
        start:
          inputs:
            PORT: { get_operation_output: [SELF, Standard, configure, bound_port]}
          implementation: start.sh
            
{% endhighlight %}
