---
layout: post
title:  Component WebSite
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_website
weight: 200
---

# Definition

The **WebSite** is a special component of our LAMP stack. This component will allow to take any zip file as an *artifact* file or the full http link to the zip to be uploaded on the Apache HTTP Server to be deployed.

Used version for this tutorial : [WebSite WD02](https://github.com/alien4cloud/samples/tree/wd02/website){:target="_blank"}

## Properties

<div data-gist="https://gist.github.com/OresteVisari/6ec415bbd4d0838ab518.js"></div>

**WebSite** properties :

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|folder_to_unzip  | Name of folder to extract the zip file | */var/www/html* as default |
|zip_url  | URL from where you download the application zip | Empty as default |
|website_zip  | An artifact to upload your zip into cap and then unzip it in the *context_path* | Empty as default |

{% note %}
You need to specify a *zip_url* **or** a *website_zip* for the application / website you want to install. In case you put both, the *zip_url* will be used prior to the *website_zip*.
{% endnote %}

## Relationship and related scripts

<div data-gist="https://gist.github.com/OresteVisari/5ab382e66a4eece65077.js"></div>

{: .table .table-bordered}
|Relationship  | Usage | Comment |
|:---------|:------------|:------------|
|WebSiteHostedOn  | Use to describe that the website is deployed on the targeted **Apache** server | Through apt-get and unzip on ubuntu image |

{% note %}
When you define a topology, make sure to select a *WebSiteHostedOn* relation between **WebSite** and **Apache**.
{% endnote %}
