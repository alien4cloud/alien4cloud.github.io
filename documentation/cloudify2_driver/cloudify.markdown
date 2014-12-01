---
layout: post
title:  Customizing Cloudify
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index, cloudify_2_prerequisites]
node_name: cloudify_2_customizing_cloudify
weight: 100
---

Before everything, you need a running instance of Cloudify. The instance can be launched wherever you want, but make sure to have access to the REST API's URL, which will be needed later on.

### Setup ###

1. Make sure you have installed a Java JDK 1.6 or higher and set your JAVA_HOME properly. The recommended version is [JDK 7u45][jdk7u45-link]
2. [Download][CDFY_archive-link] and unzip the Cloudify distribution file.

Now for this driver to work, you have to customize your instaled Cloudify.

### Custom events ###
In order to handle Cloudify lifecycle events, and to emit our own events, we need the **alien4cloud-cloudify-custom-events**. This provides a REST API and uses the Gigaspace management space to store the events.

1. [Download the zip archive](../../files/cloudify2_driver/alien4cloud-cloudify-events-assembly-0.0.2-SNAPSHOT-distrib.zip) and unzip it into the `upload` folder of your prefered cloud driver (e.g. `gigaspaces-cloudify-2.7.0-ga/clouds/openstack-havana/upload`)
2. In the same `upload` folder, edit the `bootstrap-management.sh`:

* Locate the ligne
{%highlight sh%}
./cloudify.sh $START_COMMAND $START_COMMAND_ARGS
{%endhighlight%}
* add right after that line, add the following snippet
{%highlight sh%}
if [ "$GSA_MODE" = "lus" ]; then
chmod +x ${WORKING_HOME_DIRECTORY}/events/bin/gsDeployEventsWar.sh
${WORKING_HOME_DIRECTORY}/events/bin/gsDeployEventsWar.sh
fi
{%endhighlight%}

Bootstrap your cloud, and when done, note the REST API URL (Rest service bellow)
{%highlight console%}
Rest service is avalaible at: http://management_ip:8100
Webui service is avalaible at: http://management_ip:8099
{%endhighlight%}

Typing `http://management_ip:8081/events/test` in a web browser should display the message : `is running`

Now that you have a *JAVA_HOME* set and a customized running instance of Cloudify, you can move to the next step, [how to install and configure the driver](install_config.html "install and configure").

{% warning %}
If you want to use the provider's blockStorage feature, in addition to the [storage configuration](http://getcloudify.org/guide/2.7/developing/storage.html "cloudify storage") of you cloud, you must make sure to have the property `privileged true` in all of your compute templates' definitions.
{% endwarning%}

<!-- Links -->

[jdk7u45-link]: http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html#jdk-7u45-oth-JPR "JDK7u45 Download"

[CDFY_archive-link]: http://getcloudify.org/downloads/get_cloudify_2x.html

[cloudify-custom-events-repo]: # "not yet accessible"


