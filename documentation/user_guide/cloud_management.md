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

In order to configure a cloud you must have installed a paas provider plugin first see [Plugin management]().

{%info%}
<h5>Supported orchestrators</h5>
We are currently supporting the opensource orchestrators cloudify 2 and cloudify 3 (Full re-written engine with new DSL - much better and flexible but that we felt prior to the up-comming 3.2 a bit light for production use).
{%endinfo%}

# Cloud creation

TODO

# Cloud configuration

TODO

The configuration tab on the cloud view allows to setup the provider specific configuration. It is mostly used to configure the provider connexion parameters so Alien 4 Cloud can communicate with the orchestrator engine server.

This configuration may be specific to the orchestrator used and you should refer to the orchestrator specific guide.

# Cloud resources setup

TODO
