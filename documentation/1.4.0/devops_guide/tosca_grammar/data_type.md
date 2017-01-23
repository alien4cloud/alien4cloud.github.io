---
layout: post
title:  Data type
root: ../../../
categories: DOCUMENTATION-1.3.0
parent: [devops, tosca_grammar]
node_name: tosca_grammar_types_data_type
weight: 30
---

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| derived_from | no | string | An optional parent Data Type name the Data Type derives from. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| version __(1)__ | no | version | An optional version for the Entity Type definition. | N.A. |
| metadata __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| tags __(2)__ | no | map of string | Defines a section used to declare additional metadata information. | alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| description | no | string | An optional description for the Data Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| constraints __(3)__ | no | list of [constraint clauses](#/documentation/1.3.0/devops_guide/tosca_grammar/constraints.html) | The optional list of sequenced constraint clauses for the Data Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| properties __(3)__ | no | map of [property definitions](#/documentation/1.3.0/devops_guide/tosca_grammar/property_definition.html) | The optional list of property definitions that comprise the schema for a complex Data Type in TOSCA. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ version at type level is defined in TOSCA but they are optional and there is no example on how it should be managed. We believe in alien4cloud that versions should be managed at the service template/archive level and dispatched to every elements defined in the service template/archive.
* __(2)__ metadata appeared in TOSCA while alien4cloud already had tags supported, support for metadata keyword has been added in 1.3.1 version. note that if you specify both metadata and tags one may silently override the other (this should be avoided).
* __(3)__ Constraints and properties are mutually exclusive. Constraints are used to extends primitive types by adding constraints to them while properties are used to defined complex types.

## Grammar

{% highlight yaml %}
<data_type_name>:
  derived_from: <existing_type_name>
  version: <version_number>
  metadata:
    <map of string>
  description: <datatype_description>
  constraints:
    - <type_constraints>
  properties:
    <property_definitions>
{% endhighlight %}

## Example

### Define a new complex datatype

{% highlight yaml %}
mytypes.phonenumber:
  description: my phone number datatype
  properties:
    countrycode:
      type: integer
    areacode:
      type: integer
    number:
      type: integer
{% endhighlight %}

### Define a new datatype that derives from existing type and extends it

{% highlight yaml %}
mytypes.phonenumber.extended:
  derived_from: mytypes.phonenumber
  description: custom phone number type that extends the basic phonenumber type
  properties:
    phone_description:
      type: string
      constraints:
        - max_length: 128
{% endhighlight %}

### Extending a primitive type to add constraints

{% highlight yaml %}
mytypes.password:
  derived_from: string
  description: a password with min length
  constraints:
    - min_length: 8
{% endhighlight %}
