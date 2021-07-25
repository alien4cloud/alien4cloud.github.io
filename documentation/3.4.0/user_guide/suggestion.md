---
layout: post
title: Suggestions
root: ../../
categories: DOCUMENTATION-3.4.0
parent:
  - user_guide
node_name: suggestions
weight: 600
published: true
---
{% summary %}{% endsummary %}

# Basic mode
 Suggestions provide default values for some usual fields. The suggestions are available on the properties `architecture`, `type` and `distribution` of the capability `tosca.capabilities.OperatingSystem`. For example, when you set the distribution property of a Compute, Alien will suggest some value.

![Property suggestions](../../images/3.4.0/user_guide/suggestions/suggestion_list.png)

If your value is not in the suggestions, a modal will appear and you can add the new value to the suggestions values.

![Property modal](../../images/user_guide/topology/property_modal.png)


# Configurable suggestion mode

Since 3.4.0 version, injecting suggestions to help end-user when typing values in A4C UI with a plugin.
It can be used in **topology edition**, in deployment preparation, ...
A specific plugin can be implemented to get data for a property from an external database for instance.
The [git plugin sample project](https://github.com/alien4cloud/alien4cloud-plugin-sample/tree/3.0.x/alien4cloud-plugin-sample-suggestions) illustrates the way it can be done. 
There is alson the [RMS Scheduler plugin](https://github.com/alien4cloud/alien4cloud-rms-scheduler-plugin) project that suggests some cron expression examples.

![Property suggestions 2 ](../../images/3.4.0/user_guide/suggestions/suggestion2.png)
