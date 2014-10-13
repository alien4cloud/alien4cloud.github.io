---
layout: post
title:  Relationships
categories: CLOUDIFY2_DRIVER
parent: tosca_archive.html
weight: 400
root: ../
---

Find here some helpfull informations about dealing with relationships with this driver.  
We will have for illustrations purposes a topology consisting of one Compute node, one Tomcat and two War nodes.  

[![Connection configuration][tomcat_war_topology_img]][tomcat_war_topology_img]


## `tosca.interfaces.relationship.Configure` interface ##
When defining a relationship type, you can provide implementation scripts.  
See [Relationships documentation](http://alien4cloud.github.io/components_guide/tosca_concepts_types_normative_relationships.html) for more details.  

###Arguments of your script ###
The driver collects some data and pass them into the scripts when triggering execution. You can access these via the `args` variable, which is an array, usually of String data. The followings are the data sent:

{: .table .table-bordered}
| Argument | Access | Description | Ex / Notes |
|:---------|:-------|:------------|:------------|
| *sourceNodeTemplateId*  | `args[0]` |  Generated Id of the source node of the relationship (the node name without spaces and in lowercase). | war, war_2, compute  |
| *sourceServiceId* | `args[1]` | ***Cloudify service name*** in which the source node is hosted (the compute nodeId). | for the nodes War and War_2: compute |
| *targetNodeTemplateId* | `args[2]` | Generated Id of the target node of the relationship (the node name without spaces and in lowercase). | war, war_2, compute  |
| *targetServiceId* | `args[3]` | ***Cloudify service name*** in which the target node is hosted (the compute nodeId). | for the nodes War and War_2: compute |
| *sourceNodeArtifactsPaths* | `args[4] ... args[n]` | Names and relative paths of artifacts defined in the source node of the relationship, in the form: ***artifactName=artifactPaths*** | warfile=warFile/helloWorld.war |

####sourceNodeArtifactsPaths ####
When a source node of a relationship is define with some artifacts (overridable or not), their names and location paths are provided to the configuration scripts and can be accessed starting by `args[4]`, in the form ***artifactName=artifactPaths***. Thus, you have to write a small parser to be able to use them.
  
### Example ###
Let see the example of the the node War_2: it has an overridable artifact named *war_file*
{% highlight yaml %}
fastconnect.nodes.War
  [...]
  artifacts:
    war_file:
      artifact_type: fastconnect.artifacts.WarFile
      artifact_ref: "warFiles/helloWorld.war"
  [...]
{% endhighlight %}

and is hosted on Tomcat node and bound to it via the a relationship type `fastconnect.relationships.cloudify.WarHostedOnTomcat`, defined with a post_configure_source script:.
 
{% highlight yaml %}
fastconnect.relationships.cloudify.WarHostedOnTomcat:
  [...]
  interfaces:
    tosca.interfaces.relationship.Configure:
      operations:
        post_configure_source:
          implementation_artifact:
            artifact_type: tosca.artifacts.GroovyScript
            artifact_ref: "relationshipScripts/war_hostedon_tomcat_postsource.groovy"
  [...]
{% endhighlight %}

This snippet shows how to access arguments inside a relationship implementation script:
{% highlight groovy %}
def context = ServiceContextFactory.getServiceContext()

//here we define a function which will parse an array of String args
//and return if found the value of the artifact whose name is passed
def getArtifactFrom(artifactName, String... artifacts) {
  for( it in artifacts){
    def split = it.split("=")
    if(split.length > 1 && split[0].equals(artifactName)){
       return split[1]   
    }
  }
}

//getting args
def sourceNodeTemplateId =  args[0]
def sourceServiceId = args[1]
def targetNodeTemplateId = args[2]
def targetServiceId = args[3]

//getting war_file artifact relative path
def warArtifactName = "war_file"
def warRelativePath = getArtifactFrom(warArtifactName, args)

//using the war relative path
def warAbsolutePath = "${context.serviceDirectory}/../${warRelativePath}"
def config  = new ConfigSlurper().parse(new File("${context.serviceDirectory}/service.properties").toURL())
def contextPath = (!config[sourceNodeTemplateId] || !config[nodeId].contextPath ) ? new File(warRelativePath).name.split("\\.")[0] : config[nodeId].contextPath 
context.attributes.thisInstance[sourceNodeTemplateId] = [url:(warAbsolutePath), contextPath:(contextPath)]
{% endhighlight %}

{%note%}
Note the usage of **`${context.serviceDirectory}/../${warRelativePath}`** as the path given (*warRelativePath*) is a relative one.
{%endnote%}