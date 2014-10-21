---
layout: post
title:  Role in Alien 4 Cloud
categories: DOCUMENTATION
root: ../../
parent: []
node_name: roles
weight: 200
---

This section details Alien 4 Cloud's *ROLES* and *permissions* by role.

# General Alien 4 Cloud roles

This role list describes basic roles you can grant to a user. From his/her roles Alien 4 Cloud will display and
allow some operations. For example, the navigation bar on top is configured regarding the user roles :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| ADMIN                | Manages users, plugins, configure clouds + all other roles. |
| APPLICATIONS_MANAGER | Create new application(s). |
| ARCHITECT            | Create and edit topology template(s). |
| COMPONENTS_BROWSER   | Can list components and see details for any of them |
| COMPONENTS_MANAGER   | *COMPONENTS_BROWSER* rights + upload a CSAR archive to add components  |

{% info %}
A user with no roles can log-in and view the resources for which he has been granted. For example a user with no roles but being listed as user in an application, can look at this application and do any operations he is authorized to perform for the application.
{% endinfo %}

# Application's roles

This role list defines actions allowed by *role* on a given application :

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| APPLICATION_MANAGER  | Almost all operations on his proper application. By default an application manager will also have  *deploy* / *undeploy* right
| APPLICATION_USER  | Basic access like read (see details), search and get application's status |
| APPLICATION_DEVOPS   | *APPLICATION_USER* rights + topology handling |
| DEPLOYMENT_MANAGER   | Mainly  *deploy* / *undeploy* an application and basic access to a topology |

## Application's rights grid (**A**)

{: .table .table-bordered}
| | APPLICATION_MANAGER | APPLICATION_USER | APPLICATION_DEVOPS | DEPLOYMENT_MANAGER |
|:---------|:------------|:------------|:------------|:------------|:------------|
| **create** |  |  |  |  |
| **read** | X | X | X | X |
| **search** | X | X | X | X |
| **delete** | X |  |  |  |
| **updateImage** | X |  |  |  |
| **upsertTag** | X |  |  |  |
| **deleteTag** | X |  |  |  |
| **deploy** | | | | X |
| **undeploy** | | | | X |
| **getDeploymentStatus** | X | X | X | X |
| **addApplicationUserRole** | X |  |  |  |
| **removeApplicationUserRole** | X |  |  |  |
|:---------|:---------|:------------|:------------|:------------|:------------|

## Topologies's rights grid (**T**)

{: .table .table-bordered}
| | APPLICATION_MANAGER | APPLICATION_USER | APPLICATION_DEVOPS | DEPLOYMENT_MANAGER |
|:---------|:------------|:------------|:------------|:------------|:------------|
| **create** | X |  |  |  |
| **get** | X |  | X | X |
| **addNodeTemplate** | X |  | X |  |
| **updateNodeTemplateName** | X |  | X |  |
| **addRelationshipTemplate** | X |  | X |  |
| **deleteNodeTemplate** | X |  | X |  |
| **updatePropertyValue** | X |  | X |  |
| **isDeployable** | X |  |  | X |

## Operations list

A. Application's operations

1. **create** : Create a new application in the system
2. **read** : Get an application based from its id
3. **search** : Search for applications
4. **delete** : Delete an application from its id
5. **updateImage** : Application's image update
6. **upsertTag** : Update/Create a tag for the application
7. **deleteTag** : Delete a tag for the application
8. **deploy** : Deploys the application on the configured PaaS
9. **undeploy** : Un-Deploys the application on the configured PaaS.
10. **getDeploymentStatus** : Get the current status of the application on the PaaS
11. **addApplicationUserRole** : Add a role to a user on a specific application
12. **removeApplicationUserRole** : Remove a role to a user on a specific application

T. Topologies's operations

1. **create** :  Create a new empty topology
2. **get** : Retrieve a topology from its id
3. **addNodeTemplate** : Add a new node template in a topology
4. **updateNodeTemplateName** : Change the name of a node template in a topology
5. **addRelationshipTemplate** :  Add a relationship to a node template
6. **deleteNodeTemplate** : Delete a node tempalte from a topology
7. **updatePropertyValue** : Update properties values
8. **isDeployable** : Check if a topology is deployable or not
