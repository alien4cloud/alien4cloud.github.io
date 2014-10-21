---
layout: post
title:  Artifact definition
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_types]
node_name: tosca_ref_types_artifacts
weight: 800
---

An artifact definition defines a named, typed file that can be associated with Node Type or Node Template and used by orchestration engine to facilitate deployment and implementation of interface operations.

## Keynames

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| uri             | string              | yes      | The uri (relative to the archive root, or absolute) which can be used to locate the artifact's file. |
| type            | string              | no       | The required data type for the property. |
| description     | string              | no       | The optional description for the artifact definition. |
| mime_type       | string              | no       | The optional Mime type for finding the correct artifact definition when it is not clear from the file extension. |

## Grammar

Artifacts can be defined in a simple or detailed fashion:

Simple form:

{% highlight yaml %}
<artifact_name>: <artifact_uri>
{% endhighlight %}

Detailed form:

{% highlight yaml %}
<artifact_name>:
  uri: <artifact_uri>
  type: <artifact_type_name>
  description: <artifact_description>
  mime_type: <artifact_mime_type_name>
{% endhighlight %}

## Example

The following example shows how to define a node type with artifacts:

{% highlight yaml %}
node_types:
  fastconnect.nodes.ArtifactSample:
    artifacts:
      artifact_1: files/artifact.zip
      artifact_2:
        uri: http://192.168.0.21/my-application.war
        type: tosca.artifacts.War
        description: The application war file
{% endhighlight %}
