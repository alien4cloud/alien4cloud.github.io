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

* In order to start using alien 4 cloud you have to download Alien. Two versions are available :

  * [**standalone**](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v={{ site.last-version }}&p=war&c=standalone) : starts an embedded jetty server
  * [deployable](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v={{ site.last-version }}&p=war) : war file that can be deployed within a war container

{% info %}
We recommend using the Alien standalone with Cloudify 3.3.
{% endinfo %}

##2. Check your access to a cloud:

To try Alien 4 Cloud with provider plugin *Cloudify* **3.x** you will need a cloud ready to use with your credentials.
If not, we advice you to use [trystack](http://trystack.org/){:target="_blank"}, a personal an free to use OpenStack.

{% info %}
For this tutorial we recommend to use OpenStack.
{% endinfo %}

##3. Configure and start Cloudify:

Please refer to those following sections : [configure and start Cloudify 3](#/documentation/1.1.0/cloudify3_driver/index.html)

##4. Start and configure Alien 4 Cloud :

Assuming you have downloaded the standalone version in the prerequisite step you will only have to execute the following command in your shell :

{% highlight sh %}
java -XX:MaxPermSize=512m -jar alien4cloud-ui-VERSION-standalone.war --spring.profiles.active=security-demo
{% endhighlight %}

The command option `--spring.profiles.active=security-demo` allows you to have Alien 4 Cloud
started with default settings such as the default user `admin` we will use later.

##5. Check that Alien4Cloud is working :
After connecting via your browser (default port is 8088 on the machine hosting A4C), you should see the following Authentication splash screen
![Wordpress url](../../images/getting_started/A4C_Welcome.png)

##6. Install and configure provider plugin:

In this step, you will have to import the provider plugin and then configure it. Refer to the following sections : [Cloudify 3 plugin](#/documentation/1.1.0/cloudify3_driver/install_config.html)

In our tutorial, let's call the configured cloud `OpenStackCloud`.

##7. Import components in Alien 4 Cloud:

{% info %}
Regardless the used provider, read the following section to know how to import your
components archive : [import components](#/documentation/1.1.0/user_guide/components_management.html)
{% endinfo %}

### Normative types

The TOSCA specification used by Alien 4 Cloud is defining [normative types](#/documentation/1.1.0/devops_guide/normative_types/tosca_concepts_types_normative.html). As a language, you can use those components as is
or extend it to suit to your needs.

You can find our implementation for these types on github here : [normative types on github](https://github.com/alien4cloud/tosca-normative-types/archive/master.zip)

{% warning %}
This download link will provide a zip with a subfolder. Ensure that this subfolder doest not exist or the
component upload will fail.
{% endwarning %}

### Required types for Wordpress

The Wordpress topology is using custom types, we have to upload them first.

Like for the normative types, you need to add the [extended types on github](https://github.com/alien4cloud/alien4cloud-extended-types/archive/master.zip)

After this, find those types on github here : [samples repository](https://github.com/alien4cloud/samples){:target="_blank"}

* **apache** : the webserver [here](https://github.com/alien4cloud/samples/tree/master/apache){:target="_blank"}
* **php** : the php interperter [here](https://github.com/alien4cloud/samples/tree/master/php){:target="_blank"}
* **mysql** : the database required by Wordpress [here](https://github.com/alien4cloud/samples/tree/master/mysql){:target="_blank"}
* **wordpress** : the blog component [here](https://github.com/alien4cloud/samples/tree/master/wordpress){:target="_blank"}

Zip the content of each folder like you did for _**normative types**_ and upload each zipped file in this order.

![Uploaded components](../../images/user_guide/user_guide_topology_template_components.png)

### Wordpress topology

In order to have an full application ready to deploy through Alien 4 Cloud, just download the yaml description
of the topology here : [Wordpress topology](https://github.com/alien4cloud/samples/blob/master/topology-wordpress/wordpress-template.yml){:target="_blank"}.

When you have this file, zip it, then you will be able to import it into Alien 4 Cloud as
an [topology template](#/documentation/1.1.0/user_guide/topology_management.html).

{% info %}
Find detailed informations about the wordpress topology [here](#/documentation/1.1.0/devops_guide/lamp_stack_tutorial/lamp_stack_application.html).
{% endinfo %}

##7. Create an Wordpress application:

Now we have the Wordpress template ready to use, we can create an application based on it :

![Create a new application](../../images/user_guide/user_guide_topology_template_new_application.png)

{% info %}
The application creation should redirect you on the `Application > Informations` page.
{% endinfo %}

##8. Setup and deploy your application:

To deploy this new application, go on `Applications > Deployments` submenu and :

* Select your orchestrator
* Select the `os_arch` of your computes
* Select the template who matches with your computers
* And click on the `Deploy` button

[![Configure your deployment](../../images/user_guide/deployment-select-location.png)](../../images/user_guide/deployment-select-location.png)

{%info%}
To understand all configuration available for the deployment page, please refer to [this section](#/documentation/1.1.0/user_guide/application_management.html).
{%endinfo%}

{% warning %}
In this part, you will be able to check matching cloud resources and possible
matching errors. This should not happen if your cloud is well configured. If you need help to configure your cloud, please refer to [this section](#/documentation/1.1.0/user_guide/cloud_management.html).
{% endwarning %}

##9. Check that your application is up and running:

### Runtime view

On this submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Wordpress url](../../images/user_guide/user_guide_topology_template_runtime.png)

### Wordpress url

When all nodes are deployed, go back in the `Application > Informations` submenu to get the Wordpress application url and
test it !

![Wordpress url](../../images/user_guide/user_guide_topology_template_wordpressurl.png)

And voilà !
