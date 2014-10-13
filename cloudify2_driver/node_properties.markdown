---
layout: post
title:  Nodes properties
categories: CLOUDIFY2_DRIVER
parent: none
weight: 30000
root: ../
---

A node type can be defined with some properties for customization, to be filled in when constructing an application topology.  
When deploying the application, the driver generate a properties file : **service.properties** for each node, and store it in their respective service directory.  
The folowing snippet shows how to access and read the value of a known property:

{% highlight groovy %}
//accessing and parsing the properties file
def config  = new ConfigSlurper().parse(new File("${context.serviceDirectory}/service.properties").toURL())

//we need the nodeTemplateId to access its properties
def nodeTemplateId =  args[0]
 
//getting a properties
def nodeTemplateProps = config[nodeTemplateId]
def prop1 = config[nodeTemplateId].prop1  //or def prop1 = nodeTeplatesProps.prop1
{% endhighlight %}