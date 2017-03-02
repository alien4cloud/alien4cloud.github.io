---
layout: post
title: Alien UI / Rest API
categories: "DOCUMENTATION-1.4.0"
root: ../../
parent:
  - admin
  - security
node_name: security_ui_rest
weight: 200
published: true
---

## HTTPS

Alien4Cloud UI and Rest API is secured by credentials, client must perform login to authenticate himself.
By default Alien 4 Cloud starts using http rather than https. Enabling SSL is however really simple. Just edit the ***`alien4cloud-config.yml`*** and replace:

{% highlight yaml %}
server:
  port: 8080
{% endhighlight %}

by

{% highlight yaml %}
server:
  port: 8443
  ssl:
    key-store: keystore.jks
    key-store-password: ******
    key-password: ******
{% endhighlight %}

{% info %}
More informations on SSL configuration can be found [here](#/documentation/1.4.0/admin_guide/certificates.html).
{% endinfo %}

Make sure that you have your key store placed along-side the alien4cloud war file:

{% highlight bash %}
├── alien4cloud.sh
├── alien4cloud-ssl.sh
├── alien4cloud-ui-{version}-standalone.war
├── keystore.jks
├── config/alien4cloud-config.yml
├── config/elasticsearch.yml
{% endhighlight %}

## Flags secure and http-only

To enforce security, you can also prevent attack on cookie. To do this, in  ***`alien4cloud-config.yml`***, replace:

{% highlight yaml %}
server:
  port: 8443
  ssl:
    key-store: keystore.jks
    key-store-password: ******
    key-password: ******
{% endhighlight %}

by

{% highlight yaml %}
server:
  port: 8443
  ssl:
    key-store: keystore.jks
    key-store-password: ******
    key-password: ******
  session:
    cookie:
      http-only: true
      secure: true
{% endhighlight %}
