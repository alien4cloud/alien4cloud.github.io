---
layout: post
title:  Getting started
root: ../
categories: DOCUMENTATION-1.1.0
parent: []
node_name: getting_started
weight: 100
---

This guide will explain how to take in charge Alien in details and configure it for your uses.

##1. Prerequisites:

* Ensure that you have at least JAVA version 7 or higher installed on your working station. If not, just install
java following instructions [here](https://www.java.com/fr/download/manual.jsp){:target="_blank"}.

* You can get *Cloudify* in version 3.3 [here](http://getcloudify.org/downloads/get_cloudify_3x.html#dl){:target="_blank"}.

* In order to start using alien 4 cloud you have to download Alien: [alien4cloud-dist](http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-dist&v=1.1.0&p=tar.gz&c=dist)

{% info %}
We recommend using the Alien standalone with **Cloudify 3.3.1** on **OpenStack**.
{% endinfo %}

##2. Start and configure Alien 4 Cloud :

Assuming you have downloaded in the prerequisite, extract the archive and execute the following commands in your shell :

{% highlight sh %}
cd alien4cloud
./alien4cloud.sh
{% endhighlight %}

To check that Alien4Cloud is working, open it in your browser (default port is 8088 on the machine hosting A4C), you should see the authentication splash screen.

[![Configure your deployment](../../images/getting_started/authentication-splash-screen.png)](../../images/getting_started/authentication-splash-screen.png)

##3. Import components in Alien 4 Cloud:

{% info %}
Regardless the used provider, read the following section to know how to import your
components archive : [import components](#/documentation/1.1.0/user_guide/components_management.html)
{% endinfo %}

### Required types for Wordpress

The Wordpress topology is using custom types, we have to upload them first.
Find those types on github here : [samples repository](https://github.com/alien4cloud/samples){:target="_blank"}

* **apache** : the webserver [here](https://github.com/alien4cloud/samples/tree/master/apache){:target="_blank"}
* **php** : the php interperter [here](https://github.com/alien4cloud/samples/tree/master/php){:target="_blank"}
* **mysql** : the database required by Wordpress [here](https://github.com/alien4cloud/samples/tree/master/mysql){:target="_blank"}
* **wordpress** : the blog component [here](https://github.com/alien4cloud/samples/tree/master/wordpress){:target="_blank"}

Zip the content of each folder and upload each zipped file in this order.

![Uploaded components](../../images/getting_started/upload-wordpress-components.png)

### Wordpress topology

In order to have an full application ready to deploy through Alien 4 Cloud, just download the yaml description
of the topology here : [Wordpress topology](https://github.com/alien4cloud/samples/blob/master/topology-wordpress/wordpress-template.yml){:target="_blank"}.

When you have this file, zip it, then you will be able to import it into Alien 4 Cloud as
an [topology template](#/documentation/1.1.0/user_guide/topology_management.html).

{% info %}
Find detailed informations about the wordpress topology [here](#/documentation/1.1.0/devops_guide/lamp_stack_tutorial/lamp_stack_application.html).
{% endinfo %}

##4. Create an Wordpress application:

Now we have the Wordpress template ready to use, we can create an application based on it. To do this, go to the `Application` section, click on the `New application` button and select the **wordpress-template** in the topology template dropdown.

The application creation should redirect you on the `Application > Informations` page.
To see your application topology, go to the `Application > Topology` page, you will see the following screen.

[![Wordpress Topology](../../images/getting_started/wordress-topology.png)](../../images/getting_started/wordress-topology.png)

##5. Install and configure provider plugin:

To try Alien 4 Cloud with provider plugin *Cloudify* **3.x** you will need a cloud ready to use with your credentials.
If not, we advice you to use [trystack](http://trystack.org/){:target="_blank"}, a personal an free to use OpenStack.

To configure and start Cloudify 3 driver, please refer to those following sections : [Cloudify 3 plugin](#/documentation/1.1.0/orchestrators/cloudify3_driver/install_config.html)

In our tutorial, let's call the configured orchestrator `My_orchestrator` and this unique location `My_location`.

##6. Setup and deploy your application:

To deploy this new application, go on `Applications > Deployments` submenu and :

* Select your location
* Select the template who matches with your computers
* Select the `os_arch` of your computes
* And click on the `Deploy` button

[![Configure your deployment](../../images/getting_started/deployment-page.png)](../../images/getting_started/deployment-page.png)

{%info%}
To understand all configuration available for the deployment page, please refer to [this section](#/documentation/1.1.0/user_guide/application_management.html).
{%endinfo%}

{% warning %}
In this part, you will be able to check matching cloud resources and possible
matching errors. This should not happen if your cloud is well configured. If you need help to configure your cloud, please refer to [this section](#/documentation/1.1.0/user_guide/cloud_management.html).
{% endwarning %}

##7. Check that your application is up and running:

### Runtime view

On this submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Wordpress url](../../images/user_guide/user_guide_topology_template_runtime.png)

### Wordpress url

When all nodes are deployed, go back in the `Application > Informations` submenu to get the Wordpress application url and
test it !

![Wordpress url](../../images/user_guide/user_guide_topology_template_wordpressurl.png)

And voilà !
