---
layout: post
title: Alien Post-Deployment
categories: "DOCUMENTATION-2.2.0"
root: ../../
parent:
  - admin
  - security
node_name: security_patch
weight: 400
published: true
---

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}
When deploying the post deployment web application, it is recommended to enable SSL to secure the communication with Alien4Cloud.
For that to be done, you have to create a keystore, and eventually a truststore in case of mutual authentication (see [Certificate Generation](#/documentation/2.2.0/admin_guide/certificates.html)) and configure the application with the proper SSL properties.

## Configure the post-deployment web application
The post-deployment web application is a Spring boot application, thus, there are some properties that needs to be set into the Java JVM running the application. Two cases:

* you are using a configuration file ***`alien4cloud-post-deployment-config.yml`***: then you should add the options under the in the `server` section
* you are not using a configuration file: you should set your java command options.

In case you only want the server to be authenticated before the clients, you need specify the location of the keystore, by adding the following options,

{%inittab%}

{% tabcontent YAML configuration %}

{% highlight yaml %}
server:
  port: 8080 # You might want to change the port to a normalize secured one
  [...]
  ssl:
    # Make sure to change the path to a good one
    key-store: <relative/path/to/keystore.jks>
    key-store-password: ******
    key-password: ******
{% endhighlight %}

{% warning %}
Note that if you do not want to perform mutual authentication between Alien4Cloud and the post deployment web application, you should skip this step.
{% endwarning %}

{% highlight yaml %}
server:
  [...]
  ssl:
    [...]
    # Make sure to change the path to a good one
    trust-store: relativepath/to/your/truststore/server-truststore.jks
    trust-store-password: ******
    # to require client authentication
    client-auth: need
{% endhighlight %}

{% endtabcontent %}

{% tabcontent JAVA options %}
{% highlight bash%}
-Dserver.ssl.key-store=path/to/your/server-keystore/server-keystore.jks
-Dserver.ssl.key-store-password=keyStore-password
-Dserver.ssl.key-password=key-password
{% endhighlight %}

{% warning %}
Note that if you do not want to perform mutual authentication between Alien4Cloud and the post deployment web application, you should skip this step.
{% endwarning %}

{% highlight bash%}
-Dserver.ssl.trust-store=path/to/your/truststore/server-truststore.jks
-Dserver.ssl.trust-store-password=trustStore-password
// the following option is to require client authentication
-Dserver.ssl.client-auth=need
{% endhighlight %}

{% endtabcontent %}

{%endinittab%}


## Configure Alien4Cloud UI / Rest API
You have to modify the launch command to add the following java options, so that Alien4Cloud trust the certificate of the post deployment web application :
{% highlight bash%}
-Djavax.net.ssl.trustStore=path/to/your/truststore/server-truststore.jks
-Djavax.net.ssl.trustStorePassword=trustStore-password
{% endhighlight %}

{% warning %}
Note that if you do not want to perform mutual authentication between Alien4Cloud and the deployment web application, you should skip this step.
{% endwarning %}

{% highlight bash%}
-Djavax.net.ssl.keyStore=path/to/your/client-keystore/client-keystore.jks
-Djavax.net.ssl.keyStorePassword=keyStore-password
{% endhighlight %}
