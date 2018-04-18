---
layout: post
title: Applications
root: ../../
categories: DOCUMENTATION-2.1.0
parent: [concepts]
node_name: concepts-applications
weight: 400
---

Alien 4 Cloud aims at managing application lifecycle and their related deployments. Applications in Alien 4 Cloud are visible only by users that have some roles within the application.

The application in Alien 4 Cloud is the entity that people are going to deploy. Every application can have one or more versions and one or more environments.

![Application concepts](../images/2.1.0/concepts/application_relations.png)

# Version

A version of an application answer the question what do we want to deploy. Every application version defines the actual service that a given version of an application is going to deliver.

A version represents a given state for the application topology. As we explained already a topology contains versioned informations for all components required to deploy the application meaning that a defined version of an application can be moved from a cloud to another with guaranty on the deployment content and insurance that the same components will be deployed.

That said you may sometimes need the ability to define one or multiple topologies for a given versions in order to suit some of your environment constraints:
 - For example you may want to use in development a topology version that would use hsql as a database implementation while node while in production you will use a topology with an Oracle database (that requires licenses and so on).
Of course every topology version for a given application version should provide the same service, differences between these topologies being mostly technical.

And for sure in an ideal world you would have a single topology version that you will deploy on every environment changing only some deployment configurations like scaling parameters for example.

{%info%}
<h5>Snapshot and release</h5>
When you create an application, Alien 4 Cloud creates a default version _0.1.0-SNAPSHOT_. The qualifier _SNAPSHOT_ is really important and means somehow _In development_. Indeed Alien 4 Cloud will prevent any modification of an application topology that is not a _SNAPSHOT_ version.

When you are ready to release a version just rename it and remove the _SNAPSHOT_ qualifier (for example rename _0.1.0-SNAPSHOT_ to _0.1.0_). Alien will then consider the version as released and it will not be possible to update the version. If you want to change the topology you will have to create a new version for your application (based on the previous version if you like).
{%endinfo%}

# Environments

An environment represents a deployment target for an application. Every environment may be owned and deployed by different team. That way you can offer the ability for your development, uat, and production team to efficiently work together.

Application environment is also a key feature to design your application lifecycle across the different environments and, eventually, clouds. For example you can design one or more development environments for your developers (on EC2 for example), and the pre-production and production environments on your own OpenStack(s). You can then move a version from an environment to another by switching the version on the environments and re-deploying it.

Like for application version, a default application environment named “Environment” is created when you create your application. This new environment is configured to target the default created version but without any associated cloud. You can specify the cloud in the environment management page or in the deployment page. You can also add a type to your environment and write a description.

Every environment have a topology version associated that defines the next version that will be deployed to this environment, the same topology version may be associated to one or multiple environments or to none of them.

# Application lifecycle management, specific configurations and deployment.

In summary, the combination of version and environment concepts offers the ability of manage the lifecycle of your application.

The combination of an environment and a version have a specific deployment configuration. This configuration consist of multiple elements:
 - __Location matching configuration__: This is the selection of the deployment target for this environment/version (Like Amazon EC2, my internal cloud, my set of VMs etc.)
 - __Node matching configuration__: When a topology contains abstract nodes they can be replaced before deployment by a concrete implementation, this is really the key element for topology portability across clouds. For example if I selected Amazon as my deployment location in the first step I will be able to select all matching Amazon Images and Flavor association to replace my Compute node. On an existing machine cluster I will match the Compute node against some available machines in the pool. On container based deployment target I will target a container image to deploy my Compute node etc.
 Node matching can replace some abstract nodes with either 'on demande resources' or 'services' which are already running elements that are available for me to consume.
 - __Inputs configuration__: A topology may define some input properties and input artifacts that you can configure for this environment/version deployment association.

 Finally once all theses elements are configured you can perform a deployment.
