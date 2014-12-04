---
layout: post
title:  Definitions document
root: ../../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref]
node_name: tosca_ref_definitions
weight: 300
---

The root element of a definition file is called the Service Template.

A TOSCA Definitions YAML document contains element definitions of building blocks for cloud application, or complete models of cloud applications.

This section describes the top-level structural elements (i.e., YAML keys) which are allowed to appear in a TOSCA Definitions YAML document.

## Keynames

A TOSCA Definitions file contains the following element keynames:

{: .table .table-bordered}
| Keyname | Required | Description |
|:---------|:------------|:---------|
| tosca_definitions_version | <b>yes</b> | Defines the version of the TOSCA Simple Profile specification the template (grammar) complies with. |
| tosca_default_namespace | no | Defines the namespace of the TOSCA schema to use for validation. |
| template_name | <b>yes*</b> | Declares the name of the template. |
| template_author | no | Declares the author(s) of the template. |
| template_version | <b>yes*</b> | Declares the version string for the template. |
| description | no | Declares a description for this Service Template and its contents. |
| imports | no | Declares import statements external TOSCA Definitions documents (files). |
| dsl_defintions | no | Declares optional DSL-specific definitions and conventions. For example, in YAML, this allows defining reusable YAML macros (i.e., YAML alias anchors) for use throughout the TOSCA Service Template. |
| inputs | no | Defines a set of global input parameters passed to the template when its instantiated. This provides a means for template authors to provide points of variability to users of the template in order to customize each instance within certain constraints. |
| node_templates | no | Defines a list of Node Templates that model the components of an application or service’s topology within the Service Template. |
| relationship_templates | no | Defines a list of Relationship Templates that are used to model the relationships (e.g., dependencies, links, etc.) between components (i.e., Node Templates) of an application or service’s topology within the Service Template. |
| node_types | no | This section contains a set of node type definitions for use in service templates. Such type definitions may be used within the node_templates section of the same file, or a TOSCA Definitions file may also just contain node type definitions for use in other files. |
| relationship_types | no | This section contains a set of relationship type definitions for use in service templates. Such type definitions may be used within the same file, or a TOSCA Definitions file may also just contain relationship type definitions for use in other files. |
| capability_types | no | This section contains an optional list of capability type definitions for use in service templates. Such type definitions may be used within the same file, or a TOSCA Definitions file may also just contain capability type definitions for use in other files. |
| artifact_types | no | This section contains an optional list of artifact type definitions for use in service templates. Such type definitions may be used within the same file, or a TOSCA Definitions file may also just contain capability type definitions for use in other files.|
| outputs | no | This optional section allows for defining a set of output parameters provided to users of the template. For example, this can be used for exposing the URL for logging into a web application that has been set up during the instantiation of a template. |
| groups | no | This is an optional section that contains grouping definition for node templates. |

{% warning %}
(*) In Alien 4 Cloud the template name and versions are required as we supports versioning of the templates and indexing of elements in a catalog. In TOSCA specification they are optional.
{% endwarning %}

## Grammar

The overall structure of a TOSCA Service Template and its top-level key collations using the TOSCA Simple Profile is shown below:

{% highlight yaml %}
tosca_definitions_version: # Required TOSCA Definitions version string
tosca_default_namespace:   # Optional. default namespace (schema, types version)
template_name:             # Optional name of this service template
template_author:           # Optional author of this service template
template_version:          # Optional version of this service template

description: A short description of the definitions inside the file.

imports:
  # list of import statements for importing other definitions files

dsl_definitions:
  # list of YAML alias anchors (or macros)

inputs:
  # list of global input parameters

node_templates:
  # list of node templates

relationship_templates:
  # list of relationship templates

node_types:
  # list of node type definitions

capability_types:
  # list of capability type definitions

relationship_types:
  # list of relationship type definitions

artifact_types:
  # list of artifact type definitions

groups:
  # list of groups defined in service template

outputs:
  # list of output parameters

{% endhighlight %}

### tosca_definitions_version

This required element provides a means to include a reference to the TOSCA Simple Profile specification within the TOSCA Definitions YAML file.  It is an indicator for the version of the TOSCA grammar that should be used to parse the remainder of the document.

#### Keyword
tosca_definitions_version

#### Grammar
{% highlight yaml %}
tosca_definitions_version: <tosca_simple_profile_version>
{% endhighlight %}

#### Examples:
TOSCA Simple Profile version 1.0 specification using the defined namespace alias:

{% highlight yaml %}
tosca_definitions_version: tosca_simple_yaml_1_0_0
{% endhighlight %}

TOSCA Simple Profile version 1.0 specification using the fully defined (target) namespace:

{% highlight yaml %}
tosca_definitions_version: http://docs.oasis-open.org/tosca/simple/1.0
{% endhighlight %}

### template_name

This optional element declares the optional name of service template as a single-line string value.

#### Keyword
template_name

#### Grammar
{% highlight yaml %}
template_name: <name string>
{% endhighlight %}

#### Example
{% highlight yaml %}
template_name: My service template
{% endhighlight %}

#### Notes
*	Some service templates are designed to be referenced and reused by other service templates.  Therefore, in these cases, the template_name value SHOULD be designed to be used as a unique identifier through the use of namespacing techniques.  

### template_author

This optional element declares the optional author(s) of the service template as a single-line string value.

#### Keyword
template_author
#### Grammar

{% highlight yaml %}
template_author: <author string>
{% endhighlight %}

#### Example
{% highlight yaml %}
template_author: My service template
{% endhighlight %}

#### template_version
This element declares the optional version of the service template as a single-line string value.

#### Grammar

{% highlight yaml %}
template_version: <version>
{% endhighlight %}

#### Example

{% highlight yaml %}
template_version: 2.0.17
{% endhighlight %}

{% note %}
Some service templates are designed to be referenced and reused by other service templates and have a lifecycle of their own.  Therefore, in these cases, a template_version value SHOULD be included and used in conjunction with a unique template_name value to enable lifecycle management of the service template and its contents.
{% endnote %}

### description
This optional element provides a means to include single or multiline descriptions within a TOSCA Simple Profile template as a scalar string value.

### imports
This optional element provides a way to import a block sequence of one or more TOSCA Definitions documents.  TOSCA Definitions documents can contain reusable TOSCA type definitions (e.g., Node Types, Relationship Types, Artifact Types, etc.) defined by other authors.  This mechanism provides an effective way for companies and organizations to define normative types and/or describe their software applications for reuse in other TOSCA Service Templates.

{% info %}
In Alien 4 Cloud you can import libraries from the repository instead of having to package every required elements within your archives. This also allows a better management of versioning and dependencies.
In order to support this scenario the import element supports an additional non-normative definition. Of course when you export artifacts from Alien 4 Cloud you can ask Alien 4 Cloud to export a pure normative package (Alien will package all elements required together in a single archive and use normative relative imports).
{% endinfo %}

#### Grammar

{% highlight yaml %}
imports:
   - <tosca_definitions_file_1>
   - ...
   - <tosca_definitions_file_n>
{% endhighlight %}

{% info %}
Alien 4 Cloud specific grammar for catalog imports based on Definitions template names and versions.

{% highlight yaml %}
imports:
   - <tosca_template_name_1>:<tosca_template_version_1>
   - ...
   - <tosca_template_name_n>:<tosca_template_version_n>
{% endhighlight %}
{% endinfo %}

#### Example

{% highlight yaml %}
# An example import of definitions files from a location relative to the
# file location of the service template declaring the import.
imports:
  - relative_path/my_defns/my_typesdefs_1.yaml
  - ...
  - relative_path/my_defns/my_typesdefs_n.yaml
{% endhighlight %}

{% info %}
Alien 4 Cloud specific.

{% highlight yaml %}
imports:
   - <tosca-normative-types>:<1.0.0>
   - ...
   - <apache-server>:<2.0.3>
{% endhighlight %}
{% endinfo %}

### inputs
This optional element provides a means to define parameters, their allowed values via constraints and default values within a TOSCA Simple Profile template.

This section defines template-level input parameter section.
*	Inputs here would ideally be mapped to BoundaryDefinitions in TOSCA v1.0.
*	Treat input parameters as fixed global variables (not settable within template)
*	If not in input take default (nodes use default)

#### Grammar

{% highlight yaml %}
inputs:
  <property_definition_1>
  ...
  <property_definition_n>
{% endhighlight %}

#### Examples
Simple example without any constraints:

{% highlight yaml %}
inputs:
  fooName:
    type: string
    description: Simple string typed property definition with no constraints.
    default: bar
{% endhighlight %}

Example with constraints:

{% highlight yaml %}
inputs:
  SiteName:
    type: string
    description: string typed property definition with constraints
    default: My Site
    constraints:
      - min_length: 9
{% endhighlight %}

{% note %}
The parameters (properties) that are listed as part of the inputs block could be mapped to PropertyMappings provided as part of BoundaryDefinitions as described by the TOSCA v1.0 specification.
{% endnote %}

### node_templates
This element lists the Node Templates that describe the (software) components that are used to compose cloud applications.
#### Grammar

{% highlight yaml %}
node_templates:
  <node_template_defn_1>
  ...
  <node_template_defn_n>
{% endhighlight %}

A.5.3.8.3 Example
node_templates:

{% highlight yaml %}
  my_webapp_node_template:
    type: WebApplication

  my_database_node_template:
    type: Database
{% endhighlight %}

{% note %}
The node templates listed as part of the node_templates block can be mapped to the list of NodeTemplate definitions provided as part of TopologyTemplate of a ServiceTemplate as described by the TOSCA v1.0 specification.  
{% endnote %}

### node_types
This element lists the Node Types that provide the reusable type definitions for software components that Node Templates can be based upon.

#### Grammar

{% highlight yaml %}
node_types:
  <node_types_defn_1>
  ...
  <node_type_defn_n>
{% endhighlight %}

#### Example

{% highlight yaml %}
node_types:
  my_webapp_node_type:
    derived_from: WebApplication
    properties:
      my_port:
        type: integer

  my_database_node_type:
    derived_from: Database
    capabilities:
      mytypes.myfeatures.transactSQL
{% endhighlight %}

{% note %}
The node types listed as part of the node_types block can be mapped to the list of NodeType definitions as described by the TOSCA v1.0 specification.  
{% endnote %}

### relationship_types

This element lists the Relationship Types that provide the reusable type definitions that can be used to describe dependent relationships between Node Templates or Node Types.

#### Grammar

{% highlight yaml %}
relationship_types:
  <relationship_type_defn_1>
  ...
  <relationship type_defn_n>
{% endhighlight %}

#### Example

{% highlight yaml %}
relationship_types:
  mycompany.mytypes.myCustomClientServerType:
    derived_from: tosca.relationships.HostedOn
    properties:
      # more details ...

  mycompany.mytypes.myCustomConnectionType:
    derived_from: tosca.relationships.ConnectsTo
    properties:
      # more details ...
{% endhighlight %}

### capability_types
This element lists the Capability Types that provide the reusable type definitions that can be used to describe features Node Templates or Node Types can declare they support.

#### Grammar

{% highlight yaml %}
capability_types:
  <capability_type_defn_1>
  ...
  <capability type_defn_n>
{% endhighlight %}

#### Example

{% highlight yaml %}
capability_types:
  mycompany.mytypes.myCustomEndpoint:
    derived_from: tosca.capabilities.Endpoint
    properties:
      # more details ...

  mycompany.mytypes.myCustomFeature:
    derived_from: tosca.capabilites.Feature
    properties:
      # more details ...
{% endhighlight %}

### groups
The group construct is a composition element used to group one or more node templates within a TOSCA Service Template.

#### Grammar

{% highlight yaml %}
groups:
  <group_name_A>:
    <node_template_defn_A_1>
    ...
    <node_template_defn_A_n>

  <group_name_B>
    <node_template_defn_B_1>
    ...
    <node_template_defn_B_n>
{% endhighlight %}

#### Example

{% highlight yaml %}
node_templates:
  server1:
    type: tosca.nodes.Compute
    # more details ...

  server2:
    type: tosca.nodes.Compute
    # more details ...

  server3:
    type: tosca.nodes.Compute
    # more details ...

groups:
  server_group_1:
    members: [ server1, server2 ]
    policies:
      - anti_collocation_policy:
          # specific policy declarations omitted, as this is not yet specified
{% endhighlight %}

### outputs

This optional element provides a means to define the output parameters that are available from a TOSCA Simple Profile service template.

#### Grammar

{% highlight yaml %}
outputs:
  <property_definitions>
{% endhighlight %}

#### Example

{% highlight yaml %}
outputs:
  server_ip:
    description: The IP address of the provisioned server.
    value: { get_attribute: [ my_server, ip_address ] }
{% endhighlight %}
