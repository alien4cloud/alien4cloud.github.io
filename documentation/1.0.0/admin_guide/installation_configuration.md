---
layout: post
title: Installation and configuration
categories: DOCUMENTATION
root: ../../
parent: 
  - admin
node_name: intallation_configuration
weight: 10
published: true
---


This section describes installation and configuration of Alien 4 Cloud for a production mode. If you whish to use Alien 4 Cloud for a demo or development mode please refer to the [getting started](#/documentation/1.0.0/getting_started/getting_started.html) guide.

{%warning%}
<h5>Important: security issue </h5>
Alien 4 Cloud used a version of ElasticSearch concern by a security issue. To prevent an attack, make sure to secure the port of ES (9200 as default).
{%endwarning%}

# Alien 4 Cloud configuration

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

java $JAVA_OPTIONS -jar alien4cloud-ui-1.1.0-{version}-standalone.war
{% endhighlight %}

# Logging configuration

If you need to customize log4j (in order to activate some loggers, change the log file location ...) add a log4j.properties in the config folder and specify the classpath for java :

{% highlight bash %}
java $JAVA_OPTIONS -cp config/:alien4cloud-ui-1.1.0-{version}-standalone.war org.springframework.boot.loader.WarLauncher
{% endhighlight %}

You can find a log4j sample configuration file at [log4j.properties](https://github.com/alien4cloud/alien4cloud/blob/master/alien4cloud-ui/src/main/resources/log4j.properties)

For example, to use Alien with the level debug, you need to replace the *info* keyword by *debug* in the second line.

# Audit configuration

You can personalize the operations audit in it's configuration page. You can select for each controller the rest method to monitor.

[![Audit configuration](../../images/admin_guide/admin-audit-configuration-page.png)](../../images/admin_guide/admin-audit-configuration-page.png)
