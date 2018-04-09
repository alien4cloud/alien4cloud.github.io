---
layout: post
exclude_from_search: true
title: Developer Guide
root: ../
node_name: index
categories: DEVELOPER_GUIDE
published: true
---

We welcome the contributions to Alien4Cloud!

# Getting help

If you are looking for something to work on, or need some expert assistance in debugging a problem, our community is always eager to help. You can start by opening an issue in our [github](https://github.com/alien4cloud/alien4cloud).

# Setting up development environment

### Install Prerequisites
Alien4Cloud is written in Java for the backend and requires a JDK 8 or newer (note that we test it using JDK 8 only for now).

* make sure you have a JDK 8 installed  
* make sure you have Maven installed (team is using v3.0.5)
* install Ruby
* install Python
* install Node.js (team is using v4.8.0) to get npm command. Note that you need a recent version of npm (2.7.4) in order to build a4c.
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

On macOS Sierra the previous command may failed, try this one instead:
{% highlight bash %}
sudo gem install -n /usr/local/bin compass
{% endhighlight %}

* and grunt-contrib-compass

{% highlight bash %}
$ npm install grunt-contrib-compass --save-dev
{% endhighlight %}

run the folowing command to build the project:

{% highlight bash %}
$ mvn clean install -Dmaven.wagon.http.ssl.insecure=true -Dmaven.wagon.http.ssl.allowall=true
{% endhighlight %}

### Setting up your IDE

You can of course use the IDE that you like the most but some pre-requisite are required in order to work on alien 4 cloud.

We use [Lombok](https://projectlombok.org) in order to avoid writing getter and setters in our code when not required and for some other nice features it provides. You must install plugin or setup your IDE to support lombok (Our team use both IDEA and Eclipse so feel free to ask questions on slack if you have any trouble).

### Launching Alien4Cloud in dev mode

Launch the REST API using maven

{% highlight bash %}
cd alien4cloud-rest-api

mvn spring-boot:run
{% endhighlight %}


### Launching the UI

{% highlight bash %}
cd alien4cloud-ui

grunt serve
{% endhighlight %}

Note: if you'd like to launch the components directly from IntelliJ you need to enable the profile 'idea'.


## Code guidelines

### Java code

Please follow the formatting guidelines for alien4cloud. You can find a formatting configuration for eclipse [here](../files/alien-for-cloud-formatter.xml). The same configuration can be used within IDEA through the [Eclipse Code Formatter](http://plugins.jetbrains.com/plugin/?idea&id=6546) plugin.

### Javascript code

We have a jshint configuration file in the alien4cloud-ui project. Most of the tools to edit Javascript code can consume or have plugins that provides live validation and can be configured to use the jshint file within the ui project.

{% highlight bash %}
alien4cloud-ui/src/.jshintrc
{% endhighlight %}

Note: we encourage you to use the same configuration for your plugins.

# Contributing to plugins

### Creating new plugins

ALIEN has been designed to be easily extended and integrated with other systems. It uses a plugin mechanism in order to provide extensions.

Plugins are really opened and you can have access to any core feature from your plugin allowing very powerfull operations through plugins. It is possible to create backend oriented plugins (Java/Spring based), UI plugins (AngularJS) or plugins with both backend and ui components. You can find more informations on plugins in the sub-section of the developer guide.

### Existing plugins
* [Cloudify3 plugin](https://github.com/alien4cloud/alien4cloud-cloudify3-provider): This is an orchestrator plugin that aims to provide the ability to deploy your applications using the opensource cloudify3 orchestration technology.
* [Security Group plugin](https://github.com/alien4cloud/alien4cloud-security-group-plugin): This is a topology modifier that will automatically add security groups based on component endpoints of the topology.
* [Vault plugin](https://github.com/alien4cloud/alien4cloud-vault-plugin): This is a plugin integrating Vault into Alien4Cloud.
* [Repository plugin](https://github.com/alien4cloud/alien4cloud-repository-plugins): This is a plugin allowing to deal with the HTTP csar repository.
* [Marathon plugin](https://github.com/alien4cloud/alien4cloud-marathon-plugin): A plugin to integrate Marathon as an orchestrator for Alien4cloud. It features deployment of complex Docker containers topologies on a Mesos/Marathon cluster using MarathonLB and MesosDNS for service discovery.
* [Kubernetes plugin](https://github.com/alien4cloud/alien4cloud-kubernetes-plugin): A plugin that allows transformation of a TOSCA generic topology into a specific kubernetes topology.


# Integrating with Alien 4 Cloud via API

Another way to contribute to Alien4Cloud ecosystem is to leverage the API to build integrations with other systems using Alien 4 Cloud REST API.

You can browse the REST API directly on your ALIEN's running instance (`http://\<alien-url\>/swagger-ui.html`, e.g., `http://localhost:8088/swagger-ui.html`).
