---
layout: post
title: Wizard4Cloud
root: ../../
categories: "DOCUMENTATION-3.0.0"
parent:
  [user_guide]
node_name: wizard
weight: 1100
---

Wizard4Cloud is an UI that provides a step by step screen sequencing for the deployment of applications created from topology templates or existing applications.
It provides  a simplified and intuitive UI for creating, deploying, undeploying  and deleting applications.
Unlike the full App UI, the user no longer needs to navigate through multiple menus and tabs to create a topology from scratch or from template.

{%info%}
At this stage, Wizard4Cloud remains a beta feature and has few limitations:

* We don't yet manage complex properties in properties forms (topology inputs, workflow inputs, meta-properties form).
{%endinfo%}

{% summary %}{% endsummary %}

# Run Wizard
Wizard is embedded in Alien4Cloud webapp.
It can be accessed on the menu on the right of the screen.

![Access to wizard](../../images/3.0.0/user_guide/wizard/wizard_access.png)

The following screen is displayed

![Welcome page](../../images/3.0.0/user_guide/wizard/welcomepage.png)


# Quick getting started
The below instructions decribe the 3 functionnalities of the wizard

## Create an application from topology template
Guides throw the necessary steps in order to create a new application from a template.
Depending on the application complexity, the wizard bypasses the steps of deployment preparation.
When there are no inputs, meta-properties or matchings to do,  the wizard steps to the deployment validation screen.

![Wizard overview](../../images/3.0.0/user_guide/wizard/applicationwizard-overview-1.png)

## DashBoard
Lists all applications, view deployment status, logs, view meta datas, view application modules
It shows you the list of applications you can access (basically any application you have a role assigned to). If you are a platform admin you can see all applications on the list.
For each application you can toggle the display of it's environments to see the state of the deployment  as well as the deployed version.
It displays a brief description of application with its description, meta properties and nodes list, and to manage it (deploy, undeploy, running an operation)

![Dashboard overview](../../images/3.0.0/user_guide/wizard/dashboardoverview.png)

## Catalog
Browses main properties of Components catalog available in the Full UI.
The Components catalog available in the Full UI is displayed with components name, version, description and meta properties.

##Settings
Setups few options about this application such as language, theme, ...


{%info%}
For more informations on the wizard implementation, you have information on the git project [alien4cloud-wizard](https://github.com/alien4cloud/alien4cloud-wizard/tree/3.0.x/alien4cloud-wizard-ui). Under the hood, The wizard part of this app is driven by a state machine. Have a look to [Application Wizard Module](https://github.com/alien4cloud/alien4cloud-wizard/blob/3.0.x/alien4cloud-wizard-ui/projects/wizard4cloud-ui/src/app/features/application-wizard/readme.md) readme for more details.
{%endinfo%}
