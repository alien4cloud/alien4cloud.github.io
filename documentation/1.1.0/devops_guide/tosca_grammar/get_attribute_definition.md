---
layout: post
exclude_from_search: true
title:  get_attribute
root: ../../../
categories: DOCUMENTATION-1.1.0
parent: [devops, tosca_concepts, tosca_ref_definitions, tosca_ref_types_function_definition]
node_name: tosca_ref_get_attribute_definition
weight: 300
---

The **get_attribute** function  is used to retrieve the values of named attributes declared by the referenced  node or relationship template name.  
Use this function for inputs parameters.

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| modelable_entity_name            | string              | yes      | The  required  name of a modelable entity (e.g., Node Template  or Relationship  Template name) as declared in the service template that contains the named property definition  the function will return the value from.Can be one of the reserved keywords: SELF, SOURCE, TARGET, HOST |
| attribute_name     | string              | yes       | Name of the attribute definition the function will return the value from. |

## Grammar

{% highlight yaml %}
get_attribute: [ <modelable_entity_name | SELF | SOURCE | TARGET | HOST>, <attribute_name>] 
{% endhighlight %}

## Example

The following example shows how to define an input parameter on relationship using get_attribute function:

{% highlight yaml %}
relationship_types:
  fastconnect.relationship.FunctionSample
    interfaces:
      configure:
        add_target: 
          inputs:
            TARGET_IP: { get_attribute: [TARGET, ip_address] }
          implementation: add_target.sh

{% endhighlight %}