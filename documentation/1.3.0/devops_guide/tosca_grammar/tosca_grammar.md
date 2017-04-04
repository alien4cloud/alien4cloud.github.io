---
layout: post
title:  TOSCA grammar
root: ../../../
categories: DOCUMENTATION-1.3.0
parent: [devops]
node_name: tosca_grammar
weight: 1
---

This section describes the TOSCA grammar as supported in latest alien4cloud version.

Alien4cloud supports multiple versions of the __tosca_definitions_version__:

* alien_dsl_1_3_0: DSL used in alien4cloud 1.3.0
* alien_dsl_1_2_0: DSL used in alien4cloud 1.2.0 _deprecated_
* alien_dsl_1_1_0: DSL used in alien4cloud 1.1.0 _deprecated_. While alien4cloud is still able to parse this definition version it is not officially supported and not recommended.

* tosca_simple_yaml_1_0: Official Tosca definition. The support is getting improved but some elements of the specification may not be supported yet and therefore we don't recommend using it with alien4cloud.
* http://docs.oasis-open.org/tosca/ns/simple/yaml/1.0: Same as _tosca_simple_yaml_1_0_

The recommended version is __alien_dsl_1_3_0__ and provides all the functionalities that alien4cloud currently supports.

Child pages details the specification as currently supported in alien4cloud.

# Migration from 1.2.0 version

This section highlight the chances between alien_dsl_1_2_0 and alien_dsl_1_3_0 and is intendeed for users to easily migrate to the latest version.

## Type Validations

Previous version of alien4cloud parser were not checking the types used in requirement_definition and capability definition. This has been fixed in 1.3.0, this should not change your types but will impact the order in which you can upload your archives in alien4cloud.

## Requirement definition

Many things have changed in requirement definition dsl. The following grammar definitions highlight the differences between alien_dsl_1_2_0 and alien_dsl_1_3_0:

**alien_dsl_1_2_0**:

{% highlight yaml %}
- <requirement_name>: <type_of_capability or type_of_node> # required
  node_filter: <node_filter>
  description: <description>
  occurrences: [min, max]
  type: <type_of_relationship>
  relationship: <type_of_relationship> # both type and relationship keynames could be used but only one at a time.
  capability: <name_of_target_capability> # name in the target node / should have node defined.
{% endhighlight %}

**alien_dsl_1_3_0**:

{% highlight yaml %}
- <requirement_name>:
    capability: <type_of_capability> # required
    node: <type_of_node>
    node_filter: <node_filter>
    description: <description>
    occurrences: [min, max]
    relationship: <type_of_relationship>
    capability_name: <name_of_target_capability> # name in the target node / should have node defined.
{% endhighlight %}

Example below details

**alien_dsl_1_2_0**:

{% highlight yaml %}
node_types:
  alien4cloud.examples.MyNode:
    derived_from: tosca.nodes.SoftwareComponent
    requirements:
      - host: tosca.nodes.Compute
        relationship_type: tosca.relationships.HostedOn
        capability: host
        occurrences: [1, 1]
{% endhighlight %}

**alien_dsl_1_3_0**:

{% highlight yaml %}
node_types:
  alien4cloud.examples.MyNode:
    derived_from: tosca.nodes.SoftwareComponent
    requirements:
      - host:
          capability: tosca.capabilities.Root
          node: tosca.nodes.Compute
          relationship: tosca.relationships.HostedOn
          capability_name: host
          occurrences: [1, 1]
{% endhighlight %}

## Deployment artifacts

Artifact definition has changed and yaml node does not contains anymore both the name of artifact and the keynames as it has been defined in previous template versions. The previous notation was indeed more confusing and less inline with yaml definition.

{% info %}
1.3.0 also support repositories for artifacts. This section is just focused on templates migration and does not introduce new functionalities.
{% endinfo %}

**alien_dsl_1_2_0**:

{% highlight yaml %}
node_types:
  alien4cloud.examples.MyNode:
    derived_from: tosca.nodes.SoftwareComponent
    artifacts:
      - simple_config: config/config.yml
      - config: config/config.yml
        type: tosca.artifacts.File

relationship_types:
  alien4cloud.examples.MyRelationship:
    artifacts:
    - simple_config: config/config.yml
    - config: config/config.yml
      type: tosca.artifacts.File

topology_template:
  input_artifacts:
    config:
      type: tosca.artifacts.File

  node_templates:
    my_node:
      type: alien4cloud.examples.MyNode
      artifacts:
        config:
          implementation: config/config.yml
          type: tosca.artifacts.File
{% endhighlight %}

**alien_dsl_1_3_0**:

{% highlight yaml %}
node_types:
  alien4cloud.examples.MyNode:
    derived_from: tosca.nodes.SoftwareComponent
    artifacts:
      # Simple definition remains the same
      - simple_config: config/config.yml
      # Complex definition is now more in line with yaml and introduce the file keyname and sub-level
      - config:
          file: config/config.yml
          type: tosca.artifacts.File

relationship_types:
  alien4cloud.examples.MyRelationship:
    artifacts:
    # Simple definition remains the same
    - simple_config: config/config.yml
    # Complex definition is now more in line with yaml and introduce the file keyname and sub-level
    - config:
        file: config/config.yml
        type: tosca.artifacts.File

topology_template:
  input_artifacts:
    config:
      type: tosca.artifacts.File

  node_templates:
    my_node:
      type: alien4cloud.examples.MyNode
      artifacts:
        config:
          # implementation keyname is now replaced with file to be in line with the deployment artifact rather than operation notation.
          file: config/config.yml
          type: tosca.artifacts.File
{% endhighlight %}

{% note %}
alien_dsl_1_3_0 also supports simple definition of artifacts on templates and topology inputs while this was not authorized in previous versions:
{% highlight yaml %}
topology_template:
  input_artifacts:
    config: config/config.yml

  node_templates:
    my_node:
      type: alien4cloud.examples.MyNode
      artifacts:
        config: config/config.yml
{% endhighlight %}
{% endnote %}
