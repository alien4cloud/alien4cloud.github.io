---
layout: post
title:  Security
categories: DOCUMENTATION-3.1.0
root: ../../
parent: [admin]
node_name: security
weight: 400
---

{% warning %}
This section describe deprecated manual security settings. We strongly recommend you to automate your installation using [A4C Spray](https://github.com/alien4cloud/alien4cloud-spray/tree/develop) project that well manage all SSL aspects for the full A4C stack.
{% endwarning %}

The platform Alien contains multiple components, each component has its own security policy and mechanism.
On most of the component, Alien use SSL mutual authentication, or SSL + login.

* [Alien4Cloud UI and Rest API](#/documentation/3.0.0/admin_guide/security_ui_rest.html)
* [Elasticsearch](#/documentation/3.0.0/admin_guide/security_elastic_search.html)
