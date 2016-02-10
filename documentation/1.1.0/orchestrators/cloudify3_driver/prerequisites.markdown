---
layout: post
title:  Prerequisites
root: ../../../
categories: DOCUMENTATION-1.1.0
parent: [orchestrators, cloudify_3]
node_name: cloudify_3_prerequisites
weight: 1000
---

Here are some prerequisite steps that need to be done in order to use the cloudify 3 driver.

## Install Cloudify 3.3.1 ##

How to install cloudify 3.3.1 is described [here.](http://docs.getcloudify.org/3.3.1/intro/what-is-cloudify/)

## Bootstrap your manager ##

How to bootstrap cloudify 3.3.1 is described [here.](http://docs.getcloudify.org/3.3.1/manager/bootstrapping/)

{%warning%}
Note that Cloudify 3.3.1 only support bootstraping on CentOS 7.x or RHEL 7.x.
{%endwarning%}

## Secure your manager ##

How to secure your manager is described [here.](http://docs.getcloudify.org/3.3.1/manager/security/)

{%warning%}
Following configuration is only suitable for testing purpose, in production you should customize with your own own configuration.
{%endwarning%}

To perform a rapid test of the feature, you can just enable those following keys in the bootstrap inputs

{% highlight yaml %}
admin_username: admin
admin_password: admin
ssl_enabled: true
security_enabled: true
{% endhighlight %}

In the shell that you'll use to bootstrap cloudify you should export those following variables 

{% highlight bash %}
export CLOUDIFY_SSL_TRUST_ALL=True
export CLOUDIFY_USERNAME=admin
export CLOUDIFY_PASSWORD=admin
{% endhighlight %}