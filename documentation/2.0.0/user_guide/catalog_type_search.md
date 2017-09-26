---
layout: post
title: Components/types search
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_type_search
weight: 110
---

Alien4Cloud  provides ways to browse the uploaded components, with a search engine allowing filters.

{%warning%}
<h5>Roles and security</h5>
In order to be able to search the repository you must have the _COMPONENT_BROWSER_ role.
{%endwarning%}

[![Component list](../../images/2.0.0/user_guide/catalog/types/catalog_overview.png)](../../images/2.0.0/user_guide/catalog/types/catalog_overview.png)

## How to make a simple search

On the left of the components list page, there is a search pannel.<br>
For a  simple search, just type the searched text in the seach field and press the magnifier next to it (or press the **Enter** keybord instead). The result of your research will be displayed on the center pannel.

## How to make a filtered search

You might wish to filter your search or results, for there are too many components corresponding to the simple search.
Still on the left search pannel, you can select one or more filters (facets). You can also remove them if they do not fit you.

[![Component facets filters](../../images/components_guide/components-list-search-facets.png)](../../images/components_guide/components-list-search-facets.png)


{% info %}
Note that when more than one filter are selected, Alien4Cloud applies an AND policy.
{% endinfo %}

## Component overview

In order to see components details (description, inheritance, properties, capabilities, requirements, attributes etc.) you can just click on it and the following screen will be displayed:

[![Component details](../../images/2.0.0/user_guide/catalog/types/component_details.png)](../../images/2.0.0/user_guide/catalog/types/component_details.png)
