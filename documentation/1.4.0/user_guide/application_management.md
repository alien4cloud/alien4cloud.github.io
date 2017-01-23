---
layout: post
title:  Application(s) management
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [user_guide]
node_name: application_management
weight: 490
---

{% summary %}{% endsummary %}

{%info%}
To understand the application concept, please refer to [this section](#/documentation/1.3.0/concepts/applications.html).
{%endinfo%}

# Create new application

To create an application, go in the *application* list page and click on the *New application*
button. You can directly create an application from a topology template if you have one.

[![Create new application](../../images/user_guide/application/create-new-application.png)](../../images/user_guide/application/create-new-application.png)

# Configure versions

In the *version* page you can create, edit or delete a version. As we already say in the application concept page, if you remove the 'SNAPSHOT' qualifier, your version will be released and the associated topology not editable.

[![Versions management page](../../images/user_guide/application/application-version-management.png)](../../images/user_guide/application/application-version-management.png)

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
