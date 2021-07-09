---
layout: post
title:  Create a new application
root: ../../
categories: DOCUMENTATION-3.4.0
parent: [user_guide, application_management]
node_name: application_creation
weight: 10
---

Creation of a new application requires the *APPLICATIONS_MANAGER* or *ADMIN* global rôle. Users with the right roles should see the __New Application__ button ![New Application](../../images/3.4.0/user_guide/applications/new_app_button.png){: height="26px" .inline}

Click on the __New Application__ button opens a modal that prompt the user for some fields:

![Create new application](../../images/3.4.0/user_guide/applications/new_app_modal_scratch.png)

* __Name__: This is the name of application as displayed in alien 4 cloud. It is required and should be meaningful for users. The name of an application must also be unique in alien 4 cloud. The name of an application can also be changed later when editing the application.
* __Archive name (Id)__: This is the unique identifier of the application In alien 4 cloud an application will have TOSCA topologies to describe what to deploy and how to deploy it. Every TOSCA topology has a matching TOSCA archive with an unique archive name and archive version. The id of an application in alien 4 cloud is also the name of the TOSCA archive. Note that this name must be unique.
* __Description__: Description is optional and will be displayed to users in the application list.
* __Initialize topology from__: When creating a new application alien 4 cloud will create a default Environment and a default Version. The default version will have an associated default Topology version. It is possible to create a new blank topology (scratch - screenshot above) or to look for an available topology template in the catalog (see screenshot below).

![Create new application](../../images/3.4.0/user_guide/applications/new_app_modal_template.png)

{%warning%}
<h5>Template and workspace limitation</h5>
It is not yet possible to create an application from a template that is not in the public global workspace. The reason is that once created to the application the topology should have visibility to all components used in this templates so basically in any dependent archive (that may also be restricted to the private workspace).
We don't yet support the request for promotions of the dependencies of a template that uses private archives and decided to disable the ability to create applications from private templates. This behavior will be improved in future versions.
{%endwarning%}
