---
layout: post
title:  Components catalog
root: ../../
categories: DOCUMENTATION
parent: [user_guide]
node_name: components_repo
weight: 200
---

{% summary %}{% endsummary %}

{%info%}
To understand the components concept, please refer to [this section](#/documentation/1.0.0/concepts/components.html).
{%endinfo%}

# Components catalog

In Alien 4 Cloud you can design your applications by adding multiple components to a topology and defining relationships between them. The definition of components and topologies is based on TOSCA standard. Alien 4 Cloud allow you to add components into the indexed catalog.

{%info%}
For more informations on TOSCA and supported archive format please go [here](#/documentation/1.0.0/devops_guide/tosca_concepts.html).
{%endinfo%}

## Uploading new components

You cannot upload the same archive (same id and version) mutliple times. If you changed an archive, you must increment the version number so you can upload it to Alien.

{%info%}
<h5>Create your own component</h5>
If you want create your own component please go [here](#/documentation/1.0.0/devops_guide/design_tutorial/tutorials.html).
{%endinfo%}

{%warning%}
<h5>Roles and security</h5>
In order to be able to add components to the repository you must have the _COMPONENT_MANAGER_ role. Note that if the archive you wish to upload contains both nodes and relationship types and both a topology template, then you must have both the _COMPONENT_MANAGER_ and _ARCHITECT_ role
{%endwarning%}

There are three ways to upload components descriptions in ALIEN regarding you browser capabilities :

{%inittab%}
{% tabcontent Drag and Drop enabled %}

*Drag* you archive file > *Drop* it on the **dash dotted** area

[![Upload an archive file with D&D](../../images/components_guide/upload-components-en.png)](../../images/components_guide/upload-components-en.png)
{%endtabcontent%}
{% tabcontent Drag and Drop disabled %}

Click on *[Upload CSAR]* > *Select* your archive (The file is automaticly uploaded)

[![Upload an archive file without D&D](../../images/components_guide/upload-components-button-en.png)](../../images/components_guide/upload-components-button-en.png)
{%endtabcontent%}
{%endinittab%}

Once upload has been completed successfully you should be able to see the node types contained in the archive in the components browsing panel.

[![Completed  archive file upload](../../images/components_guide/upload-components-finished-en.png)](../../images/components_guide/upload-components-finished-en.png)

You can now [browse and search for components](#/documentation/1.0.0/user_guide/components/components_search.html).

## Upload issues

Alien 4 Cloud performs validation of your archive agains the TOSCA specification.

The following image shows the upload of an archive with an error :
[![Upload an archive with error](../../images/components_guide/csar-upload-errors.png)](../../images/components_guide/csar-upload-errors.png)

# Components search

Alien4Cloud  provides ways to browse the uploaded components, with a search engine allowing filters.

{% info %}Users with role **COMPONENT_MANAGER** can browse and search for components.{% endinfo %}

[![Component list](../../images/components_guide/components-list-en.png)](../../images/components_guide/components-list-en.png)

## How to make a simple search

On the left of the components list page, there is a search pannel (see figure above: **A**).<br>
For a  simple search, just type the searched text in the seach field and press the magnifier next to it (or press the **Enter** keybord instead). The result of your research will be displayed on the center pannel (see figure above: **B**).

## How to make a filtered search

You might wish to filter your search or results, for there are too many components corresponding to the simple search.
Still on the left search pannel, you can select one or more filters (facets). You can also remove them if they do not fit you.

[![Component facets filters](../../images/components_guide/components-list-search-facets.png)](../../images/components_guide/components-list-search-facets.png)


{% info %}
Note that when more than one filter are selected, Alien4Cloud applies an AND policy.
{% endinfo %}

## Component overview

After the search, you can have an overview of the component. Just move the mouse on one component and you will have the right pannel display its summary:(see figure above: **C**).

[![Component facets filters](../../images/components_guide/components-overview.png)](../../images/components_guide/components-overview.png)

If it is the one you are looking for, or if you want further informations about it, you can now select it and see its details.

[![Component details](../../images/components_guide/component-details.png)](../../images/components_guide/component-details.png)
