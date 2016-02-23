---
layout: post
title:  Plugins
root: ../
categories: DEVELOPER_GUIDE
parent: []
node_name: plugins
weight: 200
---

Alien 4 Cloud allows developer to extends the application by adding plugins. A plugin may contains some java services, some REST controllers and UI elements. The most common plugins that we ship with alien4cloud are orchestrator plugins.

## Plugin archive

ALIEN plugins are package as a zip archive that must contains the following hierarchy:

* The __root__ of the zip file may contain java classes and resources (basically it will be added to the plugin's classpath).
* The __lib__ folder (optional) must contain all java archives (jar) required for the plugin to run. They will be added to the plugin classloader. Of course you should not add ALIEN 4 cloud jars here as they will be loaded through the plugin parent classloader.
* __META-INF/plugin.yml__ contains the plugin description and entry point informations (the plugin descriptor).
* The __ui__ folder contains all ui elements including javascript files, css html and any other static files.

{% highlight bash %}
├── javapackage
│   ├── MyClass.class
│   └── ...
├── lib
│   └── library.jar
├── META-INF
│   └── plugin.yml
├── ui
│   └── scripts
│   │   └── plugin.js
│   │   views
│   │   └── view.html
{% endhighlight %}

## The plugin descriptor

The plugin descriptor (META-INF/plugin.yml) is mandatory and is the entry point of the plugin for ALIEN. As many other configuration elements it is a YAML file that allows to describe your plugin.

### grammar

As detailed in the architecture section, a ALIEN plugin is actually a Spring sub-context; As so it requires a Spring context configuration entry point. For ALIEN plugins we have decided to allow only java based configuration and thus a plugin must specify a configuration class in it's descriptor.
The configuration class is the only mandatory class in a plugin so it can be loaded by ALIEN.

{: .table .table-bordered}
| Keyname         | Type                | Required | Description |
|:----------------|:--------------------|:---------|:------------|
| id | string | yes | Identifier of the plugin. Must be unique within alien4cloud. |
| name | string | yes | The name of the plugin as it will be displayed to user. |
| version | string | yes | The version of the plugin. |
| description | no | string | The optional description of the plugin. |
| configuration_class | yes | string | The name of the java class to load as Spring context configuration (see Plugin context entry point). |
| ui_entry_point | no | string | Path of the javascript file of your ui plugin that should be loaded as entry point. The path must be relative to the ui folder. More details in the ui plugin section. |
| component_descriptors | no | list of component_descriptor | Optional list of beans that you wan't to expose from your plugin so they will be available to other plugins. To be honest such usage is currently not really useful as we cannot yet specify loading priority or dependencies for plugins. |

### example

<div data-gist="https://gist.github.com/lucboutier/5fa28bbc876303b4c8c2.js"></div>

## Plugin context entry point

As described higher, a plugin in ALIEN is a spring context that inherits from ALIEN context. This allows you to build plugin that have full access to the repository or any other component in ALIEN.

When loading a plugin, ALIEN for cloud will create the spring context based on the spring java configuration class defined in the plugin descriptor. It will then lookup the spring context for plugin beans matching one of a supported plugin type (like a bean that implements IPaaSProvider for example).

Below is an example of a plugin spring context java configuration that acts as an entry point for the cloudify plugin.

<div data-gist="https://gist.github.com/lucboutier/6b79c8cabecf6546b138.js"></div>

{% info %}
Even 'pure' ui plugins must have a java/spring entry point.
{% endinfo %}

## Plugin configuration

ALIEN provides an easy way to configure a plugin by generating the UI based on a configuration object using introspection. It also manages persistency of the configuration.

In order to enable plugin configuration, one of the bean in your spring context must implements the _IPluginConfigurator<T>_ interface. This interface (see signature below) allow to provide a POJO that will act as the configuration object for the whole plugin.

<div data-gist="https://gist.github.com/lucboutier/134921b861cf8b0fd44a.js"></div>

{% warning %}
Current version of ALIEN 4 Cloud does not supports more than a single configuration. Thus you should make sure that a single IPluginConfigurator exists in your plugin spring context.
{% endwarning %}

## Getting started with plugin development

The easiest way to get started with plugin development is to clone and copy the [alien4cloud-plugin-sample](https://github.com/alien4cloud/alien4cloud-plugin-sample) from github.
