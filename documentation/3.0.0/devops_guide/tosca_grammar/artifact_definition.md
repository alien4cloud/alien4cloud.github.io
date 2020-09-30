---
layout: post
title: Artifact definition
root: ../../../
categories: DOCUMENTATION-3.0.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_artifact_definition
weight: 700
---

An artifact definition defines a named, typed file that can be associated with Node Type or Node Template and used by orchestration engine to facilitate deployment and implementation of interface operations.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type                | Description | tosca_definitions_version |
|:----------------|:---------|:--------------------|:------------|:--------------------------|
| type | no | string | The optional data type for the artifact definition. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| description | no | string | The optional description for the artifact definition. | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| mime_type __(1)__ | no | string | The optional Mime type for finding the correct artifact definition when it is not clear from the file extension.| alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| repository | no | string | The optional name of the repository definition which contains the location of the external repository that contains the artifact.| alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| deploy_path __(2)__ | no | string | The file path the associated file would be deployed into within the target node’s container.<br> Deploy path is valid only for a deployment artifact and not in context of an implementation artifact. | N.A. |

* __(1)__ Note that while alien4cloud parser handles mime types correctly they are however not taken in account in any processing way yet.
* __(2)__ Current implementation of Alien 4 Cloud does not take the deploy_path in account but exposes an environment variable that contains the local path in which alien4cloud has placed the file.

{% info %}
<h5>Getting the artifact from your scripts :</h5>
Alien 4 Cloud does not support get_artifact function to retrieve a specified artifact. It will however provide an input environment variable named based on the artifact name in all scripts of the node/relationship that defines the artifact.
The value of the environment variable is equal to the local path of the file.
{% endinfo %}

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
      - scripts_directory: scripts
        type: tosca.artifacts.File
        description: Directory that contains all scripts.
{% endhighlight %}
