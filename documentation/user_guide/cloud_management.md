---
layout: post
title:  Cloud(s) management
root: ../../
categories: DOCUMENTATION
parent: [user_guide]
node_name: cloud_management
weight: 100
---

If you are not familiar with the concept of cloud in Alien 4 Cloud please go [here](#/documentation/concepts/clouds.html) first.

# Requirement for cloud creation

Alien 4 cloud is not responsible for actual deployment orchestration but rather interact with existing orchestration technologies. In order to define a cloud you must configure plugins that will be used to actually perform deployment(s) on the defined cloud. Orchestrator plugins are refered in alien as PaaS Provider plugins.

In order to configure a cloud you must have installed a paas provider plugin first see [Plugin management](#/documentation/user_guide/plugin_management.html).

{%info%}
<h5>Supported orchestrators</h5>
We are currently supporting the opensource orchestrators cloudify 2 and cloudify 3 (Full re-written engine with new DSL - much better and flexible but that we felt prior to the up-comming 3.2 a bit light for production use).
{%endinfo%}

# PaaS Providers and plugins

Alien 4 Cloud is not managing actual runtime state of deployments by itself. In order to do so it delegates runtime to what we call PaaS Providers. A PaaS Provider in A4C is a plugin that is associated with a *cloud* configured in A4C. Every cloud may use the same PaaS Provider or may use different PaaS Providers.

Anyway in order to create clouds (that are required to perform deployments) you have to first upload a PaaS provider plugin (Alien 4 Cloud supports other type of plugins as well but we won't detail this here).

The current recommended plugin to start is leveraging Cloudify as the PaaS Orchestrator tool. Cloudify is OpenSource just like A4C and fits very well with it. We are currently using the version Cloudify 2.7. We will move to Cloudify 3.1 once released as GigaSpaces plan to support TOSCA as an input in cloudify 3.1.

## Installing Cloudify 2.7 plugin

Follow [this link](#/documentation/cloudify2_driver/index.html) in order to find more on installation and configuration of your coud environment using cloudify 2.

## Using mock plugin

If you want to try out Alien 4 Cloud but not use a real cloud for deployments you can use the mock PaaS Provider plugin. This is a plugin that we use for our tests and that mock the PaaS orchestrator.

{% warning %}
The mock plugin does not allow you to test any of your components as it do not deploy anything or even call your scripts. To do so you should use a real PaaS Provider plugin like cloudify plugin and deploy on a local cloud technology like Virtua Box or Docker (note that docker support will come with support of cloudify 3).
{% endwarning %}

# Cloud creation

Once you have installed a plugin the admin can go on the cloud page and configure cloud. Remember that you can use the Alien 4 Cloud contextual help in order to be guided directly within the application.

# Cloud configuration

TODO

The configuration tab on the cloud view allows to setup the provider specific configuration. It is mostly used to configure the provider connexion parameters so Alien 4 Cloud can communicate with the orchestrator engine server.

This configuration may be specific to the orchestrator used and you should refer to the orchestrator specific guide.

# Cloud resources setup

TODO

Once created you must configure the cloud. Configuring a cloud requires several step:

* Configure the properties of the PaaS provider (that depends of the choosen one).
* Configure cloud resources (images and flavors) used for resources matchin at deployment time.
