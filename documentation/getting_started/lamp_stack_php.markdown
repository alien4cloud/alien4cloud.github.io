---
layout: post
title:  Component PHP
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_php
weight: 200
---

This component will install the PHP on the host server.

Used version for this tutorial : [PHP WD02](https://github.com/alien4cloud/samples/tree/wd02/php){:target="_blank"}

# Definition

PHP is the programming language of the LAMP stack, it's a server-side scripting. On this page, we just explain the recipe of this component. Below, the content of this META file :

<script src="https://gist.github.com/OresteVisari/a7858be0865af14f9830.js"></script>

## Namming / description

<script src="https://gist.github.com/cmourouvin/acf626b8df0fb8bc1df1.js"></script>

{% note %}
PHP inherite from the tosca base type **tosca.nodes.SoftwareComponent**
{% endnote %}

## Properties

The PHP recipe is not so complicated, it has only three properties. The first property is the version, like for Apache recipe, it's just to be mentioned. The two other properties are booleans to install the Apache 2 module or the MySQL module., two packages specific to this software.

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|version  | Mention the php version | Constant version in our example (v5)|
|add_apache2_module  | Boolean to activate the PHP module for Apache HTTP Server | False by default |
|add_mysql_module  | Boolean to activate the MySQL module for Apache HTTP Server | False by default |

{% note %}
For our stack you must activate this two modules for Apache.
{% endnote %}

## Lifecycle and related scripts

<script src="https://gist.github.com/cmourouvin/3f81ddf20aa2cbc907ac.js"></script>

{: .table .table-bordered}
|Operation  | Usage | Comment |
|:---------|:------------|:------------|
|create  | Executed script to install PHP on the Compute | Through apt-get on ubuntu image |
