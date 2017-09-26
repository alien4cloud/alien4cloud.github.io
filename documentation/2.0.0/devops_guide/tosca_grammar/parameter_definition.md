---
layout: post
title:  Property assignment
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_parameter_definition
weight: 1000
---

A parameter definition is map used to declare a name for a parameter along with its value to be used as inputs for operations. This value can either be a fixed value or one that is evaluated from a function or expression.

{% info %}
Alien 4 Cloud allow users to specify also a property definition as the parameter value. This is possible only for operations that are not part of the automatic lifecycle but that will be triggered upon user request.
{% endinfo %}

## Grammar

{% highlight yaml %}
<parameter_name>: <value> | <function_definition>
{% endhighlight %}

See [function_definition](#/documentation/2.0.0/devops_guide/tosca_grammar/function_definition.html).

{% info %}
For Alien 4 Cloud property definition syntax support you can refer to the [property_definition page](#/documentation/2.0.0/devops_guide/tosca_grammar/property_definition.html).
{% endinfo %}

## Example



{% highlight yaml %}
node_types:
  fastconnect.nodes.PropertiesSample:
    interfaces:
      custom:
        do_something:
          inputs:
            value_input: 4
            function_input: { get_property: [ my_host, mem_size ] }
            property_input:
              type: string
              description: An input that will have to be provided on operation call.
              constraints:
              - min_length : 4
              - max_length : 8
{% endhighlight %}
