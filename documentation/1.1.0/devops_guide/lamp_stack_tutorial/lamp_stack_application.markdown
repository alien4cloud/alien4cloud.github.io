---
layout: post
title:  Stack Application Topology
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [devops, lamp_stack]
node_name: lamp_stack_application
weight: 800
---

On this page we will create our topology representing the LAMP stack. Follow instructions step by step and at the end you will have your stack up and running.

To be more concret we will use the [Wordpress](#/documentation/1.1.0/getting_started/lamp_stack_wordpress.html) component to install a real CMS.

{%note%}
The components of the Wordpress stack are in version 2.0.0. This version was released after some tests, with success, on Ubuntu 12.04 and 14.04.
{%endnote%}

# Prerequisites

1. Get, checkout, download all components listed in the [main page](#/documentation/1.1.0/getting_started/lamp_stack.html) of this tutorial
2.  [Import components](#/documentation/1.1.0/user_guide/components_management.html)  of the Wordpress topology in **A4C**
3. Configure your cloud plugin [PaaS Provider](#/documentation/1.1.0/orchestrators/cloudify3_driver/index.html)
4. Then compose you topology following the next steps

{% info %}
On each Alien4Cloud page, on the right top corner, you have a button with a question mark [?]. Click to start a *tour* to explain what you can do in the current page and how to do it.
{% endinfo %}

# Create the topology for the Wordpress application

We have explained all components of our LAMP stack. Now, we will use these components to deploy a Wordpress on a cloud. To begin just for on *Applications* menu and create a **New application** then go on the application sub-menu **Topology**.

You are now ready to compose you application. Let's do it !

## Step 1 : The Compute

In this step, drag and drop a **Compute** into the topology design view. You need to specify two properties for this compute :

* type : **linux**
* architecture : **x86_64**

[![Compute](../../images/developer_guide/wordpress-topo-step1.png)](../../images/developer_guide/wordpress-topo-step1.png)

## Step 2 : The BlockStorage

Now, drag and drop a **BlockStorage** into the view. Select it by click and then attach it the **Compute** in the right *Properties* tab. Make sure to select the relation *attachment* with 1..1 constraint.

In these properties tab view, set also the *size* value to 1 (GB by default).

[![Compute, BlockStorage](../../images/developer_guide/wordpress-topo-step2.png)](../../images/developer_guide/wordpress-topo-step2.png)

## Step 3 : Apache, MySQL, PHP

Then, drag and drop a **MySQL**, a **PHP** and an **Apache** onto the **Compute** existing node. For each new node droped onto **Compute** you will have to decide a target for the *HostedOn* relationship (generally just check the relationship name and click *Finish*). Change the default value of **MySQL** or **Apache** if you want a custom install.

[![Compute, BlockStorage, Apache, MySQL, PHP](../../images/developer_guide/wordpress-topo-step3.png)](../../images/developer_guide/wordpress-topo-step3.png)

## Step 4 : The Wordpress

The last component to add is the **Wordpress**. Drag and drop it to the **Apache** and select the *WordpressHostedOn* relationship between **Wordpress** and **Apache**.

After this, create the relationship between **Wordpress** and **MySQL** and between **Wordpress** and **PHP**.

[![Compute, BlockStorage, Apache, MySQL, PHP,  Wordpress](../../images/developer_guide/wordpress-topo-step4.png)](../../images/developer_guide/wordpress-topo-step4.png)

# Deployment

Now we can deploy our topology into the cloud we've defined in prerequisite. The *Deploy* button is accessible in the Application sub-menu *Deployments*.

To configure your *Wordpress* at your first run, open your web browser and go to **IP_SERVER/CONTEXT_PATH**.

{% info %}
To configure your *Wordpress*, specifically for the **MySQL** settings, be sure you enter the settings you defined in your *MySQL* configuration.
{% endinfo %}

{% note %}
To check you running application, go on application *Runtime* sub-menu an select the node you want. In the *Details* tab automatically selected, you just need to select the instance line you want to have more details like *ip_address* and *public_ip_address* an try you application.

Here we can select the *Compute* node and get the *public IP* to run Wordpress for the first time and later.
{% endnote %}
