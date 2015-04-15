---
layout: post
title: Applications
root: ../../
categories: DOCUMENTATION
parent: [concepts]
node_name: concepts-applications
weight: 400
---

Alien 4 Cloud aims at managing application lifecycle and their related deployments. Applications in Alien 4 Cloud are visible only by users that have some roles within the application.

In Alien 4 Cloud every application can have one or more versions and one or more environments.

# Versions

A version represents a given state for the application topology. As we explained already a topology contains versioned informations for all components required to deploy the application meaning that a defined version of an application can be moved from a cloud to another with guaranty on the deployment content and insurance that the same components will be deployed.

{%info%}
<h5>Snapshot and release</h5>
When you create an application, Alien 4 Cloud creates a default version _0.1.0-SNAPSHOT_. The qualifier _SNAPSHOT_ is really important and means somehow _In development_. Indeed Alien 4 Cloud will prevent any modification of an application topology that is not a _SNAPSHOT_ version.

When you are ready to release a version just rename it and remove the _SNAPSHOT_ qualifier (for example rename _0.1.0-SNAPSHOT_ to _0.1.0_). Alien will then consider the version as released and it will not be possible to update the version. If you want to change the topology you will have to create a new version for your application (based on the previous version if you like).
{%endinfo%}

# Environments

An environment represents a deployment target for an application (of course an environment is linked to a cloud on which to deploy the environment).

Like for application version, a default application environment named “Environment” is created when you create your application. This new environment is configured to target the default created version but without any associated cloud. You can specify the cloud in the environment management page or in the deployment page. You can also add a type to your environment and write a description.

Application environment is a good way to design your application lifecycle accross the different environments and, eventually, clouds. For example you can design one or more development environments for your developers (on EC2 for example), and the pre-production and production environments on your own OpenStack(s). You can then move a version from an environment to another by switching the version on the environments and re-deploying it.

# Application lifecycle management

In summary, the combination of version and environment concepts offers the ability of manage the lifecycle of your application.
