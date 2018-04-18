---
layout: post
title:  Installing and configuring
root: ../../../
categories: DOCUMENTATION-2.1.0
parent: [orchestrators, marathon_driver]
node_name: marathon_install
weight: 2000
---

Here is the procedure to install and configure the Marathon driver.

## Download

* [last stable version](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-marathon-plugin&v={{ site.last-version }}&p=zip){: .btn}{: .btn-success}{: .download-button}{: .navbar-btn} works with the latest stable alien version.

[comment]: # (* [last build version](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource-snapshot&g=alien4cloud&a=alien4cloud-marathon-plugin&v={{ site.last-version }}&p=zip){: .btn}{: .btn-warning}{: .download-button}{: .navbar-btn} works with the latest build alien version.)

## Install
The driver is packaged as an ALIEN plugin, install it in `Administration > Plugins` of your running instance of ALIEN.
using the plugin view.

### Create the orchestrator
1. Login as an admin, and create an orchestrator: `Administration > Orchestrators > New Orchestrator`.
2. As `Plugin` for this orchestrator, make sure to select ***Marathon*** from the list. Validate.

### Configure the orchestrator
On the orchestrator list, select and click on the newly created orchestrator.

Set up the orchestrator by simply giving Marathon's URL.
Create an empty location - you don't need to create any resources for now.
