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

relationship type `alien.relationships.cloudify.WarHostedOnTomcat`, defined with a post_configure_source script:.

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

## Other available environment variables   ##
Prior to the inputs parameters, some useful informations are available in the script execution environment:

{: .table .table-bordered}
| Keyword               | Node Template | Relationship Template | Description | Example |
|:----------------      |:--------------------|:------------|
| SELF                  | Yes | No  | Node name . | War, serveurWeb |
| HOST                  | Yes | No  | Name of the node that “hosts” the current node. | For node War: Tomcat |
| SERVICE_NAME          | Yes | No  | ***Cloudify service name*** in which the node related to the script is hosted (the root compute node name without spaces and in lowercase). | for War and War_2: serveurweb |
| SOURCE_NAME           | No  | Yes | Node name of the source of the relationship. | War, War_2|
| SOURCE                | No  | Yes | Node id of the source of the relationship. The id is the node name without spaces and in lowercase, postfixed with the instance id| War:(war_1 or war_2), War_2:(war_2_1 or war_2_2)|
| SOURCE_SERVICE_NAME   | No  | Yes | ***Cloudify service name*** in which the source node related to the relationship script is hosted (the root compute node name without spaces and in lowercase). | for War and War_2: serveurweb |
| SOURCES               | No  | Yes | Comma-separated list of Node id of all the nodes currently the source of the relationship. | war_1,war_2,war_n|
| TARGET_NAME           | No  | Yes | Same as SOURCE_NAME, but for the target. | Tomcat |
| TARGET                | No  | Yes | Same as SOURCE, but for the target. | tomcat_1 or tomcat_2 |
| TARGET_SERVICE_NAME   | No  | Yes | ***Cloudify service name*** in which the target node related to the relationship script is hosted (the compute nodeId). | for Tomcat: serveurweb |
| TARGETS               | No  | Yes | Comma-separated list of Node id of all the nodes currently target of the relationship. | tomcat_1,tomcat_2,tomcat_n|

{%note%}
When a node has some defined artifacts (overridable or not), their **`absolute location paths`** are available as environment variables ( their names ) of the operations scripts.

Limitation: artifacts paths are not availables when working with a relationship binding two node in differents compute.
{%endnote%}

### Relationships and get_attribute inputs ###
the input **TOMCAT_IP**, as an environment variable that will hold the IP address of the target being processed will be provided to the  **warHostedOnTomcat_post_configure_source.groovy** script. In addition, the IP addresses of all current
tomcat members will be provided as environment variables with a naming scheme of ***tomcat_{instanceId}_TOMCAT_IP***.  
Assuming that the aplication is deployed with 5 instances and the instance 5 is the current one, the following environment variables (plus potentially more
 variables) would be provided to the warHostedOnTomcat_post_configure_source.groovy script:
{% highlight groovy %}
TARGET = tomcat_5
TARGETS = tomcat_1,tomcat_2,tomcat_3,tomcat_4,tomcat_5

TOMCAT_IP = 10.0.0.5
tomcat_1_TOMCAT_IP = 10.0.0.1
tomcat_2_TOMCAT_IP = 10.0.0.2
tomcat_3_TOMCAT_IP = 10.0.0.3
tomcat_4_TOMCAT_IP = 10.0.0.4
tomcat_5_TOMCAT_IP = 10.0.0.5
{% endhighlight %}

### Example ###
Let see the example of the the node War_2: it has an overridable artifact named *war_file*
{% highlight yaml %}
alien.nodes.cloudify.War
  [...]
  artifacts:
    - war_file: warFiles/helloWorld.war
      type: alien.artifacts.WarFile
  [...]
{% endhighlight %}



This code snippet shows how to use inputs and others informations available in the execution environment of the relationship implementation script (groovy script):

{% highlight groovy %}
def context = ServiceContextFactory.getServiceContext()

//printing the env vars
println "warHostedOnTomcat_post_configure_source<${SOURCE}> start."
println "warHostedOnTomcat_post_configure_source<${SOURCE}>: Inputs are:"
println "contextPath : ${CONTEXT_PATH}; tomcatIp : ${TOMCAT_IP}"
println "Target: ${TARGET}; Target_Service_Name: ${TARGET_SERVICE_NAME},\n Source: ${SOURCE}, Source_Service_Name: ${SOURCE_SERVICE_NAME}"
println "SOURCES: ${SOURCES}, TARGETS: ${TARGETS}"
println "war_file Artifact path: ${war_file}"

//checking and using the war_file source artifact
if (! war_file) return "war_file is null. So we do nothing."

def command = "${TARGET_NAME}_updateWarOnTomcat"
println "warHostedOnTomcat_post_configure_source<${SOURCE}> invoking ${command} custom command on target tomcat..."
def service = context.waitForService(TARGET_SERVICE_NAME, 60, TimeUnit.SECONDS)
def currentInstance = service.getInstances().find{ it.instanceId == context.instanceId }
currentInstance.invoke(command, "url=${war_file}" as String, "contextPath=${CONTEXT_PATH}" as String)

println "warHostedOnTomcat_post_configure_source<${SOURCE}> end"
return true
{% endhighlight %}

{%note%}
Note that for groovy case, the inputs and others are set to the script binding, rather than into the execution environment. This makes them available by typing their names as if they where some groovy var already declared(ex: TOMCAT_IP, war_file).
If you want to check the existence of any of them, just use the snippet: `binding.variables.containsKey(env_var_name_to_check)`.  
In sh case, access and use them as environment variables.
{%endnote%}


[tomcat_war_topology_img]: ../../images/cloudify2_driver/tomcat_war_topology.png  "Tomcat-war topology"
