---
layout: post
title:  Certificate generation
categories: DOCUMENTATION-1.3.0
root: ../../
parent: [admin, security]
node_name: certificate
weight: 100
---

This is a general purpose guide to generate SSL certificates, this procedure can be used to generate certificates for all Alien4Cloud components that need to secure their communication.

## Create CA and server certificates
First we have to create our own CA, that will be used to sign the certificates. (If you have another CA, then skip this part.)

### Generate a key pair for the CA certificate, and self sign it
{% highlight bash%}
openssl genrsa -aes256 -out ca-key.pem 4096
openssl req -new -x509 -days 365 -key ca-key.pem -sha256 -out ca.pem
{% endhighlight %}

### Generate a keypair for the server, and sign it with the CA
{% highlight bash%}
openssl genrsa -out server-key.pem 4096
openssl req -subj "/CN=<YOUR_DOMAIN_NAME>" -sha256 -new -key server-key.pem -out server.csr
echo subjectAltName = DNS:\*.YOUR_DOMAIN_NAME > extfile.cnf  ##this will allow to generate a certificate for all computes of you domain, you can also specify IP:YOUR_IP to fix one or multiple IPs
openssl x509 -req -days 365 -sha256 -in server.csr -CA ca.pem -CAkey ca-key.pem -CAcreateserial -out server-cert.pem -extfile extfile.cnf
{% endhighlight %}

### Generate a keypair for a client (exemple: alien4cloud instance), and sign it with the CA
{% warning %}
If you do not want to require client authentication by certificate (mutual authentication between server and client), you can skip the below step
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
If you do not want to require client authentication by certificate (mutual authentication between server and client), you can skip the below step
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
