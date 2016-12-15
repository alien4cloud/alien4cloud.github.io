---
layout: post
exclude_from_search: true
title: UI plugins
root: ../
categories: DEVELOPER_GUIDE
parent: [plugins]
node_name: ui_plugins
weight: 200
---

{% info %}
Alien 4 Cloud is an AngularJS 1 application and our plugin system relies on it. This documentation is not about AngularJS and we expect that you understand the framework before you write ui plugins.
{% endinfo %}

You can find an example of a plugin that contains some ui code on our [github](https://github.com/alien4cloud/alien4cloud-plugin-sample).

This plugin contains all the packaging structure to package and also easily develop your plugin.

{% warning %}
<h5>UI plugins isolation</h5>
We have found some issues in 1.1.0 version in isolation of ui plugins that we resolved in 1.2.0 version. This however requires that your plugin defines a namespace in the require configuration. We have updated our plugin sample in order to take that update into account.
{% endwarning %}

# Understanding alien's ui plugin packaging

Our sample ui plugin ships with a packaging process that is similar to alien4cloud and that we recommend you to follow. On top of the packaging process we leverage __maven__ as every plugin requires a minimal java configuration spring bean (see the [main plugin documentation](#/developer_guide/plugin.html)).

__Maven__ delegates to __Grunt__ the packaging of the ui part of the plugin. Grunt basically does a few things but the most important from a packaging perspective is the usage of __requirejs__ to create a single script that contains the plugin and it's dependencies.

__Requirejs__ grunt plugin configuration files lies in _src/main/build/config/requirejs.js_.

## Configuring your module entry point

In order to package the application __Requirejs__ uses two main elements:

* The __mainConfigFile__ (_./src/main/webapp/scripts/plugin-require.config.js_) in our sample plugin.
* The module(s) to package, in our case it is called _'a4c-plugin-sample'_:

<div data-gist="https://gist.github.com/lucboutier/ef213dab0190659cd25e.js"></div>

Of course the _'a4c-plugin-sample'_ is defined in the main config file to point to our entry point script:

<div data-gist="https://gist.github.com/lucboutier/206f1388fcd00e3e945d.js"></div>

Our Require JS configuration specifies the application root directory to be _appDir: '<%= yeoman.app %>',_ which is defined in our main gruntfile _Gruntfile.js_ to _src/main/webapp_. Hence require js will look for the __src/main/webappscripts/plugin.js__ file as your module entry point. Note that the _.js_ extension is added automatically by requirejs.

{% note %}
It is a best practice to use a module name that will be the same as the plugin id (as defined in your plugin descriptor) even if that is not required.
{% endnote %}

## Referencing alien4cloud existing modules and dependencies

As your plugin will run in alien4cloud context you should minimize the scripts that you are going to package in your plugin by referencing those defined in the core product.

For example if you need jquery, lodash or d3 for example you can just reference them as they will be provided by alien4cloud. In order to do so just use require to get an instance of the required module within your script:

<div data-gist="https://gist.github.com/lucboutier/ef02c6cc8aec37cfd2fe.js"></div>

When requirejs will build the project and package all script within a single file it will try to find some modules called _lodash_ _jquery_ and _d3_. Such have not been defined yet and the build will fail with the following error: _Error: ENOENT: no such file or directory, open '/path_to_your_project_directory/alien4cloud-plugin-sample/target/webapp/lodash.js'_. In order to avoid that we must instruct requirejs that there is no need to look for this file in package phase (requirejs will try to get it only at runtime - so it has to exists within alien4cloud core ;)). In the requirejs grunt task config file (_src/main/build/config/requirejs.js_) we will add the following information:

<div data-gist="https://gist.github.com/lucboutier/59ebdd98c0a2b7fa41c1.js"></div>

Now requirejs know that these files are provided and should not be packaged within the plugin!

## Referencing new dependencies

Well now we know how to reference alien4cloud scripts in our plugin but your plugin may also require some dependencies that are not already packaged within alien4cloud core. So first of all let's get the dependency in our project!

Let's suppose that we want to use the _angular-ui-sortable_ library that is not included in alien4cloud core.

We use bower to manage javascript dependencies so the first thing will be to edit the _bower.json_ configuration file to add our dependency.

<div data-gist="https://gist.github.com/lucboutier/af83bad0d768e5b62f28.js"></div>

Then we need to define the module within the requirejs _mainConfigFile_ (src/main/webapp/scripts/plugin-require.config.js):

<div data-gist="https://gist.github.com/lucboutier/4f41684bef561fd82f09.js"></div>

Now you can use it or make sure it is loaded before rendering a view by using require within your scripts:

<div data-gist="https://gist.github.com/lucboutier/560d04e508014144f7c4.js"></div>

## Referencing your own scripts

Well this is quite obvious but you will probably have more than one script, controller, service, directive within your plugin. As we have defined already our entry point we can reference another script from it (the other script will be able to also reference it's dependencies etc.).

As you remember the base directory of the plugin application, as defined in requirejs, is the _src/main/webapp_ folder. So loading a _hello-service.js_ script, from the _src/main/webapp/scripts_ directory, is just as easy as the following:

<div data-gist="https://gist.github.com/lucboutier/d2d56359a20e068e16da.js"></div>

# Accessing plugin static resources

Now that you know how to manage your scripts and package them as a single file with requirejs, you may want to access the static resources of your plugin (images, html view, css, etc.).

Our backend packaging system is a bit tricky and all plugin's static files (basically all files within the _ui_ folder of your plugin actually) can be accessed from a url that contains your plugin unique id as generated by alien4cloud. Long make short, you actually don't know when writing the plugin how to access them.

Hopefully we provides you with a way to easily retrieve them! The __plugins__ module of alien4cloud allows you to get the base url of your plugin ui directory. For example, to get the _views/hello.html_ resource you can just do the following:

<div data-gist="https://gist.github.com/lucboutier/a8269a5689898bef8f1b.js"></div>

Where the pluginId value should be the id of your plugin as defined in the plugin descriptor.

# Adding translations files
You might have some keys to translate when doing ui views. You can register your translations files by using the `registerTranslations` function of the **plugins** module.  
The function takes as argument, the prefix (path to the files, including their prefix) and the suffix(`json` by default if not provided) of the translation file. Note that the files are static resources, thus, you must prefix their access path with the base url of our plugin ui provided by alien4cloud in the __plugins__ module.  
For example, assuming you have a languages data folder `data/languages/` with the following files for english and french translation: `my_plugin_locale-en-us.json, my_plugin_locale-fr-fr.json`, you can register them by doing the following (somewhere in one of your scripts, recommended to do it in your entry point script):

{% highlight javascript%}
//[...]
var pluginId = 'a4c-plugin-sample';
var plugins = require('plugins');
//local prefix is: my_plugin_locale-
//global prefix would be: plugins.base(pluginId) + 'data/languages/my_plugin_locale-'
//suffix is: json
plugins.registerTranslations(plugins.base(pluginId) + 'data/languages/my_plugin_locale-', 'json')
//[...]
{% endhighlight%}


# Alien 4 cloud view routing and states management

Alien 4 cloud is an AngularJS 1 application however we have chosen to use the ui-routing project in order to manage routing within our application. We also decided to add some additional sugaring around it in order to manage also our menus and style selection automatically.

## Register a new state
