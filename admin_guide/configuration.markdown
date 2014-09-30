---
layout: post
title:  Configuration
categories: ADMIN_GUIDE
root: ../
parent: none
weight: 100
---

{% summary %}{% endsummary %}

This section details the configuration parameters for ALIEN 4 Cloud.

In the current version, ALIEN 4 Cloud is configured using two yaml file that must be placed in the classpath. The main configuration file is called _calm-config.yaml_ and allows to configure several behaviors in ALIEN. The other file _elasticsearch.yml_ allows to configure the embedded ElasticSearch server (in case you wish to use ALIEN 4 Cloud using an embedded ElasticSearch server)

A default version of both configuration files exists in the war archive.

# Elastic Search configuration

ALIEN 4 Cloud uses ElasticSearch as it's data store and indexing service. By default ALIEN 4 Cloud starts up an embedded ElasticSearch node. Of course when running in production it is recommended to use a remote cluster (ideally with high availability configured).

## Common configuration

Common configuration allows you to configure the name of the elasticsearch cluster (_clusterName_), as well as the _prefix_max_expansions_ (performance setting used for prefix queries).

{% note %}
We recommend that you don't change the default _prefix_max_expansions_ value.
{% endnote %}

If you wish to change one of the parameters, you should open the _calm-config.yaml_ file and go to the elasticSearch configuration section.

{% highlight yaml %}
elasticSearch:
  clusterName: escluster
  local: false
  client: false
  resetData: false
  prefix_max_expansions: 10
{% endhighlight %}

{% info %}
local and resetData should be left to false.
{% endinfo %}

## Configure the embedded Elastic Search

The embedded Elastic Search configuration _elasticsearch.yml_ is a native elastic search configuration and you can find plenty of information on [elastic search website](http://www.elasticsearch.org) on how you can configure it.

However the main element you may wish to configure is elastic search storage directories:

{% highlight yaml %}
path:
  data: ${user.home}/.calm/elasticsearch/data
  work: ${user.home}/.calm/elasticsearch/work
  logs: ${user.home}/.calm/elasticsearch/logs
{% endhighlight %}

## Configure a remote Elastic Search

In order to configure a remote Elastic Search, you should edit the following:

* In _calm-config.yaml_ file, edit the elasticSearch section and change client from false to true:

{% highlight yaml %}
elasticSearch:
  clusterName: escluster
  local: false
  client: true
  resetData: false
  prefix_max_expansions: 10
{% endhighlight %}

* In the _elasticsearch.yml_ make sure that the connection parameters matches the ones of your elasticsearch cluster.

Example:

{% highlight yaml %}
discovery.zen.ping.multicast.enabled: false
discovery.zen.ping.unicast.enabled: true
discovery.zen.ping.unicast.hosts: localhost
{% endhighlight %}

# Directories configuration

ALIEN 4 Cloud store various files on the hard drive. Cloud Service archives, Artifacts overriden in the topologies, plugins archives etc. Directories can be configured in the _calm-config.yaml_ file.

By default, ALIEN 4 Cloud stores data in the user home directory in a .calm folder.

{% highlight yaml %}
# Configuration of Calm's CSAR repository, temporary folder and upload settings.
directories:
  # calm main directory (other directories are relative path to this one)
  calm: ${user.home}/.calm
  # directory in which calm stores Cloud Service Archives
  csar_repository: csar
  # directory in which calm stores uploaded artifacts (war etc.).
  artifact_repository: artifacts
  # temporary directory for calm
  upload_temp: upload
  # directory in which calm unzip loaded plugins.
  plugins: plugins
{% endhighlight %}

# Admin user initialization

In case there is no admin user in it's repository, ALIEN 4 Cloud can automatically create a user with ADMIN rights. The user name and password are configured in the _calm-config.yaml_ file. Of course if an ADMIN user already exists in ALIEN then no user is created and this section is ignored.

{% highlight yaml %}
# Configuration of default admin ensurer, if true it creates a default admin user if no admin can be found in the system.
users:
  admin:
    # CALM checks that an admin user is defined at the application launch.
    ensure: true
    username: admin
    password: admin
    email: admin@mycompany.com
{% endhighlight %}

# LDAP configuration

In order to plug-in ALIEN to your LDAP repository, you must configure the ldap section of the _calm-config.yaml_ file.

{% highlight yaml %}
### Ldap Configuration
ldap:
  enabled: false
  anonymousReadOnly: true
  url: ldap://ldap.fastconnect.fr:389
  userDn: uid=admin,ou=system
  password: secret
  base: ou=People,dc=fastconnect,dc=fr
  defaultRoles: COMPONENTS_BROWSER,COMPONENTS_MANAGER

  # will join all objectClasses with & to get users
  objectClassesInclude: person,hordePerson
  objectClassesExclude: CalendarResource

  # user field import mapping
  userIdKey: uid
  userFirstNameKey: givenName
  userLastNameKey: sn
  userEmailKey: mail

  # field to dertermine if the user is active
  userActiveKey: accountStatus
  userActiveValue: active
{% endhighlight %}

# Component search boost

ALIEN 4 Cloud is managing a custom way to rank components when searching for them. In order to compute the boost for a component we get the number of topologies that uses the component and multiply it by the _usage_ factor. Then, if a component is the latest version we add a fixed _version_ boost, finally if a component is marked as default for at least one of it's capability, we add another _default_ fixed boost.

In order to change the default weights you can edit the following configuration:

{% highlight yaml %}
# configure the boost factors for tosca elements in the search, elements with the highest boost factor appears first in search results
# the total boost factor for a component is the sum of the following boost factors.
components.search.boost:
  # boost components that are used in topologies by (number of active topologies that uses the component * usage)
  usage: 1
  # components that exist in latest version get a boost factor regarding other components. Note that this factor should be very high as every component
  # with latest version will be boosted.
  version: 1000
  # components that are configured as default for at least 1 capability get the following a boost factor.
  default: 10
{% endhighlight %}
