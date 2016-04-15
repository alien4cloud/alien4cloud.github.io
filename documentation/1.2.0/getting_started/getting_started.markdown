---
layout: post
title: Getting started
root: ../
categories: DOCUMENTATION-1.2.0
parent: []
node_name: getting_started
weight: 100
published: true
---


This guide explains how to get started with Alien4Cloud and deploy your first application. The goal of this guide is not to provide an extensive cover of all the functionalities.

{% summary %}{% endsummary %}

# Prerequisites

* Cloudify Manager 3.3.1:
This getting started will leverage the cloudify 3 plugin and as such a running cloudify manager is required before moving forward. In order to install it please follow Cloudify documentation [to install the cloudify CLI](http://docs.getcloudify.org/3.3.1/installation/from-packages/) and [install a manager](http://getcloudify.org/downloads/install-cloudify-manager.html)

* A machine with Linux or MacOS Operating System: Alien4Cloud can run on windows OS too but we recommend Unix based OS. Moreover the default package only includes sh script.

* JAVA:
Ensure that you have at least JAVA version 7 or higher installed on your working station. If not, just install
java following instructions [here](https://www.java.com/fr/download/manual.jsp){:target="_blank"}.

* Access to a supported Cloud: This getting started guide is made for Amazon EC2 but can be adapted easily to run on other supported platforms.

* A supported web browser (check versions [here](/#/documentation/1.1.0/admin_guide/supported_platforms.html)).

# Install Alien4Cloud

Download Alien4Cloud distribution package [alien4cloud-dist](http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-dist&v=1.1.0&p=tar.gz&c=dist) and extract the archive it in your desired location.

Once extracted you should have the following content:

{% highlight bash %}
├── alien4cloud-ui-1.1.0.war
├── alien4cloud.sh
├── config
│   └── alien4cloud-config.yml
│   └── elasticsearch.yml
│   └── log4j.properties
├── init
│   └── archives
│   │   └── alien-tosca-normative-types.zip
│   │   └── alien-xtended-storage-types.zip
│   │   plugins
│   │   └── alien4cloud-cloudify3-provider-1.1.0.zip
{% endhighlight %}

# Start Alien4Cloud

In order to start Alien4Cloud just open a terminal inside the extracted root directory (alien4cloud) and run the _alien4cloud.sh_ script.

{% highlight sh %}
./alien4cloud.sh
{% endhighlight %}

The application should be available at the url ***`http://<alien4cloud_host_ip>:<port>`*** (the default port is 8088). For example, if you are running Alien4Cloud on local, it should be available on [http://localhost:8088](http://localhost:8088). You should see the authentication splash screen :

[![Configure your deployment](../../images/getting_started/authentication-splash-screen.png)](../../images/getting_started/authentication-splash-screen.png)

Login into the application using the default user:

* user: **admin**
* password: **admin**

{%note%}
The admin user is granted will all rights on the platform. This getting started will perform all operations using the admin user. Of course if you want to setup an Alien4Cloud for production usage and multi-users and rôle management you should probably refer to [advanced configurations and installation](#/documentation/1.1.0/admin_guide/advanced_configuration.html) of Alien4Cloud as well as user guide for [user management](#/documentation/1.1.0/user_guide/user_management.html).
{%endnote%}

# Configure your orchestrator and location

### Create and configure an orchestrator

Now that we are logged in Alien4Cloud we must define a location (where we will actually deploy applications). In Alien4Cloud every location is managed by an orchestrator. To create an orchestrator, go to ![Go to admin](../../images/getting_started/administration-btn.png){: .inline} and in the ![Go to orchestrator](../../images/getting_started/orchestrator-menu-btn.png){: .inline} sub-menu. Create an orchestrator named `Cloudify3` with the **plugin** `Cloudify 3 Orchestrator : 1.1.0`.

At this moment your orchestrator is create but not enable. Click on your orchestrator to see the informations page, and then click on the configuration menu icon ![Go to orchestrator configuration](../../images/getting_started/orchestrator-config-btn.png){: .inline}. In the **Driver configuration** part, add the URL of your manager and return to the previous page to enable your orchestrator.

{% warning %}
An error can occur at this moment if Alien4Cloud cannot access to your manager. Make sure that your manager is properly bootstrap.
{% endwarning %}

### Create and configure a location

Once your orchestrator is created and enabled, go to the locations page by clicking on ![Go to orchestrator location](../../images/getting_started/orchestrator-location-btn.png){: .inline}. Create a location named `AWS` and select `amazon` on the **infrastructure type** drop-down. The details page of your location should appears. Go to ![Go to orchestrator location on demand resources](../../images/getting_started/on-demand-ressource-tab.png){: .inline} and add the following resources:

* alien.nodes.aws.PublicNetwork
* alien.cloudify.aws.nodes.Compute

The network resource doesn't need a specific configuration. Click on the compute and set the **image_id** to `ami-47a23a30` and the **instance_type** to `t2.medium`.

[![location on demand ressources](../../images/getting_started/on-demand-resources-aws.png)](../../images/getting_started/on-demand-resources-aws.png)

{% info %}
The **image_id** is the ID of a public Ubuntu image on the AWS eu-west zone. Any Ubuntu 14.04 or later should work with this topology. Alien4Cloud supports GNU/Linux and Windows images, the choice of the image depends on your components requirements.
{% endinfo %}

# Import components in Alien4Cloud

The Wordpress topology is using custom types, we have to upload them first.
Find those types on github here : [https://github.com/alien4cloud/samples](https://github.com/alien4cloud/samples){:target="_blank"}

* **apache** : the webserver [here](https://github.com/alien4cloud/samples/tree/master/apache){:target="_blank"}
* **php** : the php interperter [here](https://github.com/alien4cloud/samples/tree/master/php){:target="_blank"}
* **mysql** : the database required by Wordpress [here](https://github.com/alien4cloud/samples/tree/master/mysql){:target="_blank"}
* **wordpress** : the blog component [here](https://github.com/alien4cloud/samples/tree/master/wordpress){:target="_blank"}
* **topology-wordpress** : the topology composed by previous components [here](https://github.com/alien4cloud/samples/tree/master/topology-wordpress){:target="_blank"}

The quickest way to import all of these archives is the **Git integration** feature in Alien4Cloud.

Click on ![Go to admin](../../images/getting_started/components-btn.png){: .inline} button in the navigation bar. Then click side bar sub-menu ![Go to git](../../images/getting_started/git-menu-btn.png){: .inline}.
Now add a new Git location: ![new-git-location](../../images/getting_started/new-git-location-btn.png){: .inline}.

Fill the modal like the example below and ![new-git-location](../../images/getting_started/save-btn.png){: .inline}.

[![Wordpress Topology](../../images/getting_started/git-location-details.png)](../../images/getting_started/git-location-details.png)

Now, click on ![git import](../../images/getting_started/components-import-btn.png){: .inline} to pull all components from git and upload them into the Alien4Cloud catalog.

{% warning %}
Some warnings will be throw if you specify an other branch or tag. We release some version of Samples, according to our implementation of TOSCA. If you take the wrong Sample, the required normatives types can be missing.
{% endwarning %}

{% info %}
Find detailed informations about the Wordpress topology in the [devops guide](#/documentation/1.1.0/devops_guide/lamp_stack_tutorial/lamp_stack_application.html).
{% endinfo %}

# Create a Wordpress application

Now we have the Wordpress template ready to use, we can create an application based on it. To do this, go to ![application](../../images/getting_started/application-btn.png){: .inline} section. Click on ![new application btn](../../images/getting_started/new-application-btn.png){: .inline} button and select the `wordpress-template` in the **topology template** drop-down and the `1.1.0-SNAPHOT` version in **Topology template**.

The application creation should redirect you on the application informations page.
To see your application topology, go to ![application topology](../../images/getting_started/app-topo-btn.png){: .inline} page, you will see the following screen.

[![Wordpress Topology](../../images/getting_started/wordress-topology.png)](../../images/getting_started/wordress-topology.png)

# Setup and deploy your application

To deploy this new application, go on ![application deployment](../../images/getting_started/application-deployment-btn.png){: .inline} sub-menu and :

* Select your location
* Select the `os_arch` of your computes
* And click on ![application deployment btn](../../images/getting_started/app-deployment-btn.png){: .inline}

[![Configure your deployment](../../images/getting_started/deployment-page.png)](../../images/getting_started/deployment-page.png)

{%info%}
To understand all configuration available for the deployment page, please refer to the [application management section](#/documentation/1.1.0/user_guide/application_management.html).
{%endinfo%}

{% warning %}
In this part, you will be able to check location resources matching and possible errors. This should not happen if your orchestrator and location are well configured. If you need help regarding their configuration, please refer to [this section](#/documentation/1.1.0/user_guide/orchestrator_location_management.html).
{% endwarning %}

# Check that your application is up and running

On the runtime view, you can have the detailed deployment progress. Click on the side bar sub-menu ![application runtime](../../images/getting_started/app-runtime-btn.png){: .inline},

[![Wordpress runtime](../../images/getting_started/wordpress-deployment-in-progress.png)](../../images/getting_started/wordpress-deployment-in-progress.png)

When all nodes are deployed, go back in the ![application info](../../images/getting_started/app-info-btn.png){: .inline} sub-menu to get the Wordpress application url and
test it !

[![Wordpress url](../../images/getting_started/output-url.png)](../../images/getting_started/output-url.png)

And voilà !
