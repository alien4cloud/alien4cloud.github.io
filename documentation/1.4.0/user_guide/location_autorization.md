---
layout: post
title:  Location autorization
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide, admin]
node_name: location_autorization
weight: 50
---

{% summary %}{% endsummary %}

All news location are private, you need to authorize some entities to used it.
This entities are the following :

  * user
  * group
  * application environment
  * application

The choice of these entities allows a security policy for location adapted to all situations.


# Authorize user or group

Each location have a security panel. In this view you can manage authorization for all entities.
The view is split into tree tabs. The first tab display the authorized users, the second tab is for the group.

![security_user](../../images/1.4.0/user_guide/security/security_user.png)

Click on the **Authorize user** button to add new users. The group tab have the same logic.

![security_modal_group](../../images/1.4.0/user_guide/security/security_modal_group.png)


# Authorize application environment or application

The third tab is for application and application environment. An application can have many environment,
so if you authorize an application for a location, this authorization is valid for all of this environments.

![security_app](../../images/1.4.0/user_guide/security/security_app.png)

You can however add the authorization on one or many environments of an application. In this case, the authorize environments
are displayed by a badge.

![security_modal_application](../../images/1.4.0/user_guide/security/security_modal_application.png)
