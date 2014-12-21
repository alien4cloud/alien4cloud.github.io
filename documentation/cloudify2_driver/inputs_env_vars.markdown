---
layout: post
title:  Inputs and others variables
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index, cloudify_2_tosca]
node_name: cloudify_2_inputs
weight: 101
---

Your implementations scripts can be defined with inputs. Find here how to properly define an input, and what other information is available in the execution environment.   
We will have for illustrations purposes a topology consisting of one Compute node, one Tomcat and two War nodes.  

[![Connection configuration][tomcat_war_topology_img]][tomcat_war_topology_img]

## input parameters ##
Follow the [parameter definition](documentation/tosca_ref/tosca_grammar/parameter_definition.html) section for how to define your input parameters.  
The defined inputs are evaluated if needed at runtime, and set as environment variables. Thus, you can access them using their defined name.  

### Other available environment variables   ###
Prior to the inputs parameters, some useful informations are available in the script execution environment:

{: .table .table-bordered}
| Keyword         | Node Template | Relationship Template | Description | Example |
|:----------------|:--------------------|:------------|
| SELF            | Yes | No  | Node name . | War, serveurWeb |
| PARENT          | Yes | No  | Name of the node that “hosts” the current node. | For node War: Tomcat |
| HOST            | Yes | No  | ***Cloudify service name*** in which the node related to the script is hosted (the root compute node name without spaces and in lowercase). | for War and War_2: serveurweb |
| SOURCE          | No  | Yes | Node name of the source of the relationship. | War, War_2|
| SOURCE_HOST     | No  | Yes | ***Cloudify service name*** in which the source node related to the relationship script is hosted (the root compute node name without spaces and in lowercase). | for War and War_2: serveurweb |
| TARGET          | No  | Yes | Node name of the source of the relationship. | Tomcat |
| SOURCE_HOST     | No  | Yes | ***Cloudify service name*** in which the target node related to the relationship script is hosted (the compute nodeId). | for Tomcat: serveurweb |

{%note%}
When a source node of a relationship has some defined artifacts (overridable or not), their **`relative location paths`** are available as environment variables ( their names ) of the configuration scripts.
{%endnote%}

### Example ###
Let see the example of the the node War_2: it has an overridable artifact named *war_file*
{% highlight yaml %}
aline.nodes.cloudify.War
  [...]
  artifacts:
    - war_file: warFiles/helloWorld.war
      type: alien.artifacts.WarFile
  [...]
{% endhighlight %}

is hosted on Tomcat node and bound to it via the a relationship type `alien.relationships.cloudify.WarHostedOnTomcat`, defined with a post_configure_source script:.

{% highlight yaml %}
alien.relationships.cloudify.WarHostedOnTomcat:
  [...]
  interfaces:
    configure:
        post_configure_source: 
          inputs:
            CONTEXT_PATH: { get_property: [SOURCE, contextPath] } 
            TOMCAT_IP: { get_attribute: [TARGET, ip_address] }
          implementation: relationshipScripts/warHostedOnTomcat_post_configure_source.groovy
  [...]
{% endhighlight %}

This code snippet shows how to use inputs and others informations available in the execution environment of the relationship implementation script (groovy script):

{% highlight groovy %}
def context = ServiceContextFactory.getServiceContext()

//printing the env vars
println "warHostedOnTomcat_post_configure_source<${SOURCE}> start."
println "warHostedOnTomcat_post_configure_source<${SOURCE}>: Inputs are:"
println "contextPath : ${CONTEXT_PATH}}; tomcatIp : ${TOMCAT_IP}"
println "Target: ${TARGET}; Target_Host: ${TARGET_HOST},\n Source: ${SOURCE}, Source_Host: ${SOURCE_HOST}"
prinln "war_file Artiact path: ${war_file}"

//checking and using the war_file source artifact
if (! war_file) return "warUrl is null. So we do nothing."
def warUrl = "${context.serviceDirectory}/../${war_file}"

def command = "${TARGET}_updateWarOnTomcat"
println "warHostedOnTomcat_post_configure_source<${SOURCE}> invoking ${command} custom command on target tomcat..."
def service = context.waitForService(TARGET_HOST, 60, TimeUnit.SECONDS)
def currentInstance = service.getInstances().find{ it.instanceId == context.instanceId }
currentInstance.invoke(command, "url=${warUrl}" as String, "contextPath=${CONTEXT_PATH}" as String)

println "warHostedOnTomcat_post_configure_source<${SOURCE}> end"
return true
{% endhighlight %}

{%note%}
Note that for groovy case, the inputs and others are set to the script binding, rather than into the execution environment. This makes them available by typing their names as if they where some groovy var already declared(ex: TOMCAT_IP, war_file).
If you want to check the existence of any of them, just use the snippet: `binding.variables.containsKey(env_var_name_to_check)`.  
In sh case, access and use them as environment variables.
{%endnote%}

{%note%}
Note the usage of **`${context.serviceDirectory}/../${war_file}`** as the artifact path given (*war_file*) is a relative one.
{%endnote%}


[tomcat_war_topology_img]: ../../images/cloudify2_driver/tomcat_war_topology.png  "Tomcat-war topology"