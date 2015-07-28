---
layout: post
title:  Definitions document
root: ../../../
categories: DOCUMENTATION-1.1.0
parent: [devops, tosca_concepts]
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
| dsl_definitions | no | Declares optional DSL-specific definitions and conventions. For example, in YAML, this allows defining reusable YAML macros (i.e., YAML alias anchors) for use throughout the TOSCA Service Template. |
| node_types | no | This section contains a set of node type definitions for use in service templates. Such type definitions may be used within the node_templates section of the same file, or a TOSCA Definitions file may also just contain node type definitions for use in other files. |
| relationship_types | no | This section contains a set of relationship type definitions for use in service templates. Such type definitions may be used within the same file, or a TOSCA Definitions file may also just contain relationship type definitions for use in other files. |
| capability_types | no | This section contains an optional list of capability type definitions for use in service templates. Such type definitions may be used within the same file, or a TOSCA Definitions file may also just contain capability type definitions for use in other files. |
| artifact_types | no | This section contains an optional list of artifact type definitions for use in service templates. Such type definitions may be used within the same file, or a TOSCA Definitions file may also just contain capability type definitions for use in other files. |
| topology_template | no | Defines the topology template of an application or service, consisting of node templates that represent the application’s or service’s components, as well as relationship templates representing relations between the components. |

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

node_types:
  # list of node type definitions

capability_types:
  # list of capability type definitions

relationship_types:
  # list of relationship type definitions

artifact_types:
  # list of artifact type definitions

topology_template:
  # Topology template definition

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

### dsl_definitions
This optional element provides a section to define macros. A macro can be reused elsewhere by referencing it.

#### Example

In the following example, we define a 'macro' named 'my_compute_node_props' which defines a property 'os_type' and it's value. It is used for the both nodes compute1 and compute2.

{% highlight yaml %}
dsl_definitions:
  my_compute_node_props: &my_compute_node_props
    os_type: linux
topology_template:
  node_templates:
    compute1:
      type: tosca.nodes.Compute
        properties: *my_compute_node_props
    compute2:
      type: tosca.nodes.Compute
      properties: *my_compute_node_props
{% endhighlight %}

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

### topology_template

see:
- [Topology template](#/documentation/1.1.0/devops_guide/tosca_grammar/topology_template.html)
