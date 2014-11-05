---
layout: post
title:  Component WebSite
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_website
weight: 200
---
The Website is a special component of our LAMP stack. This component will allow to take any zip file or link to any zip to be uploaded on the Apache HTTP Server and then be served. On this page, we will describe the recipe. To begin, see the META file of the website :
<script src="https://gist.github.com/OresteVisari/8a8eb059f431f322af8d.js"></script>

Like Apache, Website derives from a node, the node of the parent of the Website is WebApplication. The first property is a URL to a zip file. If you set the value, our script we will download the file. If you leave this property empty, we will test the presence of an artifact.The artifact is a zip file, you can upload a zip file present on your computer with this method.

The context path property is the name of folder present in the folder monitor by Apache. The default value is 'html', according to Apache. If you want a specific path to your site, you can change this value.

<script src="https://gist.github.com/OresteVisari/6ec415bbd4d0838ab518.js"></script>

To conclude, we defined in the same file a new relationship. Website need an Apache server up before her deployment. The valid source is the HttpEndpoint, provided by heritage for Website by WebApplication. The valid target is a Container, provide by Apache.

<script src="https://gist.github.com/OresteVisari/5ab382e66a4eece65077.js"></script>

{% note %}
When you define a topology, make sure to select a WebSiteHostedOn relation between Website and Apache.
{% endnote %}

If you want, you can read all the Website recipe for an Ubuntu on Github : [https://github.com/alien4cloud/samples/tree/master/website](https://github.com/alien4cloud/samples/tree/master/website){:target="_blank"}
