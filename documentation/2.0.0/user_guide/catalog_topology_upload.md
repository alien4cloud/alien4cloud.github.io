---
layout: post
title: Topology upload
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_topology_upload
weight: 200
---

{%info%}
To understand the topology concept, please refer to [this section](#/documentation/2.0.0/concepts/topologies.html).
{%endinfo%}

# Topology template

A topology template allows you to create an application structure which we may use
for a real application root.

You can access to this feature on menu `Topology templates` and start to create
a new template with the topology composer or upload a zip file with your template.

{%inittab%}

{% tabcontent Create a template %}

Click on ![Create template button](../../images/user_guide/user_guide_topology_template_new.png){: .inline} and fill in the form.

![Topology template composer](../../images/2.0.0/user_guide/create_topo_template_modal.png)

{% note %}
This template name will identify your template and must be unique.
{% endnote %}

And then compose your template in this view :

![Topology template composer](../../images/2.0.0/user_guide/topology_template_editor.png)

{%endtabcontent%}
{% tabcontent Upload a template %}

Just drag and drop your zipped topology in the upload area :

[![Upload a topology template](../../images/user_guide/user_guide_topology_template.png)](../../images/user_guide/user_guide_topology_template.png)

{%endtabcontent%}

{%endinittab%}
