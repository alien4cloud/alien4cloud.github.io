---
layout: post
title:  Deploy an environment
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide, application_management]
node_name: application_deployment
weight: 100
---

{% summary %}{% endsummary %}

In alien4cloud you actually deploy an environment of an application, in order to prepare and trigger your deployment first go to the deployment page ![Deployment navigation menu](../../images/1.4.0/user_guide/applications/app_deploy_menu.png){: height="26px" .inline}

Before deploying your environment you have to configure the deployment, and alien4cloud will drive the user into comprehensive sequential steps in order to archive it.

Each step perform a validation of the deployment topology, and errors details are eventually displayed on the right screen. Note that you can not go to the next step as long as the current one is still not valid.

# Inputs

`Inputs` is an efficient way to configure environment specific properties that may be shared by a single topology, or to let the user(s) responsible for deployment configure some of the deployment properties without having to deal with the complexity of the topology editor and all of it's components.

There is two types of inputs:

* __Properties__: For example the designer may choose to let the deployer configure Number of CPUs, JAVA VM heap etc.
* __Artifacts__: For example a license file, initial data file, configuration file for a software etc.

Inputs may be optional or required, if any required input is not defined alien4cloud will display a `todo list` and prevent the user for going to the next configuration step.

[![Deployment inputs](../../images/user_guide/application/deployment/user_guide_deployment_setup_inputs.png)](../../images/user_guide/application/deployment/user_guide_deployment_setup_inputs.png)

Once all required inputs are defined, the *location selection* step is unlocked.

# Location selection

Location selection allow the deployment user to select where he wants to actually deploy the application. Alien 4 cloud will display to the user a list of locations that are authorized for the user to deploy on. The alien4cloud admin is responsible for configuration of the locations and for granting access to them.

Note that the access may be configured per user or per application/ application environment meaning that, as a user, you may see some locations available for some of your environments and not for some others. If you feel that a location you need to deploy your application is missing you should ask for permissions to your alien4cloud admin.

You can select among the displayed location, the one on which you would like to deploy.  
The proposed locations are determined by matching every existing location against the topology, done by a matcher plugin.  

[![Configure your deployment](../../images/user_guide/application/deployment/user_guide_deployment_setup.png)](../../images/user_guide/application/deployment/user_guide_deployment_setup.png)

 For now, note that if no matching plugin is configured by the administrator, a default matcher is used, checking the following:

* __Supported artifacts__: The orchestrator managing a location can support all the artifacts contains in your topology (nodes and relationships implementations scripts)
* __Authorizations__: The current user / application / environment have sufficient rights to deploy on the location

# Node substitution

Next step is to substitute some abstract nodes from your topology with resources provided by the selected location.  
In the meantime, you can edit some properties if you need to.

[![Node substitution](../../images/user_guide/application/deployment/user_guide_deployment_setup_substitution.png)](../../images/user_guide/application/deployment/user_guide_deployment_setup_substitution.png)

# Deploy
This is the last step. If the orchestrator defined some deployment properties, here is the place to fill them up.  
You can also decide (if possible) if you want to expose your deployment as a service. ([More about services here...](#/documentation/1.4.0/concepts/services.html))

[![deploy](../../images/user_guide/application/deployment/deployment_deploy.png)](../../images/user_guide/application/deployment/deployment_deploy.png)

A final validation is made, taking into account everything that has been configured up until now, and eventually errors are displayed.  

If your topology is valid and ready for deployment, you can hit the deploy button to proceed.  

You can now follow the deployement progress on the [runtime view](#/documentation/1.4.0/user_guide/application_runtime.html).

# Update

Once an application has been successfully deployed, you can upgrade it by hitting the ![Deployment update](../../images/user_guide/application/deployment/update_btn.png){: height="26px" .inline} button.  
Upgrading a deployment means __adding/removing/changing nodes and/or relationships__ in a __deployed topology__.

This can be done :

* __On the same location__: Only if the currently selected location is the same on which the deployment has been made
* __In an incremental development mode__: your application has been deployed, you add / remove some nodes in your topology, then you can update the deployment in order to deploy your changes.
* __Between versions__: you have already deployed a __V1__ of your application in production. You have worked on a __V2__ and have successfully tested it. You want to push the delta in production environment, you can use the upgrade feature to deploy the V2 in your production environment (instead of undeploying V1 then deploying V2).

Since this feature strongly depends on underlying orchestrator, you should refer to the dedicated documentation portion of the orchestrator you are using to know more about this feature ([for Cloudify orchestrator](#/documentation/1.4.0/orchestrators/cloudify3_driver/deployment_update.html)).
