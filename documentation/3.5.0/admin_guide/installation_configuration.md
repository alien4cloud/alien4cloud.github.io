---
layout: post
title:  Installation and configuration
categories: DOCUMENTATION-3.5.0
root: ../../
parent: [admin]
node_name: intallation_configuration
weight: 10
---

{% summary %}{% endsummary %}

{% warning %}
This section describe a deprecated manual installation and configuration of Alien 4 Cloud. We strongly recommend you to automate your installation using [A4C Spray](https://github.com/alien4cloud/alien4cloud-spray/tree/develop) project (or alternatively use [Yorc bootstrap](https://yorc.readthedocs.io/en/stable/bootstrap.html)).
{% endwarning %}

{%warning%}
<h5>Supported platforms</h5>
To get more informations about the supported platforms, please refer to [this section](#/documentation/3.0.0/admin_guide/supported_platforms.html).
<h5>Ports requirements</h5>
To get more informations about the ports requirements, please refer to [this section](#/documentation/3.0.0/admin_guide/ports_requirements.html).
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

java $JAVA_OPTIONS -jar alien4cloud-ui-{version}-standalone.war
{% endhighlight %}

{%info²%}
<h5> JVM tunning</h5>
See [JVM tunning section](#/documentation/3.0.0/admin_guide/advanced_configuration.html) for advanced Alien4Cloud JVM options.
{%endinfo%}

# Logging configuration

If you need to customize log4j2 (in order to activate some loggers, change the log file location ...) add a **log4j2.xml** in the config folder and specify the classpath for java :

{% highlight bash %}
java $JAVA_OPTIONS -cp config/:alien4cloud-ui-{version}-standalone.war org.springframework.boot.loader.WarLauncher
{% endhighlight %}

You can find a log4j2 sample configuration file at [log4j2.xml](https://github.com/alien4cloud/alien4cloud/blob/develop/alien4cloud-ui/src/main/resources/log4j2.xml)

For example, to use Alien with the level debug :

Replace
{% highlight sh %}
<root level="info">
{% endhighlight %}

by
{% highlight sh %}
<root level="debug">
{% endhighlight %}

## Specific appender for the deployment logs

Alien4Cloud offer the possibilty to see / search deployment logs from orchestrators.
Since Alien 1.4, a specific logger is used for this events.

{% highlight bash %}
<logger name="DEPLOYMENT_LOGS_LOGGER" level="info" additivity="false">
    <AppenderRef ref="DEPLOYMENT_LOGS_APPENDER" />
</logger>
{% endhighlight %}


You can enable this logger in **alien4cloud-config.yml** :

{% highlight bash %}
logs_deployment_appender:
  enable: true
{% endhighlight %}

This logger has a rolling file appender, you can adapt it to your requirements.
By default, logs older than 30 days are automatically deleted.

For example, you can change this time retention in the **log4j2.xml** config to 10mn:

Replace
{% highlight sh %}
<IfLastModified age="30d"/>
{% endhighlight %}

by
{% highlight sh %}
<IfLastModified age="10mn"/>
{% endhighlight %}


# Audit configuration

You can personalize the operations audit in it's configuration page. You can select for each controller the rest method to monitor.

[![Audit configuration](../../images/admin_guide/admin-audit-configuration-page.png)](../../images/admin_guide/admin-audit-configuration-page.png)
