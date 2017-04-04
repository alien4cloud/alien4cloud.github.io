---
layout: post
title:  Application(s) management
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide]
node_name: application_management
weight: 490
---

{% summary %}{% endsummary %}

{%info%}
To understand the application concept, please refer to [this section](#/documentation/1.4.0/concepts/applications.html).
{%endinfo%}

The application section is accessed through the __applications__ button in the main navigation bar ![Applications navigation button](../../images/1.4.0/user_guide/applications/app_menu.png){: .inline}{:height="20px"}.

# Create new application

Creation of a new application requires the *APPLICATIONS_MANAGER* or *ADMIN* global rôle. Users with the right roles should see the __New Application__ button ![New Application](../../images/1.4.0/user_guide/applications/new_app_button.png){: .inline}{:height="20px"}.

Click on the __New Application__ button opens a modal that prompt the user for some fields:

![Create new application](../../images/1.4.0/user_guide/applications/new_app_modal_scratch.png)

* __Name__: This is the name of application as displayed in alien 4 cloud. It is required and should be meaningful for users. The name of an application must also be unique in alien 4 cloud. The name of an application can also be changed later when editing the application.
* __Archive name (Id)__: This is the unique identifier of the application In alien 4 cloud an application will have TOSCA topologies to describe what to deploy and how to deploy it. Every TOSCA topology has a matching TOSCA archive with an unique archive name and archive version. The id of an application in alien 4 cloud is also the name of the TOSCA archive. Note that this name must be unique.
* __Description__: Description is optional and will be displayed to users in the application list.
* __Initialize topology from__: When creating a new application alien 4 cloud will create a default Environment and a default Version. The default version will have an associated default Topology version. It is possible to create a new blank topology (scratch - screenshot above) or to look for an available topology template in the catalog (see screenshot below).

![Create new application](../../images/1.4.0/user_guide/applications/new_app_modal_template.png)

{%warning%}
<h5>Template and workspace limitation</h5>
It is not yet possible to create an application from a template that is not in the public global workspace. The reason is that once created to the application the topology should have visibility to all components used in this templates so basically in any dependent archive (that may also be restricted to the private workspace).
We don't yet support the request for promotions of the dependencies of a template that uses private archives and decided to disable the ability to create applications from private templates. This behavior will be improved in future versions.
{%endwarning%}

# Configure versions

While alien 4 cloud creates a default version, you will soon have to create new versions for your application. In alien 4 cloud a version can have multiple topologies variant that we call Topology Versions.

To manage Versions and Topology versions you must go to the application version management screen. To do so you must have the *APPLICATION_MANAGER* role for the application (not to be confused with the global *APPLICATIONS_MANAGER* role) or the global *ADMIN* role.

From the application list screen click on the application for which you want to manage versions and then click on the __version button__ ![Versions button](../../images/1.4.0/user_guide/applications/versions_button.png){: .inline}{:height="20px"} in the applications left side-bar menu.

This screen displays all the versions of the application (by default only a single 0.1.0-SNAPSHOT version is created) and for each version the list of it's topology variants and their unique version number.

![Version list (default version)](../../images/1.4.0/user_guide/applications/version_list.png)

## Create new version

You can create a new version by clicking the __New version__ button ![New version](../../images/1.4.0/user_guide/applications/new_version_button.png){: .inline}{:height="20px"}. Once clicked the new version modal will open so you can configure the new version.

![Create new version from previous](../../images/1.4.0/user_guide/applications/new_version_modal_previous.png)

* __Version number__: This is the number of the new version to create. It must be unique for this application and must follow the maven (and TOSCA) version pattern.
* __Description__: Optional description for this version.
* __Initialize topology from__: When creating a new version alien 4 cloud allow you to initialize one or multiple topology versions for this application version. The default option (Previous version) allow you to duplicate all the topology versions from a previous application version for the new application version. Other options are described below.

![Create new version from template](../../images/1.4.0/user_guide/applications/new_version_modal_template.png)

When choosing the template creation only a single application topology version will be created. The associated topology will be based on the selected template.

![Create new version from scratch](../../images/1.4.0/user_guide/applications/new_version_modal_scratch.png)

When choosing the template creation only a single application topology version will be created. The associated topology will be empty.

## Delete version

Deletion of a version will remove all topology versions and associated topologies. It can be achieved through the __trash button__ ![Delete version](../../images/1.4.0/user_guide/applications/delete_button.png){: .inline}{:height="20px"} on the same line as the version you want to delete.

## Create new topology version

You can create a new variant topology for an application version by clicking the __plus button__ ![New topology version](../../images/1.4.0/user_guide/applications/new_topo_version_button.png){: .inline}{:height="20px"} on the same line as the version for which to create a topology version/variant. This opens the new topology version modal:

![Create new version from previous version](../../images/1.4.0/user_guide/applications/new_topology_version_previous.png)

* __Qualifier__: Creation of a new topology version requires the configuration of a specific qualifier for this topology version/variant. The generated version number is displayed on the side of the qualifier field.
* __Description__: Optional description for this topology version/variant.
* __Initialize topology from__: When creating a new topology version alien 4 cloud allow you to initialize it's associated topology. The default option (Previous version) allow you to initialize the topology from the one of a single topology version (either from the same version or another version of the application). Of course you can also choose to create the version from a template or from scratch.

## Delete topology version

Deletion of a topology version will also delete it's associated topologies. It can be achieved through the __trash button__ ![Delete version](../../images/1.4.0/user_guide/applications/delete_button.png){: .inline}{:height="20px"} on the same line as the topology version you want to delete.

# Configure environments

In the *environment* management page you can create, edit or delete an environment. The version and the cloud are the most important informations.

{%warning%}
An environment cannot be deleted when it's application is still deploy.
{%endwarning%}

[![Environments management page](../../images/user_guide/application/application-environment-management.png)](../../images/user_guide/application/application-environment-management.png)


# Manage roles

## Application's roles

These roles defines actions allowed by *role* on a given application :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_MANAGER | Application manager can manage the application configuration, it's versions and environments as well as user management for the application. |
| APPLICATION_DEVOPS | Dev ops role should be given to the applications developer. In ALIEN users with devops role on an application can edit the topologies of every SNAPSHOT versions. |

In addition to the applications roles, Application manager can specify some roles related to every single environment defined for the application.

## Environment's roles

These roles defines actions allowed by *role* on a given environment :  

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_USER  | An application user on an environment is allowed to see the environment status as well as having access to the deployment output properties. |
| DEPLOYMENT_MANAGER   | Deployment manager for an environment is responsible for configuration and deployment/undeployment of an environment. In order to be able to deploy/undeploy the environment the user must also have a DEPLOYER role on the location on which he wants to deploy. DEPLOYER role is configured on the location configuration by any user having the global ADMIN role. |
