---
layout: post
title: TOSCA
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [concepts]
node_name: concepts-tosca
weight: 500
---


TOSCA specification allows users to specify a cloud application's topology by defining a set of nodes that are connected to other using relationships.

The goal of the TOSCA specification is to focus on a good meta-definition of cloud applications and their components and focus on the following goals:

* Reusability of components
* Interoperability of TOSCA archive through the different TOSCA containers

In order to manage reusability of components and defined recipes, TOSCA allows definition of NodeTypes that specify the available components and eventually their implementation (for example a Java NodeType and the script implementation to install it on a virtual server). The defined NodeTypes can then be reused when a developer or application architect want to define the topology of a cloud application.

# TOSCA Simple Profile in YAML

TOSCA Simple profile in YAML allows definition of TOSCA elements in a YAML format rather than XML. The YAML format is simpler to write and offers some shorter ways to define a TOSCA definition.


# TOSCA in Alien 4 Cloud

In Alien 4 Cloud, TOSCA can be used to define both Types (catalog elements) and Applications topologies (Templates). Alien 4 Cloud tools, like the topology editor, allow you to create Application topologies that can be exported to Tosca Templates.

{% note %}
Alien 4 Cloud supports a slightly modified version of TOSCA Simple Profile in YAML in order to add features that are specific to the Alien 4 Cloud context. However we are able to load pure TOSCA compliant templates and also export topologies as pure TOSCA templates.
{% endnote %}

{% warning %}
The export feature will be available in the next release.
{% endwarning %}

# Cloud Service Archive

Every elements in TOSCA must be contained into a Cloud Service Archive (CSAR). A Cloud Service Archive is a folder or a zip file that contains types and templates definitions and any other files required for elements implementations.

{% highlight bash %}
├── my-definition-file.yml
├── images
│   ├── component-icon.png
│   └── ...
├── scripts
│   └── install.sh
├── lib
│   └── tosca-normative-types.yml
{% endhighlight %}

The entry point for the Cloud Service Archive are the definitions files placed at the root of the Archive. Basically this is any .yaml or .yml file that can be found at the Archive root.

{%info%}
To create your own CSAR, please refer to [this section](#/documentation/3.0.0/devops_guide/tosca_concepts_types_custom.html).
{%endinfo%}

{% warning %}
Alien 4 Cloud currently supports only a single service definitions file at the root level. This definition file can however reference other definitions files within the archive through the imports feature.
{% endwarning %}
