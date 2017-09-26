---
layout: post
title:  Grant authorizations
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, application_management]
node_name: application_roles
weight: 15
---

To Grant authorizations a platform __ADMIN__ or a user with the __APPLICATION_MANAGER__ role for the given application must go to the target application and click on the ![Applications roles navigation button](../../images/2.0.0/user_guide/applications/app_roles_menu.png){: height="26px" .inline} button of the left menu bar.

{%info%}
<h5>Roles information</h5>
The list of roles available for the application or it's environment and their explaination is available at the bottom of this page.
{%endinfo%}

Some roles are specified for the whole application, for example the APPLICATION_MANAGER role and APPLICATION_DEVOPS (that allow edition of the topologies to deploy) are available for the whole application. Some roles however like the deployment role are specified per environment.

In order to assign a rôle to a user just click on the key button on the user row and assign the role of your choice. you can also assign a rôle to a user group in the same way by going on the _Goups_ tab.

![Application role edition](../../images/2.0.0/user_guide/applications/app_role_edit.png)

For environment related roles just click on the environment choice dropdown and select the environment of your choice.

![Application role environment switch](../../images/2.0.0/user_guide/applications/app_role_env_choice.png){: style="width: 240px; margin: 0 auto"}

## Application's roles

These roles defines actions allowed by *role* on a given application :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_MANAGER | Application manager can manage the application configuration, it's versions and environments as well as user management for the application. |
| APPLICATION_DEVOPS | Dev ops role should be given to the applications developer. In ALIEN users with devops role on an application can edit the topologies of every SNAPSHOT versions. |

## Environment's roles

In addition to the applications roles, Application manager can specify some roles related to every single environment defined for the application.

These roles defines actions allowed by *role* on a given environment :  

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_USER  | An application user on an environment is allowed to see the environment status as well as having access to the deployment output properties. |
| DEPLOYMENT_MANAGER   | Deployment manager for an environment is responsible for configuration and deployment/undeployment of an environment. In order to be able to deploy/undeploy the environment the user must also have a DEPLOYER role on the location on which he wants to deploy. DEPLOYER role is configured on the location configuration by any user having the global ADMIN role. |
