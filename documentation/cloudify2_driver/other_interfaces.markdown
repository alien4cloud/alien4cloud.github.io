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
{% warning %}
Note that the driver only supports groovy scripts for this interface's operations.  
Also, you must be aware that the routine will be executed as a goovy closure. Therefore, you **MUST NOT** use the ***ServiceContextFactory*** class to get the service context, it has been injected automatically so that you can directly use it via the variable ***context***.
{% endwarning %}

Cloudify allows user to interact with their deployment via custom commands. This interface is design to support custom commands, in form of operations.

#### Example: ####
{% highlight yaml %}
alien.nodes.cloudify.Tomcar
[...]
  interfaces:
    [...]
      custom:
        updateWarOnTomcat:
          inputs:
            catalinaBase: { get_attribute: [SELF, catalinaBase] }
            installDir: { get_attribute: [SELF, installDir] }
            url:
              type: string
              required: true
            contextPath:
              type: string
              required: true
          implementation: scripts/updateWarOnTomcat.groovy
          
          
alien.nodes.cloudify.War
[...]
  interfaces:
    [...]
      custom:
        updateWarFile:
          inputs:
            contextPath: { get_property: [SELF, contextPath] }
            warUrl:
              type: string
              description: url of the war to upload to update the current one
              required: true
          implementation: warScripts/updateWarFile.groovy

{% endhighlight %}

#### Example of custom command scripts: ####
alien.nodes.cloudify.War updateWarFile:
{% highlight groovy%}
assert warUrl && !warUrl.trim().isEmpty(), "requires warUrl parameter"

//when invoking a command defined in another node, prefix it with his name. Here, War is hosted on Tomcat, thus the PARENT env var has the Tomcat node name.
def command = "${PARENT}_updateWarOnTomcat"
println "updateWarFile.groovy: warUrl is ${warUrl} and contextPath is ${contextPath}..."
println "updateWarFile.groovy: invoking ${command} custom command ..."

//HOST env var represent the cloudify service name
def service = context.waitForService(HOST, 60, TimeUnit.SECONDS)
def currentInstance = service.getInstances().find{ it.instanceId == context.instanceId }

//as the inputs are no more accessible via args[], but rather named and available in the env var, we should trigger the custom command with a "name=value" instead of "value" argument syntax 
currentInstance.invoke(command, "url=${warUrl}" as String, "contextPath=${contextPath}" as String)
return "war updated."
{% endhighlight%}
