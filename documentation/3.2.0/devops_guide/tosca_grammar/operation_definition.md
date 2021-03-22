---
layout: post
title:  Operation definition
root: ../../../
categories: DOCUMENTATION-3.2.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_operation_definition
weight: 150
---

An operation definition defines a named function or procedure that can be bound to an implementation artifact (e.g., a script).

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| description | no | string | The optional description string for the associated named operation. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| implementation |	no | string or [implementation artifact definition](#/documentation/3.0.0/devops_guide/tosca_grammar/artifact_definition.html)__(1)__ __(2)__| The optional implementation artifact name (example: a script file name within a TOSCA CSAR file). | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| inputs __(3)__ | no | list of [property definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/property_definition.html) or list of [property assignment](#/documentation/3.0.0/devops_guide/tosca_grammar/parameter_definition.html) | The optional list of input parameter definitions. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

* __(1)__ TOSCA does not support the implementation artifact definition syntax in 1.0.0 and 1.1.0 versions. This is however not really correct as using artifact extension may not be enough to auto-detect the type of artifact and therefore the way to execute it.
* __(2)__ TOSCA allow the implementation keyword to have two children being a primary and dependencies artifacts. We don't support this notation in alien4cloud and also don't support yet the ability to specify primary and dependencies artifact. Read how you can [get artifacts in alien4cloud](#/documentation/3.0.0/devops_guide/tosca_grammar/artifact_definition.html).
* __(3)__ defined inputs are injected on runtime into as environment variable for the implementation script. In addition of these defined inputs, some properties related to the nodes are also automatically availlable. See [Environment variables section](#documentation/3.0.0/devops_guide/tosca_normative_lifecycle.html).

{% warning %}
The artifact must be related to an artifact type. The way artifacts are related to artifact types is based on the implementation artifact name extension.
This refers directly to the artifact types file_ext property that may have been defined.

If no artifact type matches the extension Alien 4 Cloud will not allow parsing of the artifact.
{% endwarning %}

{% note %}
TOSCA supports the definition of primary and dependencies artifacts. This is not yet supported in alien4cloud. Note that primary and dependencies syntax is not in line with the definition of implementation artifacts and not really valid for the reasons explained here.
{% endnote %}

## Grammar

{% highlight yaml %}
<operation_name>:
  description: <operation_description>
  implementation: <implementation_artifact_name>
  inputs:
    <parameter_definition>
{% endhighlight %}

In addition, the following simplified grammar may also be used (where a full definition is not necessary):

{% highlight yaml %}
<operation_name>: <implementation_artifact_name>
{% endhighlight %}

{% note %}
implementation_artifact_name must be the path to a file and is resolved starting from the archive root.
{% endnote %}

## Example

The following example shows how to define a node type with operation:

{% highlight yaml %}
node_types:
  fastconnect.nodes.OperationSample:
    interfaces:
      Standard:
        create: /scripts/install.sh
        configure:
          description: This is the configuration description.
          implementation: /scripts/setup.sh
          inputs:
            value_input: 4
            function_input: { get_property: [ my_host, mem_size ] }
      custom:
        do_something:
          implementation: /scripts/do_something.sh
          inputs:
            property_input:
              type: string
              description: An input that will have to be provided on operation call.
              constraints:
              - min_length : 4
              - max_length : 8
{% endhighlight %}
