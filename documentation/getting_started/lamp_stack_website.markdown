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

The Website is a special component of our LAMP stack. This component will allow to take any zip file or link to any zip to be uploaded on the Apache HTTP Server and then be served.

## Properties

<script src="https://gist.github.com/OresteVisari/6ec415bbd4d0838ab518.js"></script>

Website properties :

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|context_path  | Name of folder in /var/www to extract file | html as default |
|zip_url  | URL to download a zip | Empty as default |
|website_zip  | An artifact to upload a zip from our compute | Empty as default |

{% note %}
You need to specify a zip_url or a website_zip to use the component
{% endnote %}

## Relationship and related scripts

<script src="https://gist.github.com/OresteVisari/5ab382e66a4eece65077.js"></script>

{: .table .table-bordered}
|Relationship  | Usage | Comment |
|:---------|:------------|:------------|
|WebSiteHostedOn  | Use to describe that the website is deployed on the target Apache serve | Through apt-get and unzip on ubuntu image |


{% note %}
When you define a topology, make sure to select a WebSiteHostedOn relation between Website and Apache.
{% endnote %}

If you want, you can read all the Website recipe for an Ubuntu on Github : [https://github.com/alien4cloud/samples/tree/wd02/website](https://github.com/alien4cloud/samples/tree/wd02/website){:target="_blank"}
