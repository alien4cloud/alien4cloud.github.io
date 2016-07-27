---
layout: post
title: Artifact definition
root: ../../../
categories: DOCUMENTATION-1.3.0
parent:
  - devops
  - tosca_concepts
  - tosca_ref_definitions
node_name: tosca_ref_types_artifact_definition
weight: 700
published: true
---

An artifact definition defines a named, typed file that can be associated with Node Type or Node Template and used by orchestration engine to facilitate deployment and implementation of interface operations.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| type | string | no | The optional data type for the artifact definition. |
| description | string | no | The optional description for the artifact definition. |
| mime_type | string | no | The optional Mime type for finding the correct artifact definition when it is not clear from the file extension.|
| deploy_path | string | no | The file path the associated file would be deployed into within the target node’s container. |


{% warning %}
Current implementation of Alien 4 Cloud does not take the deploy_path in account but rather keeps the archive layout for scripts copy.
{% endwarning %}

## Grammar

{% highlight yaml %}
# Simple form - type and mime inferred from file URI
<artifact_name>: <artifact_file_URI>

# Qualified form - type and mime explicit
<artifact_name>: <artifact_file_URI>
type: <artifact_type_name>
description: <artifact_description>
mime_type: <artifact_mime_type_name>
{% endhighlight %}

## Example

The following example shows how to define a node type with operation:

{% highlight yaml %}

node_types:
  fastconnect.nodes.OperationSample:
    artifacts:
      - scripts_directory: scrips
        type: tosca.artifacts.File
        description: Directory that contains all scripts.

{% endhighlight %}
