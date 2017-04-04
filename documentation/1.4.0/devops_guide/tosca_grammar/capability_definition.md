---
layout: post
title:  Capability definition
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_capability_definition
weight: 120
---

A capability definition defines a named, typed set of data that can be associated with Node Type or Node Template to describe a transparent capability or feature of the software component the node describes.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| type | yes | string | Type of capability or node that is required by the current node. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| description | no | string | The optional description of the Capability Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| properties | no | list of properties values | Properties values for the properties defined on the capability type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| attributes | no | list of attributes values | Attributes values for the attributes defined on the capability type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| valid_source_types __(1)__ | no | string[] | An optional list of one or more valid names of Node Types that are supported as valid sources of any relationship established to the declared Capability Type. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| occurrences | range | no | Specifies the boundaries of client requirements the defined capability can serve. A value of unbounded indicates that there is no upper boundary. Defaults to [0, unbounded]. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ Valid source types is not supported in alien4cloud. We intend to support valid source types in future releases but believe that there should not be reasons to restrict the usage of a capability to a specific node as it could restrict the reusability of the node.

## Grammar

{% highlight yaml %}
# Simple definition is as follows:
<capability_defn_name>: <capability_type>

# The full definition is as follows:
<capability_defn_name>:
  type: <capability_type>
  description: <capability_defn_description>
  properties:
    <property_values>
  attributes:
    <attribute_values>
  occurrences: <occurrences>
{% endhighlight %}

## Example

{% highlight yaml %}
node_types:
  fastconnect.nodes.CapabilitySample:
    capabilities:
      # Simple form, no properties defined or augmented
      test_capability: mytypes.mycapabilities.MyCapabilityTypeName

      # Full form, augmenting properties of the referenced capability type
      some_capability:
        type: mytypes.mycapabilities.MyCapabilityTypeName
        properties:
          limit: 100
        occurrences: [0, 3]
{% endhighlight %}
