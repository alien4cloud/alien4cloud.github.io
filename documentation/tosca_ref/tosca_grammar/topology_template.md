---
layout: post
title:  Topology template
root: ../../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_definitions]
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
| node_templates | yes | Defines a list of [Node template](#/documentation/tosca_ref/tosca_grammar/node_template.html)s that model the components of an application or service’s topology within the Service Template. |
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

- [Node template](#/documentation/tosca_ref/tosca_grammar/node_template.html)

### relationship_templates

{% warning %}
Not yet supported In Alien 4 Cloud
{% endwarning %}

### groups

{% warning %}
Not yet supported In Alien 4 Cloud
{% endwarning %}

The group construct is a composition element used to group one or more node templates within a TOSCA Service Template.

#### Grammar

{% highlight yaml %}
groups:
  <group_name_A>:
    <node_template_defn_A_1>
    ...
    <node_template_defn_A_n>

  <group_name_B>
    <node_template_defn_B_1>
    ...
    <node_template_defn_B_n>
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
      - anti_collocation_policy:
          # specific policy declarations omitted, as this is not yet specified
{% endhighlight %}

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
