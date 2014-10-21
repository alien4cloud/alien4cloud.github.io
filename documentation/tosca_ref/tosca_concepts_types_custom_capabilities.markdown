---
layout: post
title:  Capabilities
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_types]
node_name: tosca_ref_types_capabilities
weight: 100
---

A Capability Type is a reusable entity that describes a kind of capability that a Node Type can declare to expose.  Requirements (implicit or explicit) that are declared as part of one node can be matched to (i.e., fulfilled by) the Capabilities declared by other node.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| derived_from    | string              | no       | Name of the capability type from which the defined capability type derives (i.e. it's parent type). |
| documentation   | string              | no       | Description of the capability. |
| properties      | list of [property definitions](tosca_concepts_types_custom_properties.html).   | no       | Optional list of properties that the capability type defines. |

{% info %}
It is recommended when adding a new capability to derive from the normative _tosca.capabilities.Feature_ capability or another [normative capability](tosca_concepts_types_normative_capabilities.html).
{% endinfo %}

## Grammar

{% highlight yaml %}
<capability_type_name>:
  derived_from: <parent_capability_type_name>
  documentation: <documentation>
  properties:
    <property_definitions>
{% endhighlight %}

Documentation on property definitions can be found [here](tosca_concepts_types_custom_properties.html).

## Example

Example of the definition of a capability

{% highlight yaml %}
capability_types:
  fastconnect.capabilites.CapabilitySample:
    derived_from: tosca.capabilities.Feature
    documentation: A sample capability type.
    properties:
      property_1:
        type: string
{% endhighlight %}
