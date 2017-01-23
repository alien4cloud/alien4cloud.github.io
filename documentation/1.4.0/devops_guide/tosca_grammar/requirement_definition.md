---
layout: post
title:  Requirement definition
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_requirement_definition
weight: 120
---

A requirement definition allows specification of a requirement that a node need to fulfill to be instanciated.

{% warning %}
<h5>alien_dsl_1_2_0 and older versions</h5>
Requirement definition syntax in TOSCA has been quite volatile in the working draft of version 1.0.0 of the specification. alien_dsl_1_2_0 and previous supported tosca_definitions_version in alien4cloud used a different syntax and while requirement definition was supported it is not mentioned here. You should look at the migration guide for more information.
{% endwarning %}

{% warning %}
<h5>tosca_simple_yaml_1_0 and alien4cloud 1.4.0</h5>
A bug in alien4cloud 1.4.0 prevent the tosca_simple_yaml_1_0 to use the standard definition of requirement definition. Insead alien 4 cloud will parse the alien_dsl_1_2_0 and working draft version of a requirement definition. The bug is fixed in alien4cloud 1.3.1.
{% endwarning %}

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| capability | yes | string | The required reserved keyname used that can be used to provide the name of a valid Capability Type  that can fulfill the requirement. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| description __(1)__ | no | string | The optional description of the Requirement definition. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| node | no | string | The optional reserved keyname used to provide the name of a valid Node Type that contains the capability definition that can be used to fulfill the requirement. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| node_filter __(2)__ | no | [Node filter](#/documentation/1.4.0/devops_guide/tosca_grammar/tosca_ref_node_filter.html) | The optional filter definition that defines a type-compatible target node that can fulfill the requirement. | alien_dsl_1_3_0 |
| relationship | no | string | The optional reserved keyname used to provide the name of a valid Relationship Type to construct when fulfilling the requirement. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| occurrences | no (defaults to [1,1]) | range of integer | Lower boundary by which a requirement MUST be matched. Valid values are any positive number, 0 meaning that the requirement is optional. Defaults to 1. and Upper boundary by which a requirement MUST be matched for Node Templates. Valid values are any positive number or _unbounded_ string that means that there is no upper limit. Defaults to 1. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |

* __(1)__ Description keyname is missing in TOSCA specification but it sounds more like a miss than an intend and we decided to include it also in our tosca_simple_yaml_1_0 support.
* __(2)__ Node filter in TOSCA specification is used only to specify dangling requirements. Basically on a node template you can use a node filter on a requirement assignment to specify to the orchestrator that it should connect the node template to any suitable instance of node that he can provide.

## Grammar

{% highlight yaml %}
# using type
<requirement_name>:
  capability: <capability_type_name>
  node: <node_type_name>
  relationship: <relationship_type_name>
  occurrences: [ <min_occurrences>, <max_occurrences> ]
{% endhighlight %}

## Example

{% highlight yaml %}
node_types:
  fastconnect.nodes.RequirementSample:
    requirements:
      - host:
          capability: tosca.capabilities.Container
          node: tosca.nodes.Compute
          relationship: tosca.relationships.HostedOn
          occurrences: [0, unbounded]
{% endhighlight %}
