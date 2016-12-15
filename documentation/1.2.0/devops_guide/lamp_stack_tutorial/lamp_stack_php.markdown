---
layout: post
exclude_from_search: true
title:  Component PHP
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [devops, lamp_stack]
node_name: lamp_stack_php
weight: 200
---

This component will install the PHP on the host server.

Used version for this tutorial : [PHP](https://github.com/alien4cloud/samples/tree/master/php){:target="_blank"}

{% note %}
This installation is based on Ubuntu distribution with apt-get command.
{% endnote %}

# Definition

PHP is the programming language of the LAMP stack, it's a server-side scripting. On this page, we just explain the recipe of this component. Below, the header of the php-type :

<div data-gist="https://gist.github.com/OresteVisari/a7858be0865af14f9830.js"></div>

## Properties

The PHP recipe is not so complicated, it has only three properties. The first property is the version, like for Apache recipe, it's just to be mentioned. The two other properties are booleans to install the PHP Apache 2 module or the PHP MySQL module.

<div data-gist="https://gist.github.com/OresteVisari/2137c78d2d9553e53b04.js"></div>

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|version  | Mention the php version | Constant version in our example (v5)|


## Lifecycle and related scripts

<div data-gist="https://gist.github.com/OresteVisari/6870bf82c86a694d9532.js"></div>

{% note %}
PHP inherite from the tosca base type **tosca.nodes.SoftwareComponent**
{% endnote %}

{: .table .table-bordered}
|Operation  | Usage | Comment |
|:---------|:------------|:------------|
|create  | Executed script to install PHP on the Compute | Through apt-get on ubuntu image |
