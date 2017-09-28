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

## Install Cloudify 4.1.1 ##

How to install cloudify 4.1.1 is described [here](http://docs.getcloudify.org/4.1.0/installation/from-packages/){:target="_blank"}{:target="_blank"}.

## Bootstrap your manager ##

How to bootstrap cloudify 4.1.1 is described [here](http://docs.getcloudify.org/4.1.0/installation/bootstrapping/){:target="_blank"}.

{%warning%}
Note that cloudify 4.1.1 only support bootstraping on CentOS 7.x or RHEL 7.x.
{%endwarning%}

Here a simple snippet to bootstrap the manager:
{% highlight bash %}
curl -LO http://repository.cloudifysource.org/cloudify/4.1.1/ga-release/cloudify-enterprise-cli-4.1.1ga.rpm
sudo rpm -i http://repository.cloudifysource.org/cloudify/4.1.1/ga-release/cloudify-enterprise-cli-4.1.1ga.rpm
# Edit /opt/cfy/cloudify-manager-blueprints/simple-manager-blueprint-inputs.yaml
# Then bootstrap the manager
cd /opt/cfy/cloudify-manager-blueprints
sudo cfy bootstrap simple-manager-blueprint.yaml -i simple-manager-blueprint-inputs.yaml
{% endhighlight %}


## Patch the manager ##

{%warning%}
Some behaviors has changed between Cloudify 3.4 and Cloudify 4.x thus to make it still compatible with Alien4Cloud you need to apply the few following patches.
{%endwarning%}


### Safe Clean Patch ###

Cloudify now clean its artifacts in the /tmp folder after each executions but since Alien4Cloud did it already we have a conflict.  
To workaround any issues, make sure to apply the following patch:

{% highlight bash %}
sudo cp /opt/mgmtworker/env/lib/python2.7/site-packages/script_runner/tasks.py /opt/mgmtworker/env/lib/python2.7/site-packages/script_runner/tasks.py.default
sudo curl -L https://raw.githubusercontent.com/alien4cloud/samples/master/org/alien4cloud/automation/cloudify/patches/patch_tasks/playbook/roles/create/files/tasks.py -o /opt/mgmtworker/env/lib/python2.7/site-packages/script_runner/tasks.py
sudo rm -f /opt/mgmtworker/env/lib/python2.7/site-packages/script_runner/tasks.pyc
{% endhighlight %}


### IaaS Credentials ###

Cloudify has removed the iaas informations from the manager's context. Theorically, it now needs to be feeded in each the blueprints you want to deploy.  
The Cloudify provider for Alien4Cloud do not yet support this new behavior so for now, you will need to configure your manager to set iaas informations into the context

We provide a python script to help you configure your manager.

{% highlight bash %}
curl -LO https://raw.githubusercontent.com/alien4cloud/samples/1.4.0/org/alien4cloud/automation/cloudify/manager/v4/scripts/iaas/cfy_config_iaas.py
# sudo /opt/cfy/embedded/bin/python cfy_config_iaas.py -u USERNAME -p PASSWORD --ssl config -c ./iaas_config.yaml -i {aws,openstack,azure}
# So for instance if your manager is installed on AWS:
sudo /opt/cfy/embedded/bin/python cfy_config_iaas.py -u admin -p admin --ssl config -c ./iaas_config.yaml -i aws
{% endhighlight %}

A configuration sample `iaas_config.yaml` for ***AWS***:
{% highlight yaml %}
aws_access_key: 'AWS_ACCESS_KEY'
aws_secret_key: 'AWS_SECRET_KEY'
aws_region: 'AWS_REGION'

agent_keypair_name: 'KEY_PAIR_NAME'
agent_security_group_id: 'DEFAULT_AGENT_SECGROUP_ID' # The default sg that will be assigned to each computes that are provisionned by the manager
agent_sh_user: 'DEFAULT_AGENT_SSH_USER'
agent_private_key_path: 'PATH_TO_AGENT_KEYFILE'
{% endhighlight %}

A configuration sample `iaas_config.yaml` for ***OpenStack***:
{% highlight yaml %}
auth_url: 'OS_KEYSTONE_URL'
username: 'OS_USERNAME'
password: 'OS_PASSWORD'
region: 'OS_REGION'
tenant_name: 'OS_TENANT_NAME'

agent_sh_user: 'DEFAULT_AGENT_SSH_USER'
agent_private_key_path: 'PATH_TO_AGENT_KEYFILE'

resources:
  agents_keypair:
    name: 'AGENT_KEYPAIR_NAME'
  agents_security_group:
    name: 'DEFAULT_AGENT_SECGROUP_NAME' # The default sg that will be assigned to each computes that are provisionned by the manager
  int_network:
    id: 'MANAGER_NETWORK_ID'
    name: 'MANAGER_NETWORK_NAME'
{% endhighlight %}

A configuration sample `iaas_config.yaml` for ***Azure***:
{% highlight yaml %}
subscription_id: 'YOUR_SUBSCRIPTION_ID'
tenant_id: 'YOUR_TENANT_ID'
client_id: 'YOUR_CLIENT_ID'
client_secret: 'YOUR_CLIENT_SECRET'
location: 'YOUR_LOCATION_VALUE'

agent_sh_user: 'DEFAULT_AGENT_SSH_USER'
agent_private_key_path: 'PATH_TO_AGENT_KEYFILE'
{% endhighlight %}


## Secure your manager ##

Starting from 4.0, Cloudify's manager is secured by default using a username/password with a default SSL on the nginx for the REST API and the WebUI.  
At bootstrap, it will generate a private certificate for internal communications between manager's component and its agents.

{%warning%}
Following configuration is only suitable for testing purpose, in production you should customize with your own own configuration.
{%endwarning%}

To perform a rapid test of the feature, you can just enable those following keys in the bootstrap inputs

### Setting the crendentials ###

By default, the username is 'admin' with a generated password at bootstrap.  
If you want to set your password, uncomment and edit the following keys in the inputs file.
{% highlight yaml %}
admin_username: admin
admin_password: admin
{% endhighlight %}


### Setting the Nginx SSL ###

If not provided, The bootstrap workflow will generate default a key and a certificate for the external communication with NGinx (REST API & WebUI).
You can generate and provide your own certificate by copy it into  /opt/cfy/cloudify-manager-blueprints/resources/ssl
Make sure you name it `cloudify_external_cert.pem` and `cloudify_external_key.pem`.


## Alien4Cloud 1.4.3 and above: Deployment logs configuration
Prior to `alien4cloud 1.4.3`, the cloudify 4 orchestrator used to pull logs directly from cloudify event API. However, users noticed that, with a great deal of deployments and usages, some logs were lost and not getting back to alien4cloud.  
Starting from 1.4.3 to solve the issue, we changed the way we get logs from cloudify, by adding a tier web application `alien4cloud-cfy-logs`  as logs server for alien4cloud, and to be deployed on the Cloudify manager machine.

### How does it work?
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

1. Unzip the file in your prefered location. We will call it `$a4c_log_dir`
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
  * Edit the file ***/etc/logstash/conf.d/logstash.conf***
  * Find the `output` section, and add the following (replace _HTTP_PORT_ with the value of: `server.http.port` if SSL enabled, `server.port` otherwise):
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

Your logs server is now configured and fully able to communicate with both Cloudify and Alien4Cloud.
