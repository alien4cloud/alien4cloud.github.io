---
layout: post
title:  Definitions document
root: ../../../
categories: DOCUMENTATION-3.1.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_definitions
weight: 1
---

The root element of a definition file is called the Service Template.

A TOSCA Definitions YAML document contains element definitions of building blocks (types) for cloud application, or complete models of cloud applications (templates).

This section describes the top-level structural elements (i.e., YAML keys) which are allowed to appear in a TOSCA Definitions YAML document.

## Keynames

A TOSCA Definitions file contains the following element keynames:

{: .table .table-striped }
| Keyname  | Required    | Type     | Description | tosca_definitions_version |
|:---------|:------------|:---------|:------------| :-------------------------|
| tosca_definitions_version | <b>yes</b> | string | Defines the version of the TOSCA Simple Profile specification the template (grammar) complies with __(1)__.<br>Recommended version is __alien_dsl_2_0_0__ | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| metadata | __yes(2)__ | map of string | Defines a section used to declare additional metadata information.<br> When using tosca_simple_yaml_1_0 in alien4cloud the metadata section must be defined and must defined the template_name, and template_version recognized metadata. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0, tosca_simple_yaml_1_0 |
| template_name | __yes(2)__ | string | Declares the name of the template. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| template_version | __yes(2)__ | version | Declares the version string for the template. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| template_author | no | string | Declares the author(s) of the template. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0 |
| description | no | string | Declares a description for this Service Template and its contents. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| dsl_definitions | no | map of yaml macros | Declares optional DSL-specific definitions and conventions. For example, in YAML, this allows defining reusable YAML macros (i.e., YAML alias anchors) for use throughout the TOSCA Service Template. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| repositories | no | map of [repository definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/repository_definition.html) | Declares the list of external repositories which contain artifacts that are referenced in the service template along with their addresses and necessary credential information used to connect to them in order to retrieve the artifacts. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| imports | no | list of import strings__(3)__ |Declares import statements external TOSCA Definitions documents (files). | alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| artifact_types | no | map of [artifact types](#/documentation/3.0.0/devops_guide/tosca_grammar/artifact_type.html) | This section contains an optional list of artifact type definitions for use in service templates. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| data_types | no | map of [data types](#/documentation/3.0.0/devops_guide/tosca_grammar/data_type.html) | Declares a list of optional TOSCA Data Type definitions. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| capability_types | no | map of [capability types](#/documentation/3.0.0/devops_guide/tosca_grammar/capability_type.html) | This section contains an optional list of capability type definitions for use in service templates. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| interface_types| no | list of interface type | Interface types is not supported in alien4cloud. Interfaces are defined directly on the node and relationship types as it was in previous draft of TOSCA specification | N.A. |
| relationship_types | no | list of [relationship types](#/documentation/3.0.0/devops_guide/tosca_grammar/relationship_type.html) | This section contains a set of relationship type definitions for use in service templates. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| node_types | no | list of [node types](#/documentation/3.0.0/devops_guide/tosca_grammar/node_type.html) | This section contains a set of node type definitions for use in service templates. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |
| group_types | no | list of group types | Group types are not yet supported in alien4cloud. They actually are not well documented in TOSCA and while we do support grouping inside alien4cloud there is no types associated with them | N.A. |
| policy_types | no | list of policy types | Policy types are not yet supported in alien4cloud. All elements of policies are not fully defined in TOSCA and while we do support some policies in alien4cloud they are not exposed as TOSCA types and it is not possible yet to add them in a dynamic way. | N.A. |
| topology_template | no | [Topology template definition](#/documentation/3.0.0/devops_guide/tosca_grammar/topology_template.html) | Defines the topology template of an application or service, consisting of node templates that represent the application’s or service’s components, as well as relationship templates representing relations between the components. | alien_dsl_2_0_0<br> alien_dsl_1_4_0<br> alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> tosca_simple_yaml_1_0 |

{% note %}
* __(1)__ When the tosca_definitions_version is set to tosca_simple_yaml_1_0 an automatic direct import of the TOSCA normative types version 1.0.0 is added to the service template. Alien 4 Cloud is not currently packaged with version 1.0.0 of the normative types as there are still some minor differences with alien's supported types. If you wish to use the tosca_simple_yaml_1_0 make sure that you upload the types first.
* __(2)__ In Alien 4 Cloud the template name and versions are required as we supports versioning of the templates and indexing of elements in a catalog. In TOSCA specification they are optional.
To specify versions using tosca_simple_yaml_1_0 definition version you must define the template_name and template_version in the metadata section. Using metadata is compliant with tosca specification and will be the future way to define this in alien4cloud. 3.0.0 version has a bug preventing the support of this definition in alien_dsl_1_3_0 which is fixed in 1.3.1.
In alien_dsl_1_3_0<br> alien_dsl_1_2_0<br> alien_dsl_1_1_0 it is possible to define the template_name and template_version directly at the root of the definition document.
* __(3)__ Alien 4 cloud currently supports an import syntax based on template names and versions. We believe it is a better way to reference dependencies but this is not yet acknowledge by TOSCA. On the other hand we don't yet support relative or url based imports.
{% endnote %}

## Grammar

The overall structure of a TOSCA Service Template and its top-level key collations using the TOSCA Simple Profile is shown below:

{% highlight yaml %}
tosca_definitions_version: # Required TOSCA Definitions version string

# Specific to alien_dsl_1_3_0 since 1.3.1 and tosca_simple_yaml_1_0
metadata:
  template_name:             # Optional name of this service template
  template_author:           # Optional author of this service template
  template_version:          # Optional version of this service template

# Specific to alien_dsl_1_3_0 and alien_dsl_1_2_0
template_name:             # Optional name of this service template
template_author:           # Optional author of this service template
template_version:          # Optional version of this service template

description: A short description of the definitions inside the file.

dsl_definitions:
  # map of YAML alias anchors (or macros)

repositories:
  # map of repositories

imports:
  # list of import statements for importing other definitions files

artifact_types:
  # list of artifact type definitions

data_types:
  # list of data type definitions

capability_types:
  # list of capability type definitions

relationship_types:
  # list of relationship type definitions

node_types:
  # list of node type definitions

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

Alien 4 cloud TOSCA Simple Profile version 1.3.1 specification using the defined namespace alias:

{% highlight yaml %}
tosca_definitions_version: alien_dsl_1_3_0
{% endhighlight %}

TOSCA Simple Profile version 1.0 specification using the defined namespace alias:

{% highlight yaml %}
tosca_definitions_version: tosca_simple_yaml_1_0_0
{% endhighlight %}

TOSCA Simple Profile version 1.0 specification using the fully defined (target) namespace:

{% highlight yaml %}
tosca_definitions_version: http://docs.oasis-open.org/tosca/simple/1.0
{% endhighlight %}

### metadata

Meta data section allows to declare additional metadata information including the template name, version and author.

{% warning %}
Before 1.3.1 metadata section is not supported in alien_dsl_1_3_0 and you should use the template_name, template_version and template_author at the root level of the definition document.
{% endwarning %}

{% highlight yaml %}
metadata:
  template_name: <name string>
  template_version: <version>
{% endhighlight %}

#### template_name

This optional element declares the optional name of service template as a single-line string value.

##### Keyword
template_name

##### Grammar
{% highlight yaml %}
template_name: <name string>
{% endhighlight %}

##### Example
{% highlight yaml %}
template_name: My service template
{% endhighlight %}

##### Notes
*	Some service templates are designed to be referenced and reused by other service templates.  Therefore, in these cases, the template_name value SHOULD be designed to be used as a unique identifier through the use of namespacing techniques.

#### template_author

This optional element declares the optional author(s) of the service template as a single-line string value.

##### Keyword
template_author
##### Grammar

{% highlight yaml %}
template_author: <author string>
{% endhighlight %}

##### Example
{% highlight yaml %}
template_author: My service template
{% endhighlight %}

##### template_version
This element declares the optional version of the service template as a single-line string value.

##### Grammar

{% highlight yaml %}
template_version: <version>
{% endhighlight %}

##### Example

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
In order to support this scenario the import element supports an additional non-normative definition.
We also do not support relative imports or url based imports in the current version of alien4cloud.
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
# Note that this notation is not yet supported by alien4cloud.
imports:
  - relative_path/my_defns/my_typesdefs_1.yaml
  - ...
  - relative_path/my_defns/my_typesdefs_n.yaml
{% endhighlight %}

{% info %}
Alien 4 Cloud specific.

{% highlight yaml %}
imports:
   - <tosca-normative-types>:<1.1.0>
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

### topology_template

see:
- [Topology template](#/documentation/3.0.0/devops_guide/tosca_grammar/topology_template.html)
