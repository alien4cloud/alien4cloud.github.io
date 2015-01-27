---
layout: post
title:  Application(s) configuration
root: ../../
categories: DOCUMENTATION
parent: [getting_started]
node_name: getting_started_create_cloud
weight: 100
---

# Introduction to the application concepts

In Alien 4 Cloud we manage all applications by a version and environment system. A version represents a given state for a topology.  An  environment is the combination of a version and a cloud with a specific type who represent the goal of your environment.

For example, we can have the “Wordpress” application in version “1.0-SNAPSHOT”. To deploy it, we create an new environment with this version, type “Development” and a cloud like OpenStack.

# Manage your applications version

When you create an application, Alien 4 Cloud creates a default version “0.1.0-SNAPSHOT”. The tag SNAPSHOT is really important because we can only modify the topology version with this tag. The description is use to describe a goal of our version. When you create a new version you can specify another version of your application as template to duplicate this topology.

Using version to manage an application allows you to build complex topology step by step and without any leak of information.

{% info %}
To learn how to create a topology, read the [LAMP Stack Application Topology](#/documentation/getting_started/lamp_stack_application.html)
{% endinfo %}

## Manage your applications environment

Such as for the application version, a default application environment named “Environment” is created when you create your application. This new environment is configured to target the default created version but without assigned cloud. You can specify the cloud in the environment manage page or in the deployment page. You can also add a tag to your environment and write a description.

Application environment is a good way to test an application version with different clouds. For example, an environment can be use with the tag Pre-production on  OpenStack to validate the topology and switch to a new environment “Production” to deployed on EC2.

In the application environment management page you can also see all statuses of all environments for an application. Moreover, the “info” view will also display those informations. In summary, the combination of this two concepts offers the ability of manage the lifecycle of an application.

## Deploy an application and runtime view

When you have a cloud and an application with a complete environment, you can deploy your application. Note that you topology must also be “valid”. The deployment page check the presence of components in your topology or the presence of all required properties. When all requirements are satisfied, you can chose a cloud image and launch the deployment. That will activate the runtime view who display all events of the targeted cloud.

Since you topology is deployed, in the runtime view you ca have more details about each instance of all nodes. (e.g. instance IPS)
