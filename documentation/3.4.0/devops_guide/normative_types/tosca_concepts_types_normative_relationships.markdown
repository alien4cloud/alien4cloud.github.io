---
layout: post
title:  Relationships
root: ../../
categories: DOCUMENTATION-3.4.0
parent: [devops, tosca_ref_types_normative]
node_name: tosca_ref_types_normative_relationships
weight: 300
---

{% summary %}Normatives relationship types in TOSCA{% endsummary %}

# tosca.relationships.Root

This is the default (root) TOSCA Relationship Type definition that all other TOSCA Relationship Types derive from.

## Definition

{% highlight yaml %}
tosca.relationships.Root:
  # The TOSCA root relationship type has no property mappings
  interfaces:
    tosca.interfaces.relationship.Configure:
      documentation: >
        Default lifecycle for nodes in TOSCA.
      operations:
        pre_configure_source:
          documentation: Operation to pre-configure the source endpoint.
        pre_configure_target:
          documentation: Operation to pre-configure the target endpoint.
        post_configure_source:
          documentation: Operation to post-configure the source endpoint.
        post_configure_target:
          documentation: Operation to post-configure the target endpoint.
        add_target:
          documentation: Operation to add a target node.
        remove_target:
          documentation: Operation to remove a target node.

{% endhighlight %}

# tosca.relationships.DependsOn

This type represents a general dependency relationship between two nodes. Depends on impacts the TOSCA default lifecycle. A node that depends from a target node will be started after the target node has been actually started.

## Definition

{% highlight yaml %}
tosca.relationships.DependsOn:
  derived_from: tosca.relationships.Root
  valid_target_types: [ tosca.capabilities.Root ]
{% endhighlight %}

# tosca.relationships.HostedOn

This type represents a hosting relationship between two nodes.

## Definition

{% highlight yaml %}
  tosca.relationships.HostedOn:
    derived_from: tosca.relationships.DependsOn
    valid_target_types: [ tosca.capabilities.Container ]
{% endhighlight %}

# tosca.relationships.ConnectsTo

This type represents a network connection relationship between two nodes.

## Definition

{% highlight yaml %}
tosca.relationships.ConnectsTo:
  derived_from: tosca.relationships.DependsOn
  valid_target_types: [ tosca.capabilities.Endpoint ]
{% endhighlight %}

# tosca.relationships.AttachTo

This type represents an attachment relationship between two nodes.  For example, an AttachTo relationship type would be used for attaching a storage node to a Compute node.

## Definition

{% highlight yaml %}
tosca.relationships.AttachTo:
  derived_from: tosca.relationships.Root
  valid_target_types: [ tosca.capabilities.Attachement ]
  properties:
    location:
      type: string
      constraints:
        min_length: 1
    device:
      type: string
{% endhighlight %}

# tosca.relationships.RoutesTo

This type represents an intentional network routing between two Endpoints in different networks.

## Definition

{% highlight yaml %}
tosca.relationships.RoutesTo:
    derived_from: tosca.relationships.ConnectsTo
    valid_target_types: [ tosca.capabilities.Endpoint ]
{% endhighlight %}
