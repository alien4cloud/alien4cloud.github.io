---
layout: post
exclude_from_search: true
title: Components catalog
root: ../../
categories: DOCUMENTATION-1.2.0
parent:
  - user_guide
node_name: components_repo
weight: 200
published: true
---


{% summary %}{% endsummary %}

{%info%}
To understand the components concept, please refer to [this section](#/documentation/1.2.0/concepts/components.html).
{%endinfo%}

# Components catalog

In Alien 4 Cloud you can design your applications by adding multiple components to a topology and defining relationships between them. The definition of components and topologies is based on TOSCA standard. Alien 4 Cloud allow you to add components into the indexed catalog.

{%info%}
For more informations on TOSCA and supported archive format please go [here](#/documentation/1.2.0/devops_guide/tosca_concepts.html).
{%endinfo%}

## Uploading new components

You cannot upload the same archive (same id and version) mutliple times. If you changed an archive, you must increment the version number so you can upload it to Alien.

{%info%}
<h5>Create your own component</h5>
If you want create your own component please go [here](#/documentation/1.2.0/devops_guide/design_tutorial/tutorials.html).
{%endinfo%}

{%warning%}
<h5>Roles and security</h5>
In order to be able to add components to the repository you must have the _COMPONENT_MANAGER_ role. Note that if the archive you wish to upload contains both nodes and relationship types and both a topology template, then you must have both the _COMPONENT_MANAGER_ and _ARCHITECT_ role
{%endwarning%}
{%warning%}
<h5>Uploading a new version of a component</h5>
The updating of a component within a topology is not taken into account yet. When you load a new version of a component which is currently in use in a topology, you should edit this topology to delete/re-add this component or re-import the topology (if you exported it to yaml format).
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

{% tabcontent Import from a Git location %}

{%warning%}
<h5>Git repository hierarchie</h5>
In order to be able to import components properly, this feature required a folder organisation based on TOSCA recommendation
For example, if you want to import one of the Samples repository, the folder to import musn't contains a Yaml file at its root.
*See apache archive for examples  [Github apache example](https://github.com/alien4cloud/samples/tree/master/apache).*
If the folder is based on an older TOSCA recommandation, please ensure you have a folder named TOSCA-Metadata and the YAML file to import in another folder
*See recipes archive for examples [Gitblit recipes example](https://fastconnect.org/gitblit/git/alien-tosca-recipes/recipes.git).*
{%endwarning%}


*Click* on create new CSAR > *Fill* the modal and click on **New CSAR**.

[![Create an archive from a git location](../../images/components_guide/csar-list-view.png)](../../images/components_guide/csar-list-view.png)

Fill the modal by typing expected values and click on *create*.

{%note%}
In the Archive's folder text field : put the name of the folder containing the yaml file *for example **apache** to import Apache component in the Samples repository*.
You can also leave this text filed empty (under no circumstance put an * ) : **it will import all the folders if its contains a yaml file**.
Credentials text fields can be used to access private repository.
Click on *Save the repository locally* if you want the repository to be stored on your computer, this will enable the versionning manager on it.
{%endnote%}

[![Csar view an archive from a location](../../images/components_guide/csar-modal-v2.png)](../../images/components_guide/csar-modal-v2.png)

Now you should be able to see the Csargit created in the tab below

Click on the icon *Import* to trigger the import process

[![Trigger an archive from a location](../../images/components_guide/csar-tab-view.png)](../../images/components_guide/csar-tab-view.png)

Now you should be able to see the imported Csar in the *Csars added* tab and the related import result in the tab below.

[![Result of an import](../../images/components_guide/csar-import-resultV2.png)](../../images/components_guide/csar-import-resultV2.png)
{%endtabcontent%}
{%endinittab%}

Once upload has been completed successfully you should be able to see the node types contained in the archive in the components browsing panel.

[![Completed  archive file upload](../../images/components_guide/upload-components-finished-en.png)](../../images/components_guide/upload-components-finished-en.png)

You can now [browse and search for components](#/documentation/1.2.0/user_guide/components/components_search.html).

## Upload issues

Alien 4 Cloud performs validation of your archive agains the TOSCA specification.

The following image shows the upload of an archive with an error :
[![Upload an archive with error](../../images/components_guide/csar-upload-errors.png)](../../images/components_guide/csar-upload-errors.png)

If a node template name contains some special character (is: not an alphanumeric character from the basic Latin alphabet and the underscore) we will replace this caractere by an underscore.

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
