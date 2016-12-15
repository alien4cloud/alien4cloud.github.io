---
layout: post
exclude_from_search: true
title:  get_property
root: ../../../
categories: DOCUMENTATION-1.2.0
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
| property_path             | string              | yes       | Name (of) or path (to) the property definition the function will return the value from. can be a nested names such as: `property_name.nested_property`|

## Grammar

{% highlight yaml %}
get_property: [ <modelable_entity_name | SELF | SOURCE | TARGET | HOST>, [<capability_name>], <property_path> ]
{% endhighlight %}

## Example

Given a custom data type definition:

{%highlight yaml%}
alien.nodes.test.ComplexDataType:
  properties:
    nested:
      type: string
    nested_array:
      type: list
      entry_schema:
        type: string
    nested_map:
      type: map
      entry_schema:
        type: string
{%endhighlight%}

A node type definition:

{%highlight yaml%}
alien.nodes.test.FunctionTest:
  derived_from: tosca.nodes.SoftwareComponent
  properties:
  myName:
    type: string
    complex_prop:
      type: alien.nodes.test.ComplexDataType
  interfaces:
  Standard:
    create:
      inputs:
        MY_NAME: { get_property: [SELF, myName] }
        COMPLEX: { get_property: [ SELF, "complex_prop" ] }
        NESTED: { get_property: [ SELF, "complex_prop.nested" ] }
        NESTED_ARRAY_ELEMENT: { get_property: [ SELF, "complex_prop.nested_array[0]" ] }
        NESTED_MAP_ELEMENT: { get_property: [ SELF, "complex_prop.nested_map.tutu" ] }
        CAPA_PORT: { get_property: [SELF, endpoint, port] }
      implementation: scripts/create.sh
{%endhighlight%}

And the following topology snippet:

{% highlight yaml %}
FunctionTest:
  type: alien.nodes.test.FunctionTest
  properties:
    myName: functionTest_Name
    complex_prop:
      nested: toto
      nested_array: [ titi, tuctuc ]
      nested_map:
        toctoc: tactac
        tutu: tata
  capabilities:
    endpoint:
      properties:
        port: 80
{% endhighlight %}

The following environment var will be available to sript:
{%highlight bash%}
 # simple property
echo "MY_NAME is ${MY_NAME}"

 # capability property
echo "CAPA_PORT is ${CAPA_PORT}"

 #complex property. Will results into the json serialization of the property value
echo "COMPLEX is ${COMPLEX}"

 # nested properties
echo "NESTED is ${NESTED}"

 # first element of the array nested property "nested_array"
echo "NESTED_ARRAY_ELEMENT is ${NESTED_ARRAY_ELEMENT}"

 # nested property of the map nested property "nested_map"
echo "NESTED_MAP_ELEMENT is ${NESTED_MAP_ELEMENT}"
{%endhighlight%}

Output:
{%highlight bash%}
MY_NAME is functionTest_Name
CAPA_PORT is 80
COMPLEX is {"nested": "toto", "nested_array": ["titi", "tuctuc"], "nested_map": {"toctoc": "tactac", "tutu": "tata"}}
NESTED is toto
NESTED_ARRAY_ELEMENT is titi
NESTED_MAP_ELEMENT is tata
{%endhighlight%}
