---
layout: post
title: Alien UI / Rest API
categories: "DOCUMENTATION-1.2.0"
root: ../../
parent: 
  - admin
  - security
node_name: security_ui_rest
weight: 100
published: true
---

You can configure SSL communication at several levels.

# Alien4Cloud

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

Make sure that you have your key store placed along-side the alien4cloud war file:

{% highlight bash %}
├── start.sh
├── alien4cloud-ui-{version}-standalone.war
├── keystore.jks
├── config/alien4cloud-config.yml
├── config/elasticsearch.yml
{% endhighlight %}

# Post-deployment application
{% info %}
<h5>Premium feature</h5>
This section refers to the a premium feature.
{% endinfo %}
When deploying the patches-application, it is recommended to configure the ssl, to secure the communication with Alien4Cloud.  
For that to be done, you have to create a keystore (and eventually a truststore in case of mutual authentication) and lunch your application with the proper SSL configuration properties.  
If you already have those, then jump to the **Configure the patches server** part, otherwise, you can follow these quick steps to have  self-signed certificates.

## Configure the patches server
The post-deployment application is a Spring boot application, thus, there are some properties that needs to be set into the Java JVM running the application.

In case you only want the server to be authenticated before the clients, you need specify the location of the keystore, by adding the following options to java command:

{% highlight bash%}
-Dserver.ssl.key-store=path/to/your/server-keystore/server-keystore.jks
-Dserver.ssl.key-store-password=keyStore-password
-Dserver.ssl.key-password=key-password
{% endhighlight %}

{% warning %}
Note that if you do not want to perform mutual authentication between Alien4Cloud and the patches server, you should skip this step.
{% endwarning %}

{% highlight bash%}
-Dserver.ssl.trust-store=path/to/your/truststore/server-truststore.jks
-Dserver.ssl.trust-store-password=trustStore-password
//the following option is to require client authentication
-Dserver.ssl.client-auth=need
{% endhighlight %}

## Configure Alien4Cloud instance
You have to modify your launching command to add the following java options:
{% highlight bash%}
-Djavax.net.ssl.trustStore=path/to/your/truststore/server-truststore.jks
-Djavax.net.ssl.trustStorePassword=trustStore-password
{% endhighlight %}

{% warning %}
Note that if you do not want to perform mutual authentication between Alien4Cloud and the patches server, you should skip this step.
{% endwarning %}

{% highlight bash%}
-Djavax.net.ssl.keyStore=path/to/your/client-keystore/client-keystore.jks
-Djavax.net.ssl.keyStorePassword=keyStore-password
{% endhighlight %}
