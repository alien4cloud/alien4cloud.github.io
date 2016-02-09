---
layout: post
title:  Orchestrator(s) and location(s) management
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [user_guide]
node_name: orchestrator_location_management
weight: 100
---
{% summary %}{% endsummary %}

{%info%}
To understand the orchestrator and location concepts, please refer to [this section](#/documentation/1.1.0/concepts/orchestrators_locations.html).
{%endinfo%}

## Requirements

Alien 4 cloud is not responsible for actual deployment orchestration but rather interact with existing orchestration technologies. In order to define an orchestrator and a location, you must configure plugins that will be used to actually perform deployment(s) on the defined location using the created orchestrator. Orchestrator plugins are refered in alien as PaaS Provider plugins.

In order to configure a set of Orchestrator/locations, you must have installed a paas provider plugin first see [plugin management](#/documentation/1.1.0/user_guide/plugin_management.html).

{%info%}
<h5>Supported orchestrators</h5>
We are currently supporting the opensource orchestrators cloudify 3.3.1.
{%endinfo%}

## Orchestrators management

### Orchestrator creation

Once you have installed a plugin, the admin can go on the orchestrator page and configure one. Remember that you can use the Alien 4 Cloud contextual help in order to be guided directly within the application. To create an orchestrator, just go in the *orchestrator list* page and click on the *New orchestrator* button.

[![Create orchestrator](../../images/1.1.0/user_guide/admin/orchestrators/new-orchestrator.png)](../../images/1.1.0/user_guide/admin/orchestrators/new-orchestrator.png)

### Orchestrator configuration

To configure an orchestrator, select it in the *orchestrator list* page and go to *configuration* side menu.

[![Orchestrator conf](../../images/1.1.0/user_guide/admin/orchestrators/orchestrator_global_configuration.png)](../../images/1.1.0/user_guide/admin/orchestrators/orchestrator_global_configuration.png)<br>

### Naming policy

On every orchestrator, you can configure a naming policy that Alien 4 Cloud will use when deploying an application. The naming policy will be used to identify the deployment on the cloud's orchestrator (PaaS Provider).

{%info%}
Most of the PaaS Providers will leverage this naming policy to name the resources used at the IaaS level also.
{%endinfo%}


To compose your own application naming policy, you can use the following entities and properties :

- **environment** : the environment linked to the deployment
  * _id_
  * _name_
  * _description_
  * _environmentType_ : `OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION`
- **application** : deployed application
  * _id_
  * _name_
  * _creationDate_
  * _lastUpdateDate_
- **metaProperties**_['PROPERTY_NAME']_ : meta-properties defined on the application
- **time** : current date at format `yyyyMMddHHmm`

The default naming policy setting for any orchestrator is : `environment.name + application.name`

{%warning%}
<h5>Deployment name unicity </h5>
The deployment name must be unique at a given time, the orchestrator administrator is responsible for choosing a pattern that should be unique or some application(s) may not be deployed (if a deployment with the same name is already running).
Note that we guaranty that an application's name is unique across all applications and that an environment name is unique for a given application.  
However, when generating the application paaSId (final application name on the PaaS), all `space` character will be replaced by an `_`. Therefore and as an example, if your naming policy involves the application name, you can not deploy simultaneously two applications named "**Test App**" and "**Test_App**" with the same orchestrator, as the generated paaSId will be in conflict.
{%endwarning%}

The main pattern to define a naming policy is to use `+` to concat different properties or text, for examples :

- `environment.name + application.name + time`
- `application.id + environment.environmentType + '-US_ZONE'`
- `time + '__' + application.creationDate`
- `'MY_APP' + '-WORDPRESS-' + time`
- `metaProperties['PROPERTY_NAME'] + '-' + time`

{%warning%}
<h5>Empty meta properties</h5>
Any empty property used in the naming policy expression will cause a deployment failure.
{%endwarning%}

{%info%}
**Advanced use** : the policy expression is based on [SpEL](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/expressions.html){:target="_blank"} (_Spring Expression Language_) and you could use its capabilities if you are familiar with it.  
__Note__ : do not use the `#`
{%endinfo%}

### Driver configuration

If your orchestrator plugin provides a configuration bean, you can edit it under the ***Driver Configuration*** section of the configuration screen.  
This configuration may be specific to the orchestrator used and you should refer to the orchestrator specific guide. For the example of the  cloudify3 provider, it is used to configure the provider connexion parameters so Alien 4 Cloud can communicate with the orchestrator engine server.

[![Configure the provider](../../images/1.1.0/user_guide/admin/orchestrators/orchestrator-driver-configuration.png)](../../images/1.1.0/user_guide/admin/orchestrators/orchestrator-driver-configuration.png)

{%info%}
More informations for [cloudify 3](#/documentation/1.1.0/orchestrators/cloudify3_driver/index.html) can be found on her specific documentation.
{%endinfo%}

{%info%}
<h5>Updating configuration</h5>
Usually, the configuration of an orchestrator is done before enabling it. The configuration is automatically saved in that case.  
However, it might occur that you want to update it after having the orchestrator enabled. Therefore, you need to unlock the configuration first, by hitting the ***unlock button*** on the top right corner of the configuration screen. Do not forget to hit the ***save button*** on the bottom of the screen, to save the configuration, and it will be loaded immédiatly.
{%endinfo%}

### Enabling the orchestrator
Once properly configured, you should enable the orchestrator, by hitting the ***enable*** button on the **information** screen of the selected orchestration.

[![Enable - disable  orchestrator](../../images/1.1.0/user_guide/admin/orchestrators/orchestrator-enable.png)](../../images/1.1.0/user_guide/admin/orchestrators/orchestrator-enable.png)


## Locations management
After Configuring the orchestrator, you have to create one or more location, depending on whether your orchestrator allows it.  
Note that you cannot access the location management steps on a disabled orchestrator.  

### Location creation

To create a location, first go to the location the *orchestrator list* page, by clicking on the side menu represented by a cloud, and then click on the *New location* button, and fill in the form.

[![Create location](../../images/1.1.0/user_guide/admin/orchestrators/location-new-location.png)](../../images/1.1.0/user_guide/admin/orchestrators/locoation-new-location.png)


### Location configuration

Once created you must configure the location. It requires several steps:

* Configure cloud resources used for resources matching at deployment time.
* Configure the meta properties of the PaaS provider (that depends of the chosen one).
* Configure the security access to the location

### Configure location resources

#### Configuration resources tab

In this step you need to configure the resources types exposed by location. These resources will help to configure or generate those which will be used in matching on deployment configuration.
For example, the Cloudify 3 provider exposes configuration resources such as Images, Favors, and Availability zone.

[![Location resources configuration](../../images/1.1.0/user_guide/admin/orchestrators/location-resources-configuration.png)](../../images/1.1.0/user_guide/admin/orchestrators/location-resources-configuration.png)



#### On demand resources tab

On demand resources are the exact resources used for matching nodes within the topology before deploying, such as Computes, networks and volumes.
They are usually a combination of one or more configuration resources. (Example, the on demand resource *Compute* could be a combination of *Image* and *Flavor* configuration resources.). The following is an example based on the Cloudify 3 provider:

[![Location on demand resources](../../images/1.1.0/user_guide/admin/orchestrators/location-on-demand-resources.png)](../../images/1.1.0/user_guide/admin/orchestrators/location-on-demand-resources.png)

{%info%}
<h5> Auto configuration</h5>
If the location exposes a way to automatically generate on-demand resources, you can hit the "auto-config" button to auto-generate them.
{%endinfo%}


### Meta properties

This feature allows you to define **meta-properties** on your location and then use them in your
topology as an internal variable defined by your administrator. Obviously as a _CLOUD_DELOYER_,
_APPLICATION_USER_ or _APPLICATION_MANAGER_ you won't be able to change this value.

{%warning%}
At this stage, we assume you know how to create meta-properties targeting location, application or environment.
{%endwarning%}

In the meta-properties tab, you should be able to set a value
for any location targeted meta-property. Fill the desired values in order to use it later as in
__get_input__ for a property.

{%info%}
Regarding your meta-property definition, you can add constraint on it. Thus, you
must see constraint violation error if any in this location meta-properties form.
{%endinfo%}


### Security and roles

On the security section, you can decide who (as user or group) have the right to deploy an application on the location.

[![Location roles](../../images/1.1.0/user_guide/admin/orchestrators/location-security-roles.png)](../../images/1.1.0/user_guide/admin/orchestrators/location-security-roles.png)
