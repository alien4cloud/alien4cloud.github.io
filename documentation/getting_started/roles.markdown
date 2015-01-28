---
layout: post
title:  Roles in Alien 4 Cloud
categories: DOCUMENTATION
root: ../../
parent: [getting_started]
node_name: roles
weight: 300
---

This section details Alien 4 Cloud's *ROLES* and *permissions* by role.

# General Alien 4 Cloud roles

These roles describes global roles you can grant to a user. From his/her roles Alien 4 Cloud will display and allow some operations.

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| ADMIN                | Manages users, plugins, configure clouds + all other roles. |
| APPLICATIONS_MANAGER | Create new application(s). |
| ARCHITECT            | Create and edit topology template(s). |
| COMPONENTS_BROWSER   | [Deprecated] Not used anymore for validation. Can list components and see details for any of them |
| COMPONENTS_MANAGER   | Manage TOSCA cloud service archives to add/remove components from the catalog. |

{% info %}
A user with no roles can log-in and view the resources for which he has been granted. For example a user with no global roles can still access and manage applications on which he has _resources_ roles (see application and environments roles).
{% endinfo %}

# Application's roles

These roles defines actions allowed by *role* on a given application :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_MANAGER | Application manager can manage the application configuration, it's versions and environments as well as user management for the application. |
| APPLICATION_DEVOPS | Dev ops role should be given to the applications developer. In ALIEN users with devops role on an application can edit the topologies of every SNAPSHOT versions. |

In addition to the applications roles, Application manager can specify some roles related to every single environment defined for the application.

# Environment's roles

These roles defines actions allowed by *role* on a given environment :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_USER  | An application user on an environment is allowed to see the environment status as well as having access to the deployment output properties (URL for example so he can directly reach the deployed application). |
| DEPLOYMENT_MANAGER   | Deployment manager for an environment is responsible for configuration and deployment/undeployment of an environment. In order to be able to deploy/undeply the environment the user must also have a CLOUD_DEPLOYER role on the cloud that is associated with the environment. CLOUD_DEPLOYER role is configured on the cloud configuration by any user having the global ADMIN role. |
