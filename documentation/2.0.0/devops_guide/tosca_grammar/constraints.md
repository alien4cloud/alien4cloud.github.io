---
layout: post
title:  Constraint clause
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_constraints
weight: 90
---

A constraint clause defines an operation along with one or more compatible values that can be used to define a constraint on a property’s or parameter’s allowed values.

## Available constraints

The following is the list of recognized operators (keynames) when defining constraint clauses:

{: .table .table-striped }
| Operator         | Type        | Value type | Description |
|:-----------------|:------------|:-----------|:------------|
| equal            | scalar      | all        | Constrains a property or parameter to a value equal to (‘=’) the value declared. |
| greater_than     | scalar      | comparable | Constrains a property or parameter to a value greater than (‘>’) the value declared. |
| greater_or_equal | scalar      | comparable | Constrains a property or parameter to a value greater than or equal to (‘>=’) the value declared. |
| less_than        | scalar      | comparable | Constrains a property or parameter to a value less than (‘<’) the value declared. |
| less_or_equal    | scalar      | comparable | Constrains a property or parameter to a value less than or equal to (‘<=’) the value declared. |
| in_range         | dual scalar | comparable | Constrains a property or parameter to a value in range of (inclusive) the two values declared. |
| valid_values     | list        | all        | Constrains a property or parameter to a value that is in the list of declared values. |
| length           | scalar      | string     | Constrains the property or parameter to a value of a given length. |
| min_length       | scalar      | string     | Constrains the property or parameter to a value to a minimum length. |
| max_length       | scalar      | string     | Constrains the property or parameter to a value to a maximum length. |
| pattern          | regex       | string     | Constrains the property or parameter to a value that is allowed by the provided regular expression. |

{% info %}
The value type comparable refers to integer, float , timestamp and version types, while all refers to any type allowed in the TOSCA simple profile in YAML.
{% endinfo %}

{% info %}
Regular expression language in Alien 4 Cloud (not specified in TOSCA currently) is Java regex.
{% endinfo %}

## Grammar

{% highlight yaml %}
# Scalar grammar
<operator>: <scalar_value>

# Dual scalar grammar
<operator>: [ <scalar_value_1>, <scalar_value_2> ]

# List grammar
<operator>: [ <value_1>, <value_2>, ..., <value_n> ]

# Regular expression (regex) grammar
pattern: <regular_expression_value>
{% endhighlight %}

## Example

The following example shows how to define a node type with constraints on properties:

{% highlight yaml %}
node_types:
  fastconnect.nodes.ConstraintSample:
    properties:
      property_1:
        type: string
        constraints:
          - length : 6
      property_2:
        type: string
        constraints:
          - min_length : 4
          - max_length : 8
      property_3:
        type: integer
        constraints:
          - in_range : [ 2, 10]
      property_4:
        type: integer
        constraints:
          - valid_values: [ 2, 4, 6, 8, 16, 24, 32]

{% endhighlight %}
