---
layout: post
title: Post-Deployment configuration
root: ../../../
categories: "DOCUMENTATION-1.2.0"
parent:
  - orchestrators
  - cloudify_3
  - cloudify_3_install
node_name: postdeploment_config
weight: 1000
published: true
---
{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

If you are working with the premium cloudify 3 plugin, then you have a feature that allows you to add and execute patches and custom operations on a deployed application. It needs to have a [patches server deploy somewhere](#/documentation/1.2.0/admin_guide/post_deployment_application.html), and to makes some configurations.

## Post-Deployment server URL
You must provide the endpoint URL of your deployed patches server: ***`postDeploymentRestURL`***.

## SSL configurations
If your server is deployed with SSL security, and required the clients to authenticate themselves before him, you need to provide alien4cloud with a bunch of security informations when configuring the orchestrator:

* __CA certificate__: The authority certificate to refers to trust the patches server;
* __Client key__: The key to use to authenticate the client before the patches  server;
* __Client certificate__: The certificate to use to authenticate the client before the patches  server.

You must provide them in form of string data values (means you have to open your .pem file with a text editor and copy the content).  
{%warning%}
Make sure that you are in multi-line edition mode, by clicking on the ![multi-line edition icon](../../images/multi-line-edition.png){: .inline} icon next the edition box.
{%endwarning%}

[![post deployment ssl configuration][config_orchestrator_postdeployment_ssl]][config_orchestrator_postdeployment_ssl]{:target="_blank"}


[config_orchestrator_postdeployment_ssl]: ../../images/cloudify3_driver/config_orchestrator_postdeployment_ssl.png  "post deployment ssl"
