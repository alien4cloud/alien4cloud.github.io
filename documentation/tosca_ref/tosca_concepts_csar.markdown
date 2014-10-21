---
layout: post
title:  Cloud Service Archive
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref]
node_name: tosca_ref_csar
weight: 100
---

Every elements in TOSCA must be contained into a Cloud Service Archive (CSAR). A Cloud Service Archive is a zip file that contains definitions and any elements required for elements implementations.

{% indent %}
![csar-content.png](../../images/csar-content.png)
{% endindent %}

The entry point for the Cloud Service Archive is the *TOSCA-Metatata/CALM-META.yaml* file. The META file defines the following elements.

{: .table .table-bordered}
| Property | Description | Required |
|:---------|:------------|:---------|
| name | Name of the archive. It must be unique through all existing archives. | Yes |
| version | Version of the archive. | Yes |
| license | The license for the archive. | No |
| created_by | Author of the archive. | No |
| dependencies | List of dependencies (including both name and version). *Note: Import of base types is implicit and doesn't have to be specified*. | No |
| definitions | List of path to definitions files. The path are defined from the root of the archive. At least one definition file is required in a TOSCA archive. | Yes |

**Example**

{% highlight yaml %}
name: "calm.java-types"
version: "1.0"
license: "Apache v2.0"
created_by: "FastConnect"

dependencies:
  - name: "tosca-base-types"
    version: 1.0

definitions:
  - "/Definitions/java-types.yaml"
{% endhighlight %}


{% warning %}
Test support is currently not managed but a Jenkins plugin will be released soon.
{% endwarning %}
