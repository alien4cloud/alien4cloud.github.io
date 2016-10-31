---
layout: post
exclude_from_search: true
title: Topology management
root: ../../
categories: DOCUMENTATION-1.2.0
parent:
  - user_guide
node_name: topology_management
weight: 500
published: true
---



{% summary %}{% endsummary %}

{%info%}
To understand the topology concept, please refer to [this section](#/documentation/1.2.0/concepts/topologies.html).
{%endinfo%}

# Topology template

A topology template allows you to create an application structure which we may use
for a real application root.

You can access to this feature on menu `Topology templates` and start to create
a new template with the topology composer or upload a zip file with your template.

{%inittab%}

{% tabcontent Create a template %}

Create a new topology ![Create template button](../../images/user_guide/user_guide_topology_template_new.png){: .inline} giving at least a
`template name` and if you want a `description`.

{% note %}
This template name will identify your template and must be unique.
{% endnote %}

And then compose your template in this view :

![Topology template composer](../../images/user_guide/user_guide_topology_template_composer.png)

{%endtabcontent%}
{% tabcontent Upload a template %}

Just drag and drop your zipped topology in the upload area :

[![Upload a topology template](../../images/user_guide/user_guide_topology_template.png)](../../images/user_guide/user_guide_topology_template.png)

{%endtabcontent%}

{%endinittab%}

# Topology templates list

Once you have created / uploaded a template you should be able to see it in the template list :

![Topology template list](../../images/user_guide/user_guide_topology_template_list.png)

From now you can use any template when [creating a new application](#/documentation/1.2.0/user_guide/application_management.html). But before that, you might want to  [edit the topology](#/documentation/1.2.0/user_guide/topology_edition.html).
