---
layout: post
title:  Location / resources autorization
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, admin, orchestrator_location_management]
node_name: location_autorization
weight: 50
---

{% summary %}{% endsummary %}

#Location
Every new location is private, you need to authorize some entities to use it.
This entities can be one of the following :

  * **user**
  * **group**
  * **application**
  * **application environment**
  * **application environment type**


The choice of these entities allows a security policy for location adapted to all situations.


## Authorize user or group

Each location have a security panel. In this view you can manage authorizations for all entities.
The view is splitted into tabs, each tab reffering to one entity type.

![security_user](../../images/2.0.0/user_guide/security/security_user.png)

Click on the ![update button](../../images/2.0.0/user_guide/security/security_user_authirize_btn.png){: height="26px" .inline} button to grant users
or on this one ![delete button](../../images/2.0.0/user_guide/security/security_app_delete.png){: height="26px" .inline} to revoke authorizations of an user.

![security_modal_group](../../images/2.0.0/user_guide/security/security_modal_group.png)

This is exactly the same logic to manage authorizations on **groups**.


## Authorize application environment, application environment type or application

The third tab is for application, application environment and application environment type. An application can have many environments,
so if you authorize an application for a location, this authorization is valid for all of this nested resources (this include application environment and application environment type).

![security_modal_application](../../images/2.0.0/user_guide/security/security_modal_application.png)

You can however specifically choose to authorize only a set of environments of one application. In this case, the authorized environments
are displayed by a badge.

Finally, you can choose to authorize a set of environment types of one application. All existing and futur environments with the the authorize environment type will be able to use the ressource. Manage ressource by environment type avoids the admin from always having to set new authorizations for new environments. Authorized environment types are displayed by a badge.

![security_app](../../images/2.0.0/user_guide/security/security_app.png)

Click on this icon ![update button](../../images/2.0.0/user_guide/security/security_app_update.png){: height="26px" .inline} to update rigths on an authorized application or on this one ![delete button](../../images/2.0.0/user_guide/security/security_app_delete.png){: height="26px" .inline} to revoke all authorizations for this application (this inclued nested resources).


# Location resources

As for the location, all location resources are private. The mechanism to change the authorizations on a location resource is the same as for location.
Grant an authorization on a location resource for an entity without authorization on location will automatically grant the
entity for the location.

![multi_select](../../images/2.0.0/user_guide/security/multi_select.png)

To manage the authorizations on a specific resource or display this current authorizations, click on your resource (like to edit this properties) and go to
the security panel.

![multi_select](../../images/2.0.0/user_guide/security/security_resource_detail.png)
