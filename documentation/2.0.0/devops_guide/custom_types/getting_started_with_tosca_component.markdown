---
layout: post
title:  Getting started with a TOSCA component
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [devops, tosca_custom_types]
node_name: getting_started_with_tosca_component
weight: 200
---

{% info %}
In this section, we will details our JDK component that can be found in our github:
[JDK](https://github.com/alien4cloud/samples/blob/master/jdk){:target="_blank"}
{% endinfo %}

# Cloud Service Archive (CSAR)

A Cloud Service Archive (CSAR) is a folder or a zip file that contains types and templates definitions and any other files required for elements implementations.
The structure of our JDK’s CSAR is the following:

{% highlight bash %}
├── images
│   ├── jdk.png
├── scripts
│   └── install_jdk.sh
├── jdk-type.yml
{% endhighlight %}

* `jdk-type.yml` is the TOSCA file which contains all the TOSCA definitions
* The folders `/images` and `/scripts` contain files which are referenced by the `jdk-type.yml` file.

{% info %}
A TOSCA file can be written in XML or YAML.  
Here we choose to use YAML because this is the format recognized by Alien4Cloud.
{% endinfo %}

{% note %}
More details about CSAR [here](#/documentation/2.0.0/concepts/tosca.html)
{% endnote %}

# The TOSCA file structure

The structure is the following:

{% highlight yaml %}
tosca_definitions_version: # Required TOSCA Definitions version string
description: # Optional short description of the definitions inside the file
template_name: # Optional name of this service template
template_version: # Optional version of this service template
template_author: # Optional author of this service template

imports:
# list of import statements for importing other definitions files

node_types:
# list of node type definitions

capability_types:
# list of capability type definitions

relationship_types:
# list of relationship type definitions
{% endhighlight %}

{% note %}
More details on the TOSCA file definition [here](#/documentation/2.0.0/devops_guide/tosca_grammar/definitions_file.html)
{% endnote %}

## The basic part

{% highlight yaml %}
tosca_definitions_version: tosca_simple_yaml_1_0_0_wd03
description: TOSCA simple profile with JDK.
template_name: jdk-type
template_version: 1.0.0-SNAPSHOT
template_author: FastConnect

imports:
  - tosca-normative-types:1.0.0-SNAPSHOT
{% endhighlight %}

A little explanation:

* `tosca_simple_yaml_1_0_0_wd03` is the TOSCA version which Alien will use to parse the file.
* `tosca-normative-types:1.0.0-SNAPSHOT` means that our JDK component has a dependency to the TOSCA normative which is defined by another CSAR with the following value in its TOSCA file.

{% warning %}
Alien4Cloud comes with a default version of the normative types inside its catalog.  
Make sure that it matches the version you specify in your TOSCA file. Otherwise, you can import the needed version from our [github](https://github.com/alien4cloud/tosca-normative-types)
{% endwarning %}

## Main part: node_types

The JDK component has 2 node types: `alien.nodes.JDK` and `alien.nodes.JavaSoftware`.

* `alien.nodes.JDK` is the node which is responsible to install the JDK
* `alien.nodes.JavaSoftware` is an abstract node to be extended by softwares which require a JDK.

### The node_type structure

Here a description of a `node_type` structure used by the `jdk-type.yml` file:

{% highlight yaml %}
<node_type_name>:  # Define the name of the node type
  abstract: # Optional boolean to specify it’s an abstract node
  derived_from: # Optional parent node type name the node derives from
  description: # Optional description
  tags: # Optional key/value map to assign your own metadata to the node
        # A default “icon” key is recognize by Alien4Cloud to associate an image to the node
  properties:
    # Optional list of property definitions
  attributes:
    # Optional list of attribute definitions
  requirements:
    # Optional sequenced list of requirement definitions
  capabilities:
    # Optional list of capability definitions
  interfaces:
    # Optional list of named interfaces
{% endhighlight %}

{% note %}
More details about node type definition [here](#/documentation/2.0.0/devops_guide/tosca_grammar/node_type.html)
{% endnote %}

### The alien.nodes.JDK node_type in details

{% highlight yaml %}
node_types:
  alien.nodes.JDK:
    derived_from: tosca.nodes.SoftwareComponent
    description: >
      Installation of JDK
    tags:
      icon: images/jdk.png
    properties:
      java_url:
        type: string
        required: true
        default: "http://download.oracle.com/otn-pub/java/jdk/7u75-b13/jdk-7u75-linux-x64.tar.gz"
      java_home:
        type: string
        required: true
        default: "/opt/java"
    attributes:
      java_version: { get_operation_output: [ SELF, Standard, create, JAVA_VERSION ] }
      java_message: { concat: ["Java help: ", get_operation_output: [ SELF, Standard, create, JAVA_HELP ]] }
    capabilities:
      jdk:
        type: alien.capabilities.JDK
        occurrences: [0, unbounded]
    interfaces:
      Standard:
        create:
          inputs:
            JAVA_URL: { get_property: [SELF, java_url] }
            JAVA_HOME: { get_property: [SELF, java_home] }
          implementation: scripts/install_jdk.sh
{% endhighlight %}

* `derived_from: tosca.nodes.SoftwareComponent`  
  The `alien.nodes.JDK` node type is derived from the TOSCA native node `tosca.nodes.SoftwareComponent`, the root type defined by TOSCA to define software components.
* `icon: images/jdk.png`  
  The node will use the image which can be found at `images/jdk.png` inside the CSAR archive.
* `properties:`  
  The node has 2 properties which will be used by the installation script.
* `attributes:`  
  The node defines 2 attributes to be shown at runtime.
* `capabilities:`  
  The node expose a `jdk` capability to provide relationship of type `alien.capabilities.JDK` (defined later in the file). It basically says that any nodes that require an `alien.capabilities.JDK` type can be linked to this node.
* `interfaces:`  
  Defines operations on the node.  
  By default, every TOSCA nodes has an implicit default lifecycle composed of several operations which are: `create`, `configure`, `start`, `stop` and `delete`. Here we only define the `create` operation which calls the `install_jdk.sh` script inside the CSAR archive.

### The install_jdk.sh

The script installs a jdk on a Linux machine given a tarball archive and a target folder on the machine.  
What is important to focus on is the inputs definition.

{% highlight bash %}
inputs:
  JAVA_URL: { get_property: [SELF, java_url] }
  JAVA_HOME: { get_property: [SELF, java_home] }
{% endhighlight %}

So we have 2 inputs are specified in the yaml file.  
The values are retrieved from the node’s properties using the function `get_property`.  
The names `JAVA_URL` and `JAVA_HOME`, defined as key name of the inputs properties, are passed as variables environment before calling the `install_jdk.sh` script. Therefore, inputs inside the script are simply called as normal variables.

{% highlight bash %}
echo "${currHostName}:${currFilename} Java url ${JAVA_URL}"
echo "${currHostName}:${currFilename} Java home ${JAVA_HOME}"
{% endhighlight %}

Another point to highlight is that it is a best practice to correctly handle errors and especially the exit code of your scripts thus the orchestrator leveraged by Alien4Cloud can correctly handle errors and notify that a node has failed.

Here we used a function to add an error message, but it is not mandatory.

{% highlight bash %}
error_exit () {
  echo "${currHostName}:${currFilename} $2 : error code: $1"
  exit $1
}
{% endhighlight %}

### The alien.nodes.JavaSoftware node_type in details

{% highlight yaml %}
alien.nodes.JavaSoftware:
  abstract: true
  derived_from: tosca.nodes.Root
  description: The Alien JavaSoftware node represents a generic software component that can be launch by Java.
  tags:
    icon: images/jdk.png
  requirements:
    - java: alien.capabilities.JDK
      relationship: alien.relationships.JavaSoftwareHostedOnJDK
{% endhighlight %}

* `abstract: true`  
  This node is an abstract one, meaning that other nodes can extend it in order to inherit all of its definition.
* `requirements:`  
  This node requires to be linked to a node which offers the `alien.capabilities.JDK` capability type with a relationship of type `alien.relationships.JavaSoftwareHostedOnJDK` (defined later in the file).

## Defining capability_types

Here the structure of the `capability_type` used in the `jdk-type.yml` file:

{% highlight yaml %}
capability_types:
  <capability_type_name>: # The name of the capability type
    derived_from: # Optional parent Capability Type name the Capability Type derives from
{% endhighlight %}

The `jdk-type.yml` file defines a `alien.capabilities.JDK` type and it is derived from the `tosca.capabilities.Container` TOSCA normative type.

{% highlight yaml %}
capability_types:
  alien.capabilities.JDK:
    derived_from: tosca.capabilities.Container
{% endhighlight %}

{% note %}
More details about the capability definition [here](#/documentation/2.0.0/devops_guide/tosca_grammar/capability_definition.html)
{% endnote %}

## Defining relationship_types

Here the structure of the `relationship_type` used in the `jdk-type.yml` file:

{% highlight yaml %}
<relationship_type_name>: # The name of the relationship type
  derived_from: # Optional parent Relationship Type name the Relationship Type derives from
  description: # Optional description
  valid_sources: # Optional list of one or more valid target entities or entity types (i.e., a Node Types or Capability Types).
  valid_target_types: # Required list of one or more valid target entities or entity types (i.e., a Node Types or Capability Types).
{% endhighlight %}

In the source file:

{% highlight yaml %}
alien.relationships.JavaSoftwareHostedOnJDK:
    derived_from: tosca.relationships.HostedOn
    description: Relationship use to describe that the SoftwareComponent is hosted on the JDK.
    valid_sources: [ tosca.nodes.JavaSoftware ]
    valid_target_types: [ alien.capabilities.JDK ]
{% endhighlight %}

* `alien.relationships.JavaSoftwareHostedOnJDK` is the name of our relationship type.
* `derived_from: tosca.relationships.HostedOn`  
  The relationship derives from the `tosca.relationships.HostedOn` TOSCA normative type.
* `valid_sources: [ tosca.nodes.JavaSoftware ]`  
  The source of the relationship must be of a node with a `tosca.nodes.JavaSoftware` type in its requirements list.
* `valid_target_types: [ alien.capabilities.JDK ]`  
  The target of the relationship must be of a node with an `alien.capabilities.JDK` type in its capabilities list.

{% note %}
More details about the relationship type [here](#/documentation/2.0.0/devops_guide/tosca_grammar/relationship_type.html)
{% endnote %}

# Next steps

* Going deeper writing TOSCA components
    * [LAMP Stack Tutorial](#/documentation/2.0.0/devops_guide/lamp_stack_tutorial/lamp_stack.html)
    * [Create your own components](#/documentation/2.0.0/devops_guide/design_tutorial/tutorials.html)
* [Going deeper with TOSCA](#/documentation/2.0.0/devops_guide/tosca_grammar/tosca_grammar.html)
* [Upload your CSAR into Alien4Cloud](#/documentation/2.0.0/user_guide/catalog_type_upload.html)
