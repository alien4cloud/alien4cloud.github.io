---
layout: post
title: Components catalog
root: ../../
categories: DOCUMENTATION-1.3.0
parent:
  - user_guide
node_name: components_repo
weight: 200
published: true
---


{% summary %}{% endsummary %}

{%info%}
To understand the components concept, please refer to [this section](#/documentation/1.3.0/concepts/components.html).
{%endinfo%}

# Components catalog

In Alien 4 Cloud you can design your applications by adding multiple components to a topology and defining relationships between them. The definition of components and topologies is based on TOSCA standard. Alien 4 Cloud allow you to add components into the indexed catalog.

{%info%}
For more informations on TOSCA and supported archive format please go [here](#/documentation/1.3.0/devops_guide/tosca_concepts.html).
{%endinfo%}




# Repositories

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

An repository artifact is way to used a remote artifact. In the components view you can define new repositories artifact configuration. This configuration offer you the possibily to add credentials for your artifact resolver (who is in charge to fetch your remote artifact). Note : the repository can directly define on the CSARs definition, you can found more informations [here](#/documentation/1.3.0/devops_guide/tosca_grammar/repository_definition.html).
