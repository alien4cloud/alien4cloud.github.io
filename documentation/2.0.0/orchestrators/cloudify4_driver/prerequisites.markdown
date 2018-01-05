---
layout: post
title:  Prerequisites
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [orchestrators, cloudify_4]
node_name: cloudify_4_prerequisites
weight: 1000
---

Here are some prerequisite steps that need to be done in order to use the cloudify 4 driver.

## Install Cloudify 4.1.1 ##

How to install cloudify 4.1.1 is described [here](http://docs.getcloudify.org/4.1.0/installation/from-packages/){:target="_blank"}{:target="_blank"}.

## Bootstrap your manager ##

How to bootstrap cloudify 4.1.1 is described [here](http://docs.getcloudify.org/4.1.0/installation/bootstrapping/){:target="_blank"}.

{%warning%}
Note that cloudify 4.1.1 only support bootstraping on CentOS 7.x or RHEL 7.x.
{%endwarning%}

Here a simple snippet to bootstrap the manager:
{% highlight bash %}
curl -LO http://repository.cloudifysource.org/cloudify/4.1.1/ga-release/cloudify-enterprise-cli-4.1.1ga.rpm
sudo rpm -i http://repository.cloudifysource.org/cloudify/4.1.1/ga-release/cloudify-enterprise-cli-4.1.1ga.rpm
# Edit /opt/cfy/cloudify-manager-blueprints/simple-manager-blueprint-inputs.yaml
# Then bootstrap the manager
cd /opt/cfy/cloudify-manager-blueprints
sudo cfy bootstrap simple-manager-blueprint.yaml -i simple-manager-blueprint-inputs.yaml
{% endhighlight %}

## Secure your manager ##

Starting from 4.0, Cloudify's manager is secured by default using a username/password with a default SSL on the nginx for the REST API and the WebUI.  
At bootstrap, it will generate a private certificate for internal communications between manager's component and its agents.

{%warning%}
Following configuration is only suitable for testing purpose, in production you should customize with your own own configuration.
{%endwarning%}

To perform a rapid test of the feature, you can just enable those following keys in the bootstrap inputs

### Setting the crendentials ###

By default, the username is 'admin' with a generated password at bootstrap.  
If you want to set your password, uncomment and edit the following keys in the inputs file.
{% highlight yaml %}
admin_username: admin
admin_password: admin
{% endhighlight %}

### Setting the Nginx SSL ###

If not provided, The bootstrap workflow will generate default a key and a certificate for the external communication with NGinx (REST API & WebUI).
You can generate and provide your own certificate by copy it into  /opt/cfy/cloudify-manager-blueprints/resources/ssl
Make sure you name it `cloudify_external_cert.pem` and `cloudify_external_key.pem`.


## Additional configuration steps

* [Cloudify 4.x patches](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_patches.html)
* [Deployment logs configuration](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_logs.html)
* [Offline configuration](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_offline.html)
