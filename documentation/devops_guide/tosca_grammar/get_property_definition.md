---
layout: post
title:  get_property
root: ../../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts, tosca_ref_definitions, tosca_ref_types_function_definition]
node_name: tosca_ref_get_property_definition
weight: 200
---

The **get_property** function  is used to  retrieve property values between  modelable entities defined in the same service template.  
Use this function for inputs parameters.

## Keynames

{: .table .table-bordered}
| Keyname                   | Type                | Required | Description |
|:----------------          |:--------------------|:---------|:------------|
| modelable_entity_name     | string              | yes      | The  required  name of a modelable entity (e.g., Node Template  or Relationship  Template name) as declared in the service template that contains the named property definition  the function will return the value from.Can be one of the reserved keywords: SELF, SOURCE, TARGET, HOST |
| capability_name           | string              | no       | The  optional name of a capability within the modelable entity that contains the named property definition  the function will return the value from.|
| property_name             | string              | yes       | Name of the property definition the function will return the value from. |

## Grammar

{% highlight yaml %}
get_property: [ <modelable_entity_name | SELF | SOURCE | TARGET | HOST>, [<capability_name>], <property_name> ] 
{% endhighlight %}

## Example

The following example shows how to define an input parameter using get_property function:

{% highlight yaml %}
node_types:
  fastconnect.nodes.FunctionSample:
    properties:
      myName:
        type: string
    interfaces:
      Standard:
        configure:
          inputs:
            MY_NAME: { get_property: [SELF, myName] }
            CAPA_PORT: { get_property: [SELF, endpoint, port] }
          implementation: config.sh
            
{% endhighlight %}
