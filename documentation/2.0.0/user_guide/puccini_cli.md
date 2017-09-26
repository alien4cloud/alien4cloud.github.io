---
layout: post
title: Puccini CLI (Beta)
root: ../../
categories: "DOCUMENTATION-2.0.0"
parent:
  [user_guide]
node_name: puccini_cli
weight: 1100
---

Puccini CLI is a shell to interact with Puccini orchestrator.

{% summary %}{% endsummary %}

# Run Puccini CLI
The simplest way to get the CLI is to launch the [Getting Started](#documentation/2.0.0/getting_started/new_getting_started.html) script.
Then you could go to `cd alien4cloud-getstarted/puccini-cli-${VERSION}/bin/`, once inside the folder you can launch `./tdk.sh`.
The script will start an interactive shell with history, auto-completion. Don't hesitate to type `TAB` or `CTRL+R` when you are in the shell mode.
{% highlight bash %}
// List all available commands
help

// Get help for a specific command. You should have information about sub-commands' syntax and what each sub-command does ...
help agent
{% endhighlight %}

# Quick getting started
The below instructions will help you to deploy a sample web app hosted on Tomcat, and put behind an apache load balancer.
The commands in this example suppose that you have all your CSARs inside a folder named `Projects/`, which is at the same level as `puccini-cli-${VERSION}/`.
Please take note that the path here is not important, from the moment when you give the correct path it will work (can be absolute path).

* Download [Docker specific topology](/files/puccini/apache-lb-docker-template.yaml) and put it in `Projects/puccini_topology/`.

* Fetch samples
{% highlight bash %}
# Clone samples
cd Projects/
git clone https://github.com/alien4cloud/alien4cloud-extended-types.git
git clone git clone https://github.com/alien4cloud/samples.git
# Launch Puccini CLI
cd ../puccini-cli-${VERSION}/bin
./tdk.sh
{% endhighlight %}

* Inside Puccini's interactive shell
{% highlight bash %}
# Install some types necessary to deploy a topology apache load balancer
csar install ../../Projects/alien4cloud-extended-types/alien-base-types/
csar install ../../Projects/samples/org/alien4cloud/lang/java/pub/
csar install ../../Projects/samples/org/alien4cloud/lang/java/jdk/linux/
csar install ../../Projects/samples/tomcat-war/
csar install ../../Projects/samples/apache-load-balancer/
csar install ../../Projects/samples/topology-load-balancer-tomcat/
# Create a deployment image
deployment create aplb ../../Projects/puccini_topology/
# Create agent to deploy
agent create aplb
# Follow the log of deployment
agent log aplb
# Show outputs
agent info aplb
{% endhighlight %}
* Get the URL to access to the web app from the deployment's output, paste it in your browser and enjoy !
* You can continue to check the next sections to have more details about the CLI's usage

# Advanced usage

The common workflow to use puccini to develop recipe / manage deployments is:

## Install CSARs
Develop your tosca recipe and topology with pure abstract native types `tosca.nodes.Compute`, `tosca.nodes.Network` ... then install it.
{% highlight bash %}
csar install /home/bobo/Documents/fastconnect/samples/org/alien4cloud/lang/java/pub
...
csar install /home/bobo/Documents/fastconnect/samples/topology-load-balancer-tomcat
{% endhighlight %}

Create the puccini specific topology to map all abstract native nodes to puccini native nodes.
As an example, you can see the [abstract topology](https://github.com/alien4cloud/samples/blob/master/topology-load-balancer-tomcat/topology-load-balancer-tomcat.yaml) use abstract `tosca.nodes.Compute`.

1. The [AWS specific topology](/files/puccini/apache-lb-aws-template.yaml) use concrete type `org.alien4cloud.puccini.aws.nodes.Instance`.
1. The [Docker specific topology](/files/puccini/apache-lb-docker-template.yaml) use concrete type `org.alien4cloud.puccini.docker.nodes.Container`.
1. The [Openstack specific topology](/files/puccini/apache-lb-openstack-template.yaml) use concrete type `org.alien4cloud.puccini.openstack.nodes.Compute`.

The specific topology import the abstract topology and override nodes and inputs with the same names, you can add more nodes in the specific topology.
{% highlight yaml %}
imports:
- war-apache-load-balanced-topology:*
topology_template:
  inputs:
    - ...
  node_templates:
    WebServer:
      type: org.alien4cloud.puccini.docker.nodes.Container
{% endhighlight %}

To display all installed csars.

{% highlight bash %}
csar list
{% endhighlight %}

Puccini CLI can handle multi-modules project. If you have a project which contains multiple modules (CSAR), Puccini CLI can parse, construct the dependency graph, and install all modules in correct order.
{% highlight bash %}
// Here, we install all the csar artifacts found in the project samples
project build /home/bobo/Documents/fastconnect/samples
{% endhighlight %}

## Create a deployment
You can create a deployment from your specific Puccini topology created in the precedent step so that Puccini knows which IAAS provider to target.
The deployment will then be created with the specific topology and so concrete type as `org.alien4cloud.puccini.aws.nodes.Instance` will be instantiated.
Basically, a deployment is a docker image with every necessary resources to instantiate the topology.

{% highlight bash %}
deployment create myDeployment /home/bobo/Documents/fastconnect/puccini-topology
{% endhighlight %}

To display all the existing deployments.
{% highlight bash %}
deployment list
{% endhighlight %}

## Launch the deployment
From deployment images, you can create deployment agents (micro managers) which are docker containers that handle the lifecycle of your application.
You can deploy/undeploy/scale your application thanks to the agents.
{% highlight bash %}
# Create agent (docker container) from deployment image and run install workflow
agent create myDeployment
{% endhighlight %}

To display all the existing agents.
{% highlight bash %}
agent list
{% endhighlight %}

## Tail deployment's log
We can see the log when the deployment is running.
{% highlight bash %}
agent log myDeployment
# To filter the log whose type is workflow_event.
agent log --logType=workflow_event myDeployment
{% endhighlight %}

## Show deployment's information
{% highlight bash %}
# Show all deployment information such as node, instances, executions, outputs ...
agent info myDeployment
{% endhighlight %}

## Scale
{% highlight bash %}
# Scale myNode to a new instance count of 2
agent scale myDeployment myNode 2
{% endhighlight %}

## Update and resume
With `agent log myDeployment` or `agent info --executions myDeployment`, you might observe that your deployment has failed.
You might be able to fix your recipe and then hot reload it with puccini.
Once recipe is updated, if you took care to make your operation idempotent, you can resume the execution from the failure point (the operation in failure will be re-executed).
Even if your operation did modify the state of the machine in a way that it cannot be resumed, you can just connect to the machine, put the machine back in a clean state and then resume (if we suppose that it takes less time than re-run the whole deployment from the beginning).
{% highlight bash %}
# After fixing your recipe, update the csar installed in the local repository
csar install myCsar
# Regenerate the deployment image, update the work folder
deployment create my_deployment
# Take note that you can bypass the image generation by modifying directly compiled csar inside path_to_puccini/work/myDeployment/recipe/src/main/resources, but then next 'agent create myDeployment' will not use the updated recipe
# Update recipe on the agent
agent update my_deployment
# Resume the the deployment from the last failure point
agent resume my_deployment
{% endhighlight %}

## Undeploy
We can undeploy the application after it is deployed.
{% highlight bash %}
# Launch uninstall workflow and delete the agent
agent delete myDeployment
# Tear down the infrastructure and delete the agent (only delete IAAS components as compute network)
agent delete -f myDeployment
# Delete the agent and ignore the deployment
agent delete --ignore-deployment myDeployment
{% endhighlight %}


## Deployment with other clouds
The example, which was given util now deploys on docker as the default puccini provider. You might want to work with one of the supported IAAS Openstack, AWS or byon.

* Configure the provider at `path_to_puccini/conf/providers/${provider_name}/${target_name}` following the template file `provider.conf.tpl`, you must then rename it to `provider.conf`.
As you can see as provider, you have the choice between Openstack, AWS and docker.
Target enables you to have multiple configurations for the same IAAS.
In all of your commands when no target is specified, puccini takes the target named `default`.
If you don't want to configure statically inside Puccini, you can configure those configurations as inputs of your deployment.

* Create your puccini topology for the configured cloud by importing puccini provider types:

{% highlight yaml %}
  imports:
    ...
    - puccini-aws-provider-types:*

  node_templates:
    WebServer:
      type: org.alien4cloud.puccini.aws.nodes.Instance
{% endhighlight %}

* Create your deployment and your agent in the same manner as with docker provider. An example of a deployment AWS can be found [here](./test/src/it/resources/csars/aws/standalone/apache-lb/template.yaml)

## Ansible support

Puccini supports Ansible as an artifact executor. To rapidly test Ansible with Puccini :

{% highlight bash %}
# Use this new image as base image to build all micro manager from now on, the image has ansible installed
deployer use alien4cloud/puccini-deployer-ansible:2.0.0
# Install your types which uses Ansible
csar install path_to_your_ansible_types
# Create the deployment image
deployment create --input=path_to_aws_inputs.yml my_deployment path_to_aws_topology
# Run your deployment
{% endhighlight %}
