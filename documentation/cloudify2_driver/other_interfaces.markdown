---
layout: post
title:  Other specifics interfaces
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index, cloudify_2_tosca]
node_name: cloudify_2_tosca_interfaces_extentions
weight: 300
---

Here are informations concerning some specific interfaces.

## `custom` interface ##
Cloudify allows user to interact with their deployment via custom commands. This interface is design to support custom commands, in form of operations.

#### Example: ####
{% highlight yaml %}
interfaces:
  [...]
  custom:
    updateWar:
      inputs:
        warUrl:
          type: string
      implementation: scripts/updateWarUrl.groovy
    updateWarFile: scripts/updateWarFile.groovy
{% endhighlight %}

{% warning %}
Note that the driver only supports groovy scripts for this interface's operations.  
Also, you must be aware that the routine will be executed as a goovy closure. Therefore, you shouldn't use the ***ServiceContextFactory*** class to get the service context, it has been injected automatically so that you can directly use it via the variable ***context***.
{% endwarning %}

#### Example of custom command script: ####
{% highlight groovy%}
if(args == null || args.length < 1){
  throw new IllegalArgumentException("UpdateWar command requires an url as argument.")
}
def warUrl=args[0]
def serviceName = context.serviceName
def instanceId = context.instanceId
context.attributes.thisService["warUrl"] = "${warUrl}"
def service = context.waitForService(context.serviceName, 60, TimeUnit.SECONDS)
def currentInstance = service.getInstances().find{ it.instanceId == context.instanceId }
currentInstance.invoke("updateWarFile")
return "war updated."
{% endhighlight%}
