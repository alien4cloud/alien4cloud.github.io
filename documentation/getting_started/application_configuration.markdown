---
layout: post
title:  Application(s) configuration
root: ../../
categories: DOCUMENTATION
parent: [getting_started]
node_name: getting_started_application_configuration
weight: 100
---

# Introduction to the application concepts

In Alien 4 Cloud we manage all applications by a version and environment system. A version represents a given state for a topology.  An  environment is the combination of a version and a cloud with a specific type who represent the goal of your environment.

For example, we can have the “Wordpress” application in version “1.0-SNAPSHOT”. To deploy it, we create an new environment with this version, type “Development” and a cloud like OpenStack.

# Manage your applications version

When you create an application, Alien 4 Cloud creates a default version “0.1.0-SNAPSHOT”. The qualifier SNAPSHOT is really important because we can only modify the topology version with this qualifier. The description is used to describe a goal of our version. When you create a new version you can specify another version of your application as template to duplicate it's topology.

{% info %}
To learn how to create a topology, read the [LAMP Stack Application Topology](#/documentation/getting_started/lamp_stack_application.html)
{% endinfo %}

## Manage your applications environment

Like for application version, a default application environment named “Environment” is created when you create your application. This new environment is configured to target the default created version but without any associated cloud. You can specify the cloud in the environment management page or in the deployment page. You can also add a type to your environment and write a description.

Application environment is a good way to design your application lifecycle accross the different environments and, eventually, clouds. For example you can design one or more development environments for your developers (on EC2 for example), and the pre-production and production environments on your own OpenStack(s). You can then move a version from an environment to another by switching the version on the environments and re-deploying it.

{%info%}
In future version we plan to allow version upgrades without having to restart an environment.
{%endinfo%}

In the application environment management page you can also see all statuses of all environments for an application. Moreover, the “info” view will also display those informations.

In summary, the combination of version and environment concepts offers the ability of manage the lifecycle of your application.

## Deploy an application and runtime view

When you have a cloud and an application with a complete environment, you can deploy your application. Note that your version's topology must also be “valid”. The deployment page checks the presence of components in your topology or the presence of all required properties. When all requirements are satisfied, you can chose a cloud image and launch the deployment. That will enable the runtime view who display all events of the targeted cloud.

While your topology is deployed, you can have more details about each instance of all nodes (IP addresses etc.) on the runtime view.
