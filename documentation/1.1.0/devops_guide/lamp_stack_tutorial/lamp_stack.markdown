---
layout: post
title:  LAMP Stack Tutorial
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [devops]
node_name: lamp_stack
weight: 400
---

{% warning %}
This full stack application is still under **construction** / **definition**. You can follow it right now for a first jump into A4C but it will surely change in next weeks. We will enhance it trying to show the *best way* and the recommended *granularity* to target the best component **reusability**.
{% endwarning %}

This tutorial is based on the well known opensource stack [LAMP](http://fr.wikipedia.org/wiki/LAMP){:target="_blank"} and aims at getting started with a "real application case".

We will see all steps to go through the stack component definition and have a runnable example.

{% info %}
Regarding TOSCA component definition we are using the WD03 version for this tutorial.
{% endinfo %}

There is our full alien context to give a try to this tutorial :

{: .table .table-bordered}
|A4C element  | Usage |
|:---------|:------------|
|TOSCA base types **1.0.0.WD03** | [A4C WD03 tosca-notmative-types](https://github.com/alien4cloud/alien4cloud-extended-types){:target="_blank"} |
|A4C Release **1.0.0-SM18**  | [Standalone WAR](https://fastconnect.org/maven/content/repositories/opensource/alien4cloud/alien4cloud-ui/1.0.0-SM18/alien4cloud-ui-1.0.0-SM18-standalone.war){:target="_blank"} or [WAR](https://fastconnect.org/maven/content/repositories/opensource/alien4cloud/alien4cloud-ui/1.0.0-SM18/alien4cloud-ui-1.0.0-SM18.war){:target="_blank"} |
|A4C Cloudify2 Driver **1.0.0-SM18**| [alien4cloud-cloudify2-provider 1.0.0-SM18](https://fastconnect.org/maven/content/repositories/opensource/alien4cloud/alien4cloud-cloudify2-provider/1.0.0-SM18/alien4cloud-cloudify2-provider-1.0.0-SM18.jar){:target="_blank"} |


# TOSCA base types

Basicly to build our full application (topology), we will have a set of basic components defined in TOSCA. You will have to inject first
this set of components in A4C and then inject your own.

More details about [normative types](#/documentation/devops_guide/normative_types/tosca_concepts_types_normative_nodes.html).

{% warning %}
TOSCA definition is in constant evolution, so be sure you are using our fixed implementation given just above.
{% endwarning %}

# Our components

We will basicly define our components and other "relational" items to link those components. This is the main component list :

* [APACHE HTTP Server](http://en.wikipedia.org/wiki/Apache_HTTP_Server){:target="_blank"} : http webserver to serve your website
* [MySQL](http://en.wikipedia.org/wiki/MySQL){:target="_blank"} : relational datbase management system (RDBMS)
* [PHP](http://en.wikipedia.org/wiki/PHP){:target="_blank"} : server-side language used to interact with the database working with your html files

This is the basic stack for a LAMP environment and in A4C context we will add one more components :

* [Wordpress](http://wordpress.org/){:target="_blank"} : this components will allow to  install the Wordpress CMS on the Apache HTTP Server. Wordpress also need a PHP and a Mysql database.

# Server hosting

The **L** in LAMP stand for Linux, so for our tutorial we assume that we're working with [Ubuntu 14.04](http://cdimage.ubuntu.com/netboot/14.04/){:target="_blank"} distribution as server. You must have an
image on your targeted cloud based on it.

{% note %}
We assume that you have an image in your cloud based on Ubuntu 12.04 or 14.04.
{% endnote %}

# [BlockStorage](#/documentation/cloudify2_driver/blockstorage.html)

To persist your data even after your application is undeployed, we will use this default component described in tosca base type wd02 and that allow us to have a volume created, mounted and attached to our server host. MySQL data will be stored on this volume.
