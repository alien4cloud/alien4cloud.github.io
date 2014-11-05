---
layout: post
title:  LAMP Stack Tutorial
root: ../../
categories: DOCUMENTATION
parent: [getting_started]
node_name: lamp_stack
weight: 400
---

This tutorial is based on the well known opensource stack [LAMP](http://fr.wikipedia.org/wiki/LAMP){:target="_blank"} and aims at getting started with a "real application case".

We will see all steps to go through the stack component definition and have a runnable example.

{% info %}
Regarding TOSCA component definition we are using the WD02 version for this tutorial.
{% endinfo %}

There is our full alien context to give a try to this tutorial :

{: .table .table-bordered}
|A4C element  | Usage |
|:---------|:------------|
|TOSCA base types **1.0.0.WD02** | [A4C WD02 tosca-notmative-types](https://github.com/alien4cloud/tosca-normative-types/tree/1.0.0.wd02){:target="_blank"} |
|A4C Release **0.0.15**  | [Standalone WAR](https://fastconnect.org/maven/content/repositories/opensource/alien4cloud/alien4cloud-ui/0.0.15/alien4cloud-ui-0.0.15-standalone.war){:target="_blank"} or [WAR](https://fastconnect.org/maven/content/repositories/opensource/alien4cloud/alien4cloud-ui/0.0.15/alien4cloud-ui-0.0.15.war){:target="_blank"} |
|A4C Cloudify2 Driver **0.2.3**| [alien4cloud-cloudify2-provider 0.2.3](https://fastconnect.org/maven/content/repositories/opensource/alien4cloud/alien4cloud-cloudify2-provider/0.2.3/alien4cloud-cloudify2-provider-0.2.3.jar){:target="_blank"} |


# TOSCA base types

Basicly to build our full application (topology), we will have a set of basic components defined in TOSCA. You will have to inject first
this set of components in A4C and then inject your own.

More details about [normative types](../tosca_ref/tosca_concepts_types_normative_nodes.html).

{% warning %}
TOSCA definition is in constant evolution, so be sure you are using our fixed implementation given just above.
{% endwarning %}

# Our components

We will basicly define our components and other "relational" items to link those components. This is the main component list :

* [APACHE HTTP Server](http://en.wikipedia.org/wiki/Apache_HTTP_Server){:target="_blank"} : http webserver to serve your website
* [MySQL](http://en.wikipedia.org/wiki/MySQL){:target="_blank"} : relational datbase management system (RDBMS)
* [PHP](http://en.wikipedia.org/wiki/PHP){:target="_blank"} : server-side language used to interact with the database working with your html files

This is the basic stack for a LAMP environment and in A4C context we will add one more components :

* [WebSite](https://github.com/alien4cloud/samples/tree/wd02/website){:target="_blank"} : this components will allow to  take any zip file or link to any zip to be uploaded on the Apache HTTP Server and then be served.

For our example the well knwon CMS [Wordpress](http://wordpress.org/wordpress-4.0.zip){:target="_blank"} will be used. Wordpress is written in PHP and needs MySQL to run.

{% warning %}
In this tutorial you will not explain how to create since it's already described [here](../getting_started/tutorials_component_design.html).
{% endwarning %}

# Server hosting

The **L** in LAMP stand for Linux, so for our tutorial we assume that we're working with [Ubuntu 14.04](http://cdimage.ubuntu.com/netboot/14.04/){:target="_blank"} distribution as server. You must have an
image on your targeted cloud based on it.

{% note %}
We assume that you have an image in your cloud based on Ubuntu 14.04 distribution.
{% endnote %}

# [BlockStorage](../cloudify2_driver/blockstorage.html)

To persist your data even after your application is undeployed, we will use this default component described in tosca base type wd02 and that allow us to have a volume created, mounted and attached to our server host. MySQL data will be stored on this volume.
