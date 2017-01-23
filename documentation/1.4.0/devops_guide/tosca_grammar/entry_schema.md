---
layout: post
title: Entry schema
root: ../../../
categories: "DOCUMENTATION-1.4.0"
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_entry_schema
weight: 100
---

Entry schema is used in the context of a property definition to specify the type of the entry when the property definition type is list or map.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| type            | yes      | string              | The required data type for the entries of the map or list. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| description     | no       | string              | The optional description for the entry type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| constraints     | no | [list of constraints](#/documentation/1.4.0/devops_guide/tosca_grammar/constraints.html) | The optional list of sequenced constraints to add to the data type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

{% info %}
<h5>Constraints behavior</h5>
Adding constraints to an entry schema actually allows to augment a data type without having to create a new derived type.
Constraints can only be applied when the type of the entry schema is a primitive type.
{% endinfo %}

## Grammar

{% highlight yaml %}
entry_schema:
  description: <schema_description>
  type: <entries_type>
  constraints:
    - <entries_constraint_1>
    - ...
    - <entries_constraint_n>
{% endhighlight %}
