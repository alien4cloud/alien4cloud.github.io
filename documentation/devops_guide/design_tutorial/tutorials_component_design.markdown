---
layout: post
title:  Component design
root: ../../
categories: DOCUMENTATION
parent: [getting_started, tutorials]
node_name: tutorial_component_design
weight: 100
---

**Target:** Middleware experts, architects, operations teams.

**Goal:** Explain how to start with component design. In this tutorial, the component we will focus on is Tomcat Application Server.

# Define the node type

A component in ALIEN is a tosca node type. Information on TOSCA and the grammar can be found on OASIS TC pages and in ALIEN documentation in the components section.
This tutorial doesn't focus on the grammar but on the methodology to define components.

The first step to define the component is to define it's id. In our case, we will define a 'fastconnect.nodes.Tomcat' node. This component will be abstract as we don't plan to include an implementation for now (another member of the team may provide an implementation). More, while an implementation may not be compliant with any Operating System (Linux shell scripts that won't run on windows) or PaaS (Cloudify specific scripts) etc. The abstract type allows to define an agnostic view of the middleware.

{% info %}
A same node may have different implementations, for example a Tomcat Node may have an implementation based on puppet and another based on chef, or even pure shell script.

Definition of abstract types is also a good way also to provide separation of concern and to let an Architect define a middleware and let the implementation to the experts.
{% endinfo %}

Second step when defining a node is to find from which parent type it should extends, it can be an existing type already uploaded in ALIEN or one of TOSCA [normative type](#/documentation/devops_guide/normative_types/tosca_concepts_types_normative_nodes.html). There is multiple reasons to extends from the normative types (or another type that itself extends from a normative type):

* Workflow automatic generation is based on the fact that the node uses the default lifecycle interfaces that are defined on the normative types.
* Using normative types is also a good way to leverage ALIEN 4 Cloud facet search (for example I will be able to filter on all _ApplicationServer_ nodes).
* Finally extending from normative types allows to bootstrap your node with some properties, capabilities and requirements. For example as our Tomcat extends from _tosca.nodes.SoftwareComponents_ it will have
    * a version property that should be specified
    * a host requirement (as a software component must be installed on a compute node).
    * the default feature requirement and relationship that are used to established depends on relationships (to impact the lifecycle generation).

In the case of a Tomcat server the normative type that we should extends from is _tosca.nodes.ApplicationServer_. This node extends itself from _tosca.nodes.SoftwareComponents_.

{% highlight yaml %}
fastconnect.nodes.Tomcat:
  abstract: true
  derived_from: tosca.nodes.ApplicationServer
  documentation: Tomcat application server is an application server that supports deployment of java web applications (war).
{% endhighlight %}

{% note %}
It is possible here to create another parent abstract type that supports any Java Application Server. This would allow for any Java Application Server to just extends from the node and leverage common properties, requirements and capabilties (Java requirement, War capability, Java arguments properties etc.).

Extension is not mandatory as this will just allow to simplify the definition of multiple bean but will not impact the topology creation. In order to keep this tutorial simple we will just extend our Tomcat from the tosca.nodes.ApplicationServer node type.
{% endnote %}

## Properties

The first property we want to define is the version of tomcat that this tomcat definition supports. Indeed all the tomcat versions doesn't have the same capabilities, for example tomcat 7.x supports web-sockets while this is not supported in tomcat 5.x for example.

Version property as stated earlier is already defined in SoftwareComponent, it is possible however to override it to add an additional constraint. In this example we want to describe a tomcat node for all versions 7 so we will redefine the version property (with the same version type) and add [constraints](#/documentation/devops_guide/tosca_grammar/constraints.html).

Second property that we want to add in this tutorial is the java options to use to startup the Tomcat server. This will allow users to specify the java memory requirements and garbage collection settings.

{: .table .table-bordered}
| Name            | Type        | Required   | Default | Constraints                            |
|:----------------|:------------|:-----------|:--------|:---------------------------------------|
| version         | version     | true       |  7      | Between 7 (inclusive) and 8 exclusive  |
| java_ops        | string      | false      |  None   | None                                   |

{% highlight yaml %}
fastconnect.nodes.Tomcat:
  abstract: true
  derived_from: tosca.nodes.ApplicationServer
  documentation: Tomcat application server is an application server that supports deployment of java web applications (war).
  properties:
    version:
      type: version
      constraints:
       - greater_or_equal: 7
       - less_than: 8
    java_ops:
      type: string
{% endhighlight %}
_Tomcat node with the version between [7 and 8)_

{% note %}
Of course we could add more properties to the tomcat node in order to allow configuration of other server related properties. In this tutorial we will just use the properties mentioned above.

Note that as ALIEN supports the versioning of the archives it is easy to add properties later in a next version of the component.
{% endnote %}

## Requirements

Next important section to describe on the Tomcat type is the list of requirements. As Tomcat inherit from SoftwareComponent it has an inherited requirement over a Compute node (this requirement can be fulfilled in a topology by using an hosted_on relationship).
The other requirement for a Tomcat node is to have a java installed. We will model this by adding a java requirement to the tomcat node.

A requirements can express constraints on some of the target capability or node, properties. Here we reference a requirement on a Java Node and specify a constraint on the version of the java node.

{: .table .table-bordered}
| Name            | Type                   | Lower bound | Upper bound | Constraints             | Notes                                        |
|:----------------|:-----------------------|:------------|:------------|:------------------------|----------------------------------------------|
| host            | tosca.nodes.Compute    | 1 (default) | 1 (default) |                         | Inherited from tosca.nodes.SoftwareComponent |
| java            | fastconnect.nodes.Java | 1 (default) | 1 (default) | Greater or equal than 7 |                                              |

{% highlight yaml %}
fastconnect.nodes.Tomcat:
  abstract: true
  derived_from: tosca.nodes.ApplicationServer
  documentation: Tomcat application server is an application server that supports deployment of java web applications (war).
  properties:
    version:
      type: version
      constraints:
       - greater_or_equal: 7
       - less_than: 8
    java_ops:
      type: string
  requirements:
    java:
      type: fastconnect.nodes.Java
      constraints:
        version: { greater_or_equal: 1.7 }

{% endhighlight %}

{% note %}
Tomcat node inherit from the requirement on a hosting compute node that is defined by the SoftwareComponent TOSCA normative node. Here we define an abstract Tomcat node that doesn't have any specific requirement for the compute node (os type etc.) so we don't have to override the parent requirement. Of course it is possible to override a parent requirement to specify more advanced constraints.
{% endnote %}

## Capabilities

Tomcat has multiple capabilities and the two main capabilities that we want to define in this tutorial are the ability to hort some War node(s) on top of Tomcat as well as it's http endpoint.

{: .table .table-bordered}
| Name      | Type                         | Lower bound | Upper bound         |
|:----------|:-----------------------------|:------------|:--------------------|
| http      | tosca.capabilities.Endpoint  | 0 (default) | unbounded (default) |
| war_host  | fastconnect.nodes.War        | 0 (default) | unbounded (default) |

In case of the http capability we want to define the port of the tosca.capabilties.Endpoint to be actually the one define in the

{% highlight yaml %}
fastconnect.nodes.Tomcat:
  abstract: true
  derived_from: tosca.nodes.ApplicationServer
  documentation: Tomcat application server is an application server that supports deployment of java web applications (war).
  properties:
    version:
      type: version
      constraints:
       - greater_or_equal: 7
       - less_than: 8
    java_ops:
      type: string
  requirements:
    java:
      type: fastconnect.nodes.Java
      constraints:
        version: { greater_or_equal: 1.7 }
  capabilties:
    http:
      type: tosca.capabilities.Endpoint
      properties:
        port: 8080
    war_host:
      type: fastconnect.capabilities.War

{% endhighlight %}

# Conclusion

Following the tutorial you should be able to define your own types to be added in ALIEN repository. TOSCA's requirement and capabilties mechanisms as well as constraint validations allows users to leverage your types so they can easily build topologies and minimize errors in configurations.

The next step is to actually implement the type in order to have a type that can indeed be instantiated in a topology.
