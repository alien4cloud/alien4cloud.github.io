---
layout: post
title:  Location / resources autorization
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide, admin]
node_name: location_autorization
weight: 50
---

{% summary %}{% endsummary %}

# Location

All news location are private, you need to authorize some entities to used it.
This entities are the following :

  * user
  * group
  * application environment
  * application

The choice of these entities allows a security policy for location adapted to all situations.


## Authorize user or group

Each location have a security panel. In this view you can manage authorization for all entities.
The view is split into tree tabs. The first tab display the authorized users, the second tab is for the group.

![security_user](../../images/1.4.0/user_guide/security/security_user.png)

Click on the **Authorize user** button to add new users. The group tab have the same logic.

![security_modal_group](../../images/1.4.0/user_guide/security/security_modal_group.png)


## Authorize application environment or application

The third tab is for application and application environment. An application can have many environment,
so if you authorized an application for a location, this authorization is valid for all of this environments.

![security_app](../../images/1.4.0/user_guide/security/security_app.png)

You can however add the authorization on one or many environments of an application. In this case, the authorized environments
are displayed by a badge.

![security_modal_application](../../images/1.4.0/user_guide/security/security_modal_application.png)


# Location resources

As for the location, all location resources are private. The mechanism to change the authorizations on a location resource is the same as for location.
Note : to grant the accesse to a resource on a location resoure, the subject must already have the authorization on the location.

![multi_select](../../images/1.4.0/user_guide/security/multi_select.png)

Despite, a short way exist to grant / revoke authorization on many location resources. Indeed, locations resources can be selected by a checkbox.
Furthermore, you can force the authorization on a location resource for a subject without authorization on location, this will automatically grant the
subject for the location.

![modal_with_force_button](../../images/1.4.0/user_guide/security/modal_with_force_button.png)
