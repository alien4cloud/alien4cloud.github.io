---
layout: post
title:  Grant authorizations
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide, application_management]
node_name: application_roles
weight: 15
---

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
