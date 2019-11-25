---
layout: post
title:  Orchestrator(s) and location(s) management
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [user_guide, admin]
node_name: orchestrator_location_management
weight: 200
---
{%summary%}{%endsummary%}

{%info%}
To understand the orchestrator and location concepts, please refer to [this section](#/documentation/2.2.0/concepts/orchestrators_locations.html).
{%endinfo%}

# Requirements

Alien 4 cloud is not responsible for actual deployment orchestration but rather interact with existing orchestration technologies. In order to define an orchestrator and a location, you must configure plugins that will be used to actually perform deployment(s) on the defined location using the created orchestrator.

In order to configure a set of Orchestrator/locations, you must have installed an orchestrator plugin first see [plugin management](#/documentation/2.2.0/user_guide/plugin_management.html).

{%info%}
<h5>Supported orchestrators</h5>
We are currently supporting the opensource orchestrator cloudify 3.4.0.
{%endinfo%}

# Orchestrators management

## Orchestrator creation

Once you have installed a plugin, the admin can go on the orchestrator page and configure one. Remember that you can use the Alien 4 Cloud contextual help in order to be guided directly within the application. To create an orchestrator, just go in the *orchestrator list* page and click on the *New orchestrator* button.

![Create orchestrator](../../images/2.2.0/user_guide/admin/orchestrators/new_orchestrator.png)

## Orchestrator configuration

To configure an orchestrator, select it in the *orchestrator list* page and go to *configuration* side menu.

![Orchestrator conf](../../images/2.2.0/user_guide/admin/orchestrators/orchestrator_global_configuration.png)

### Naming policy

On every orchestrator, you can configure a naming policy that Alien 4 Cloud will use when deploying an application. The naming policy will be used to identify the deployment on the cloud's orchestrator.

{%info%}
Most of the orchestrators will leverage this naming policy to name the resources used at the IaaS level also.
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

Most orchestrator plugins will require specific configuration in order to communicate with the actual orchestrator instance or to configure it's behavior. As stated, this configuration being specific to the orchestrator, you should refer to the orchestrator specific guide.
For example, the  cloudify3 provider defines connexion parameters so that Alien 4 Cloud can communicate with the orchestrator engine server (cloudify 3 manager).

![Configure the provider](../../images/2.2.0/user_guide/admin/orchestrators/orchestrator_driver_configuration.png)

{%info%}
More informations for [cloudify 3](#/documentation/2.2.0/orchestrators/cloudify4_driver/index.html) can be found on it specific documentation.
{%endinfo%}

{%info%}
<h5>Updating configuration</h5>
Usually, the configuration of an orchestrator is done before enabling it. The configuration is automatically saved in that case.
However, it might occur that you want to update it after having the orchestrator enabled. Therefore, you need to unlock the configuration first, by hitting the ***unlock button*** on the top right corner of the configuration screen. Do not forget to hit the ***save button*** on the bottom of the screen, to save the configuration, and it will be loaded immediately.
{%endinfo%}

## Enabling the orchestrator

Once properly configured, you should enable the orchestrator, by hitting the ***enable*** button on the **information** screen of the selected orchestration.

![Enable - disable  orchestrator](../../images/2.2.0/user_guide/admin/orchestrators/orchestrator_enable.png)

# Locations management

After Configuring the orchestrator, you have to create one or more location, depending on whether your orchestrator allows it.
Note that you cannot access the location management steps on a disabled orchestrator.

## Location creation

To create a location, first go to the location the *orchestrator list* page, by clicking on the side menu represented by a cloud, and then click on the *New location* button, and fill in the form.

![Create location](../../images/2.2.0/user_guide/admin/orchestrators/new_location.png)

## Location configuration

Once created you must configure the location. It requires several steps:

* Configure cloud resources used for resources matching at deployment time.
* Configure the meta properties of the orchestrator (that depends of the chosen one).
* Configure the security access to the location

## Configure location resources

### Configuration resources tab

In this step you need to configure the resources types exposed by location. These resources will help to configure or generate those which will be used in matching on deployment configuration.
For example, the Cloudify 3 provider exposes configuration resources such as Images, Favors, and Availability zone.

![Location resources configuration](../../images/2.2.0/user_guide/admin/orchestrators/location_resources_configuration.png)

### On demand resources tab

On demand resources are the exact resources used for matching nodes within the topology before deploying, such as Computes, networks and volumes.
They may a combination of one or more configuration resources. (Example, the on demand resource *Compute* could be a combination of *Image* and *Flavor* configuration resources.). The following is an example based on the Cloudify 3 provider:

![Location on demand resources](../../images/2.2.0/user_guide/admin/orchestrators/location_on_demand_resource.png)

To add more resource templates, you can simply drag and drop resources types from the panel on the right.

{%info%}
<h5> Auto configuration</h5>
If the location exposes a way to automatically generate on-demand resources, you can hit the "auto-config" button to auto-generate them.
{%endinfo%}

### Adding custom on-demand resources from the TOSCA catalog

You can also create Custom on demand resource templates using any type from the catalog - provided that it is not abstract. This allows you to match abstract nodes in a topology to concrete custom resources, defined within your orchestrator location, exactly the same way you are used to with on-demand resources provided by the orchestrator. To do so, simply drag and drop resource types from the catalog panel.

{%warning%}
At this point, we assume that you know what you are doing when creating custom resources. If not, please make sure you go through our [documentation on this feature](#/documentation/2.2.0/user_guide/tosca_catalog_custom_resources.html). Alien has no way to verify if custom resource templates created in the location are compatible with your orchestrator.
{%endwarning%}

![Location custom on demand resources](../../images/2.2.0/user_guide/admin/orchestrators/location_custom_on_demand_resource.png)

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


### Security

To manage the authorizations on location, please refer to [this page](#/documentation/2.2.0/user_guide/location_autorization.html).


### Secret

To associate a secret provider (such as HashiCorp Vault) to the location, please refer to [this page](#/documentation/2.2.0/user_guide/location_secret.html).
