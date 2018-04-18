---
layout: post
title:  Cloudify 4.1.1 patches
root: ../../../
categories: DOCUMENTATION-2.1.0
parent: [orchestrators, cloudify_4, cloudify_4_prerequisites]
node_name: cloudify_4_patches
weight: 1000
---

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
curl -LO https://raw.githubusercontent.com/alien4cloud/samples/2.1.0/org/alien4cloud/automation/cloudify/manager/v4/scripts/iaas/cfy_config_iaas.py
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

