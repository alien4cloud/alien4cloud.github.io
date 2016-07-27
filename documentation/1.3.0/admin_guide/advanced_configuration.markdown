---
layout: post
title:  Advanced configuration
categories: DOCUMENTATION-1.3.0
root: ../../
parent: [admin]
node_name: advanced_configuration
weight: 100
---

{% summary %}{% endsummary %}

# Using SSL

see [security section](#/documentation/1.3.0/admin_guide/security.html).

# Elastic Search configuration

ALIEN 4 Cloud uses ElasticSearch as it's data store and indexing service. By default ALIEN 4 Cloud starts up an embedded ElasticSearch node. Of course when running in production it is recommended to use a remote cluster (ideally with high availability configured).

## Common configuration

Common configuration allows you to configure the name of the elasticsearch cluster (_clusterName_), as well as the _prefix_max_expansions_ (performance setting used for prefix queries).

{% note %}
We recommend that you don't change the default _prefix_max_expansions_ value.
{% endnote %}

If you wish to change one of the parameters, you should open the ***`alien4cloud-config.yml`*** file and go to the elasticSearch configuration section.

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

The embedded Elastic Search configuration *`elasticsearch.yml`* is a native elastic search configuration and you can find plenty of information on [elastic search website](http://www.elasticsearch.org) on how you can configure it.

However the main element you may wish to configure is elastic search storage directories:

{% highlight yaml %}
path:
  data: ${user.home}/.alien/elasticsearch/data
  work: ${user.home}/.alien/elasticsearch/work
  logs: ${user.home}/.alien/elasticsearch/logs
{% endhighlight %}

## Configure a remote Elastic Search (throw a no data node)

In order to configure a remote Elastic Search, you should edit the following:

* In *`alien4cloud-config.yml`* file, edit the elasticSearch section and change client from false to true:

{% highlight yaml %}
elasticSearch:
  clusterName: escluster
  local: false
  client: true
  resetData: false
  prefix_max_expansions: 10
{% endhighlight %}

* In the *`elasticsearch.yml`* make sure that the connection parameters matches the ones of your elasticsearch cluster.

Example:

{% highlight yaml %}
discovery.zen.ping.multicast.enabled: false
discovery.zen.ping.unicast.enabled: true
discovery.zen.ping.unicast.hosts: 129.185.67.112
{% endhighlight %}

{% note %}
In this mode, a 'client' node is initialized and joins the cluster. It doesn't store any data and act as a proxy. The machines must be visible for each other (in other words, they should be into the same network).
{% endnote %}

## Configure a remote Elastic Search (using a standalone transport client)

In this mode, we use a simple standalone client that can be in another network as long as the cluster can be reachable.

* In *`alien4cloud-config.yml`* file, edit the elasticSearch section and set 'client' and 'transportClient' to true, and indicate the cluster host and port:

{% highlight yaml %}
elasticSearch:
  clusterName: escluster
  local: false
  client: true
  transportClient: true
  # a comma separated list of host:port couples
  hosts: 129.185.67.112:9300
  resetData: false
  prefix_max_expansions: 10
{% endhighlight %}

* In the *`elasticsearch.yml`* make sure that the cluster name is well defined (should be the same than the cluster).

{% highlight yaml %}
cluster.name: escluster
{% endhighlight %}

## Configure a remote Elastic Search with replication

In this mode, the Elastic Search cluster has more than one node (cluster with replication).  
Assuming we have a cluster of two nodes:

* In the *`alien4cloud-config.yml`* file, edit the elasticSearch section and add all hosts in your cluster.

{%highlight yaml%}
# a comma separated list of host:port couples
hosts: <host_1_ip>:<port_1>,<host_2_ip>:<port_2>
{%endhighlight%}

* In the *`elasticsearch.yml`* make sure to set the proper number of replicats and the hosts in the cluster .  
Assuming we are on the *host_1* Configuration:
{%highlight yaml%}
# Set the number of shards:
index.number_of_shards: 1

# Set the number of replicas:
index.number_of_replicas: 1

# 2. Configure an initial list of master nodes in the cluster
#    to perform discovery when new nodes (master or data) are started:
discovery.zen.ping.unicast.hosts: ["localhost", <host_2_ip>]
{%endhighlight%}

# Directories configuration

ALIEN 4 Cloud store various files on the hard drive. Cloud Service archives, Artifacts overriden in the topologies, plugins archives etc. Directories can be configured in the *`alien4cloud-config.yml`* file.

By default, ALIEN 4 Cloud stores data in the user home directory in a .alien folder.

{% highlight yaml %}
# Configuration of Alien 4 Cloud's CSAR repository, temporary folder and upload settings.
directories:
  # Alien 4 cloud main directory (other directories are relative path to this one)
  alien: ${user.home}/.alien
  # directory in which alien 4 cloud stores Cloud Service Archives
  csar_repository: csar
  # directory in which alien 4 cloud stores uploaded artifacts (war etc.).
  artifact_repository: artifacts
  # temporary directory for alien 4 cloud
  upload_temp: upload
  # directory in which alien 4 cloud unzips loaded plugins.
  plugins: plugins
{% endhighlight %}

# Admin user initialization

In case there is no admin user in it's repository, ALIEN 4 Cloud can automatically create a user with ADMIN rights. The user name and password are configured in the *`alien4cloud-config.yml`* file. Of course if an ADMIN user already exists in ALIEN then no user is created and this section is ignored.

{% highlight yaml %}
# Configuration of default admin ensurer, if true it creates a default admin user if no admin can be found in the system.
users:
  admin:
    # Alien 4 cloud checks that an admin user is defined at the application launch.
    ensure: true
    username: admin
    password: admin
    email: admin@mycompany.com
{% endhighlight %}

# LDAP configuration

See specific [sub-section](#/documentation/1.3.0/admin_guide/ldap.html).

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

# JVMs tunning

You might want to tune up your JVMs for a better performance in production.  Here are some tested JVM options that we recommend to you. Please, make sure to customize the different paths in the examples below according to your installation.

##ElasticSearch JVM

{% highlight bash %}
-Xms2g -Xmx2g -Djava.awt.headless=true -XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=75 -XX:+UseCMSInitiatingOccupancyOnly -XX:+HeapDumpOnOutOfMemoryError -XX:+DisableExplicitGC -Dfile.encoding=UTF-8 -XX:+PrintGCDateStamps -XX:ThreadStackSize=256k -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark
{% endhighlight %}

##Alien4Cloud JVM

{% highlight bash %}
-server -showversion -XX:+AggressiveOpts -Xmx2g -Xms2g -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -XX:+UseParNewGC -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=75 -XX:+UseCMSInitiatingOccupancyOnly -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark -XX:+DisableExplicitGC
{% endhighlight %}
