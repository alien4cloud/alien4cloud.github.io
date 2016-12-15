---
layout: post
title: Substitution
root: ../../..
categories: DOCUMENTATION-1.3.0
parent: [user_guide, topology_editor]
node_name: topology_editor_substitution
weight: 190
---

Topology substitution is a very powerful TOSCA concept that allows you to consider a full or partial topology as a single reusable type. For example you can model a very complex Hadoop cluster as a single reusable node thanks to substitution, so that other people can use a fine grained and tuned Hadoop installation without even knowing of all the complexity of the underlining system.

# Topology substitution / composition

A topology template can be used in another template as a type. Topology substitution can make existing topology template re-useable. In order to do this, you must:

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
