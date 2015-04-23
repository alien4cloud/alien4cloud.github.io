---
layout: post
title:  Prerequisites
root: ../../
categories: DOCUMENTATION
parent: [getting_started]
node_name: getting_started_prerequisites
weight: 200
---

{% summary %}
Before starting.
{% endsummary %}

# Check your JAVA version

Ensure that you have at least JAVA version 7 or higher installed on your working station. If not, just install
java following instructions [here](https://www.java.com/fr/download/manual.jsp){:target="_blank"}.

# Download Cloudify 2

You can get *Cloudify* in version **2.7.1** [here](http://getcloudify.org/downloads/get_cloudify_2x.html){:target="_blank"}.

# Download Alien4Cloud

In order to start using alien 4 cloud you have to download Alien. Two versions are available :

* [standalone](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v=LATEST&p=war&c=standalone) : starts an embedded jetty server
* [deployable](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v=LATEST&p=war) : war file that can be deployed within a war container

{% note %}
We recommend using the standalone version.
{% endnote %}

# Check your access to a cloud

To try Alien 4 Cloud with provider plugin *Cloudify* **2.x** or **3.x** you will need a cloud ready to use with your credentials.
If not, we advice you to use [trystack](http://trystack.org/){:target="_blank"}, a personal an free to use OpenStack.

{% warning %}
To validate your subscription to trystack, you will have to wait few days.
{% endwarning %}

{% note %}
For this tutorial we recommend to use OpenStack.
{% endnote %}
