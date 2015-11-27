---
layout: post
title: Topology management
root: ../../
categories: "DOCUMENTATION-1.1.0"
parent:
  - user_guide
node_name: topology_management
weight: 300
published: true
---


{% summary %}{% endsummary %}

{%info%}
To understand the topology concept, please refer to [this section](#/documentation/1.1.0/concepts/topologies.html).
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

From now you can use any template when [creating a new application](#/documentation/1.1.0/user_guide/application/application_management.html).

# Topology substitution / composition

A topology template can also be used in another template as a type. Topology substitution can make existing topology template re-useable. In order to do this, you must:
- Create a type that is inherited from your topology template.

For example, you have a topology template of an Apache server hosted on a compute as shown in this view. If you want to use this template as a type, you need to click `subsitution` panel, which is over the bottom-right corner in topology composer view.
[![Apache topology template](../../images/user_guide/user_guide_apache_topology_template.png)](../../images/user_guide/user_guide_apache_topology_template.png){:target="_blank"}

- Choose the capabilities/requirements you want to expose.

After clicking `Subsitutions` panel, you can type `tosca.nodes.Root` in search bar in the panel. It will create empty `Capabilities` and `Requirements` fields. Then, you can select the components whose capabilities/requirements you want to expose. By clicking the `Expose` button next to capabilities/requirements element of the selected component, you can expose these capabilities/requirements, which will become the capabilities and requirements of the composed new type.
[![Expose capabilities and requirements](../../images/user_guide/user_guide_expose_capa_substitution.png)](../../images/user_guide/user_guide_expose_capa_substitution.png){:target="_blank"}

- Eventually define inputs and outputs that will become respectively properties and attributes for the created type.

The inputs of your topology template will become properties of the composed type, and what you choose as outputs will be attributes of the new type.

The created type is named like the template and is usable in another template or an application topology. It's content will be wired at runtime stage.


# Topology version

In the *topology version* page you can create, edit or delete a version. As we already say in the application concept page, if you remove the ‘SNAPSHOT’ qualifier, your topology will be not editable.

[![*Topology version](../../images/user_guide/topology_version.png)](../../images/user_guide/topology_version.png){:target="_blank"}
