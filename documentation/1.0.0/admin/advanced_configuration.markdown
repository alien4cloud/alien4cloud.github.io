---
layout: post
title:  Advanced configuration
categories: DOCUMENTATION
root: ../../
parent: [admin]
node_name: advanced_configuration
weight: 100
---

{% summary %}{% endsummary %}

Alien 4 Cloud contains a basic configuration that is good enough for test environment. However in order to move into production or in order to integrate with other systems (as LDAP for example), you need to define an advanced configuration.

In order to provide configuration to Alien 4 Cloud, you must place an Alien configuration file in a config folder along-side to the Alien 4 Cloud war.

{% highlight bash %}
├── alien4cloud-ui-{version}-standalone.war
├── config/alien4cloud-config.yml
├── config/elasticsearch.yml
{% endhighlight %}

You can find default configurations for both files in the GitHub repository:

* [alien4cloud-config.yml](https://github.com/alien4cloud/alien4cloud/blob/master/alien4cloud-rest-api/src/main/resources/alien4cloud-config.yml)
* [elasticsearch.yml](https://github.com/alien4cloud/alien4cloud/blob/master/alien4cloud-ui/src/main/resources/elasticsearch.yml)

You can also add a simple start script:

{% highlight bash %}
├── start.sh
├── alien4cloud-ui-{version}-standalone.war
├── config/alien4cloud-config.yml
├── config/elasticsearch.yml
{% endhighlight %}



{% highlight bash %}
cd `dirname $0`

JAVA_OPTIONS="-server -showversion -XX:+AggressiveOpts -Xmx2g -Xms2g -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError"

java $JAVA_OPTIONS -jar alien4cloud-ui-1.0.0-{version}-standalone.war
{% endhighlight %}

If you need to customize log4j (in order to activate some loggers, change the log file location ...) add a log4j.properties in the config folder and specify the classpath for java :

{% highlight bash %}
java $JAVA_OPTIONS -cp config/:alien4cloud-ui-1.0.0-{version}-standalone.war org.springframework.boot.loader.WarLauncher
{% endhighlight %}

You can find a log4j sample configuration file at [log4j.properties](https://github.com/alien4cloud/alien4cloud/blob/master/alien4cloud-ui/src/main/resources/log4j.properties)

# Using SSL

By default Alien 4 Cloud starts using http rather than https enabling SSL is however really simple. Just edit the alien4cloud-config.yml and replace:

{% highlight yaml %}
server:
  port: 8080
{% endhighlight %}

by

{% highlight yaml %}
server:
  port: 8443
  ssl:
    key-store: keystore.jks
    key-store-password: ******
    key-password: ******
{% endhighlight %}

Make sure that you have your key store placed along-side the alien4cloud war file:

{% highlight bash %}
├── start.sh
├── alien4cloud-ui-{version}-standalone.war
├── keystore.jks
├── config/alien4cloud-config.yml
├── config/elasticsearch.yml
{% endhighlight %}

# Elastic Search configuration

ALIEN 4 Cloud uses ElasticSearch as it's data store and indexing service. By default ALIEN 4 Cloud starts up an embedded ElasticSearch node. Of course when running in production it is recommended to use a remote cluster (ideally with high availability configured).

## Common configuration

Common configuration allows you to configure the name of the elasticsearch cluster (_clusterName_), as well as the _prefix_max_expansions_ (performance setting used for prefix queries).

{% note %}
We recommend that you don't change the default _prefix_max_expansions_ value.
{% endnote %}

If you wish to change one of the parameters, you should open the _alien4cloud-config.yml_ file and go to the elasticSearch configuration section.

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
  data: ${user.home}/.alien/elasticsearch/data
  work: ${user.home}/.alien/elasticsearch/work
  logs: ${user.home}/.alien/elasticsearch/logs
{% endhighlight %}

## Configure a remote Elastic Search (throw a no data node)

In order to configure a remote Elastic Search, you should edit the following:

* In _alien4cloud-config.yml_ file, edit the elasticSearch section and change client from false to true:

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
discovery.zen.ping.unicast.hosts: 129.185.67.112
{% endhighlight %}

{% note %}
In this mode, a 'client' node is initialized and joins the cluster. It doesn't store any data and act as a proxy. The machines must be visible for each other (in other words, they should be into the same network).
{% endnote %}

## Configure a remote Elastic Search (using a standalone transport client)

In this mode, we use a simple standalone client that can be in another network as long as the cluster can be reachable.

* In _alien4cloud-config.yml_ file, edit the elasticSearch section and set 'client' and 'transportClient' to true, and indicate the cluster host and port:

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

* In the _elasticsearch.yml_ make sure that the cluster name is well defined (should be the same than the cluster).

{% highlight yaml %}
cluster.name: escluster
{% endhighlight %}

# Directories configuration

ALIEN 4 Cloud store various files on the hard drive. Cloud Service archives, Artifacts overriden in the topologies, plugins archives etc. Directories can be configured in the _alien4cloud-config.yml_ file.

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

In case there is no admin user in it's repository, ALIEN 4 Cloud can automatically create a user with ADMIN rights. The user name and password are configured in the _alien4cloud-config.yml_ file. Of course if an ADMIN user already exists in ALIEN then no user is created and this section is ignored.

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

See specific [sub-section](#/documentation/admin/ldap.html).

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
