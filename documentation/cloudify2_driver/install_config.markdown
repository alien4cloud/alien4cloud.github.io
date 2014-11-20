---
layout: post
title:  Installing and configuring
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index]
node_name: cloudify_2_install
weight: 2000
---

Find here how to install and configure the Cloudify 2 driver.

## Download ##
First step of course is to download the plugin.

* [last stable version](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-cloudify2-provider&v=LATEST&p=zip){: .btn}{: .btn-success}{: .download-button}{: .navbar-btn} works with the latest stable alien version.
* [last build version](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource-snapshot&g=alien4cloud&a=alien4cloud-cloudify2-provider&v=LATEST&p=zip){: .btn}{: .btn-warning}{: .download-button}{: .navbar-btn} works with the latest build alien version.

## Install ##
The driver is packaged as an ALIEN plugin, install it in `admin > plugins` of your running instance of ALIEN.

## Configure ##
You need to create a cloud and configure it.

### Creating the cloud ###
1. Login as an admin, and create a cloud: `admin > clouds > New Cloud`.
2. As `PaaS provider` for this cloud, make sure to select ***Cloudify 2 PaaS Provider*** from the list. Validate

### Configuring the cloud ###
On the cloud list, select and click on the newly created cloud, then go to the `configuration` tab.

1. **<u>Conection Configuration</u>**: Remember the REST API URL you were told to note when bootstraping your cloud with Cloudify, here is the place you'll need it. Fill the "Cloudify URL" with it, and eventually provide a login (username / password) for the access.<br><br>
[![Connection configuration][config_cloud_cloudifyConUrl]][config_cloud_cloudifyConUrl]<br>

2. **<u>Compute templates</u>**: Here you have to configure the computes templates avalaibles in your cloud. Make sure the `Identifier` match exactly one computes defined in your Cloudify clouds's computes templates.<br><br>
[![Connection configuration][config_cloud_clouifyComputes]][config_cloud_clouifyComputes]<br>

You can save the configuration, switch back to the `Details` tab and enable the cloud by clicking on the `Enable cloud` button.
The cloud can now be used to deploy an application. You might want to know [how the driver impacts the TOSCA archives](tosca_archive.html "impacts on TOSCA archive").

[config_cloud_cloudifyConUrl]: ../../images/cloudify2_driver/config_cloud_clouifyConUrl.png  "Connection configuration"

[config_cloud_clouifyComputes]: ../../images/cloudify2_driver/config_cloud_clouifyComputes.png  "Compute templates"
