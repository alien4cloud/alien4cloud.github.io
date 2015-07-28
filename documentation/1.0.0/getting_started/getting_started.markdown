---
layout: post
title:  Getting started
root: ../
categories: DOCUMENTATION
parent: []
node_name: getting_started
weight: 100
---

To begin with Alien you have two choices :

* the *30 min Start Guide!*
* or the *Step by step* guide

The first guide is like a demo, the best way if you want to try Alien in no time but you need an active AWS account.

The second guide will explain how to take in charge Alien in details and configure it for your uses.

{%inittab %}
{% tabcontent The 30 min Start Guide %}

##1. Prerequisites:

* Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (Working with version >= 4.3.26)

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html) (Working with version >= 1.7.2)

* Install triggers plugin for Vagrant: `vagrant plugin install vagrant-triggers` (Working with version >= 0.5.0)

* An active AWS account. Make sure you have all the account informations we will need later (user key, access key, key file and key pair)

##2. VM Automated Install:
* Download and unzip the package [vm-alien4cloud-1.0.0-RC1](https://fastconnect.org/owncloud/public.php?service=files&t=ddb5d1dc60894213d9d80683bf09ae29) (for other version, see on the page footer). As a result, a subdirectory vm-alien4cloud should be created

* Copy your .pem file to the directory `vm-alien4cloud/vm/key`

* Edit the file `vm-alien4cloud/puppet/manifests/install.pp` and set your aws "user key" and "access key" (`user` and `apiKey` parameters), key file name and key pair (`keyFile` and `keyPair` parameters) and finally change `machineNamePrefix` and `managementGroup`.

* Change your working directory: `cd vm-alien4cloud/vm/centos-6`

* Execute the following command to build a new VM: `vagrant up`

* At the first run, vagrant will download the base box which will be used to create the alien4cloud VM, then provision the VM with Puppet. The time needed to create a VM is around 30 minutes and depends on your internet connection speed.

* At the end of the installation, you'll see a message `==> alien4cloud: Notice: Finished catalog run in 1648.89 seconds`. You can then access Alien4Cloud Web interface from a browser on the following address: [http://192.168.32.10:8088](http://192.168.32.10:8088). Use the default account `admin` with the password `admin` to login into Alien.

##3. Deploy your application:

To deploy this new application, just go on `Applications > Deployments` submenu.

[![Configure your deployment](../../images/user_guide/user_guide_topology_template_deploy.png)](../../images/user_guide/user_guide_topology_template_deploy.png)

### Zone A : Select an environment and a cloud

Keep the default environment `Environment` and select your cloud `OpenStackCloud` created above.

### Zone B : Provider properties

Those properties depends on the provider implementation. You usualy have default settings.

### Zone C : Topology required settings

Those basic settings are required for `Compute` nodes.

### Zone D : Cloud resources matching

In this part, you will be able to check matching cloud resources and possible
matching errors. This should not happen if your cloud is well configured.

##4. Check that your application is up and running:

### Runtime view:

On this submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Wordpress url](../../images/user_guide/user_guide_topology_template_runtime.png)

### Wordpress url

Go back in the `Application > Informations` submenu to get the Wordpress application url and
test it !

![Wordpress url](../../images/user_guide/user_guide_topology_template_wordpressurl.png)

And voilà !

##5. How to Uninstall:
If you would like to de-provision the VM and the associated cloud created by Alien4Cloud, just execute the following commands:

* Change your working directory: `cd vm-alien4cloud/vm/centos-6`

* Run the following command: `vagrant destroy`

## Older versions:

[vm-alien4cloud-SM23](https://fastconnect.org/owncloud/public.php?service=files&t=8c3bc5fabf7fc132f4d8b29f2cffcae4)

[vm-alien4cloud-SM24](https://fastconnect.org/owncloud/public.php?service=files&t=3d2dded7ff0f4a3acea1380eb7f86e33)

[vm-alien4cloud-SM25](https://fastconnect.org/owncloud/public.php?service=files&t=e2a17fc56fabf2c141218f5c1fd063a1)

[vm-alien4cloud-SM26](https://fastconnect.org/owncloud/public.php?service=files&t=1470e8d3c0226d3c6774c2407dd1770e)

[vm-alien4cloud-SM27](https://fastconnect.org/owncloud/public.php?service=files&t=de94bb1a61091c58f5eb860c63a46c5f)

{%endtabcontent%}
{% tabcontent Step by step guide %}

##1. Prerequisites:

* Ensure that you have at least JAVA version 7 or higher installed on your working station. If not, just install
java following instructions [here](https://www.java.com/fr/download/manual.jsp){:target="_blank"}.

* You can get *Cloudify* in version :
  * **2.7.1** [here](http://getcloudify.org/downloads/get_cloudify_2x.html){:target="_blank"}.
  * 3.2 [here](http://getcloudify.org/downloads/get_cloudify_3x.html#dl){:target="_blank"}.


* In order to start using alien 4 cloud you have to download Alien. Two versions are available :

  * [**standalone**](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v=LATEST&p=war&c=standalone) : starts an embedded jetty server
  * [deployable](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v=LATEST&p=war) : war file that can be deployed within a war container

{% info %}
We recommend using the Alien standalone with Cloudify 2.7.1.
{% endinfo %}

##2. Check your access to a cloud:

To try Alien 4 Cloud with provider plugin *Cloudify* **2.x** or **3.x** you will need a cloud ready to use with your credentials.
If not, we advice you to use [trystack](http://trystack.org/){:target="_blank"}, a personal an free to use OpenStack.

{% info %}
For this tutorial we recommend to use OpenStack.
{% endinfo %}

##3. Configure and start Cloudify:

Regarding your choice between providers for Cloudify 2 or 3, please refer to those following sections :

* [Configure and start Cloudify 2](#/documentation/1.0.0/cloudify2_driver/index.html)
* [Configure and start Cloudify 3](#/documentation/1.0.0/cloudify3_driver/index.html)

##4. Start and configure Alien 4 Cloud :

Assuming you have downloaded the standalone version in the prerequisite step you will only have to execute the following command in your shell :

{% highlight sh %}
java -XX:MaxPermSize=512m -jar alien4cloud-ui-VERSION-standalone.war --spring.profiles.active=security-demo
{% endhighlight %}

The command option `--spring.profiles.active=security-demo` allows you to have Alien 4 Cloud
started with default settings such as the default user `admin` we will use later.

##5. Install and configure provider plugin:

In this step, you will have to import the chosen provider plugin and then configure it. Refer to the following sections :

* [Cloudify 2 plugin](#/documentation/1.0.0/cloudify2_driver/install_config.html)
* [Cloudify 3 plugin](#/documentation/1.0.0/cloudify3_driver/install_config.html)

In our tutorial, let's call the configured cloud `OpenStackCloud`.

##6. Import components in Alien 4 Cloud:

{% info %}
Regardless the used provider, read the following section to know how to import your
components archive : [import components](#/documentation/1.0.0/user_guide/components_management.html)
{% endinfo %}

### Normative types

The TOSCA specification used by Alien 4 Cloud is defining [normative types](#/documentation/1.0.0/devops_guide/normative_types/tosca_concepts_types_normative.html). As a language, you can use those components as is
or extend it to suit to your needs.

You can find our implementation for these types on github here : [normative types on github](https://github.com/alien4cloud/tosca-normative-types/archive/master.zip)

{% warning %}
This download link will provide a zip with a subfolder. Ensure that this subfolder doest not exist or the
component upload will fail.
{% endwarning %}

You must have a zip with this file tree :

{% highlight bash %}
├── images
│   ├── compute.png
│   ├── loadbalancer.png
│   ├── network.png
│   ├── objectstore.png
│   ├── relational_db.png
│   ├── root.png
│   ├── router.png
│   ├── software.png
│   └── volume.png
├── normative-types.yml
└── README.md
{% endhighlight %}

### Required types for Wordpress

The Wordpress topology is using custom types, we have to upload them first.

Find those types on github here : [samples repository](https://github.com/alien4cloud/samples){:target="_blank"}

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
an [topology template](#/documentation/1.0.0/user_guide/topology_management.html).

{% info %}
Find detailed informations about the wordpress topology [here](#/documentation/1.0.0/devops_guide/lamp_stack_tutorial/lamp_stack_application.html).
{% endinfo %}

##7. Create an Wordpress application:

Now we have the Wordpress template ready to use, we can create an application based on it :

![Create a new application](../../images/user_guide/user_guide_topology_template_new_application.png)

{% info %}
The application creation should redirect you on the `Application > Informations` page.
{% endinfo %}

##8. Setup and deploy your application:

To deploy this new application, just go on `Applications > Deployments` submenu.

[![Configure your deployment](../../images/user_guide/user_guide_topology_template_deploy.png)](../../images/user_guide/user_guide_topology_template_deploy.png)

### Zone A : Select an environment and a cloud

Keep the default environment `Environment` and select your cloud `OpenStackCloud` created above.

### Zone B : Provider properties

Those properties depends on the provider implementation. You usualy have default settings.

### Zone C : Topology required settings

Those basic settings are required for `Compute` nodes.

### Zone D : Cloud resources matching

In this part, you will be able to check matching cloud resources and possible
matching errors. This should not happen if your cloud is well configured.

##9. Check that your application is up and running:

### Runtime view

On this submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Wordpress url](../../images/user_guide/user_guide_topology_template_runtime.png)

### Wordpress url

Go back in the `Application > Informations` submenu to get the Wordpress application url and
test it !

![Wordpress url](../../images/user_guide/user_guide_topology_template_wordpressurl.png)

And voilà !

{%endtabcontent%}
{%endinittab%}
