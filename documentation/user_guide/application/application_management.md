---
layout: post
title:  Application(s) management
root: ../../
categories: DOCUMENTATION
parent: [user_guide]
node_name: application_management
weight: 400
---

# Create new application

# Configure application roles

## Application's roles

These roles defines actions allowed by *role* on a given application :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_MANAGER | Application manager can manage the application configuration, it's versions and environments as well as user management for the application. |
| APPLICATION_DEVOPS | Dev ops role should be given to the applications developer. In ALIEN users with devops role on an application can edit the topologies of every SNAPSHOT versions. |

In addition to the applications roles, Application manager can specify some roles related to every single environment defined for the application.

# Configure versions

# Configure environments

## Environment's roles

These roles defines actions allowed by *role* on a given environment :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_USER  | An application user on an environment is allowed to see the environment status as well as having access to the deployment output properties (URL for example so he can directly reach the deployed application). |
| DEPLOYMENT_MANAGER   | Deployment manager for an environment is responsible for configuration and deployment/undeployment of an environment. In order to be able to deploy/undeply the environment the user must also have a CLOUD_DEPLOYER role on the cloud that is associated with the environment. CLOUD_DEPLOYER role is configured on the cloud configuration by any user having the global ADMIN role. |
