---
layout: post
title: Getting started
root: ../
categories: DOCUMENTATION-3.3.0
parent: []
node_name: new_getting_started
weight: 101
---

This guide explains how to get started with Alien4Cloud and deploy your first application. The goal of this guide is not to provide an extensive cover of all the functionalities.

{% summary %}{% endsummary %}

# Install, launch and configure alien4cloud


## Prerequisites

* __Operating system__:<i class="fa fa-linux"></i> Linux or <i class="fa fa-apple"></i> MacOS.

* __Ansible__  : >= 2.8.3

* __Browser__: A supported web browser (check versions [here](/#/documentation/3.0.0/admin_guide/supported_platforms.html)).

## Install, launch and configure alien4cloud


To bootstrap a full A4C stack (including Elasticsearch, Yorc, Consul ...), a set of Ansible playbooks are available in [Alien4Cloud Spray](https://github.com/alien4cloud/alien4cloud-spray/tree/develop) github project.

{%info%}
An alternative approach to setup a A4C/Yorc stack is to use [Yorc bootstrap](https://yorc.readthedocs.io/en/stable/bootstrap.html).
{%endinfo%}

# Let's play!


Follow the [Alien4Cloud Spray user guide](https://github.com/alien4cloud/alien4cloud-spray/blob/develop/readme.md)

Login into the application using the default user, if using the default parameters :

* user: **admin**
* password: **admin**

{%note%}
The admin user is granted will all rights on the platform. This getting started will perform all operations using the admin user. Of course if you want to setup an Alien4Cloud for production usage and multi-users and role management you should probably refer to [advanced configurations and installation](#/documentation/3.0.0/admin_guide/advanced_configuration.html) of Alien4Cloud as well as user guide for [user management](#/documentation/3.0.0/user_guide/user_management.html).
{%endnote%}

# Import components in Alien4Cloud


Find those types on github: [https://github.com/alien4cloud/samples](https://github.com/alien4cloud/samples){:target="_blank"}

* **[mock](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/mock){:target="_blank"}** : set of mocks used for checking full stack is available and understand main princips
* **[Kubernetes](https://github.com/alien4cloud/samples/tree/3.0.x/org/alien4cloud/doc/kube/kcontainers){:target="_blank"}** : set of differents assets for deploying containers, services, volumes on a Kubernetes clister


The quickest way to import all of these archives is the **Git integration** feature in Alien4Cloud.

Click on ![Go to admin](../../images/3.3.0/getting_started/catalog.png){: height="26px" .inline} button in the navigation bar. Then click side bar sub-menu ![Go to Manage Archives](../../images/3.3.0/getting_started/manage_archives.png){: height="26px" .inline} and ![Go to Git](../../images/3.3.0/getting_started/git_import.png){: height="26px" .inline}.
Now add a new Git location: ![new-git-location](../../images/3.3.0/getting_started/git_location_new.png){: height="26px" .inline}.

Fill the modal like the example below with the followings:

* **Repository Url**:    https://github.com/alien4cloud/samples.git
* **Branch or Tag**  / **Archive's folder**
  * 3.0.x / org/alien4cloud/mock
  * 3.0.x / org/alien4cloud/doc/kube/kcontainers

![git configuration](../../images/3.3.0/getting_started/git_configuration.png){: style="width: 600px; margin: 0 auto"}

Now, click on ![import button](../../images/3.3.0/getting_started/import.png){: height="26px" .inline} to pull all components from git and upload them into the Alien4Cloud catalog.

Wait for the import success bar to show and continue:

![Import success](../../images/3.3.0/getting_started/import_success.png)

{% warning %}
Some warnings will be thrown if you specify an other branch or tag. We release some version of Samples, according to our implementation of TOSCA. If you take the wrong Sample, the required normative types can be missing.
{% endwarning %}



# Create a TinyMock application

Now we have the Mock templates ready to use, we can create an application based on it. To do this, go to ![application menu](../../images/3.3.0/getting_started/applications_menu.png){: height="26px" .inline} section. Click on ![new application btn](../../images/3.3.0/getting_started/new_application.png){: height="26px" .inline}. In the new application modal fill the name with 'SimpleMock', click on Topology Template button and select the `1TinyMock` in the **topology template** list.

![New application modal](../../images/3.3.0/getting_started/new_application_modal.png)

Click on _create_ to create the application and be redirected to the application informations page.
![SimpleMock application](../../images/3.3.0/getting_started/application_detail.png)
To see your application topology, click on ![application topology menu](../../images/3.3.0/getting_started/topology_sub_menu.png)
Clicking on Edit button will take you to the topology editor.

![SimpleMock Topology](../../images/3.3.0/getting_started/topology_editor.png)

As you can see the topology is already complete. We will cover topology edition later on so, for now, let's prepare for deployment.

# Setup and deploy your application
Go back to application detail screen by clicking on the top left menu ![application navigation bar](../../images/3.3.0/getting_started/application_navbar.png){: height="26px" .inline}

Click on ![application deployment](../../images/3.3.0/getting_started/application_deployment_menu.png){: height="26px" .inline} to configure your deployment:
Click on Environment

There are no inputs in this topology
![Application Deployment Home page](../../images/3.3.0/getting_started/application_deployment_home.png)
Click on Tab "Prepare Next Deployment"
![Location choice](../../images/3.3.0/getting_started/location_choice_1.png)
A blue button Location is displayed :
Click on Location button :
![Location list display](../../images/3.3.0/getting_started/location_choice_2.png)
![Location selected](../../images/3.3.0/getting_started/location_choice_3.png)

Node matching step is here again done automatically for you.
So let's go to Review & Deploy button
![Deployment validation](../../images/3.3.0/getting_started/validation_deployment.png)


Deployment is ready to be launched : click on Deploy button.

![Deployment in progress](../../images/3.3.0/getting_started/deployment_inprogress.png)
![Deployment succeeded](../../images/3.3.0/getting_started/deployment_succeeded.png)

The sucess of deployment ensures you have a full stack A4C / Yorc available.

# Shut down alien4cloud

You can still play with alien4cloud of course as there is plenty to discover ;). But when you want to shut it down just launch the following command:

{% highlight bash %}
systemctl stop a4c
{% endhighlight %}

In order to launch it again no need to launch the starting command of a4c service if the VM has been restarted.
{% highlight bash %}
systemctl start a4c
{% endhighlight %}

In order to restart, you can use the command :
{% highlight bash %}
systemctl restart a4c
{% endhighlight %}



#Done!!!
That is it! You should now be a little bit familiar with Alien4cloud interface. But there is more under the skin!

For more, take a look on the [user guide](#/documentation/3.0.0/user_guide/user_guide.html).

If you want to understand a bit more about the concepts developed in Alien4cloud, [here you go](#/documentation/3.0.0/concepts/concepts.html), and you might want to check out for the [TOSCA usage guide](#/documentation/3.0.0/devops_guide/dev_ops_guide.html) too.
