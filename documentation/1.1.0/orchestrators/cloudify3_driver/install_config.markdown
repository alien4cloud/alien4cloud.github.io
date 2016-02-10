---
layout: post
title:  Installing and configuring
root: ../../../
categories: DOCUMENTATION-1.1.0
parent: [orchestrators, cloudify_3]
node_name: cloudify_3_install
weight: 2000
---

Find here how to install and configure the Cloudify 3 driver.

## Download ##
First step of course is to download the plugin.

* [last stable version](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-cloudify3-provider&v={{ site.last-version }}&p=zip){: .btn}{: .btn-success}{: .download-button}{: .navbar-btn} works with the latest stable alien version.
* [last build version](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource-snapshot&g=alien4cloud&a=alien4cloud-cloudify3-provider&v={{ site.last-version }}&p=zip){: .btn}{: .btn-warning}{: .download-button}{: .navbar-btn} works with the latest build alien version.

## Install ##
The driver is packaged as an ALIEN plugin, install it in `Administration > Plugins` of your running instance of ALIEN.

## Configure ##
You need to create an orchestrator and configure it.

### Creating the orchestrator ###
1. Login as an admin, and create an orchestrator: `Administration > Orchestrators > New Orchestrator`.
2. As `Plugin` for this orchestrator, make sure to select ***Cloudify 3 Orchestrator*** from the list. Validate.

### Configuring the orchestrator ###
On the orchestrator list, select and click on the newly created orchestrator, follow these steps to configure your orchestrator:

1. **<u>Connection Configuration</u>**: Click on the `Configuration` link to configure connection to your bootstrapped cloudify's manager. 
In the `Driver configuration` section, change the URL to use the correct IP of your manager that you obtained after the bootstrap operation. 
If your manager is secured, you can configure the admin credentials, the `disableSslVerification` option should only be set to true for testing purpose, it will disable all certificate validation for SSL.<br><br>
[![Connection configuration][config_orchestrator_cloudifyConUrl]][config_orchestrator_cloudifyConUrl]<br>

2. **<u>Enable Orchestrator</u>**: You can then switch back to the `Information` tab and enable the orchestrator by clicking on the `Enable orchestrator` button.<br><br>
[![Enable Orchestrator][config_orchestrator_enableOrchestrator]][config_orchestrator_enableOrchestrator]<br>
If the orchestrator is not enabled, please check Alien's log to have details on the error, it might be a bad configuration (bad connection url, bad user/password, invalid certificate etc...)
 
3. **<u>Locations</u>**: An orchestrator can manage multiple locations, for example, you can have the same orchestrator which manages your local cloud and your public cloud.
Eventually, the same deployment can span on multiple locations.
For the moment cloudify 3 only supports single location, so we can only have 1 location per cloudify 3 orchestrator. 
Click on `New Location`, in the popup, enter the name of your location and its type.<br><br>
[![Location Creation][config_orchestrator_createLocation]][config_orchestrator_createLocation]<br>

4. **<u>Configuration Resources</u>**: The configuration resources are not <u>real</u> IAAS resources as such. In general they are configuration for other resources.
Choose the type of your resources, then click on `Add` to create the resource<br><br>
[![Images configuration][config_orchestrator_image]][config_orchestrator_image]<br>
In this example it's a configuration resource of type image on an OpenStack location, you can describe here the information of the image which must correspond to what you have on the IAAS.
The same thing can be done for the types flavor and availability zone.

5. **<u>On Demand Resources</u>**: On demand resources are <u>real</u> IAAS resources that can be used to replace abstract resources in a topology.
Click on `Auto-config` to generate on demand resources from precedent configuration resources.
As you can see below, with the Image Ubuntu and the Flavor Medium, Alien generated a Compute template Medium_Ubuntu<br><br>
[![Compute configuration][config_orchestrator_compute]][config_orchestrator_compute]<br>
You can always configure your resources (in this case compute) without using the `Auto-config` functionality.
To create resources that cannot be auto-configured (such as volume or network or non auto-configured compute etc ...), choose the type of the resource, then click on `Add`.<br><br>
[![Volume configuration][config_orchestrator_volume]][config_orchestrator_volume]<br>

6. **<u>Concrete example of configuration</u>** can be found in our various integration tests for [Openstack](https://github.com/alien4cloud/alien4cloud-provider-int-test/tree/1.1.0/src/test/resources/features/cloudify3/openstack), [AWS](https://github.com/alien4cloud/alien4cloud-provider-int-test/tree/1.1.0/src/test/resources/features/cloudify3/amazon), [BYON](https://github.com/alien4cloud/alien4cloud-provider-int-test/tree/1.1.0/src/test/resources/features/cloudify3/byon) 
 
**Congratulation!!** You've finished to configure your cloudify 3 orchestrator. You can now begin to deploy your application with this orchestrator.

[config_orchestrator_cloudifyConUrl]: ../../images/cloudify3_driver/config_orchestrator_cloudifyConUrl.png  "Connection configuration"

[config_orchestrator_enableOrchestrator]: ../../images/cloudify3_driver/config_orchestrator_enableOrchestrator.png  "Enable orchestrator"

[config_orchestrator_createLocation]: ../../images/cloudify3_driver/config_orchestrator_createLocation.png  "Create location"

[config_orchestrator_image]: ../../images/cloudify3_driver/config_orchestrator_image.png  "Image"

[config_orchestrator_compute]: ../../images/cloudify3_driver/config_orchestrator_compute.png  "Compute"

[config_orchestrator_volume]: ../../images/cloudify3_driver/config_orchestrator_volume.png  "Volume"
