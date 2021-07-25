---
layout: post
title:  Capability filter
root: ../../../
categories: DOCUMENTATION-3.4.0
parent: [devops, tosca_grammar, tosca_ref_node_filter]
node_name: tosca_ref_capability_filter
weight: 10
---

A capability filter definition defines criteria for selection of a TOSCA Node Template based upon the template’s capability properties.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| properties | no | map of [property filter definition] | An optional sequenced list of property filters that would be used to select (filter) matching TOSCA capability based upon their property definitions’ values. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

## Grammar

{% highlight yaml %}
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
