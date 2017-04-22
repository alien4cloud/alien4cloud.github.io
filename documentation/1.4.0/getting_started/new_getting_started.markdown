---
layout: post
title: New Getting started (alpha)
root: ../
categories: DOCUMENTATION-1.4.0
parent: []
node_name: new_getting_started
weight: 101
---

This guide explains how to get started with Alien4Cloud and deploy your first application. The goal of this guide is not to provide an extensive cover of all the functionalities.

{% summary %}{% endsummary %}

# Prerequisites

* Curl: Our installation script leverage curl so ensure you have the command installed.
* Python: While we don't really require python for alien4cloud our getting started script leverage python to pre-configure some elements in alien4cloud for you. Running the script without python will install alien4cloud, start it and then fail to configure resources so you'll have to configure them manually.
* Java: We don't install java for you so just make sure you have a 8 or higher JDK installed on your working station. If you don't you can following instructions [here](https://www.java.com/fr/download/manual.jsp){:target="_blank"}.
* Docker: Our getting started leverage a minimal TOSCA orchestrator that creates docker images to orchestrate deployments in an independent way one from another. We will also use docker container in place of VMs to launch TOSCA blueprints.
* Nothing running on port 8088: That's alien4cloud default port and as we just launch a4c in our getting started script we need this port free.
* A supported web browser (check versions [here](/#/documentation/1.4.0/admin_guide/supported_platforms.html)).

# Install, launch and configure alien4cloud

{% highlight bash %}
curl -s https://raw.githubusercontent.com/alien4cloud/alien4cloud.github.io/sources/files/1.4.0/getting_started.sh | bash
{% endhighlight %}

Yes, we do it all for you! So what's going on in this script ?

* Install: We will create an __alien4cloud-getstarted__ directory in which we will fetch alien4cloud opensource version, a minimal TOSCA orchestrator called puccini, the plugin to let alien4cloud work with puccini and we're going to configure it all for you!
* Prepare: Pull some docker images required for puccini and that we know working with our samples (Docker images tends to be minimal and some of them don't even have a bash installed or sudo command).
* Start: Well that's kind of an easy step, we just launch alien4cloud in the background for you.
* Post-start configure: When launched we configure an orchestrator and it's location for you so you can perform docker deployments. That's just a few curl requests on the a4c rest API!
* Launch your browser so you really don't have anything to do!

{% note %}
Except docker images we don't store anything outside of the _alien4cloud-getstarted_ directory. If you like to remove alien4cloud getting started components just remove this directory.
{% endnote %}

# Let's play!

[![Configure your deployment](../../images/getting_started/authentication-splash-screen.png)](../../images/getting_started/authentication-splash-screen.png)

Login into the application using the default user:

* user: **admin**
* password: **admin**

{%note%}
The admin user is granted will all rights on the platform. This getting started will perform all operations using the admin user. Of course if you want to setup an Alien4Cloud for production usage and multi-users and role management you should probably refer to [advanced configurations and installation](#/documentation/1.4.0/admin_guide/advanced_configuration.html) of Alien4Cloud as well as user guide for [user management](#/documentation/1.4.0/user_guide/user_management.html).
{%endnote%}

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
Find detailed informations about the Wordpress topology in the [devops guide](#/documentation/1.4.0/devops_guide/lamp_stack_tutorial/lamp_stack_application.html).
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
To understand all configuration available for the deployment page, please refer to the [application management section](#/documentation/1.4.0/user_guide/application_management.html).
{%endinfo%}

{% warning %}
In this part, you will be able to check location resources matching and possible errors. This should not happen if your orchestrator and location are well configured. If you need help regarding their configuration, please refer to [this section](#/documentation/1.4.0/user_guide/orchestrator_location_management.html).
{% endwarning %}

# Check that your application is up and running

On the runtime view, you can have the detailed deployment progress. Click on the side bar sub-menu ![application runtime](../../images/getting_started/app-runtime-btn.png){: .inline},

[![Wordpress runtime](../../images/getting_started/wordpress-deployment-in-progress.png)](../../images/getting_started/wordpress-deployment-in-progress.png)

When all nodes are deployed, go back in the ![application info](../../images/getting_started/app-info-btn.png){: .inline} sub-menu to get the Wordpress application url and
test it !

[![Wordpress url](../../images/getting_started/output-url.png)](../../images/getting_started/output-url.png)

And voilà !
