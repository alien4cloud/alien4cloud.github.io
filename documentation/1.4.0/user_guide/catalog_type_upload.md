---
layout: post
title: Components/types upload
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_type_upload
weight: 100
---

You cannot upload the same archive (same id and version) mutliple times. If you changed an archive, you must increment the version number so you can upload it to Alien.

{%info%}
<h5>Create your own component</h5>
You can find more information on TOSCA and how you can write new types in TOSCA archives [here](#/documentation/1.4.0/devops_guide/dev_ops_guide.html).
{%endinfo%}

There are multiple ways to upload components in alien4cloud for evey one of them you must first go to the ![components](../../images/1.4.0/user_guide/catalog/types/menu_components_main.png){: .inline} section of the main menu.

{%inittab%}
{% tabcontent Drag and Drop enabled %}

*Drag* you archive file > *Drop* it on the **dash dotted** area

[![Upload an archive file with D&D](../../images/1.4.0/user_guide/catalog/types/types_upload.png)](../../images/1.4.0/user_guide/catalog/types/types_upload.png)

Once upload has been completed successfully you should be able to see the node types contained in the archive in the components browsing panel.

[![Completed  archive file upload](../../images/1.4.0/user_guide/catalog/types/upload_success.png)](../../images/1.4.0/user_guide/catalog/types/upload_success.png)
{%endtabcontent%}
{% tabcontent Drag and Drop disabled %}

Click on *[Upload CSAR]* > *Select* your archive (The file is automaticly uploaded)

[![Upload an archive file without D&D](../../images/components_guide/upload-components-button-en.png)](../../images/components_guide/upload-components-button-en.png)

Once upload has been completed successfully you should be able to see the node types contained in the archive in the components browsing panel.

[![Completed  archive file upload](../../images/components_guide/upload-components-finished-en.png)](../../images/components_guide/upload-components-finished-en.png)
{%endtabcontent%}

{% tabcontent Import from a Git location %}

Alien4cloud allow you to import components from git repositories. Users with _COMPONENT_MANAGER_ role can, from the component section, access the git repository synchronization section by clicking on the left menu ![git icon](../../images/1.4.0/user_guide/catalog/types/menu_git.png){: height="26px" .inline}.



The git repositories management screen allow you to register a git repository to import and trigger the import. In order to register a new git repository click on the ![Git location](../../images/1.4.0/user_guide/catalog/types/new_git_location.png){: height="26px" .inline} button. Then fill the information on the modal as specified below.

[![New git location modal](../../images/1.4.0/user_guide/catalog/types/new_git_location_modal.png){: style="width: 600px; margin: 0 auto"}](../../images/1.4.0/user_guide/catalog/types/new_git_location_modal.png)

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

[![Trigger an archive from a location](../../images/1.4.0/user_guide/catalog/types/component_git_location_list.png)](../../images/1.4.0/user_guide/catalog/types/component_git_location_list.png)

Click on ![Git location](../../images/1.4.0/user_guide/catalog/types/git_import_btn.png){: .inline} to trigger the import process. Once completed the import result is displayed with it's state, and eventual errors, warning or info messages.

[![Result of an import](../../images/1.4.0/user_guide/catalog/types/git_import_result.png)](../../images/1.4.0/user_guide/catalog/types/git_import_result.png)
{%endtabcontent%}
{%endinittab%}

You can now [browse and search for components](#/documentation/1.4.0/user_guide/catalog_type_search.html).

{%warning%}
<h5>Roles and security</h5>
In order to be able to add components to the repository you must have the _COMPONENT_MANAGER_ role. Note that if the archive you wish to upload contains both tosca types (node types, relationship types etc.) and both a topology template, then you must have both the _COMPONENT_MANAGER_ (for type upload) and _ARCHITECT_ (for template upload) role. Note that
{%endwarning%}

## Upload issues

Alien 4 Cloud performs validation of your archive agains the TOSCA specification.

The following image shows the upload of an archive with an error :
[![Upload an archive with error](../../images/1.4.0/user_guide/catalog/types//csar-upload-errors.png)](../../images/1.4.0/user_guide/catalog/types//csar-upload-errors.png)

{%note%}
When deploying on some cloud technologies alien4cloud uses some node template names in the name of the generated ressources (VMs, BlockStorage etc.). Some cloud APIs do not manage special characters as dashes or underscore. In addition some people like to set the hostname based on the name of the node template. Therefore and while this is authorized in TOSCA alien4cloud prevent naming the node template with such characters.

If a node template name contains some special character (is: not an alphanumeric character from the basic Latin alphabet and the underscore) we will automatically replace these characters.
{%endnote%}
