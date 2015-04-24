---
layout: post
title:  User(s) and Roles management
root: ../../
categories: DOCUMENTATION
parent: [user_guide]
node_name: user_management
weight: 50
---

{% summary %}{% endsummary %}

This section describe how you can manage some users within Alien.

{%warning%}
<h5>LDAP integration</h5>
If you wish to integrate with an LDAP directory please go [here](#/documentation/admin/ldap.html).

Note that you can use LDAP for users and eventually rôle management. You can also manage roles in Alien even for LDAP user if you wish. In addition you can have users managed in LDAP and create some additional user that will be managed within Alien.
{%endwarning%}

{%info%}
<h5>Roles</h5>
In order to edit users in Alien 4 Cloud you must have the ADMIN role. Default username and password when starting alien 4 cloud are _admin_ / _admin_
{%endinfo%}

# User(s)

In order to manage users go the to page by clicking on the ![Go to admin](../../images/user_guide/admin/admin_button.png){: .inline} button in the navigation bar. Then click on the user tab of the administration side navigation bar ![Go to user management](../../images/user_guide/admin/users/users_menu_side.png){: .inline} or on the user main icon.

The user page allows you to manage both users and groups. On the user tab you can search users and see the list of users matching your request.

![User list](../../images/user_guide/admin/users/user_list.png)

## Create user

In order to create a new user within Alien just click on the _New User_ button ![Create user](../../images/user_guide/admin/users/user_new.png){: .inline}. The create user modal appears and allows you fill-in initial data for your user.

![Create user](../../images/user_guide/admin/users/user_new_modal.png)

Admin is responsible for setting up the username (that will be used for login) and the password of the user.

{%warning%}
<h5>Limitations</h5>
We are working on adding the ability for a user to edit it's details but this is currently not an available feature. Changing user details can now be done only by an ADMIN user through the REST API.
Of course when using LDAP integration the password are managed by LDAP and there is no requirement for any management in Alien.
{%endwarning%}

## Search user

![Search user](../../images/user_guide/admin/users/user_search.png)

## Remove user

![Remove user](../../images/user_guide/admin/users/user_remove.png)

## Grant rôle(s) to a user

![Grant rôle(s) to a user](../../images/user_guide/admin/users/user_edit_roles.png)

# Group(s)

![Group list](../../images/user_guide/admin/users/group_list.png)

## Create a group

![Create group](../../images/user_guide/admin/users/group_new.png)

![Create group](../../images/user_guide/admin/users/group_new_modal.png)

## Remove a group

## Grant rôle(s) to a group

## Add/Remove a user to/from a group

![Add/Remove ](../../images/user_guide/admin/users/user_edit_groups.png)

# Roles in Alien 4 Cloud

These roles describes global roles you can grant to a user. From his/her roles Alien 4 Cloud will display and allow some operations.

{: .table .table-bordered}
| Role | Description |
|:---------|:------------|
| ADMIN                | Manages users, plugins, configure clouds + all other roles. |
| APPLICATIONS_MANAGER | Create new application(s). |
| ARCHITECT            | Create and edit topology template(s). |
| COMPONENTS_BROWSER   | [Deprecated] Not used anymore for validation. Can list components and see details for any of them |
| COMPONENTS_MANAGER   | Manage TOSCA cloud service archives to add/remove components from the catalog. |

{% info %}
A user with no roles can log-in and view the resources for which he has been granted. For example a user with no global roles can still access and manage applications on which he has _resources_ roles (see application and environments roles).
{% endinfo %}
