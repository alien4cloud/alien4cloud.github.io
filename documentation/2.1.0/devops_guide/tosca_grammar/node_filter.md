---
layout: post
title:  Node filter
root: ../../../
categories: DOCUMENTATION-2.1.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_node_filter
weight: 130
---

A node filter definition defines criteria for selection of a TOSCA Node Template based upon the template’s property values, capabilities and capability properties.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| properties | no | map of [property filter definition](#/documentation/2.1.0/devops_guide/tosca_grammar/property_filter_definition.html) | An optional sequenced list of property filters that would be used to select (filter) matching TOSCA entities (e.g., Node Template, Node Type, Capability Types, etc.) based upon their property definitions’ values. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| capabilities | no | map of string __(1)__ or map of [capability filter definition](#/documentation/2.1.0/devops_guide/tosca_grammar/capability_filter_definition.html) | An optional sequenced list of capability names or types that would be used to select (filter) matching TOSCA entities based upon their existence. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ Alien 4 cloud does not support the map of string notation in current implementation.

## Grammar

{% highlight yaml %}
node_filter:
  properties:
    - <property_filter_def_1>
    - ...
    - <property_filter_def_n>
  capabilities:
    - <capability_name_or_type_1>:
        properties:
          - <cap_1_property_filter_def_1>
          - ...
          - <cap_m_property_filter_def_n>
    -  ...
    - <capability_name_or_type_n>:
        properties:
          - <cap_1_property_filter_def_1>
          - ...
          - <cap_m_property_filter_def_n>
{% endhighlight %}

## Example

{% highlight yaml %}
my_node_template:
  # other details omitted for brevity
  requirements:
    - host:
        node_filter:
          capabilities:
            # My “host” Compute node needs these properties:      
            - host:
                properties:
                  - num_cpus: { in_range: [ 1, 4 ] }
                  - mem_size: { greater_or_equal: 512 MB }
{% endhighlight %}
