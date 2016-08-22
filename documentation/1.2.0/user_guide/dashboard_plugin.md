---
layout: post
title: Dashboard plugin
root: ../../
categories: "DOCUMENTATION-1.2.0"
parent:
  [user_guide]
node_name: dashboard_plugin
weight: 200
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

On home view we can find (from top to bottom) :

- Maximum number of nodes ever reached and when it has been reached
- Current number of running nodes
- Last refresh date and "Refresh" button
- List of available charts, "Add Chart" button and "Save Dashboard" button
- A sunburst graph about nodes hierarchy
- A timeline graph about number of nodes deployed
- A sunburst graph about number of compute nodes by app, by Iaas

 Button Descriptions :

- Refresh :
 Snapshots of all running application are regularly performed depending on a configurable cron expression (see "Configure it" section). The refresh button allows the user to force the execution on the snapshot task. The Refresh button will make a new snapshot of all running applications and update charts with fresh data.
- Add Chart :
 Add the currently selected chart (in list of available charts) to the dashboard view
- Save Dashboard :
 Save the current organization of chart in the dashboard (size and positions of charts)


![Home view](../../images/1.2.0/user_guide/dashboard/screen_home.png)

##Application view
A new tab is available in "Application" view and give access to a timeline graph about number of resources deployed on a period. It displayed on line by type of nodes : alien.nodes.Compute, alien.nodes.Network and alien.nodes.BlockStorage.

![Application view](../../images/1.2.0/user_guide/dashboard/screen_appli.png)

##Orchestrator view

A new tab is available in "orchestrator" view and give access to :
- A timeline graph about number of resources deployed on a period. It displayed on line by type of nodes : alien.nodes.Compute, alien.nodes.Network and alien.nodes.BlockStorage.
- A bar chart graph a resources currently running by type : alien.nodes.Compute, alien.nodes.Network and alien.nodes.BlockStorage.
![Orchestrator view](../../images/1.2.0/user_guide/dashboard/screen_orc.png)
