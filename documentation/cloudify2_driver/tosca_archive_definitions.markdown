---
layout: post
title:  TOSCA definitions
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index, cloudify_2_tosca]
node_name: cloudify_2_tosca_definitions
weight: 100
---

The Cloudify driver for ALEIN 4 CLOUD allows you to deploy applications on several clouds, using Cloudify 2.7.  Thus you have to [design TOSCA archives containing nodes](../components_guide/tosca_concepts_types_custom_nodes.html "TOSCA custom node"), and upload them in your ALIEN instance. If your archive contains deployable nodes, you might have to add to their definitions some artifacts and interfaces.

## Your scripts folder ##
If you provides some relative files in your node, you might want then to be copied along with the node when deploying it. You can define an artifact in your TOSCA definition file, referencing the folder containing those files.<br>
For example, we can define an artifact of type **`fastconnect.artifacts.ResourceDirectory`** referencing the folder in which are stored the lifecycle scripts:

{% highlight yaml %}
artifacts:
  scripts:
    artifact_type: fastconnect.artifacts.ResourceDirectory
    artifact_ref: "scripts"
{% endhighlight %}

## `lifecycle` interface ##
As its name states, the `lifecyle` interface allows you to define some lifecycle events for your node. Both Cloudify and TOSCA have this iterface in their specifications, with diferent operations names. Yet, it is possible to make a mapping from TOSCA to Cloudify lifecycle.

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
  lifecycle:
    operations:
      create:
        implementation_artifact:
          artifact_type: tosca.artifacts.GroovyScript
          artifact_ref: "scripts/tomcat_installCalm.groovy"
      start:
        implementation_artifact:
          artifact_type: tosca.artifacts.GroovyScript
          artifact_ref: "scripts/tomcat_start.groovy"
      stop:
        implementation_artifact:
          artifact_type: tosca.artifacts.ShellScript
          artifact_ref: "scripts/tomcat_stop.sh"
{% endhighlight %}

{% note %}
The *artifact_type*s **`tosca.artifacts.GroovyScript`**, **`tosca.artifacts.ShellScript`** and **`fastconnect.artifacts.ResourceDirectory`** are provided by ALIEN in a base package. For the lifecycle interface, you can use both Groovy and Shell scripts. Just make sure to define the proper artifact type.
{% endnote %}

## `fastconnect.cloudify.extensions` interface ##
Aside of the above operations, Cloudify also provides various lifecycle events. All of them are not mappable to a TOSCA lifecycle event. Therefore, ALIEN defined an interface, **`fastconnect.cloudify.extensions`** to help handling some of those operations. The ones currently supported by ALIEN are:

* **`StartDetection`**
* **`StopDetection`**
* **`locator`**

{% warning %}
Note that the driver only supports groovy scripts for this interface's operations .
{% endwarning %}

See [Cloudify specifics](lifecycle_spec.html "Cloudify lifecycle specifics")  about them.

#### Example: ####

{% highlight yaml %}
interfaces:
  [...]
    fastconnect.cloudify.extensions:
	  operations:
	    start_detection:
	      implementation_artifact:
	        artifact_type: tosca.artifacts.GroovyScript
	        artifact_ref: "scripts/tomcat_startDetection.groovy"
	    stop_detection:
	      implementation_artifact:
	        artifact_type: tosca.artifacts.GroovyScript
	        artifact_ref: "scripts/tomcat_stopDetection.groovy"
	    locator:
	      implementation_artifact:
	        artifact_type: tosca.artifacts.GroovyScript
	        artifact_ref: "scripts/alien_tomcat_locator.groovy"
{% endhighlight %}
