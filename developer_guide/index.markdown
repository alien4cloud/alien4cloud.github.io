---
layout: post
title:  Developer Guide
root: ../
node_name: index
categories: DEVELOPER_GUIDE
---

ALIEN has been designed to be easily extended and integrated with other systems. It uses a plugin mechanism in order to provide extensions, and the REST API makes it easy to integrate.

The REST API documentation can be browsed directly on ALIEN's server (`http://\<alien-url\>/api-doc/index.html`, e.g. `http://localhost:8088/api-doc/index.html`) and this section will not provides more details about it.

This section gives a focus to ALIEN extensions through the plugin mechanism. In order to understand plugins it is important to know how ALIEN is designed and how plugins are managed by ALIEN.

### Mock plugin

If you want to try out Alien 4 Cloud but not use a real cloud for deployments you can use the mock PaaS Provider plugin. This is a plugin that we use for our tests and that mock the PaaS orchestrator.

{% warning %}
The mock plugin does not allow you to test any of your components as it do not deploy anything or even call your scripts. To do so you should use a real PaaS Provider plugin like cloudify plugin and deploy on a local cloud technology like Virtua Box or Docker (note that docker support will come with support of cloudify 3).
{% endwarning %}
