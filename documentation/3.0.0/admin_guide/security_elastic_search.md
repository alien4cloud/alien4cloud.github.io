---
layout: post
title: Elasticsearch
categories: "DOCUMENTATION-3.0.0"
root: ../../
parent:
  - admin
  - security
node_name: elastic_search
weight: 300
published: true
---



### Prerequisite

Generate certificates for your elasticsearch cluster (see [Certificate Generation](#/documentation/3.0.0/admin_guide/certificates.html)), and download premium distribution of Alien4Cloud

### Configuration of elasticsearch nodes

* Download elasticsearch 6.6.2 [here](https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.6.2.tar.gz), and install it at $ELASTIC_SEARCH_HOME
* Copy your certificates to $ELASTIC_SEARCH_HOME/config
* Modify $ELASTIC_SEARCH_HOME/config/elasticsearch.yml :
{% highlight yaml%}
xpack.security.transport.ssl.enabled: true
xpack.security.transport.ssl.verification_mode: certificate
xpack.security.transport.ssl.key: {{hostkey_file_path}}
xpack.security.transport.ssl.certificate: {{hostcert_file_path}}
xpack.security.transport.ssl.certificate_authorities: ["{{ca_file_path}}"]

xpack.security.http.ssl.enabled: true
xpack.security.http.ssl.verification_mode: certificate
xpack.security.http.ssl.key: {{hostkey_file_path}} 
xpack.security.http.ssl.certificate: {{hostcert_file_path}}
xpack.security.http.ssl.certificate_authorities: ["{{ca_file_path}}"]

xpack.security.authc.anonymous.roles: superuser

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

* Modify the configuration of searchguard in $ALIEN_HOME/config/alien4cloud-config.yml :
{% highlight yaml %}

searchguard:
  ssl:
    transport:
      enabled: true
      keystore_filepath: <keystore file>
      keystore_password: <password>
      truststore_filepath: <truststore file>
      truststore_password: <password>

{% endhighlight %}

* SSL is only available with a remote Elastic Search.
* Start Alien, if index is created then your configuration is correct and working !


### Using alien4cloud-spray to secure Elastic Search
The alien4Cloud spray available on [Alien4Cloud spray](https://github.com/alien4cloud/alien4cloud-spray) gives scripts to generate CA, hosts keys and certificates
**elasticsearch_tls** parameter in the [alien4cloud-spray configuration file ](https://github.com/alien4cloud/alien4cloud-spray/blob/develop/inputs.yml) must be set to true, generated certificates have to be put in **certificates_path** (parameter of the same configuration file)
