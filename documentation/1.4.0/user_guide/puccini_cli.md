---
layout: post
title: Puccini CLI
root: ../../
categories: "DOCUMENTATION-1.4.0"
parent:
  [user_guide]
node_name: puccini_cli
weight: 1100
---

The CLI is the command line interface to talk to Puccini. It is based on bash to provide an interactive shell. Each command on the shell is declared inside the package org.alien4cloud.puccini.cli.command. Each command exposes how the arguments are parsed, the name of the command, the help message etc ... and is entirely independent.

{% summary %}{% endsummary %}

# Get help for the commands
{% highlight bash %}
// Get help for all the commands
> help

// Get help for the command 'agent'
> help agent
{% endhighlight %}

# Run Puccini CLI
After having downloaded the released package of puccini from nexus, you need to launch the executable ***tdk.sh*** in the directory ***bin***.

# Install some csars
We can use the following command to install a jdk component.
{% highlight bash %}
> csar install /home/bobo/Documents/fastconnect/samples/org/alien4cloud/lang/java/pub
{% endhighlight %}

Or we can display all the csars which are installed.
{% highlight bash %}
> csar list
{% endhighlight %}

Even, a new characteristic is added. It allows to install a whole set of csar artifacts, called ***a project***. With this command, puccini is capable to manage by himself the dependency among the csar artifacts.
{% highlight bash %}
// Here, we install all the csar artifacts found in the project samples
> project build /home/bobo/Documents/fastconnect/samples
{% endhighlight %}

# Create a deployment
We create a deployment named demo-deployment from a topology.
{% highlight bash %}
> deployment create demo-deployment /home/bobo/Documents/fastconnect/xavier-deployment/topology
{% endhighlight %}

Or we can display all the existing deployments.
{% highlight bash %}
> deployment list
{% endhighlight %}

# Launch the deployment
We run the deployment using the following command.
{% highlight bash %}
> agent create demo-deployment
{% endhighlight %}

Or we can show all the existing agents.
{% highlight bash %}
> agent list
{% endhighlight %}

# See the log of deployment
We can see the log when the deployment is running.
{% highlight bash %}
> agent log demo-deployment

// To filter the log whose type is workflow_event.
> agent log --logType=workflow_event demo-deployment
{% endhighlight %}

# Undeploy the deployment
We can undeploy the application after it is deployed.
{% highlight bash %}
> agent delete demo-deployment
{% endhighlight %}
