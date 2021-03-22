---
layout: post
title:  Grant authorizations
root: ../../
categories: DOCUMENTATION-3.2.0
parent: [user_guide, application_management]
node_name: application_roles
weight: 15
---

To grant the authorizations for a platform __ADMIN__ or a user with the __APPLICATION_MANAGER__ role to the given application must go to the target application and click on the ![Applications roles navigation button](../../images/3.2.0/user_guide/applications/app_roles_button.png){: height="26px" .inline} button found in the application main page.

![Application role edition](../../images/3.2.0/user_guide/applications/app_main_page.png)

{%info%}
<h5>Roles information</h5>
The available list of roles for the application or its environment and their definition is available at the bottom of this page.
{%endinfo%}

Some roles are specified for the whole application, for example the __APPLICATION_MANAGER__ role and __APPLICATION_DEVOPS__ (they are allowed to the edition and deployment of topologies) are available for the whole application. Some roles, however, such as the deployment role are specified in each environment.

In order to assign a role to a user, just click on the key button on the user row and assign the role of your choice. you can also assign a role to a user group in the same way by going on the _Groups_ tab.

![Application role edition](../../images/3.2.0/user_guide/applications/app_role_edit.png)

For choosing the roles related to the, just click on the environment dropdown list and select the environment that your need.

![Application role environment switch](../../images/3.2.0/user_guide/applications/app_role_env_choice.png){: style="width: 240px; margin: 0 auto"}

## Application's roles

The following *roles* define the authorized actions which can be executed on a given application :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_MANAGER | Application manager can manage the application configuration, its versions and environments as well as user management for the application. |
| APPLICATION_DEVOPS | Dev ops role should be given to the applications developer. In __ALIEN__ users with devops role on an application can edit the topologies of every SNAPSHOT version. |

## Environment's roles

In addition to the application roles, __Application manager__ can specify some roles related to every single environment defined for the application.

The following *roles* define the authorized actions which can be executed on a given application :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_USER  | An application user on an environment is not only allowed to see the environment status but also has access to the deployment output properties. |
| DEPLOYMENT_MANAGER   | Deployment manager for an environment is responsible for the configuration as well as the deployment/undeployment of an environment. In order to be able to deploy/undeploy an environment, the user need to have also a DEPLOYER role on the location where he wants to deploy. __DEPLOYER__ role is configured on the location configuration by any user who has the global __ADMIN__ role. |
