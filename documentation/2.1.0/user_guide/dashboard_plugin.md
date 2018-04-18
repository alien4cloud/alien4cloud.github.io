---
layout: post
title: Dashboards
root: ../../
categories: "DOCUMENTATION-2.1.0"
parent:
  [user_guide]
node_name: dashboard_plugin
weight: 1100
---

{% summary %}{% endsummary %}

{%info%}
<h5>Premium feature</h5>
Dashboard plugin is a premium feature.
{%endinfo%}

Dashboard plugin objective is to provide more visibility among users like application manager and admin. The purpose is to provide an easy way to visualize occuring resources and manage it.
This plugin add several screens in alien4Cloud and display information about how many nodes are deployed for an application, or for an orchestrator, etc..
It also collects important information for billing purpose like maximum nodes that has been deployed at a moment.

# How to use it ?

## Load it
Like every alien's plugin, dashboard plugin can be drag & drop in "Admin > plugins" section.

## Configure it
Dashboard plugin has default configuration but you can define "instanceReports" frequency refreshment. Instance reports task collect information about nodes that are deployed or undeployed to create a global view.

This property is a cron expression like for example "0 0/5 * * * *" (every 5 minutes). You can define frequency as you wish.

#Views

##Home view

On home view we can find (from left to right) :

- Maximum number of nodes ever reached and when it has been reached
- A sunburst graph about nodes hierarchy
- A timeline graph about number of nodes deployed
- A sunburst graph about number of compute nodes by app, by Iaas

![Home view](../../images/2.1.0/user_guide/dashboard/screen_home.png)

##Application view
A new tab is available in "Application" view and give access to a timeline graph about number of resources deployed on a period. It displayed on line by type of nodes : alien.nodes.Compute, alien.nodes.Network and alien.nodes.BlockStorage.

![Application view](../../images/2.1.0/user_guide/dashboard/screen_appli.png)

##Orchestrator view

A new tab is available in "orchestrator" view and give access to :
- A timeline graph about number of resources deployed on a period. It displayed on line by type of nodes : alien.nodes.Compute, alien.nodes.Network and alien.nodes.BlockStorage.
- A bar chart graph a resources currently running by type : alien.nodes.Compute, alien.nodes.Network and alien.nodes.BlockStorage.
![Orchestrator view](../../images/2.1.0/user_guide/dashboard/screen_orc.png)
