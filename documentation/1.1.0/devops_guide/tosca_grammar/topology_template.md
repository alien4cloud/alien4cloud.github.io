---
layout: post
exclude_from_search: true
title:  Topology template
root: ../../../
categories: DOCUMENTATION-1.1.0
parent: [devops, tosca_concepts, tosca_ref_definitions]
node_name: tosca_ref_topology_template
weight: 300
---

This section defines the topology template of a cloud application. The main ingredients of the Topology Template are node templates representing components of the application.

## Keynames

A Topology Template contains the following element keynames:

{: .table .table-bordered}
| Keyname | Required | Description |
|:---------|:------------|:---------|
| description | no | Declares a description for this Service Template and its contents. |
| inputs | no | Defines a set of global input parameters passed to the template when its instantiated. This provides a means for template authors to provide points of variability to users of the template in order to customize each instance within certain constraints. |
| input_artifacts | no | Define artifacts as inputs. |
| substitution_mappings | no | Describe how this topology can be used as a type in another one. |
| node_templates | yes | Defines a list of [Node template](#/documentation/1.1.0/devops_guide/tosca_grammar/node_template.html)s that model the components of an application or service’s topology within the Service Template. |
| relationship_templates | no | Defines a list of Relationship Templates that are used to model the relationships (e.g., dependencies, links, etc.) between components (i.e., Node Templates) of an application or service’s topology within the Service Template. |
| outputs | no | This optional section allows for defining a set of output parameters provided to users of the template. For example, this can be used for exposing the URL for logging into a web application that has been set up during the instantiation of a template. |
| groups | no | This is an optional section that contains grouping definition for node templates. |

## Grammar

The overall structure of a TOSCA Topology Template and its top-level key collations using the TOSCA Simple Profile is shown below:

{% highlight yaml %}
topology_template

  description: a description of the topology template

  inputs:
    # list of global input parameters

  input_artifacts:
    # map of artifacts defined as inputs (non TOSCA)

  substitution_mappings:
    # define substitution mapping

  node_templates:
    # list of node templates

  relationship_templates:
    # list of relationship templates

  groups:
    # list of groups defined in service template

  outputs:
    # list of output parameters

{% endhighlight %}

### description
This optional element provides a means to include single or multiline descriptions within a TOSCA Simple Profile template as a scalar string value.

### inputs

This optional element provides a means to define parameters, their allowed values via constraints and default values within a TOSCA Simple Profile template.

This section defines template-level input parameter section.

*	Inputs here would ideally be mapped to BoundaryDefinitions in TOSCA v1.0.
*	Treat input parameters as fixed global variables (not settable within template)
*	If not in input take default (nodes use default)

#### Grammar

{% highlight yaml %}
inputs:
  <property_definition_1>
  ...
  <property_definition_n>
{% endhighlight %}

#### Examples
Simple example without any constraints:

{% highlight yaml %}
inputs:
  fooName:
    type: string
    description: Simple string typed property definition with no constraints.
    default: bar
{% endhighlight %}

Example with constraints:

{% highlight yaml %}
inputs:
  SiteName:
    type: string
    description: string typed property definition with constraints
    default: My Site
    constraints:
      - min_length: 9
{% endhighlight %}

{% note %}
The parameters (properties) that are listed as part of the inputs block could be mapped to PropertyMappings provided as part of BoundaryDefinitions as described by the TOSCA v1.0 specification.
{% endnote %}

### input_artifacts

This section defines template-level input artifacts. Such artifacts can be shared by several nodes. Their content is defined at deployment time.

{% warning %}
The section *input_artifacts* and the function *get_input_artifact* are not yet defined in TOSCA.
{% endwarning %}

#### Examples

In this example, an input artifact is defined and shared by two different nodes:

{% highlight yaml %}
topology_template:
  input_artifacts:
    my_war_file:
      type: alien.artifacts.WarFile
  node_templates:
    War1:
      type: alien.nodes.cloudify.War
      artifacts:
        war_file:
          implementation: { get_input_artifact: my_war_file }
          type: alien.artifacts.WarFile
    War2:
      type: alien.nodes.cloudify.War
      artifacts:
        war_file:
          implementation: { get_input_artifact: my_war_file }
          type: alien.artifacts.WarFile
{% endhighlight %}

### substitution_mappings

Substitution allows you to compose topologies by combining templates.
To be usable in another topology, you must define what a topology template will expose:

- capabilities
- requirements
- properties
- attributes

#### Examples

In the example below, the topology template define 2 nodes. It's exposed as a _tosca.nodes.Root_ (this means that the created type will inherit _tosca.nodes.Root_).

It will have:

- a capability named 'host' that will be wired to the capability 'host' of the node 'Mysql'.
- a requirement named 'network' that will be wired to the requirement 'network' of the node 'Compute'

Since inputs and outputs are defined for this template, it will also have:

- a property named 'db_port'
- an attribute named 'Mysql_database_endpoint_port'

{% highlight yaml %}
topology_template:
  inputs:
    db_port:
      type: integer
      required: true
      default: 3306
      description: The port on which the underlying database service will listen to data.
  substitution_mappings:
    node_type: tosca.nodes.Root
    capabilities:
      host: [ Mysql, host ]
    requirements:
      network: [ Compute, network ]
  node_templates:
    Mysql:
      type: alien.nodes.Mysql
      properties:
        db_port: { get_input: db_port }
      requirements:
      - host:
        node: Compute
        capability: tosca.capabilities.Container
        relationship: tosca.relationships.HostedOn
    Compute:
      type: tosca.nodes.Compute
  outputs:
    Mysql_database_endpoint_port:
    value: { get_property: [ Mysql, database_endpoint, port ] }
{% endhighlight %}

### node_templates

This element lists the Node Templates that describe the (software) components that are used to compose cloud applications.

#### Grammar

{% highlight yaml %}
node_templates:
  <node_template_defn_1>
  ...
  <node_template_defn_n>
{% endhighlight %}

#### Example

{% highlight yaml %}
node_templates:
  my_webapp_node_template:
    type: WebApplication

  my_database_node_template:
    type: Database
{% endhighlight %}

{% note %}
The node templates listed as part of the node_templates block can be mapped to the list of NodeTemplate definitions provided as part of TopologyTemplate of a ServiceTemplate as described by the TOSCA v1.0 specification.  
{% endnote %}

see:

- [Node template](#/documentation/1.1.0/devops_guide/tosca_grammar/node_template.html)

### relationship_templates

{% warning %}
Not yet supported In Alien 4 Cloud
{% endwarning %}

### groups

The group construct is a composition element used to group one or more node templates within a TOSCA Service Template. It is mainly used to apply a [Policy](#/documentation/1.1.0/devops_guide/tosca_grammar/policy.html) onto a group of nodes.

#### Grammar

{% highlight yaml %}
groups:
  <group_name_A>:
    members: [ node1, ... nodeN ]
    policies:
      - <policy_defn_A_1>
      ...
      - <policy_defn_A_n>

  <group_name_B>
    members: [ node1, ... nodeN ]
      policies:
        - <policy_defn_B_1>
        ...
        - <policy_defn_B_n>
{% endhighlight %}

#### Example

{% highlight yaml %}
node_templates:
  server1:
    type: tosca.nodes.Compute
    # more details ...

  server2:
    type: tosca.nodes.Compute
    # more details ...

  server3:
    type: tosca.nodes.Compute
    # more details ...

groups:
  server_group_1:
    members: [ server1, server2 ]
    policies:
      - name: my_scaling_ha_policy
        type: tosca.policy.ha
{% endhighlight %}

see:

- [Policy](#/documentation/1.1.0/devops_guide/tosca_grammar/policy.html)

### outputs

This optional element provides a means to define the output parameters that are available from a TOSCA Simple Profile service template.

#### Grammar

{% highlight yaml %}
outputs:
  <property_definitions>
{% endhighlight %}

#### Example

{% highlight yaml %}
outputs:
  server_ip:
    description: The IP address of the provisioned server.
    value: { get_attribute: [ my_server, ip_address ] }
{% endhighlight %}
