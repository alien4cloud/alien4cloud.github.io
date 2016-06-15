---
layout: post
title:  Alien Post-Deployment application
categories: DOCUMENTATION-1.2.0
root: ../../
parent: [admin]
node_name: post_deployment_app
weight: 800
---

{% summary %}{% endsummary %}


The Alien post-deployment web application is a Spring boot application, that helps managing patches or operations added to a node within a deployment. You MUST deploy it if you plan on providing to the users the ability to perform [post deployment operations](#/documentation/1.2.0/user_guide/post_deployment.html) on an application.  

{%info%}
<h5>Where to deploy</h5>
You can deploy the post deployment application where ever suits you, but note that it should be easily accessible from Alien4cloud.  
For example, for the users of the cloudify 3 orchestrator plugin, it is possible to deploy it on your manager instance. Just make sure to open the configured ports.
{%endinfo%}

# Installation
The application already contains a basic configuration that is good enough for test environment. However in order to move into production, you should customize the configuration.

Along-side to the application war, you should place configuration files in a folder named `config`:

{% highlight bash %}
├── alien4cloud-postdeployment-rest-{version}.war
├── config/alien4cloud-post-deployment-config.yml
├── config/elasticsearch.yml
{% endhighlight %}

A sample `alien4cloud-post-deployment-config.yml`:

{% highlight yaml %}
server:
  ## port on which the application should be launched
  port: 8089

archive:
  max_size: 52428800
  # directory in which alien4cloud stores uploaded artifacts related to the operations/patches.
  repository_path: runtime

 # Configuration of the elastic search cluster.
elasticSearch:
  clusterName: post_deployment_escluster
  local: false
  client: false
  resetData: false
  prefix_max_expansions: 10
{% endhighlight %}

Feel free to customize the values of the different configurations.  However the main elements you might want to modify are the `port` and the `repository_path`.  


You can find a sample configuration for `elasticsearch.yml` in the GitHub repository
[elasticsearch.yml](https://github.com/alien4cloud/alien4cloud/blob/master/alien4cloud-ui/src/main/resources/elasticsearch.yml)

However the main element you might wish to configure is elastic search storage directories:

{% highlight yaml %}
path:
  data: ${user.home}/.alienpostdeployment/elasticsearch/data
  work: ${user.home}/.alienpostdeployment/elasticsearch/work
  logs: ${user.home}/.alienpostdeployment/elasticsearch/logs
{% endhighlight %}

## start script
You can also add a simple start script:

{% highlight bash %}
├── start.sh
├── alien4cloud-postdeployment-rest-{version}.war
├── config/alien4cloud-post-deployment-config.yml
├── config/elasticsearch.ymll
{% endhighlight %}

with the following content:
{% highlight bash %}
cd `dirname $0`

JAVA_OPTIONS="-server -showversion -XX:+AggressiveOpts -Xmx1g -Xms1g -XX:MaxPermSize=256m -XX:+HeapDumpOnOutOfMemoryError"

java $JAVA_OPTIONS \
    -cp config/:alien4cloud-postdeployment-rest-{version}.war \
    org.springframework.boot.loader.WarLauncher
    "$@"
{% endhighlight %}

# Advanced configuration

## Using ssl
See [security section](#/documentation/1.2.0/admin_guide/security_patch.html).

##ElasticSearch
See [Elastic Search configuration](#/documentation/1.2.0/admin_guide/advanced_configuration.html) section.
