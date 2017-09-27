---
layout: post
title:  Prerequisites
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [orchestrators, cloudify_4]
node_name: cloudify_4_prerequisites
weight: 1000
---

Here are some prerequisite steps that need to be done in order to use the cloudify 4 driver.

## Install cloudify 4.0 ##

How to install cloudify 4.0 is described [here](http://docs.getcloudify.org/4.0.0/intro/what-is-cloudify/){:target="_blank"}{:target="_blank"}.

## Bootstrap your manager ##

How to bootstrap cloudify 4.0 is described [here](http://docs.getcloudify.org/4.0.0/manager/bootstrapping/){:target="_blank"}.

{%warning%}
Note that cloudify 4.0 only support bootstraping on CentOS 7.x or RHEL 7.x.
{%endwarning%}

## Secure your manager ##

How to secure your manager is described [here](http://docs.getcloudify.org/4.0.0/manager/security/){:target="_blank"}.

{%warning%}
Following configuration is only suitable for testing purpose, in production you should customize with your own own configuration.
{%endwarning%}

To perform a rapid test of the feature, you can just enable those following keys in the bootstrap inputs

{% highlight yaml %}
admin_username: admin
admin_password: admin
ssl_enabled: true
security_enabled: true
{% endhighlight %}

In the shell that you'll use to bootstrap cloudify you should export those following variables

{% highlight bash %}
export CLOUDIFY_SSL_TRUST_ALL=True
export CLOUDIFY_USERNAME=admin
export CLOUDIFY_PASSWORD=admin
{% endhighlight %}

## 1.4.3 and above: Deployment logs coniguration
Prior to `alien4cloud 1.4.3`, the cloudify 4 orchestrator used to pull logs directly from cloudify event API. However, users noticed that, with a great deal of deployments and usages, some logs were lost and not getting back to alien4cloud.  
Starting from 1.4.3 to solve the issue, we changed the way we get logs from cloudify, by adding a tier web application `alien4cloud-cfy-logs`  as logs server for alien4cloud, and to be deployed on the Cloudify manager machine.

###How does it work?
`alien4cloud-cfy-logs` is a web application exposing several endpoints to manage deployments logs.

1. When an orchestrator (cloudify4) is created in alien4cloud, it will register itself to the logs server, and then start an active polling.
2. On the other hand, Cloudify, or more precisely its Logstash component, will push events on the logs server using a specific API endpoint.
3. The server saves logs on the filesystem for every saved orchestrator registration.
4. An orchestrator poll for logs, receive one, and then send an ACK to the log server
5. The server received the ACK, ant then deletes the acknowledged log file for that orchestrator

{%info%}
<h5>HA concern</h5>
Everything should work on its own in HA mode. Just make sure to install and configure the logs server on every instance of the Cloudify cluster.

<a href="../../images/cloudify4_driver/a4c-logs-archi.png" title="alien4cloud-cfy-logs architecture"><img src="../../images/cloudify4_driver/a4c-logs-archi.png" alt="Connection configuration" title="alien4cloud-cfy-logs architecture"></a>

{%endinfo%}

### Install and configure
As stated above, the logs server application is to be installed on the Cloudify manager machine. You can download it [alien4cloud-cfy-logs](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-cfy-logs&v={{ site.last-version }}&p=zip){: .btn}{: .btn-success}{: .download-button}{: .navbar-btn}.

{%warning%}
For now, the Cloudify manager and the logs server should be installed using the same security mode. This means, if you bootstrapped a SSL secured manager (HTTPS), you __MUST__ also install and configure the log application in SSL secured mode.
{%endwarning%}

1. unzip the file in your prefred location. We will call it `$a4c_log_dir`
2. The server configuration file is located at `$a4c_log_dir/config/alien4cloud-cfy-logs-config.yml`. The main property you would want to configure is `server.port`

{%info%}

<h5>SSL configuration</h5>
The logs server can be configured with SSL security, [similar config here](#/documentation/1.4.0/admin_guide/security_patch.html).

However, the Logstash version used in Cloudify cannot push logs over HTTPS protocol. therefore, the log pushing endoint should and is the only one running un HTTP protocol when the log server is secured with SSL. Therefore, remember to configure the property `server.http.port`, for the HTTP protocol.

{%highlight yaml%}
server:
  ## HTTPS port
  port: 8443
  ssl:
    enabled: true
    key-store: ssl/server-keystore.jks
    key-store-password: *****
    key-password: *****
 ## HTTP  port. Only if SSL is enabled
  http:
    port: 8200

    {%endhighlight%}
{%endinfo%}    
  3. Modify the configuration of Logstash:
  * edit the file ***/etc/logstash/conf.d/logstash.conf***
  * find the `output` section, and add the following (replace _HTTP_PORT_ with the value of: `server.http.port` if SSL enabled, `server.port` if not.):
  {%highlight bash%}
  output {
    http {
      http_method => 'post'
      url => 'http://localhost:<HTTP_PORT>/api/v1/logs'
    }
    [...]
  }
  {%endhighlight%}

  4. Restart logstash service:
{%highlight bash%}
sudo systemctl restart logstash.service
{%endhighlight%}

Your Logs server is now configured and fully able to communicate with both Cloudify and Alien4Cloud.
