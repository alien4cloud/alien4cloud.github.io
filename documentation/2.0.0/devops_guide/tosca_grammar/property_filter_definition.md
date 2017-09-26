---
layout: post
title:  Property filter
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [devops, tosca_grammar, tosca_ref_node_filter]
node_name: tosca_ref_property_filter
weight: 20
---

A property filter definition defines criteria, using constraint clauses, for selection of a TOSCA entity based upon it property values.

## Grammar

Short notation:

{% highlight yaml %}
<property_name>: <property_constraint_clause>
{% endhighlight %}

{% highlight yaml %}
<property_name>:
  - <property_constraint_clause_1>
  - ...
  - <property_constraint_clause_n>
{% endhighlight %}
