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

Launch the backend of Alien4Cloud using maven

{% highlight bash %}
cd alien4cloud-ui

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

{: .table .table-striped }
| Plugin| Description|  Since version| 
|:---------|:------------|:---------|
| [alien-maven-repository-plugin](https://github.com/alien4cloud/alien4cloud-premium-repository-plugins/) | Maven Artifact Resolver Plugin| 1.3.0 | 
| [alien-git-repository-plugin](https://github.com/alien4cloud/alien4cloud-premium-repository-plugins/) | Git Artifact Resolver Plugin| 1.3.0 | 
| [alien-http-repository-plugin](https://github.com/alien4cloud/alien4cloud-repository-plugins) | HTTP Artifact Resolver Plugin| 1.3.0 | 
| [alien4cloud-premium-workspace](https://github.com/alien4cloud/alien4cloud-premium-repository-plugins) | Alien 4 Cloud Premium Workspaces| 1.3.0. |
| [alien-vault-plugin](https://github.com/alien4cloud/alien4cloud-vault-plugin) | Integration to HashiCorp Vault|  2.0.0 | 
| [alien4cloud-workflow-scheduler-plugin](https://github.com/alien4cloud/alien4cloud-workflow-scheduler) | Scheduler topology processing plugin using cron executions on Orchestrator| 2.1.0 | 
| [alien4cloud-yorc-provider](https://github.com/alien4cloud/alien4cloud-yorc-provider) | Yorc Orchestrator Provider, manages interactions with a running Yorc instance.| 2.2.0 |
| [alien4cloud-kubernetes-plugin](https://github.com/alien4cloud/alien4cloud-kubernetes-plugin) | Allows transformation of a TOSCA generic topology into a specific kubernetes topology. It contains support for topology and policies modification.| 2.2.0 | 
| [alien4cloud-k8s-spark-jobs](https://github.com/alien4cloud/alien4cloud-k8s-spark-jobs)| Features Spark job modelization for running into Kubernetes cluster | 3.0.0|
| [alien4cloud-kafka-listener](https://github.com/alien4cloud/alien4cloud-kafka-listener)| Subscribes to Kafka Messages. Features application workflow launches, service creation, git repositories pull| 3.0.0 |
| [alien4cloud-k8s-webhook](https://github.com/alien4cloud/alien4cloud-k8s-webhook) | Allows Kubernetes resources to enriched or validated thanks using the webhook mechanism| 3.1.0 |
| [alien4cloud-rms-scheduler-plugin](https://github.com/alien4cloud/alien4cloud-rms-scheduler-plugin) | A rule based scheduler embedding drools.| 3.1.0 |

These 2 sample plugins illustrate how plugins can be used and implemented  :

{: .table .table-striped }
| Plugin| Description|  Since version| 
|:---------|:------------|:---------|
| [sample-topology-validator-plugin](https://github.com/alien4cloud/sample-topology-validator-plugin) | A sample plugin that checks topology nodes name (minimum length and pattern) | 2.2.0 | 
| [alien4cloud-plugin-sample](https://github.com/alien4cloud/alien4cloud-plugin-sample) | Set of modules that illustrate how to write plugin with backend and UI, wizard addon, topology modifier:| 1.3.0 | 


# Integrating with Alien 4 Cloud via API

Another way to contribute to Alien4Cloud ecosystem is to leverage the API to build integrations with other systems using Alien 4 Cloud REST API.

You can browse the REST API directly on your ALIEN's running instance (`http://\<alien-url\>/swagger-ui.html`, e.g., `http://localhost:8088/swagger-ui.html`).
