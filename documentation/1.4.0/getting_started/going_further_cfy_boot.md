---
layout: post
title: Launch Cloudify on AWS
root: ../
categories: DOCUMENTATION-1.4.0
parent: [new_getting_started]
node_name: going_further_cfy
weight: 10
---

{% warning %}
THIS SECTION IS BEING WRITTEN AND IS NOT YET COMPLETED.
{% endwarning %}

In this first going further tutorial we will explain how you can bootstrap an open-source TOSCA orchestrator that is a bit more heavy than Puccini and that we currently recommend for production environments. This orchestrator is cloudify.

Some features that are not yet supported by puccini are supported in Cloudify so this will probably be your choice for more advanced scenarios with alien4cloud. But first of all let's look how to bootstrap it.

# Bootstraping cloudify

To bootstrap cloudify on Amazon we will actually leverage puccini as it provides support for every features requested to actually launch a TOSCA recipe that describe a cloudify orchestrator.

## Security groups configuration

As a pre-requisite we will configure Security Groups for our cloudify manager so he can communicate with it's other components.

- **cfy_manager_agents**: Security group to open the ports on the manager machine so agents can communicate to it.

{: .table .table-striped }
| Type            | Protocol | Port Range | Source             |
|:----------------|:---------|:-----------|:-------------------|
| Custom TCP Rule | TCP      | 53229      | cfy_agents         |
| Custom TCP Rule | TCP      | 53333      | cfy_agents         |
| Custom TCP Rule | TCP      | 5671       | cfy_agents         |
| Custom TCP Rule | TCP      | 8101       | cfy_agents         |

- **cfy_agents**: Security group to use on every agent machine so the manager can communicate with the agent machine.

{: .table .table-striped }
| Type            | Protocol | Port Range | Source             |
|:----------------|:---------|:-----------|:-------------------|
| SSH             | TCP      | 22         | cfy_manager_agents |
| WinRM-HTTPS     | TCP      | 5986       | cfy_manager_agents |

- **cfy_manager_ssl_client**: Security group so that clients can access the cloudify manager on ssl (we will configure a secured manager)

{: .table .table-striped }
| Type            | Protocol | Port Range | Source             |
|:----------------|:---------|:-----------|:-------------------|
| SSH             | TCP      | 22         | 0.0.0.0/0          |
| HTTPS           | TCP      | 443        | 0.0.0.0/0          |

- **cfy_manager_cluster**: Security group to cluster the cloudify manager

{: .table .table-striped }
| Type            | Protocol | Port Range | Source             |
|:----------------|:---------|:-----------|:-------------------|
| Custom TCP Rule | TCP      | 8300       | 0.0.0.0/0          |
| Custom TCP Rule | TCP      | 15432      | 0.0.0.0/0          |
| Custom TCP Rule | TCP      | 22000      | 0.0.0.0/0          |
| Custom UDP Rule | UDP      | 8301       | 0.0.0.0/0          |
| Custom TCP Rule | TCP      | 8301       | 0.0.0.0/0          |
| Custom TCP Rule | TCP      | 8500       | 0.0.0.0/0          |

## Configure puccini to deploy on aws

<p class="text-muted">
In the basic getting started we auto-configured a local docker location for you so you can match compute nodes on local docker containers. We want to deploy the cloudify manager on Amazon, in order to do so we will go to the admin section and configure a puccini location. But first there is a configuration file to manually edit in order to configure aws support in puccini.
</p>

Go to the __alien4cloud-getstarted/puccini-cli-1.4.0-SNAPSHOT/conf/providers/aws/default__ folder and copy the __provider.conf.tpl__ file to __provider.conf__ then edit the file to fill in your access_key_id, access_key_secret and region.

In alien4cloud ui got to ![Admin section](../../images/1.4.0/user_guide/admin/admin_menu.png){: height="26px" .inline}, then ![Orchestrator list](../../images/1.4.0/user_guide/admin/orchestrators/orchestrator_list_menu.png){: height="26px" .inline}. You should see the list of orchestrators with a single __Puccini simple orchestrator__ orchestrator, select it.
Go to ![Locations](../../images/1.4.0/user_guide/admin/orchestrators/locations_menu.png){: height="26px" .inline} and then click on ![Locations](../../images/1.4.0/user_guide/admin/orchestrators/new_location_button.png){: height="26px" .inline}.

![New aws location modal](../../images/1.4.0/user_guide/admin/orchestrators/getting_started_new_aws_loc.png){: style="width: 500px; margin: 0 auto"}

Click on ![On demand resources](../../images/1.4.0/user_guide/admin/orchestrators/on_demand_resources.png){: height="26px" .inline} to open the on demand resources configuration tab and drag-and-drop a _org.alien4cloud.puccini.aws.nodes.Instance_ to the left section.

<p class="text-muted">
The cloudify types requires a red hat or centos host, in order to allow puccini deploy on these OS you need to configure a cloud init to remove the requiretty option. These option was added in red hat operating system for Security reasons, has been recognized as inefficient and is removed from latests version. It prevent non-interactive ssh connections as the puccini orchestrator is doing.
</p>

Edit the __user_data__ field that will setup the VM cloud init using the following code:

{% highlight bash %}
#cloud-config
runcmd:
  - echo 'Defaults:ec2-user !requiretty' > /etc/sudoers.d/999-puccini-cloud-init-requiretty
{% endhighlight %}




## Import cloudify TOSCA types

You have learned in the getting started how to import archives from git so import the cloudify types archive from:
* https://github.com/alien4cloud/samples/tree/master/cloudify-types

## Configure your topology

Drag and drop a Compute node, dra

## Configure your matching information
