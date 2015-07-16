---
layout: post
title:  Managing components
root: ../../
categories: DOCUMENTATION
parent: [user_guide, components_repo]
node_name: components_upload
weight: 200
---

In Alien 4 Cloud you can design your applications by adding multiple components to a topology and defining relationships between them. The definition of components and topologies is based on TOSCA standard. Alien 4 Cloud allow you to add components into the indexed catalog.

{%note%}
For more informations on TOSCA and supported archive format please go [here](#/documentation/devops_guide/tosca_concepts.html).
{%endnote%}

## Uploading new components

You cannot upload the same archive (same id and version) mutliple times. If you changed an archive, you must increment the version number so you can upload it to Alien.

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
In the Archive's name text field : put the name of the folder containing the yaml file *for example **apache** to import Apache component in the Samples repository*.
You can also leave this text filed empty :**it will import all the folders if its contains a yaml file**.
{%endnote%}

[![Csar view an archive from a location](../../images/components_guide/csar-modal.png)](../../images/components_guide/csar-modal.png)

Now you should be able to see the Csargit created in the tab below

Click on the icon *Import* to trigger the import proces

[![Trigger an archive from a location](../../images/components_guide/csar-tab-view.png)](../../images/components_guide/csar-tab-view.png)

Now you should be able to see the imported Csar in the *Csars added* tab

[![Result of an import](../../images/components_guide/csar-import-result.png)](../../images/components_guide/csar-import-result.png)
{%endtabcontent%}
{%endinittab%}

Once upload has been completed successfully you should be able to see the node types contained in the archive in the components browsing panel.

[![Completed  archive file upload](../../images/components_guide/upload-components-finished-en.png)](../../images/components_guide/upload-components-finished-en.png)

You can now [browse and search for components](#/documentation/user_guide/components/components_search.html).

## Upload issues

Alien 4 Cloud performs validation of your archive agains the TOSCA specification.

The following image shows the upload of an archive with an error :
[![Upload an archive with error](../../images/components_guide/csar-upload-errors.png)](../../images/components_guide/csar-upload-errors.png)
