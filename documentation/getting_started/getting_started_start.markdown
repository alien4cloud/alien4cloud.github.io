---
layout: post
title:  Quick Start
root: ../../
categories: DOCUMENTATION
parent: [getting_started]
node_name: getting_started_start
weight: 300
---

{% summary %}{% endsummary %}

# Configure and start Cloudify 2 or 3

Regarding your choice between providers for Cloudify 2 or 3, please refer to those following sections :

* [Configure and start Cloudify 2](#/documentation/cloudify2_driver/index.html)
* [Configure and start Cloudify 3](#/documentation/cloudify3_driver/index.html)

# Start and configure Alien 4 Cloud

Assuming you have downloaded the standalone version in the [prerequisite step](#/documentation/getting_started/getting_started_prerequisites.html)
you will only have to execute the following command in your shell :

{% highlight sh %}
java -XX:MaxPermSize=512m -jar alien4cloud-ui-VERSION-standalone.war --spring.profiles.active=security-demo
{% endhighlight %}

The command option `--spring.profiles.active=security-demo` allows you to have Alien 4 Cloud
started with default settings such as the default user `admin` we will use later.

## Install and configure provider plugin

In this step, you will have to import the chosen provider plugin and then configure it. Refer to the following sections :

* [Cloudify 2 plugin](#/documentation/cloudify2_driver/install_config.html)
* [Cloudify 3 plugin](#/documentation/cloudify3_driver/install_config.html)

In our tutorial, let's call the configured cloud `OpenStackCloud`.

# Import components in Alien 4 Cloud

Regardless the used provider, read the following section to know how to import your
components archive.

* [Import components](#/documentation/user_guide/components/components_management.html)

## Normative types

The TOSCA specification used by Alien 4 Cloud is defining [normative types](#/documentation/devops_guide/normative_types/tosca_concepts_types_normative.html). As a language, you can use those components as is
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

## Wordpress topology

In order to have an full application ready to deploy through Alien 4 Cloud, just download the yaml description
of the topology here : [Wordpress topology](https://github.com/alien4cloud/samples/blob/master/topology-wordpress/wordpress-template.yml){:target="_blank"}.

When you have this file, zip it, then you will be able to import it into Alien 4 Cloud as
an [topology template](#/documentation/user_guide/topology_management.html).

{% info %}
Find detailed informations about the wordpress topology [here](#/documentation/devops_guide/lamp_stack_tutorial/lamp_stack_application.html).
{% endinfo %}

# Create an Wordpress application

Now we have the Wordpress template ready to use, we can create an application based on it :

![Create a new application](../../images/user_guide/user_guide_topology_template_new_application.png)

{% info %}
The application creation should redirect you on the `Application > Informations` page.
{% endinfo %}

# Setup and deploy your application

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

# Check that your application is p and running

### Runtime view

On this submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Wordpress url](../../images/user_guide/user_guide_topology_template_runtime.png)

### Wordpress url

Go back in the `Application > Informations` submenu to get the Wordpress application url and
test it !

![Wordpress url](../../images/user_guide/user_guide_topology_template_wordpressurl.png)

And voilà !
