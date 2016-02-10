---
layout: post
title:  Application(s) management
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [user_guide]
node_name: application_management
weight: 400
---

{% summary %}{% endsummary %}

{%info%}
To understand the application concept, please refer to [this section](#/documentation/1.1.0/concepts/applications.html).
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

# Advanced inputs

This section describe how you can use internal variables defined in __location__ or __application__. Those parameters
could be used as inputs for node template's or capabilities' properties.

Our target for this feature is to allow internal prefixes to target meta-properties over different elements :


{: .table .table-bordered}
| Targeted element | Internal prefix | Description |
|:------------|:-----------|:------------|
|*location*      | `loc_meta_`| Target *meta-properties* defined on a location |
|*application*| `app_meta_` , `app_tags_` | Target *meta-properties* or *tags* defined on an application |

## Define a property as an internal input

When you define a topology, you may want to define some node properties as inputs. An input is
by default a value required to the user in order complete the topology and deploy.

![Compute properties](../../images/user_guide/user_guide_topology_template_properties.png)<br>

You can define any property as input and then set its value in the deployment page or indicate
that the input is bound to an internal variable defined on a *location* or the *application* for example.The name syntax of an internal input is:  

`<INTERNAL_PREFIX><TARGET_PROPERTY>`  

where *TARGET_PROPERTY* can be a tag's or a meta property's name.

For example, let's say that we want to use one of the meta properties defined on our application : **target_client**
First, we set the wanted property as an input. This will leads to the creation of a new input named after the property's name.  
Then we have to rename the created input following the above syntax, and using the application meta prefix: `app_meta_`**target_client**

![Properties input on application metaproperties](../../images/user_guide/user_guide_topology_template_properties_input.png)<br>

If you have some tags or meta-properties defined on your location, same syntax :

- `loc_meta_`**MYAPP_META1**
- `loc_meta_`**MYAPP_META2**
- `app_tags_`**MYAPP_TAG1**
- `app_tags_`**MYAPP_TAG2**

{%warning%}
<h5>Meta property naming</h5>
**Note :** avoid dot `.` character in you meta-property name (e.g. my.meta.1)
<h5>Missing values</h5>
We have two possible cases regarding an input and the targeted meta-property :

- **requirted** property : if the provided value doesn't exist as input the property will stay marked as __missing__ and the topology not deployable
- **optional** property : if the provided value doesn't exist you will have a `warning` but the deployment will still be possible
{%endwarning%}

In fact, the deployment steps will help you handle *warnings* and *tasks* for a good deployment setup.

# Deploy your application

To deploy an application you need to setup the context, you can do this in the `Applications > Deployments` sub-menu.  
The deployment setup is done by going through a number of hierarchical steps.
Each step perform a validation of the deployment topology, and errors details are displayed. Note that you can not go to the next step  when the current one is still not valid.

## Location selection
 The first thing to do is to select, among the displayed location, the one on which you would like to deploy.
 The proposed locations are determined by matching every existing location against the topology, done by a matcher plugin.  

[![Configure your deployment](../../images/user_guide/application/deployment/user_guide_deployment_setup.png)](../../images/user_guide/application/deployment/user_guide_deployment_setup.png)

 For now, note that if no matching plugin is configured by the administrator, a default matcher is used, checking the following:

- The orchestrator managing a location can support all the artifacts contains in your topology (nodes and relationships implementations scripts)
- The current user have sufficient rights to deploy on the location

## Node substitution :

Next step is to substitute some abstract nodes from your topology with resources provided by the selected location.  
In the meantime, you can edit some properties if you need to.

[![Node substitution](../../images/user_guide/application/deployment/user_guide_deployment_setup_substitution.png)](../../images/user_guide/application/deployment//user_guide_deployment_setup_substitution.png)


## Inputs: properties and artifacts

Here you set values to inputs and provider deployments properties. Also, you can upload artifacts set as input in the topology.

Here you need to select the value for your `inputs`. If they are some missing configuration in your topology, a `todo list` will be displayed.

[![Deployment inputs](../../images/user_guide/application/deployment/user_guide_deployment_setup_inputs.png)](../../images/user_guide/application/deployment/user_guide_deployment_setup_inputs.png)

Once all those steps are valid, the *deploy* step is unlocked, and if your topology is valid and ready for deployment, you can hit the deploy button to proceed.


# Runtime view

On this submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Wordpress url](../../images/user_guide/user_guide_topology_template_runtime.png)

{%info%}
The previous picture was taken during a Wordpress deployement, to deploy your own Wordpress, please refer to [this section](#/documentation/1.1.0/getting_started/getting_started.html).
{%endinfo%}
