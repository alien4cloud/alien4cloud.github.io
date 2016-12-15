---
layout: post
exclude_from_search: true
title:  Alien Post-Deployment application
categories: DOCUMENTATION-1.2.0
root: ../../
parent: [admin]
node_name: post_deployment_app
weight: 800
---

{% summary %}{% endsummary %}

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

The Alien post-deployment web application is a Spring boot application, that helps managing patches or operations added to a node within a deployment. You MUST deploy it if you plan on providing to the users the ability to perform [post deployment operations](#/documentation/1.2.0/user_guide/post_deployment.html) on an application.  

{%info%}
<h5>Where to deploy</h5>
You can deploy the post deployment application where ever suits you, but note that it should be easily accessible from Alien4cloud.  
For example, for the users of the cloudify 3 orchestrator plugin, it is possible to deploy it on your manager instance. Just make sure to open the configured ports.
{%endinfo%}

# Installation
The application already contains a basic configuration that is good enough for test environment. However in order to move into production, you should customize the configuration.

{%warning%}
If you are working with the packaged zip, then you do not need to create the following files (and the start script), a s they are already in the package. However if working directly with the war package, then this might be useful.
{%endwarning%}

Along-side to the application war, you should place configuration files in a folder named `config`:

{% highlight bash %}
├── alien4cloud-postdeployment-rest-{version}.war
├── config/alien4cloud-post-deployment-config.yml
├── config/elasticsearch.yml
{% endhighlight %}

Here you can find a sample configuration for:

* [alien4cloud-post-deployment-config.yml](../../../files/alien4cloud-post-deployment-config.sample.yml)
* [elasticsearch.yml](https://github.com/alien4cloud/alien4cloud/blob/master/alien4cloud-ui/src/main/resources/elasticsearch.yml)

Feel free to customize the values of the different configurations.  However the main elements you might wish to modify are the

* `port` and the `alien_post_deployment` for alien4cloud-post-deployment-config.yml
* elastic search storage directories for elasticsearch.yml
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

# Deploying

Just run the script `alien4cloud-post-deployment.sh` (or the previously created `start.sh` if not working with the zip package).  
Go to the url `http://<deployed_machine_ip>:<server_port>/rest/postdeployment/test`, you should have the response: ***Running***

# Advanced configuration

## Using ssl
See [security section](#/documentation/1.2.0/admin_guide/security_patch.html).

##ElasticSearch
See [Elastic Search configuration](#/documentation/1.2.0/admin_guide/advanced_configuration.html) section.
