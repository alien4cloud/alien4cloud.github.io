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
If you wish to integrate with an LDAP directory please go [here]().

Note that you can use LDAP for users and eventually rôle management. You can also manage roles in Alien even for LDAP user if you wish. In addition you can have users managed in LDAP and create some additional user that will be managed within Alien.
{%endwarning%}

# User(s)

## Create user

## Remove user

## Grant rôle(s) to a user

# Group(s)

## Create a group

## Remove a group

## Grant rôle(s) to a group

## Add a user to a group

## Remove a user from a group

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
