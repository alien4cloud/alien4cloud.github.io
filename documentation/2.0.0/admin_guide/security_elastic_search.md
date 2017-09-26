---
layout: post
title: Elastic Search
categories: "DOCUMENTATION-2.0.0"
root: ../../
parent:
  - admin
  - security
node_name: elastic_search
weight: 300
published: true
---

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

### Prerequisite

Generate certificates for your elasticsearch cluster (see [Certificate Generation](#/documentation/2.0.0/admin_guide/certificates.html)), and download premium distribution of Alien4Cloud

### Configuration of elasticsearch nodes

* Download elasticsearch 1.7.0 [here](https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.0.tar.gz), and install it at $ELASTIC_SEARCH_HOME
* Download the plugin [search-guard-ssl](http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=com.floragunn&a=search-guard-ssl&v=1.7.0&p=zip) (this is a backport of the plugin to work with elasticsearch 1.7.0)
* Move to  $ELASTIC_SEARCH_HOME/bin, perform following command to install the plugin to your elasticsearch installation
{% highlight bash%}
./plugin --install search-guard-ssl --url file://$SEARCH_GUARD_PROJECT/target/releases/search-guard-ssl-1.7.0-SNAPSHOT.zip
{% endhighlight %}
* Copy your certificates to $ELASTIC_SEARCH_HOME/config
* Modify $ELASTIC_SEARCH_HOME/config/elasticsearch.yml, add following section for search-guard ssl (it's just a sample, feel free to modify it to follow your cluster architecture, all available configuration keys can be found [here](https://github.com/alien4cloud/search-guard-ssl/blob/master/searchguard-ssl-config-template.yml)) :
{% highlight yaml%}
cluster.name: my-cluster
network.host: _eth0:ipv4_
searchguard.ssl.http.clientauth_mode: REQUIRE
searchguard.ssl.http.enable_openssl_if_available: false
searchguard.ssl.http.enabled: true
searchguard.ssl.http.keystore_filepath: server-keystore.jks
# Keystore password (default: changeit)
searchguard.ssl.http.keystore_password: changeit
searchguard.ssl.http.truststore_filepath: server-truststore.jks
# Truststore password (default: changeit)
searchguard.ssl.http.truststore_password: changeit
searchguard.ssl.transport.enable_openssl_if_available: false
searchguard.ssl.transport.enabled: true
searchguard.ssl.transport.enforce_hostname_verification: true
searchguard.ssl.transport.resolve_hostname: false
searchguard.ssl.transport.keystore_filepath: server-keystore.jks
# Keystore password (default: changeit)
searchguard.ssl.transport.keystore_password: changeit
searchguard.ssl.transport.truststore_filepath: server-truststore.jks
# Truststore password (default: changeit)
searchguard.ssl.transport.truststore_password: changeit
discovery.zen.ping.unicast.hosts: ["10.67.79.5"]
discovery.zen.ping.multicast.enabled: false
discovery.zen.ping.unicast.enabled: true
index.number_of_replicas: 1
{% endhighlight %}
* Perform the same operations for all your elasticsearch cluster nodes
* Start your elasticsearch cluster

### Configuration of Alien

* In $ALIEN_HOME/config/alien4cloud-config.yml, configure Alien as an elasticsearch transport client:
{% highlight yaml %}
elasticSearch:
  clusterName: my-cluster
  local: false
  client: true
  prefix_max_expansions: 10
  transportClient: true
  resetData: false
  # a comma separated list of host:port couples
  hosts: 10.67.79.4:9300,10.67.79.5:9300
{% endhighlight %}

* Modify the configuration for elasticsearch $ALIEN_HOME/config/elasticsearch.yml to suit your need (all available configuration keys can be found [here](https://github.com/alien4cloud/search-guard-ssl/blob/master/searchguard-ssl-config-template.yml)):
{% highlight yaml %}
path:
  conf: config
gateway:
  recover_after_nodes: 1
  expected_nodes: 1
# bind only to localhost, so we aren't visible and we don't multicast discover others
network.host: _eth0:ipv4_
searchguard.ssl.http.clientauth_mode: REQUIRE
searchguard.ssl.http.enable_openssl_if_available: false
searchguard.ssl.http.enabled: true
searchguard.ssl.http.keystore_filepath: client-keystore.jks
# Keystore password (default: changeit)
searchguard.ssl.http.keystore_password: changeit
searchguard.ssl.http.truststore_filepath: server-truststore.jks
# Truststore password (default: changeit)
searchguard.ssl.http.truststore_password: changeit
searchguard.ssl.transport.enable_openssl_if_available: false
searchguard.ssl.transport.enabled: true
searchguard.ssl.transport.enforce_hostname_verification: true
searchguard.ssl.transport.resolve_hostname: false
searchguard.ssl.transport.keystore_filepath: client-keystore.jks
# Keystore password (default: changeit)
searchguard.ssl.transport.keystore_password: changeit
searchguard.ssl.transport.truststore_filepath: server-truststore.jks
# Truststore password (default: changeit)
searchguard.ssl.transport.truststore_password: changeit
{% endhighlight %}
* Start Alien, if index is created then your configuration is correct and working !