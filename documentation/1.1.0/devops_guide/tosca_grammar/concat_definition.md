---
layout: post
exclude_from_search: true
title:  concat
root: ../../../
categories: DOCUMENTATION-1.1.0
parent: [devops, tosca_concepts, tosca_ref_definitions, tosca_ref_types_function_definition]
node_name: tosca_ref_concat_definition
weight: 500
---

The **concat** function  is used to concatenate two or more string values within a TOSCA service template.  
Use this function for attributes
## Keynames

{: .table .table-bordered}
| Keyname                    | Type                | Required | Description |
|:----------------           |:--------------------|:---------|:------------|
| string_value_expressions_* | list of string or string value expressions              | yes      | A list of one or more strings (or expressions that result in a string value) which can be concatenated together into a single string.|

## Grammar

{% highlight yaml %}
concat: [ <string_value_expressions_*> ] 
{% endhighlight %}

## Example

The following example shows how to define an attribute using concat function:

{% highlight yaml %}
node_types:
  fastconnect.nodes.FunctionSample:
    properties:
      myName:
        type: string
      port:
        type: string
    attributes:
      url: { concat:  ["http://", get_attribute: [SELF, public_ip_address], ":", get_property: [SELF, port]] }
    interfaces:
      [...]
            
{% endhighlight %}
