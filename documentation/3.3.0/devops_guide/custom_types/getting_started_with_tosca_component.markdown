---
layout: post
title:  Getting started with a TOSCA component
root: ../../
categories: DOCUMENTATION-3.3.0
parent: [devops, tosca_custom_types]
node_name: getting_started_with_tosca_component
weight: 200
---

{% info %}
In this section, we will detail our linux JDK component that can be found in our github:
[JDK](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/lang/java/jdk/linux){:target="_blank"}
{% endinfo %}

# Cloud Service Archive (CSAR)

A Cloud Service Archive (CSAR) is a folder or a zip file that contains types and templates definitions and any other files required for elements implementations.
The structure of our JDK’s CSAR is the following:

{% highlight bash %}
├── images
│   ├── jdk.png
├── scripts
│   └── install_jdk.sh
├── type.yml
{% endhighlight %}

* `type.yml` is the TOSCA file which contains all the TOSCA definitions
* The folders `/images` and `/scripts` contain files which are referenced by the `type.yml` file.

{% info %}
A TOSCA file can be written in XML or YAML.
Here we choose to use YAML because this is the format recognized by Alien4Cloud.
{% endinfo %}

{% note %}
More details about CSAR [here](#/documentation/3.0.0/concepts/tosca.html)
{% endnote %}

# Structure of TOSCA file

The structure looks like the following:

{% highlight yaml %}
tosca_definitions_version: # Required TOSCA Definitions version string
description: # Optional short description of the definitions inside the file
metadata:
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
More details on the TOSCA file definition [here](#/documentation/3.0.0/devops_guide/tosca_grammar/definitions_document.html)
{% endnote %}

## The basic part

{% highlight yaml %}
tosca_definitions_version: alien_dsl_1_4_0
description: TOSCA simple profile with JDK.
metadata:
  template_name: org.alien4cloud.lang.java.jdk.linux
  template_version: 1.4.0-SNAPSHOT
  template_author: alien4cloud

imports:
  - tosca-normative-types:1.0.0-ALIEN14
  - org.alien4cloud.lang.java.pub:1.4.0-SNAPSHOT
{% endhighlight %}

A little explanation:

* `alien_dsl_1_4_0` is the TOSCA version which Alien will use to parse the file.
* `tosca-normative-types:1.0.0-ALIEN14` means that our JDK component has a dependency to the TOSCA normative which is defined by another CSAR with the following value in its TOSCA file.
* `org.alien4cloud.lang.java.pub:1.4.0-SNAPSHOT` means that this JDK component has a dependency to the [abstract JDK component](https://github.com/alien4cloud/samples/tree/master/org/alien4cloud/lang/java/pub)

{% warning %}
Alien4Cloud comes with a default version of the normative types inside its catalog.
Make sure that it matches the version you specify in your TOSCA file. Otherwise, you can import the needed version from our [github](https://github.com/alien4cloud/tosca-normative-types)
{% endwarning %}

## Main part: node_types

The JDK component has one node type: `org.alien4cloud.lang.java.jdk.linux.nodes.OracleJDK` which derived from `tosca.nodes.SoftwareComponent`.

* `org.alien4cloud.lang.java.jdk.linux.nodes.OracleJDK` is the node which is responsible to install the JDK
* `tosca.nodes.SoftwareComponent` is an abstract node to be extended by softwares which require a JDK.

### The node_type structure

Here a description of a `node_types` structure used by the `type.yml` file:

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
More details about node type definition [here](#/documentation/3.0.0/devops_guide/tosca_grammar/node_type.html)
{% endnote %}

### The alien.nodes.JDK node_type in details

{% highlight yaml %}
node_types:
  org.alien4cloud.lang.java.jdk.linux.nodes.OracleJDK:
    derived_from: tosca.nodes.SoftwareComponent
    description: Installation of Oracle Java Development Kit
    metadata:
      icon: images/jdk.png
    properties:
      java_url:
        type: string
        required: true
        default: "https://edelivery.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.tar.gz"
      java_home:
        type: string
        required: true
        default: "/opt/java"
      component_version:
        type: version
        default: 1.8.0-131-b11
    attributes:
      java_version: { get_operation_output: [ SELF, Standard, create, JAVA_VERSION ] }
      java_message: { concat: ["Java help: ", get_operation_output: [ SELF, Standard, create, JAVA_HELP ]] }
    capabilities:
      jdk:
        type: org.alien4cloud.lang.java.pub.capabilities.JDK
        occurrences: [ 0, UNBOUNDED ]
    interfaces:
      Standard:
        create:
          inputs:
            JAVA_URL: { get_property: [SELF, java_url] }
            JAVA_HOME: { get_property: [SELF, java_home] }
          implementation: scripts/install_jdk.sh
{% endhighlight %}

* `derived_from: tosca.nodes.SoftwareComponent`
  The `org.alien4cloud.lang.java.jdk.linux.nodes.OracleJDK` node type is derived from the TOSCA native node `tosca.nodes.SoftwareComponent`, the root type created by TOSCA to define software components.
* `icon: images/jdk.png`
  The node will use the image which can be found at `images/jdk.png` inside the CSAR archive.
* `properties:`
  The node has 3 properties which will be used by the installation script.
* `attributes:`
  The node defines 2 attributes to be shown at runtime.
* `capabilities:`
  The node exposes a `jdk` capability to provide relationship of type `org.alien4cloud.lang.java.pub.capabilities.JDK` (defined in the [pub jdk CSAR](https://github.com/alien4cloud/samples/blob/master/org/alien4cloud/lang/java/pub/types.yml)). It basically says that any nodes requiring an `org.alien4cloud.lang.java.pub.capabilities.JDK` type can be linked to this node.
* `interfaces:`
  Defines operations on the node.
  By default, every TOSCA node has an implicit lifecycle composed of several operations, i.e., `create`, `configure`, `start`, `stop` and `delete`. Here we only define the `create` operation which calls the `install_jdk.sh` script inside the CSAR archive.

### The `install_jdk.sh` script

The script installs a jdk on a Linux machine given a tarball archive and a target folder on the machine.
What is important to focus on is the inputs definition.

{% highlight bash %}
inputs:
  JAVA_URL: { get_property: [SELF, java_url] }
  JAVA_HOME: { get_property: [SELF, java_home] }
{% endhighlight %}

So we have 2 inputs specified in the yaml file.
The values are retrieved from the node’s properties using the builtin function `get_property`.
The names `JAVA_URL` and `JAVA_HOME`, defined as key name of the inputs properties, are passed as variables environment before calling the `install_jdk.sh` script. Therefore, inputs inside the script are simply called as normal variables.

{% highlight bash %}
echo "${currHostName}:${currFilename} Java url ${JAVA_URL}"
echo "${currHostName}:${currFilename} Java home ${JAVA_HOME}"
{% endhighlight %}

Another point to highlight is that it is a best practice to correctly handle errors and especially the exit code of your scripts thus the orchestrator leveraged by Alien4Cloud can correctly handle errors and notify that a node has failed.

Here we can use a function to add an error message, but it is not mandatory.

{% highlight bash %}
error_exit () {
  echo "${currHostName}:${currFilename} $2 : error code: $1"
  exit $1
}
{% endhighlight %}

### The abstract JDK node_type in details

{% highlight yaml %}
org.alien4cloud.lang.java.pub.nodes.JavaSoftware:
    abstract: true
    derived_from: tosca.nodes.Root
    description: The JavaSoftware node represents a generic software component that can be launch by Java.
    metadata:
      icon: images/javabean.png
    requirements:
      - java:
          capability: org.alien4cloud.lang.java.pub.capabilities.JDK
          relationship: org.alien4cloud.lang.java.pub.relationships.JavaSoftwareHostedOnJDK
          occurrences: [1, 1]
{% endhighlight %}

* `abstract: true`
  This node is an abstract one, meaning that other nodes can extend it in order to inherit all of its definitions.
* `requirements:`
  This node requires to be linked to a node which offers the `org.alien4cloud.lang.java.pub.capabilities.JDK` capability type with a relationship of type `org.alien4cloud.lang.java.pub.relationships.JavaSoftwareHostedOnJDK` (defined later in the file).

## Defining capability_types

Here is the structure of the `capability_type` used in the [type.yml](https://github.com/alien4cloud/samples/blob/master/org/alien4cloud/lang/java/pub/types.yml) file:

{% highlight yaml %}
capability_types:
  <capability_type_name>: # The name of the capability type
    derived_from: # Optional parent Capability Type name the Capability Type derives from
{% endhighlight %}

The [type.yml](https://github.com/alien4cloud/samples/blob/master/org/alien4cloud/lang/java/pub/types.yml) file defines a `org.alien4cloud.lang.java.pub.capabilities.JDK` type and it is derived from the `tosca.capabilities.Container` TOSCA normative type.

{% highlight yaml %}
capability_types:
  org.alien4cloud.lang.java.pub.capabilities.JDK:
    derived_from: tosca.capabilities.Container
{% endhighlight %}

{% note %}
More details about the capability definition [here](#/documentation/3.0.0/devops_guide/tosca_grammar/capability_definition.html)
{% endnote %}

## Defining relationship_types

Here the structure of the `relationship_type` used in the [type.yml](https://github.com/alien4cloud/samples/blob/master/org/alien4cloud/lang/java/pub/types.yml) file:

{% highlight yaml %}
<relationship_type_name>: # The name of the relationship type
  derived_from: # Optional parent Relationship Type name the Relationship Type derives from
  description: # Optional description
  valid_target_types: # Required list of one or more valid target entities or entity types (i.e., a Node Types or Capability Types).
{% endhighlight %}

In the source file:

{% highlight yaml %}
relationship_types:
  org.alien4cloud.lang.java.pub.relationships.JavaSoftwareHostedOnJDK:
    derived_from: tosca.relationships.HostedOn
    description: Relationship use to describe that the SoftwareComponent is hosted on the JDK.
    valid_target_types: [ org.alien4cloud.lang.java.pub.capabilities.JDK ]
{% endhighlight %}

* `org.alien4cloud.lang.java.pub.relationships.JavaSoftwareHostedOnJDK` is the name of our relationship type.
* `derived_from: tosca.relationships.HostedOn`
  The relationship derives from the `tosca.relationships.HostedOn` TOSCA normative type.
* `valid_target_types: [ org.alien4cloud.lang.java.pub.capabilities.JDK ]`
  The target of the relationship must be of a node with an `org.alien4cloud.lang.java.pub.capabilities.JDK` type in its capabilities list.

{% note %}
More details about the relationship type [here](#/documentation/3.0.0/devops_guide/tosca_grammar/relationship_type.html)
{% endnote %}

# Next steps

* Going deeper to write TOSCA components
    * [LAMP Stack Tutorial](#/documentation/3.0.0/devops_guide/lamp_stack_tutorial/lamp_stack.html)
    * [Create your own components](#/documentation/3.0.0/devops_guide/design_tutorial/tutorials.html)
* [Going deeper with TOSCA](#/documentation/3.0.0/devops_guide/tosca_grammar/tosca_grammar.html)
