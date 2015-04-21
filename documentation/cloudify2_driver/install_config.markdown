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

### Naming policy ###

You may need to define a specific naming policy for your application in the configuration tab :

[![Naming policy][config_cloud_naming_policy]][config_cloud_naming_policy]<br>

To compose your own application naming policy, you can use the following entities and properties :

- **environment** : the environment link to the deployment
  * _id_
  * _name_
  * _applicationId_
  * _cloudId_
  * _environmentType_ : `OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION`
  * _currentVersionId_
- **application** : deployed application
  * _id_
  * _name_
  * _creationDate_
  * _lastUpdateDate_
- **metaProperties** : the administrator can define meta properties linked to an application
- **time** : current date at format `yyyyMMddHHmm`

The default naming policy setting for any cloud is : `environment.name + application.name`

{%warning%}
The administrator is responsible for the naming policy consistency. In cloudify, you can't have two deployment witht the same name.
{%endwarning%}

The main pattern to define a naming policy is to use `+` to concat different properties or text, for examples :

- `environment.name + application.name + time`
- `application.id + environment.environmentType + '-US_ZONE'`
- `time + '__' + application.creationDate`
- `'MY_APP' + '-WORDPRESS-' + time`
- `metaProperties['PROPERTY_NAME'] + '-' + time`

{%warning%}
Any empty property used in the policy expression will cause a deployment failure
{%endwarning%}

{%info%}
**Advanced use** : the policy expression is based on [SpEL](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/expressions.html){:target="_blank"} (_Spring Expression Language_) and you could use its capabilities if you are familiar with it.
__Note__ : do not use the `#`
{%endinfo%}

### Configuring the cloud ###
On the cloud list, select and click on the newly created cloud, then go to the `configuration` tab.

1. **<u>Connection Configuration</u>**: Remember the REST API URL you were told to note when bootstrapping your cloud with Cloudify, here is the place you'll need it. Fill the "Cloudify URL" with it, and eventually provide a login (username / password) for the access.<br><br>
[![Connection configuration][config_cloud_cloudifyConUrl]][config_cloud_cloudifyConUrl]<br>
You must save the configuration, switch back to the `Details` tab and enable the cloud by clicking on the `Enable cloud` button. Then you should go to `Image` tab to configure your cloud's images.

2. **<u>Images Configuration</u>**: Here you have to create/configure your cloud's images. Map your cloud's created image to the correct identifier on the IaaS (openstack, amazon ...)<br><br>
[![Images configuration][config_cloud_cloudifyImage]][config_cloud_cloudifyImage]<br>
You should now go to `Flavor` tab to configure your cloud's flavors.

3. **<u>Flavors Configuration</u>**: Here you have to create/configure your cloud's flavors. Map your cloud's created flavor to the correct identifier on the IaaS (openstack, amazon ...)<br><br>
[![Flavors configuration][config_cloud_cloudifyFlavor]][config_cloud_cloudifyFlavor]<br>
You should now go to `Templates` tab to see all your cloud's compute templates.

4. **<u>Templates Configuration</u>**: Here you can review available templates and disable those that you do not want to use.<br><br>
[![Templates configuration][config_cloud_cloudifyTemplate]][config_cloud_cloudifyTemplate]<br>
You should now go to `Network` tab to configure your cloud's networks.

5. **<u>Networks Configuration</u>**: Here you have to create/configure your cloud's network templates. Map your cloud's created network to the correct identifier of Cloudify 2 (which is defined in the cloudify 2 cloud's configuration)<br><br>
[![Networks configuration][config_cloud_cloudifyNetwork]][config_cloud_cloudifyNetwork]<br>
You must enter the PaaS Resource Id for all created network template or it will not be usable.<br>
The notion of external network is not necessary for cloudify 2, your cloudify 2 should be configured to auto-associate floating IP, so please set it to false.<br>
You should now go to `Block Storages` tab to configure your cloud's block storages.

6. **<u>Block Storages Configuration</u>**: Here you have to create/configure your cloud's block storage templates. Map your cloud's created block storage to the correct identifier of Cloudify 2 (which is defined in the cloudify 2 cloud's configuration)<br><br>
[![Block Storages configuration][config_cloud_cloudifyBlockStorage]][config_cloud_cloudifyBlockStorage]<br>
You must enter the PaaS Resource Id for all created block storage template or it will not be usable.<br>
**Congratulation!!** You've finished to configure your cloudify2-based cloud. You can now begin to deploy your application with this cloud.

[config_cloud_cloudifyConUrl]: ../../images/cloudify2_driver/config_cloud_cloudifyConUrl.png  "Connection configuration"

[config_cloud_cloudifyImage]: ../../images/cloudify2_driver/config_cloud_cloudifyImage.png  "Images"

[config_cloud_cloudifyFlavor]: ../../images/cloudify2_driver/config_cloud_cloudifyFlavor.png  "Flavors"

[config_cloud_cloudifyTemplate]: ../../images/cloudify2_driver/config_cloud_cloudifyTemplate.png  "Templates"

[config_cloud_cloudifyNetwork]: ../../images/cloudify2_driver/config_cloud_cloudifyNetwork.png  "Networks"

[config_cloud_cloudifyBlockStorage]: ../../images/cloudify2_driver/config_cloud_cloudifyBlockStorage.png  "Block Storages"

[config_cloud_naming_policy]: ../../images/cloudify2_driver/config_cloud_naming_policy.png  "Naming policy"
