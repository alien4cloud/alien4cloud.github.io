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

![Login screen](../../images/1.4.0/getting_started/authentication-splash-screen.png)

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

Click on ![Go to admin](../../images/1.4.0/getting_started/components_menu.png){: height="26px" .inline} button in the navigation bar. Then click side bar sub-menu ![Go to git](../../images/1.4.0/getting_started/git_sub_menu.png){: height="26px" .inline}.
Now add a new Git location: ![new-git-location](../../images/1.4.0/getting_started/git_location_new.png){: height="26px" .inline}.

Fill the modal like the example below and ![git configuration](../../images/1.4.0/getting_started/git_configuration.png){: style="width: 600px; margin: 0 auto"}

Now, click on ![import button](../../images/1.4.0/getting_started/import.png){: height="26px" .inline} to pull all components from git and upload them into the Alien4Cloud catalog.

Wait for the import success bar to show and continue:

![Import success](../../images/1.4.0/getting_started/import_success.png)

{% warning %}
Some warnings will be throw if you specify an other branch or tag. We release some version of Samples, according to our implementation of TOSCA. If you take the wrong Sample, the required normative types can be missing.
{% endwarning %}

{% info %}
Find detailed informations about the Wordpress topology in the [devops guide](#/documentation/1.4.0/devops_guide/lamp_stack_tutorial/lamp_stack_application.html).
{% endinfo %}

# Create a Wordpress application

Now we have the Wordpress template ready to use, we can create an application based on it. To do this, go to ![application menu](../../images/1.4.0/getting_started/applications_menu.png){: height="26px" .inline} section. Click on ![new application btn](../../images/1.4.0/getting_started/new_application.png){: height="26px" .inline}. In the new application modal fill the name with 'wordpress', click on Topology Template button and select the `wordpress-topology` in the **topology template** list.

![New application modal](../../images/1.4.0/getting_started/new_application_modal.png)

Click on _create_ to create the application and be redirected to the application informations page. To see your application topology, click on ![application topology menu](../../images/1.4.0/getting_started/topology_sub_menu.png){: height="26px" .inline}. This will take you to the topology editor.

![Wordpress Topology](../../images/1.4.0/getting_started/topology_editor.png)

As you can see the topology is already complete. We will cover topology edition later on so, for now, let's prepare for deployment.

# Setup and deploy your application

Click on ![application deployment](../../images/1.4.0/getting_started/application_deployment_menu.png){: height="26px" .inline} to configure your deployment:

Inputs are already configured with default values so we automatically skip this step to let you select the location. The installation step configured a local docker location so click on it to select it as a target location:

![Location choice](../../images/1.4.0/getting_started/location_choice.png)

Node matching step is here again done automatically for you. During this step Alien4cloud found a valid match for your compute nodes, as there is just one template defined on the orchestrator to provide a ubuntu container that's the one that has been picked up.

While it is good enough for a deployment we will setup some docker related advanced settings that are not included in the portable topology (as they are quite specific on this local docker deployment). What we want to configure is the wordpress container port mapping. Note that this is not done automatically yet by puccini but could be in future implementations.

So let's go on node matching tab ![Node matching tab](../../images/1.4.0/getting_started/node_matching_tab.png){: height="26px" .inline} and select the wordpress compute node called 'computeWww' in our topology
![Compute Www](../../images/1.4.0/getting_started/matching_computeWww.png){: height="26px" .inline}, then click on the current selected match for the node (well and only choice on this location as currently defined).

![Compute Www matching choice](../../images/1.4.0/getting_started/matching_computeWww_choice.png){: style="width: 600px; margin: 0 auto"}

Let's first expose the port out of the container by changing the exposed_ports property: Click on the edition button for the exposed_ports property ![Exposed ports property](../../images/1.4.0/getting_started/exposed_ports_edit.png){: height="26px" .inline}. In the modal click on the ![Add Exposed port](../../images/1.4.0/getting_started/exposed_ports_add.png){: height="26px" .inline} button to add a new port exposition. Click on the 0 element edit button ![Add Exposed port](../../images/1.4.0/getting_started/exposed_ports_0_edit.png){: height="26px" .inline} and set 80 to the port and tcp to the protocol and close the modal.

![Exposed port configuration](../../images/1.4.0/getting_started/exposed_ports_conf.png){: style="width: 400px; margin: 0 auto"}

Let's now configure the port_mappings ![Exposed ports property](../../images/1.4.0/getting_started/ports_mappings_edit.png){: height="26px" .inline} using the same procedure to configure a port mapping from 80 to, for example 9099

![Exposed port configuration](../../images/1.4.0/getting_started/ports_mappings_conf.png){: style="width: 120px; margin: 0 auto"}

Ok now that the port from the docker container is exposed to the outside world we can deploy our application!

So just go to the deploy tab and click on the ![Deploy](../../images/1.4.0/getting_started/deploy_button.png){: height="26px" .inline} button! Note that this may take a few minutes as we are going to download and install the various components of the topology.

{%info%}
<h5>More on matching and application configuration</h5>
If you have not done it yet, you can get more informations on the [application](#/documentation/1.4.0/concepts/applications.html) concepts in alien4cloud as well as [deployment configuration and matching](#/documentation/1.4.0/concepts/deployment.html) concepts here.
You can also read more on the alien user guide's [application management section](#/documentation/1.4.0/user_guide/application_management.html).
{%endinfo%}

# Check that your application is up and running

On the runtime view, you can have the detailed deployment progress. Click on the side bar sub-menu ![application runtime](../../images/1.4.0/getting_started/runtime.png){: .inline},

![Runtime view](../../images/1.4.0/getting_started/runtime_view.png){: style="width: 600px; margin: 0 auto"}

When all nodes are deployed, just open the wordpress url in your browser. Note that as we defined a specific port mapping making the inner docker port available on our host 9099 port we have to change it accordingly: http://127.0.0.1:9099.

![Wordpress home](../../images/1.4.0/getting_started/wordpress_home.png){: style="width: 300px; margin: 0 auto"}
