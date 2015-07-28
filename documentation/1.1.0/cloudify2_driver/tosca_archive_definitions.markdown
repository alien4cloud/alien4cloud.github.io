---
layout: post
title:  TOSCA definitions
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [cloudify_2_index, cloudify_2_tosca]
node_name: cloudify_2_tosca_definitions
weight: 100
---

The Cloudify driver for ALEIN 4 CLOUD allows you to deploy applications on several clouds, using Cloudify 2.7.  Thus you have to [design TOSCA archives containing nodes](#/documentation/devops_guide/tosca_concepts_types_custom.html "TOSCA custom node"), and upload them in your ALIEN instance. If your archive contains deployable nodes, you might have to add to their definitions some artifacts and interfaces.

## `Standard` interface ##
As its name states, the `Standard` interface allows you to define some lifecycle events for your node. Both Cloudify and TOSCA have this iterface in their specifications, with diferent operations names. Yet, it is possible to make a mapping from TOSCA to Cloudify lifecycle.

### Operations ###

{: .table .table-bordered}
| TOSCA | Cloudify | Supported | Description |
|:-----|:---------|:-----|:------------|
| `create` | `install` | YES | Allows to define the way to create / install your node when deploying |
| `configure` | - | YES | Specify the routine to run to configure the node |
| `start` | `start` | YES | Allows to define the way to start the node  |
| `stop` | `stop` | YES | Specify the routine to run to stop the node |
| `delete` | - | NO | Specify the routine to run to cleanup after |

#### Example: ####

{% highlight yaml %}
interfaces:
  Standard:
    create: scripts/tomcat_installCalm.groovy
    start: scripts/tomcat_start.groovy
    stop: scripts/tomcat_stop.sh
{% endhighlight %}

{% note %}
The *artifact_type*s **`tosca.artifacts.GroovyScript`**, **`tosca.artifacts.ShellScript`** and **`fastconnect.artifacts.ResourceDirectory`** are provided by ALIEN in a base package. For the Standard interface, you can use both Groovy and Shell scripts.
{% endnote %}

## Your scripts folder ##
The operations implementation's scripts are automatically copied along with your node on deployment. However, if they are not independant, meaning they rely on, or call other files, you must reference these latest as artifacts.  
The simplest way is to define an artifact of type **`tosca.artifacts.File`** referencing the folder where are stored all of your scripts.  

{% highlight yaml %}
artifacts:
  - scripts: scripts
    type: tosca.artifacts.File
{% endhighlight %}

## `fastconnect.cloudify.extensions` interface ##
Aside of the above operations, Cloudify also provides various lifecycle events. All of them are not mappable to a TOSCA Standard event. Therefore, ALIEN defined an interface, **`fastconnect.cloudify.extensions`** to help handling some of those operations. The ones currently supported by ALIEN are:

* **`StartDetection`**
* **`StopDetection`**
* **`locator`**

{% warning %}
Note that the driver only supports groovy scripts for this interface's operations .
{% endwarning %}

See [Cloudify specifics](#/documentation/cloudify2_driver/lifecycle_spec.html "Cloudify lifecycle specifics")  about them.