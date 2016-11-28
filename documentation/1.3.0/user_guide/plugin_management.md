---
layout: post
title:  Plugin(s) management
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [user_guide, admin]
node_name: plugin_management
weight: 100
---

{% summary %}{% endsummary %}

Plugins allows to provide some additional functionalities to Alien 4 Cloud. Users can create different type of plugins (or plugins with multiple features):

* __Orchestrator plugins__ allows to provide additional orchestrators support to alien 4 cloud to use some other technologies to deploy TOSCA or Specific topologies.
* __Location matching plugins__ allows to override the basic location matching logic provided within Alien 4 Cloud. Only a single Location Matching plugin can be defined in Alien 4 Cloud currently. If more than one location matching plugin is enabled in Alien then one will be picked up randomly.
* __Node matching plugins__ allows to override the basic TOSCA node matching logic within Alien 4 Cloud.
* __Generic extension plugins__ can provide additional UI screens and REST Services allowing any kind of extension to alien 4 cloud and even to override some of the alien UI components (it is not possible to override native rest services).

# Managing plugins in Alien 4 Cloud

## Installing plugin in Alien 4 Cloud

{%inittab%}
{% tabcontent Drag and Drop enabled %}

*Drag* you archive file > *Drop* it on the **dash dotted** area

[![Upload an archive file with D&D](../../images/user_guide/upload-plugin-archive.png)](../../images/user_guide/upload-plugin-archive.png)
{%endtabcontent%}
{% tabcontent Drag and Drop disabled %}

Click on *[Upload plugin]* > *Select* your archive (The file is automaticly uploaded)

[![Upload an archive file without D&D](../../images/user_guide/upload-plugin-wihout-drag-and-drop.png)](../../images/user_guide/upload-plugin-wihout-drag-and-drop.png)
{%endtabcontent%}
{%endinittab%}

{%warning%}
After installing, removing, disabling or enabling a plugin that provides UI components user must refresh it's browser page in order to reload plugin's javascript code that may have changed.
This is especially true when removing or disabling a plugin as the rest services used by the plugin's UI won't be available anymore eventually causing unexpected 500 errors.
{%endwarning%}

## Plugin configuration

Some plugins may requires specific configuration that is global to the plugin. In case a plugin can be configured you will see the following icon : ![configure plugin](../../images/user_guide/configure-plugin.png){: .inline}

### Advanced plugins configurations

The configuration detailed in the previous section is global for the plugin. Some plugins may requires some specific configurations that you can find at other places in the application. Your should refer to the plugin specific documentation to know more about it.

For example, PaaS providers plugins actually are able to manage multiple instances of orchestrators, the specific configuration for each instance is managed at the cloud level.

## Plugin creation

If you want to create new plugins for Alien 4 Cloud please refer to the [developer guide](#/developer_guide/index.html).

# Orchestrators

Alien 4 Cloud is not managing actual runtime state of deployments by itself. In order to do so it delegates runtime to orchestrators, as well refered in Alien 4 Cloud as _PaaS Providers_. A PaaS Provider in A4C is a plugin that will be associated with _Clouds_. It is possible of course to have multiple clouds using the same PaaS Provider as well a multiple clouds with different PaaS Providers.

We currently support Cloudify 3 orchestrators as PaaS Providers.
