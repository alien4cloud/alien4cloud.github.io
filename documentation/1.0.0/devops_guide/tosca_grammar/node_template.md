---
layout: post
title:  Node template
root: ../../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts, tosca_ref_definitions, tosca_ref_topology_template]
node_name: tosca_ref_node_template
weight: 300
---

A Node Template specifies the occurrence of a manageable software component as part of an application’s topology model which is defined in a TOSCA Service Template.  A Node template is an instance of a specified Node Type and can provide customized properties, constraints or operations which override the defaults provided by its Node Type and its implementations.

## Keynames

The following is the list of recognized keynames recognized for a TOSCA Node Template definition and parsed by Alien4Cloud:

{: .table .table-bordered}
| Keyname | Required | Description |
|:---------|:------------|:---------|
| type | yes | The required name of the Node Type the Node Template is based upon. |
| requirements | no | An optional sequenced list of requirement definitions for the Node Template. |
| properties | no |  An optional list of property values for the node template. |
| capabilities | no |  An optional map of capabilities for the node template. |

## Grammar

The overall structure of a TOSCA Node Template and its top-level key collations using the TOSCA Simple Profile is shown below:

{% highlight yaml %}
<node_template_name>:
  type: <node_type_name>
  properties:
    <property_definitions>
  requirements:
    <requirement_definitions>
  capabilities:
    <capability_definitions>
{% endhighlight %}

### type

Represents the name of the Node Type the Node Template is based upon. This Node Type must be found in the archive itself or in the declared dependencies of the service template.

### requirements

To define relationships between node templates, you can describe the requirements that points to targets' capability.
Named requirement definitions have one of the following grammars:

#### short notation (node only)

{% highlight yaml %}
<requirement_name>: <template_name>
{% endhighlight %}

When using this short notation:

- the <requirement_name> must match to the name of the requirement in the type definition.
- the <template_name> points to another node template in the topology template (relationship target).
- the type of the node template target must have a capability named like the requirement.

Here is an example :

{% highlight yaml %}
topology_template:
  node_templates:
    compute:
      type: tosca.nodes.Compute
    apache:
      type: alien.nodes.Apache
      requirements:
        # the alien.nodes.Apache type defines a requirement named 'host'
        # the tosca.nodes.Compute type defines a capability named 'host'
        - host: compute
{% endhighlight %}

#### short notation (with relationship or capability)

In some situations, the short notation is not enough, for example when the capability name doesn't match the requirement name (in this case, you must specify the capability type), or when you want to define relationship properties values.

The following grammar would be used if either a relationship or capability is needed to describe the requirement:

{% highlight yaml %}
<requirement_name>:
  node: <template_name>
  capability: <capability_type>
  relationship: <relationship_type>
{% endhighlight %}

In such notation the keywords are:

{: .table .table-bordered}
| Keyname | Required | Description |
|:---------|:------------|:---------|
| node | yes | The relationship target node template name. |
| capability | yes | The type of the target node type capability that should be used to build the relationship. |
| relationship | no |  Optionally, the name of the relationship type that should be used to build the relationship (if not defined in the requirement definition or must be specified). |
| properties | no |  An optional list of property values for the relationship (non TOSCA). |

In the following example, the relationship type is found in the requirement 'database' of the type alien.nodes.Wordpress. The capability is found by the specified type 'alien.capabilities.MysqlDatabase' :

{% highlight yaml %}
node_templates:
  wordpress:
    type: alien.nodes.Wordpress
    requirements:
      - host: apache
      - database:
          node: mysql
          capability: alien.capabilities.MysqlDatabase
      - php:
          node: php
          capability: alien.capabilities.PHPModule
{% endhighlight %}

In the following example, the relationship is specified:

{% highlight yaml %}
node_templates:
  compute:
    type: tosca.nodes.Compute
    requirements:
      - network:
          node: network
          capability: tosca.capabilities.Connectivity
          relationship: tosca.relationships.Network
  network:
    type: tosca.nodes.Network
{% endhighlight %}

### properties

The property values can either be:

- a scalar value
- a function: a reference to an input

In the following example, 2 properties are defined for the node 'compute1' (1 referencing an input, and the other defined using a scalar value):

{% highlight yaml %}
topology_template:
  inputs:
    os_type:
      type: string
      constraints:
        - valid_values: ["linux", "aix", "mac os", "windows"]
      description: The host Operating System (OS) type.
  node_templates:
    compute1:
      type: tosca.nodes.Compute
      properties:
        os_type: { get_input: os_type }
        mem_size: 1024
{% endhighlight %}

### capabilities

In the following example, we define the value of the property 'port' for the capability named 'database_endpoint' of the node 'mysql_database':

{% highlight yaml %}
topology_template:
  node_templates:
    mysql_database:
      type: tosca.nodes.Database
      capabilities:
        database_endpoint:
          properties:
            port: 3306
{% endhighlight %}

Note that the property value can also be a *get_input* function:

{% highlight yaml %}
topology_template:
  inputs:
    mysql_port:
      type: string
  node_templates:
    mysql_database:
      type: tosca.nodes.Database
      capabilities:
        database_endpoint:
          properties:
            port: { get_input: mysql_port }
{% endhighlight %}
