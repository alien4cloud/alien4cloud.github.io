---
layout: post
title:  Archives (csar)
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_archives
weight: 9
---

{% summary %}{% endsummary %}

The Manage archives tab of the catalog allows to list, add and remove TOSCA archives. Archive content is indexed and accessible through the various types and topology browsing tabs.

# Adding archives

Alien 4 cloud allows to add archives from an archive zip file (csar) upload, through a git import, or by creating a new empty archive in alien4cloud. The topology editor can then be used to create a topology template in this archive.

If you have archive management right, either through COMPONENTS_MANAGER role (add archives with tosca types) or ARCHITECT (add archives with topologies) or both you will see the following archive management pane in the UI:

![Add pane](../../images/2.0.0/user_guide/catalog/archives/add_pane.png)

{%inittab%}
{% tabcontent Create new archive %}

You can create a new empty archive thanks to the ![New archive](../../images/2.0.0/user_guide/catalog/archives/new_archive_button.png){: height="22px" .inline} button.

If the archive creation is successfull, a4c will automatically open the archive editor on an empty topology.
{%endtabcontent%}
{% tabcontent Drag and Drop archive file %}

In order to upload an archive file, just drag and drop the archive from your file browser to the **dash dotted** upload zone.

![Drag and drop upload](../../images/2.0.0/user_guide/catalog/archives/drag_drop_upload.png)

Before uploading an archive, on the premium edition, you can select the workspace in which to index the archive and it's content. In order to do so just select the desired workspace in the list. Note that this list contains only the workspaces on which the user has write access. If the user has a single workspace with write access then no list is displayed.

![Workspace selection](../../images/2.0.0/user_guide/catalog/archives/workspace_selection.png)

{%info%}
<h5>Premium feature</h5>
Workspaces selection is a premium feature, Opensource only supports managing archives in the global workspace.
{%endinfo%}

{%endtabcontent%}
{% tabcontent Import archive(s) from a Git repository %}

Click on ![Git import](../../images/2.0.0/user_guide/catalog/archives/git_import_button.png){: height="22px" .inline} in order to access the git repositories management screen. From this screen users can register git repositories in alien4cloud and trigger import of the git repository content to alien4cloud.

In order to register a new git repository click on ![Git location](../../images/2.0.0/user_guide/catalog/archives/new_git_location_button.png){: height="22px" .inline}. Then fill the information on the modal as specified below.

![New git location modal](../../images/2.0.0/user_guide/catalog/archives/new_git_location_modal.png){: style="width: 600px; margin: 0 auto"}

* __Repository URL__: This is the url of your git repository, for example https://github.com/alien4cloud/samples.git. Note that we support only http(s) urls.
* __Credentials__: The username and password that alien4cloud will use to connect to the github repository.
* __On branch__ / __Archive(s) to import__: List of branches/sub-folders association to locate the TOSCA archive(s) to import from the git repository. The sub-folders is optional and by default alien will locate all archives within the git repository.
* __Save the repository locally__: If false alien4cloud will keep the repository content local, if not the git import process will fetch the repository, process the import in alien4cloud and then remove the local clone of the git repository. If true the repository local clone will not be removed from alien server. Default is false.

{%note%}
Alien4cloud is very flexible on the structure of your git repositories and how you keep archives within. We ourself decided to keep multiple archives within the single samples repository.
This choice is a really specific choice as we tag the samples branch not following the versions of the archives but to the version of alien the samples support.
You may also store multiple archives within a single git repository when all archives are sharing the same version and are packaged together. Note that in that case you have the choice of having a single archive or multiple ones.
The choice here should be focused on usability and merge perspective. The devops guide section contains more information on possible choices and example on how and why you should go for one of them.
{%endnote%}

Once imported you can see the new created git location in the list:

![Trigger an archive from a location](../../images/2.0.0/user_guide/catalog/archives/git_location_list.png)

Click on ![Git location](../../images/2.0.0/user_guide/catalog/archives/git_import_btn.png){: .inline} to trigger the import process. Once completed the import result is displayed with it's state, and eventual errors, warning or info messages.

![Result of an import](../../images/2.0.0/user_guide/catalog/archives/git_import_result.png)
{%endtabcontent%}
{%endinittab%}

## Upload issues

Alien 4 Cloud performs validation of your archive agains the TOSCA specification.

The following image shows the upload of an archive with an error :
![Upload an archive with error](../../images/2.0.0/user_guide/catalog/archives/csar-upload-errors.png)

{%note%}
When deploying on some cloud technologies alien4cloud uses some node template names in the name of the generated ressources (VMs, BlockStorage etc.). Some cloud APIs do not manage special characters as dashes or underscore. In addition some people like to set the hostname based on the name of the node template. Therefore and while this is authorized in TOSCA alien4cloud prevent naming the node template with such characters.

If a node template name contains some special character (is: not an alphanumeric character from the basic Latin alphabet and the underscore) we will automatically replace these characters.
{%endnote%}

# Archives list

The archive list is displayed to all users, workspace management and archive deletion buttons are visible only to users with the right roles (see adding archives section).

![Archive list](../../images/2.0.0/user_guide/catalog/archives/archive_list.png)

You can see a few information from the archive list screen as:

* the name and version of the archive (a name and version couple is unique in alien4cloud)
* the source of the archive (has it been imported from git, included from a plugin, uploaded manually, or is it an application archive)
* the description of the archive if any was provided in the tosca file.
* a brief overview of the archive content, the following icon ![Archive list](../../images/2.0.0/user_guide/catalog/archives/topology_icon.png){: height="22px" .inline} shows if the archive contains a topology template and the following icon ![Archive list](../../images/2.0.0/user_guide/catalog/archives/type_icon.png){: height="22px" .inline} shows that the archive contains some node types (the number of nodes is indicated).

You can perform the following actions from the list:

* Click on an element of the list to go to the archive detail screen.
* Click on ![Download archive](../../images/2.0.0/user_guide/catalog/archives/download_archive.png){: height="22px" .inline} to download the archive as a zip file.
* You can see the workspace that currently contains the archive, and change it by clicking on the following button ![Archive list](../../images/2.0.0/user_guide/catalog/archives/change_workspace.png){: height="22px" .inline} (text and icon of the button depends on the workspace). If you move an archive to a workspace on which you don't have write access, a promotion request will be created. [More on promotion requests](#/documentation/2.0.0/user_guide/catalog_workspaces.html).
* Click on ![Delete](../../images/2.0.0/user_guide/catalog/archives/delete.png){: height="22px" .inline} to delete an archive
