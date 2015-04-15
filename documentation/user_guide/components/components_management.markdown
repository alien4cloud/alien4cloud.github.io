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
For more informations on TOSCA and supported archive format please go [here]().
{%endnote%}

## Uploading new components

You cannot upload the same archive (same id and version) mutliple times. If you changed an archive, you must increment the version number so you can upload it to Alien.

{%warning%}
<h5>Roles and security</h5>
In order to be able to add components to the repository you must have the _COMPONENT_MANAGER_ role. Note that if the archive you wish to upload contains both nodes and relationship types and both a topology template, then you must have both the _COMPONENT_MANAGER_ and _ARCHITECT_ role
{%endwarning%}

There are two ways to upload components descriptions in ALIEN regarding you browser capabilities :

{%inittab%}
{% tabcontent Drag and Drop enabled %}

*Drag* you archile file > *Drop* it on the **dash dotted** area

[![Upload an archive file with D&D](../../images/components_guide/upload-components-en.png)](../../images/components_guide/upload-components-en.png)
{%endtabcontent%}
{% tabcontent Drag and Drop disabled %}

Click on *[Upload CSAR]* > *Select* your archive (The file is automaticly uploaded)

[![Upload an archive file without D&D](../../images/components_guide/upload-components-button-en.png)](../../images/components_guide/upload-components-button-en.png)
{%endtabcontent%}
{%endinittab%}

Once upload has been completed successfully you should be able to see the node types contained in the archive in the components browsing panel.

[![Completed  archive file upload](../../images/components_guide/upload-components-finished-en.png)](../../images/components_guide/upload-components-finished-en.png)

You can now [browse and search for components](#/documentation/user_guide/components/components_search.html).

## Upload issues

Alien 4 Cloud performs validation of your archive agains the TOSCA specification.

TODO show example of upload errors.
