---
layout: post
title:  Manage versions
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, application_management]
node_name: application_versions
weight: 20
---

Version numbers follows the maven convention i.e < major >.< minor >.< incremental >-< qualifier >. Every version that contains the string `-SNAPSHOT` is recognized as SNAPSHOT. This means that in alien4cloud, just like in maven a version as 1.0.0-SNAPSHOT-ALPHA or 1.0.0-ALPHA-SNAPSHOTfoo is recognized as SNAPSHOT and can be modified. We however recommend you to keep -SNAPSHOT at the end of the version string.

When creating topology variants you will assign a qualifier to the variant. Alien 4 cloud will automatically add the variant qualifier as first qualifier in the variant version string. So if your version is 1.0.0-SNAPSHOT and your variant qualifier is DEV the version number will be 1.0.0-DEV-SNAPSHOT, if the version number was 1.0.0-SNAPSHOT-ALPHA the variant version number will be 1.0.0-DEV-SNAPSHOT-ALPHA etc.

# Configure versions

While alien 4 cloud creates a default version, you will soon have to create new versions for your application. In alien 4 cloud a version can have multiple topologies variant that we call Topology Versions.

To manage Versions and Topology versions you must go to the application version management screen. To do so you must have the *APPLICATION_MANAGER* role for the application (not to be confused with the global *APPLICATIONS_MANAGER* role) or the global *ADMIN* role.

From the application list screen click on the application for which you want to manage versions and then click on the __version button__ ![Versions button](../../images/2.0.0/user_guide/applications/versions_button.png){: height="26px" .inline} in the applications left side-bar menu.

This screen displays all the versions of the application (by default only a single 0.1.0-SNAPSHOT version is created) and for each version the list of it's topology variants and their unique version number.

![Version list (default version)](../../images/2.0.0/user_guide/applications/version_list.png)

## Create new version

You can create a new version by clicking the __New version__ button ![New version](../../images/2.0.0/user_guide/applications/new_version_button.png){: height="26px" .inline}. Once clicked the new version modal will open so you can configure the new version.

* __Version number__: This is the number of the new version to create. It must be unique for this application and must follow the maven (and TOSCA) version pattern.
* __Description__: Optional description for this version.
* __Initialize topology from__: When creating a new version alien 4 cloud allow you to initialize one or multiple topology versions for this application version. The default option is (_Previous version_).

{%inittab%}
{% tabcontent From previous version %}
![Create new version from previous](../../images/2.0.0/user_guide/applications/new_version_modal_previous.png)

This option allow you to duplicate all the topology versions from a previous application version for the new application version.
{%endtabcontent%}

{% tabcontent From Topology template %}
![Create new version from template](../../images/2.0.0/user_guide/applications/new_version_modal_template.png)

When choosing the template creation, only a single application topology version will be created. The associated topology will be based on the selected template.
{%endtabcontent%}

{% tabcontent From scratch %}
![Create new version from scratch](../../images/2.0.0/user_guide/applications/new_version_modal_scratch.png)

When choosed, only a single application topology version will be created. The associated topology will be empty.
{%endtabcontent%}
{%endinittab%}

## Update version
The _description_ field of a version can be updated anytime.  
However it is not the case for the version number. First of all, a __released__ version number __CANNOT BE UPDATED__.   Therefore, make sure your version is a _SNAPSHOT_ one before trying to update.  
The table below sumarize the cases when a version number update can be done:

{: .table .table-bordered}
| State | Description | Updatable |
|:---------|:------------|
| Unused | The version is not yet assigned to an environment | YES |
| Assigned | The version is assigned to an environment and maybe configured for a future deployment. | YES |
| Deployed | The version is assigned to a deployed environment | NO |
| Exposed as Service | The version is assigned to an environment (deployed or not), which is exposed as a service.| NO |

## Delete version

Deletion of a version will remove all topology versions and associated topologies. It can be achieved through the __trash button__ ![Delete version](../../images/2.0.0/user_guide/applications/delete_button.png){: height="26px" .inline} on the same line as the version you want to delete.

## Create new topology version

You can create a new variant topology for an application version by clicking the __plus button__ ![New topology version](../../images/2.0.0/user_guide/applications/new_topo_version_button.png){: height="26px" .inline} on the same line as the version for which to create a topology version/variant. This opens the new topology version modal:

![Create new version from previous version](../../images/2.0.0/user_guide/applications/new_topology_version_previous.png)

* __Qualifier__: Creation of a new topology version requires the configuration of a specific qualifier for this topology version/variant. The generated version number is displayed on the side of the qualifier field.
* __Description__: Optional description for this topology version/variant.
* __Initialize topology from__: When creating a new topology version alien 4 cloud allow you to initialize it's associated topology. The default option (Previous version) allow you to initialize the topology from the one of a single topology version (either from the same version or another version of the application). Of course you can also choose to create the version from a template or from scratch.

## Delete topology version

Deletion of a topology version will also delete it's associated topologies. It can be achieved through the __trash button__ ![Delete version](../../images/2.0.0/user_guide/applications/delete_button.png){: height="26px" .inline} on the same line as the topology version you want to delete.
