---
layout: post
title:  Component Wordpress
root: ../../
categories: DOCUMENTATION-2.1.0
parent: [devops, tosca_custom_types, lamp_stack]
node_name: lamp_stack_wordpress
weight: 200
---

{% note %}
To used Wordpress you need to upload the required recipes : **Apache2**, **Mysql** and **PHP**.
{% endnote %}

# Definition

The **Wordpress** is a special component of our LAMP stack. This component will allow to take the last zip of Wordpress to be uploaded on the Apache HTTP Server to be deployed.

Used version for this tutorial : [Wordpress](https://github.com/alien4cloud/samples/tree/master/wordpress){:target="_blank"}

## Properties

<div data-gist="https://gist.github.com/OresteVisari/6ec415bbd4d0838ab518.js"></div>

**Wordpress** properties :

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|context_path  | Name of folder into the default folder of apache2 | Empty as default |
|zip_url  | URL from where you download the application zip | Default : https://wordpress.org/latest.zip |

## Relationship and related scripts

<div data-gist="https://gist.github.com/OresteVisari/5ab382e66a4eece65077.js"></div>

{: .table .table-bordered}
|Relationship  | Usage | Comment |
|:---------|:------------|:------------|
|WordpressHostedOnApache  | Use to describe that the Wordpress is deployed on the targeted Apache server | Through apt-get and unzip |
|WordpressConnectToMysql | Use to describe the connection between Wordpress and Mysql |Set the conf of Mysql into config files of Wordpress  |
|WordpressConnectToPHP | Use to describe the connection between Wordpress and PHP |Install the PHP module for Apache2 |

{% note %}
When you define a topology, make sure to select a *WordpressHostedOn* relation between **Wordpress** and **Apache**.
{% endnote %}
