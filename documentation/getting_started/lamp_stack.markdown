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
We're
{% endinfo %}

# Components

* [APACHE HTTP Server](http://en.wikipedia.org/wiki/Apache_HTTP_Server){:target="_blank"} : http webserver to serve your website
* [MySQL](http://en.wikipedia.org/wiki/MySQL){:target="_blank"} : relational datbase management system (RDBMS)
* [PHP](http://en.wikipedia.org/wiki/PHP){:target="_blank"} : server-side language used to interact with the database working with your html files

This is the basic stack for a LAMP environment and in A4C context we will add one more components :

* [WebSite](https://github.com/alien4cloud/samples/tree/wd02/website){:target="_blank"} : this components will allow to  take any zip file or link to any zip to be uploaded on the Apache HTTP Server and then be served.

For our example the well knwon CMS [Wordpress](http://wordpress.org/wordpress-4.0.zip){:target="_blank"} will be used. Wordpress is written in PHP and needs MySQL to run.

# Server hosting

The **L** in LAMP stand for Linux, so for our tutorial we assume that we're working with [Ubuntu 14.04](http://cdimage.ubuntu.com/netboot/14.04/){:target="_blank"} distribution as server. You must have an
image on your targeted cloud based on it.

{% note %}
Please be sure you have an image on your cloud based on Ubuntu 14.04.
{% endnote %}

# BlockStorage

To persist your data even after your application is undeployed, we will use this default component described in tosca base type wd02 and that allow us to have a volume created, mounted and attached to our server host. MySQL data will be stored on this volume.
