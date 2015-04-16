---
layout: post
title:  Plugin(s) management
root: ../../
categories: DOCUMENTATION
parent: [user_guide]
node_name: plugin_management
weight: 75
---

Plugins provides some additional functionalities to Alien 4 Cloud. We currently support paas provider plugins (orchestrators interface with Alien 4 Cloud) but aims to provide much more plugins with various functionalities and even UI components.

## Installing plugin in Alien 4 Cloud


## Plugin configuration

Some plugins may requires specific configuration that is global to the plugin.


### Advanced plugins configurations

The configuration detailed in the previous section is global for the plugin. Some plugins may requires some specific configurations that you can find at other places in the application. Your should refer to the plugin specific documentation to know more about it.

For example, PaaS providers plugins actually are able to manage multiple instances of orchestrators, the specific configuration for each instance is managed at the cloud level.

## Plugin creation

If you want to create new plugins for Alien 4 Cloud please refer to the [developer guide]().
