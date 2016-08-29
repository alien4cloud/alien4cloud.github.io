---
layout: post
title: Developer Guide
root: ../
node_name: index
categories: DEVELOPER_GUIDE
published: true
---

# How to contribute

## Building alien 4 Cloud

Alien 4 Cloud is written in java for the backend and requires a JDK 8 or newer (note that we test it using JDK 8 only for now).

* make sure you have a JDK 8 installed
* make sure you have Maven installed (team is using 3.0.5)
* install Ruby
* install Python
* install Node.js to get npm command. Check here http://nodejs.org. Note that you need a recent version of npm (2.7.4) in order to build a4c.
* install bower

{% highlight bash %}
$ sudo npm install -g bower
{% endhighlight %}

* install grunt

{% highlight bash %}
$ sudo npm -g install grunt-cli
{% endhighlight %}

* install compass

{% highlight bash %}
$ gem install compass
{% endhighlight %}

* and grunt-contrib-compass

{% highlight bash %}
$ npm install grunt-contrib-compass --save-dev
{% endhighlight %}

run the folowing command to build the project:

{% highlight bash %}
$ mvn clean install -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true
{% endhighlight %}

## Setup your IDE

You can of course use the IDE that you like the most but some pre-requisite are required in order to work on alien 4 cloud.

We use [Lombok](https://projectlombok.org) in order to avoid writing getter and setters in our code when not required and for some other nice features it provides. You must install plugin or setup your IDE to support lombok (Our team use both IDEA and Eclipse so feel free to ask questions on slack if you have any trouble).

## Code guidelines

### Java code

Please follow the formatting guidelines for alien4cloud. You can find a formatting configuration for eclipse [here](../files/alien-for-cloud-formatter.xml). The same configuration can be used within IDEA through the [Eclipse Code Formatter](http://plugins.jetbrains.com/plugin/?idea&id=6546) plugin.

### Javascript code

We have a jshint configuration file in the alien4cloud-ui project. Most of the tools to edit Javascript code can consume or have plugins that provides live validation and can be configured to use the jshint file within the ui project.

{% highlight bash %}
alien4cloud-ui/src/.jshintrc
{% endhighlight %}

Note: we encourage you to use the same configuration for your plugins.

# Contribute to existing plugins

* Cloudify 3 plugin: This is an orchestrator plugin that aims to provide the ability to deploy your applications using the opensource cloudify 3 orchestration technology.

# Create new plugins

ALIEN has been designed to be easily extended and integrated with other systems. It uses a plugin mechanism in order to provide extensions.

Plugins are really opened and you can have access to any core feature from your plugin allowing very powerfull operations through plugins. It is possible to create backend oriented plugins (Java/Spring based), UI plugins (AngularJS) or plugins with both backend and ui components. You can find more informations on plugins in the sub-section of the developer guide.

# Integrate with Alien 4 Cloud by consuming the API

Another way to contribute to the Alien 4 Cloud ecosystem is to leverage the API to build integrations with other systems using Alien 4 Cloud REST API.

You can find the documentation of the REST API (here)[] or just browse it directly on your ALIEN's running instance (`http://\<alien-url\>/swagger-ui.html`, e.g. `http://localhost:8088/swagger-ui.html`) and this section will not provides more details about it.
