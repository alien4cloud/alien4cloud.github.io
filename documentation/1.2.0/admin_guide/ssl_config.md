---
layout: post
title: SSL configuration
categories: "DOCUMENTATION-1.2.0"
root: ../../
parent: 
  - admin
  - security
node_name: ssl_configuration
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
This section refers to the premium feature.
{% endinfo %}
When deploying the patches-application, it is recommended to configure the ssl, to secure the communication with Alien4Cloud.  
For that to be done, you have to create a keystore (and eventually a truststore in case of mutual authentication) and lunch your application with the proper SSL configuration properties.  
If you already have those, then jump to the **Configure the patches server** part, otherwise, you can follow these quick steps to have  self-signed certificates.

## Create CA and server certificates
First we have to create our own CA, that will be used to sign the certificates. (If you have another CA, then skip this part.)
### Generate a key pair for the CA certificate, and self sign it
{% highlight bash%}
openssl genrsa -aes256 -out ca-key.pem 4096
openssl req -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem
{% endhighlight %}

### Generate a keypair for the server (ie for the patches server), and sign it with the CA
{% highlight bash%}
openssl genrsa -out server-key.pem 4096
openssl req -subj "/CN=<YOUR_DOMAIN_NAME>" -sha256 -new -key server-key.pem -out server.csr
echo subjectAltName = DNS:\*.YOUR_DOMAIN_NAME > extfile.cnf  ##this will allow to generate a certificate for all computes of you domain
openssl x509 -req -days 365 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile extfile.cnf
{% endhighlight %}

### Generate a keypair for a client (exemple: alien4cloud instance), and sign it with the CA
{% warning %}
Note that if you do not want to perform mutual authentication between Alien4Cloud and the patches server, you should skip this step.
{% endwarning %}

{% highlight bash%}
openssl genrsa -out key.pem 4096
openssl req -subj '/CN=client' -new -key key.pem -out client.csr
echo extendedKeyUsage = clientAuth > extfile.cnf
openssl x509 -req -days 365 -sha256 -in client.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out cert.pem -extfile extfile.cnf
{% endhighlight %}

## Create java truststore and keystore(s)
Now we have to create a truststore with our CA, and add the created keys into one or several keystores.

### Generate the truststore
The Java installation comes with a build in truststore that contains most of the public trusted CA of the web. If you are building a key for alien4cloud, you must use that truststore and add in your own CA certificate.  That file is usually located at `$JAVA_HOME/lib/security/cacert`. The default password is *changeit*.

{% highlight bash%}
cp $JAVA_HOME/lib/security/cacert ./server-truststore.jks
openssl x509 -outform der -in ca.pem -out ca.der
keytool -import -alias alien4cloud -keystore server-truststore.jks -file ca.der
{% endhighlight %}

### Generate the server keystore
{% highlight bash%}
openssl pkcs12 -export -name alien4cloud -in server-cert.pem -inkey server-key.pem -out server-keystore.p12 -chain -CAfile ca.pem -caname root
keytool -importkeystore -destkeystore server-keystore.jks -srckeystore server-keystore.p12 -srcstoretype pkcs12 -alias alien4cloud
{% endhighlight %}

### Generate a client keystore
{% warning %}
Note that if you do not want to perform mutual authentication between Alien4Cloud and the patches server, you should skip this step.
{% endwarning %}

{% warning%}
<h5>keystore password</h5>
For some reason, java clients requires that all the keys in a keystore have the same password as the keystore. Then, make sure you use the same password as the client key pair here.
{% endwarning%}

{% highlight bash%}
openssl pkcs12 -export -name alien4cloudClient -in cert.pem -inkey key.pem -out client-keystore.p12 -chain -CAfile ca.pem -caname root
keytool -importkeystore -destkeystore client-keystore.jks -srckeystore client-keystore.p12 -srcstoretype pkcs12 -alias alien4cloudClient
{% endhighlight %}  

Now that you we have the keystores and the truststore, we can configure the server (and eventually the client) to take them into account.

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
You have to modify your launching command to add the folowing java options:
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
