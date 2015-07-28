---
layout: post
title:  LDAP integration
categories: DOCUMENTATION-1.1.0
root: ../../
parent: [admin, advanced_configuration]
node_name: ldap
weight: 100
---

Alien 4 Cloud can interface with an external LDAP server in order to retrieve users and perform authentication. When using an LDAP server, the Alien admin can still manage 'local' users inside Alien while LDAP users should be managed inside the LDAP repository. It is possible also to delegate global rôle management inside Alien even for LDAP users or to define a mapping from roles inside LDAP to roles within Alien.

# LDAP configuration

In order to plug-in ALIEN to your LDAP repository, you must configure the ldap section of the _alien4cloud-config.yml_ file.

## Enable LDAP

Enabling ldap is as easy as updating the ldap configuration section and changing the enabled flag to true.

{% highlight yaml %}
### Ldap Configuration
ldap:
  enabled: true
  ...
### End Ldap Configuration
{% endhighlight %}

## Configure LDAP Server

The first step in order to configure LDAP in Alien 4 Cloud is to configure the server parameters:

### Keynames

{: .table .table-bordered}
| Keyname         | Required | Description |
|:----------------|:---------|:------------|
| anonymousReadOnly | yes | Some LDAP server setups allow anonymous read-only access. If you want to use anonymous Contexts for read-only operations, set the anonymousReadOnly property to true. |
| url | yes | Url of the ldap server. |
| userDn | yes | Dn of the user to use in order to connect to the LDAP server.|
| password | yes | Password of the user to use in order to connect to the LDAP server. |

### Example

{% highlight yaml %}
ldap:
  ...
  anonymousReadOnly: true
  url: ldap://ldap.fastconnect.fr:389
  userDn: uid=admin,ou=system
  password: secret
  ...
{% endhighlight %}

## Configure users retrieval

In order to retrieve users from the LDAP you must specify the base in which to look for users as well as an optional filter to retrieve only the users entries (and filter inactive if you have some for example).

### Keynames

{: .table .table-bordered}
| Keyname         | Required | Description |
|:----------------|:---------|:------------|
| base | yes | The base in which to look for users within your LDAP |
| filter | yes | A filter query to be processed by your LDAP server to filter users retrieved into Alien 4 Cloud. |

### Example

{% highlight yaml %}
ldap:
  ...
  base: ou=People,dc=fastconnect,dc=fr
  filter: (&(objectClass=person)(!(objectClass=CalendarResource))(accountStatus=active))
  ...
{% endhighlight %}

## Configure user mapping

Now that you can retrieve users from LDAP it is critical to define a Mapping from your LDAP user entry attributes to Alien 4 Cloud properties for a user.

### Keynames

{: .table .table-bordered}
| Keyname         | Required | Description |
|:----------------|:---------|:------------|
| mapping:<br>&nbsp;&nbsp;id: | yes | Name of the LDAP attribute that contains the unique id for the user within ldap that should be used as user's login (username) within Alien 4 Cloud. |
| mapping:<br>&nbsp;&nbsp;firstname: | yes | Name of the LDAP attribute that contains the user's firstname |
| mapping:<br>&nbsp;&nbsp;lastname: | yes | Name of the LDAP attribute that contains the user's lastname |
| mapping:<br>&nbsp;&nbsp;email: | yes | Name of the LDAP attribute that contains the user's email |
| mapping:<br>&nbsp;&nbsp;active:<br>&nbsp;&nbsp;&nbsp;&nbsp;key: | no | Name of the LDAP attribute that allows to know if a user is active. |
| mapping:<br>&nbsp;&nbsp;active:<br>&nbsp;&nbsp;&nbsp;&nbsp;value: | no | Value of the LDAP attribute for which the user is considered as active. |
| mapping:<br>&nbsp;&nbsp;roles:<br>&nbsp;&nbsp;&nbsp;&nbsp;defaults: | yes | Roles to use when importing a user when no rôle mapping is defined.<br>Note: this roles are used only on user import. When no role mapping is defined the roles of users can be managed in Alien4Cloud. |
| mapping:<br>&nbsp;&nbsp;roles:<br>&nbsp;&nbsp;&nbsp;&nbsp;key: | no | Name of the LDAP attribute that contains the user's roles. If this key is not specified, user roles will be managed inside alien.<br>Note: at import users will be created inside alien with the default roles. |
| mapping:<br>&nbsp;&nbsp;roles:<br>&nbsp;&nbsp;&nbsp;&nbsp;key: | no | Mapping of a LDAP rôle to an ALIEN rôle. Note that it is not currently possible to map a single LDAP rôle to multiple Alien roles. |

{% highlight yaml %}
### Ldap Configuration
ldap:
  ...
  mapping:
    id: uid
    firstname: givenName
    lastname: sn
    email: mail
    # optional mapping key and value to dertermine if the user is active
    active:
      key: accountStatus
      value: active
    roles:
      defaults: COMPONENTS_BROWSER
      # optional configuration for role mapping (when you want to manage roles in ldap and not in alien for ldap users).
      #key: description
      #mapping: ROLE_CLOUDADMINS=ADMIN,ROLE_CLOUDCOMPONENTS=COMPONENTS_MANAGER
  ### End Ldap Configuration
{% endhighlight %}


## Limitations and known issues

{% warning %}
Even when a user has roles managed in LDAP an Alien admin can edit it's roles. However when the user will log-in the roles from LDAP will be reloaded into alien.

Roles changed in LDAP will not appear in Alien as long as the User doesn't log-in.
{% endwarning %}
