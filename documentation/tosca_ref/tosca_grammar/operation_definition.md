---
layout: post
title:  Operation definition
root: ../../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_definitions]
node_name: tosca_ref_types_operation_definition
weight: 600
---

An operation definition defines a named function or procedure that can be bound to an implementation artifact (e.g., a script).

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| description     | string              |	no       | The optional description string for the associated named operation. |
| implementation  |	string              | no       | The optional implementation artifact name (e.g., a script file name within a TOSCA CSAR file). |
| inputs          | string              | no       | The optional list of input parameter definitions. |

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

{% warning %}
The artifact must be related to an artifact type. The way artifacts are related to artifact types is based on the implementation artifact name extension.
This refers directly to the artifact types file_ext property that may have been defined.

If no artifact type matches the extension Alien 4 Cloud will not allow parsing of the artifact.
{% endwarning %}

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
{% endhighlight %}
