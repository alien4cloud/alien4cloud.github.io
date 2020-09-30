---
layout: post
title: Roles
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [concepts]
node_name: concepts-roles
weight: 1
---

Roles in Alien can be mapped to any user and a user can of course have any rôle and multiple ones on any resource, however we will explain here how we defined the roles and how they can map to an enterprise organization by giving to every people involved in IT creation and/or deployment and/or consumption the right focus, visibility and access to resources.

In a standard IT organization we have identified several experts profile:

Some people working at a cross business and applications level:

* __Platform admin__ are responsible of setting up the clouds or deployment environments.
* __Dev-Ops__ ensure that software can be easily deployed on platforms and follow the company best-practices. It is important to note that a single software may be composed of several elements that have to run on multiple machines. This is especially true when we want to ensure that the software will be able to support H.A. and scalability requirements.
* __Software Architects__ are responsible to software architectures, they build application topologies and ensure that best-practices are followed by the various teams in the enterprise.

And some working on dedicated application(s) and project(s)

* __Project management team__ (product owner, scrum master etc.) is responsible for an application. they coordinates the teams interracting on the application, plan versions and releases, define the environment requirements etc.
* __Developer(s)__ are responsible for building the application and creation of the next versions.
* __Support Engineers__ want to be able to deploy any version currently used by clients (or business teams) to be able to reproduce issues, find workaround etc.
* __Q.A. Engineers__ are responsible to test the up-comming release and make sure that it pass the quality standard of the enterprise and won't create issues. Of course test automation is a critical aspect of their jobs and being able to deploy complex applications easily is a part of this automation.
* __Production Ops__ are responsible for running the production of one or multiple project. They are the one responsible for everything that is related to a production environment, tuning, deployments, version upgrade, solving live issues etc.
* __Users__, well they use the application... What they want is to find an easy way to access their application and find resources they need.

{%info%}
 Of course these profiles are not exclusive and a single person can handle or be expert in several profiles, for example it is quite common to have a Production Ops being also Dev-Ops.
 {%endinfo%}

Alien 4 Cloud intend to provide a platform that will help all these people to collaborate to build the enterprise IT in a flexible manner. So the question you all want to know is: How does we map this into Alien 4 Cloud ?

 * __ADMIN__ will be able to configure one or multiple deployments targets (__clouds__). And of course associate deployment roles to specific users.
 * __COMPONENTS_MANAGER__ will be able to define packages on how to install, configure, start and connect __components__ (mapped as node types).
 * __ARCHITECTS__ will be able to define global __topologies__ of applications by reusing building blocks (node types defined by components managers).
 * __APPLICATIONS_MANAGER__ will be able to define __applications__ with it's own topologies that can be linked to a global topology from architects and that can reuse components defined by the components managers. At the application level, several users will be able to collaborate.
