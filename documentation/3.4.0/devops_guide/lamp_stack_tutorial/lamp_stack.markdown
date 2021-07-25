---
layout: post
title:  LAMP Stack Tutorial
root: ../../
categories: DOCUMENTATION-3.4.0
parent: [devops, tosca_custom_types]
node_name: lamp_stack
weight: 400
---

This tutorial is based on the well known opensource stack [LAMP](http://fr.wikipedia.org/wiki/LAMP){:target="_blank"} and aims at getting started with a "real application case".

We will see all steps to go through the stack component definition and have a runnable example.

{%note%}
The components of the Wordpress stack are in version 3.0.0. This version was released after some tests, with success, on Ubuntu 12.04 and 14.04.
{%endnote%}

{% info %}
Regarding TOSCA component definition we are using the WD03 version for this tutorial.
{% endinfo %}

There is our full alien context to give a try to this tutorial :

{: .table .table-bordered}
|A4C element  | Usage |
|:---------|:------------|
|TOSCA base types **1.0.0-ALIEN20** | [A4C WD03 tosca-notmative-types](https://github.com/alien4cloud/alien4cloud-extended-types){:target="_blank"} |
|A4C Release **latest millestone ** - latest release  | [Alien4Cloud](https://www.portaildulibre.fr/nexus/repository/opensource-releases/alien4cloud/alien4cloud-premium-dist/3.0.0-M8/alien4cloud-premium-dist-3.0.0-M8-dist.tar.gz){:target="_blank"} |
|A4C Yorc plugin **latest millestone **| [alien4cloud-yorc-provider](https://www.portaildulibre.fr/nexus/repository/opensource-releases/alien4cloud/alien4cloud-yorc-provider/3.0.0-M8/alien4cloud-yorc-provider-3.0.0-M8.zip){:target="_blank"} |


# TOSCA base types

Basicly to build our full application (topology), we will have a set of basic components defined in TOSCA. This components are added in Alien at the first bootstrap.

More details about [normative types](#/documentation/1.0.0/devops_guide/normative_types/tosca_concepts_types_normative_nodes.html).

{% warning %}
TOSCA definition is in constant evolution, so be sure you are using our fixed implementation given just above.
{% endwarning %}

# Our components

We will define our components and other "relational" items to link those components. This is the main component list :

* [APACHE HTTP Server](http://en.wikipedia.org/wiki/Apache_HTTP_Server){:target="_blank"} : http webserver to serve your website
* [MySQL](http://en.wikipedia.org/wiki/MySQL){:target="_blank"} : relational database management system (RDBMS)
* [PHP](http://en.wikipedia.org/wiki/PHP){:target="_blank"} : server-side language used to interact with the database working with your HTML files

This is the basic stack for a LAMP environment and in A4C context we will add one more components :

* [Wordpress](http://wordpress.org/){:target="_blank"} : this components will allow to  install the Wordpress CMS on the Apache HTTP Server. Wordpress also need a PHP and a Mysql database.

# Server hosting

The **L** in LAMP stand for Linux, so for our tutorial we assume that we're working with [Ubuntu 14.04](http://cdimage.ubuntu.com/netboot/14.04/){:target="_blank"} distribution as server. You must have an
image on your targeted cloud based on it.

{% note %}
We assume that you have an image in your cloud based on Ubuntu 12.04 or 14.04.
{% endnote %}

# BlockStorage

To persist your data even after your application is undeployed, we will use this default component described in tosca base type 1.0.0-ALIEN11 and that allow us to have a volume created, mounted and attached to our server host. MySQL data will be stored on this volume.
