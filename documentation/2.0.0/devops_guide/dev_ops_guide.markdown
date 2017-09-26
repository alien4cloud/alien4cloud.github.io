---
layout: post
title:  TOSCA usage guide
root: ../../
categories: DOCUMENTATION-2.0.0
parent: []
node_name: devops
weight: 350
---

{% summary %}{% endsummary %}

This section contains reference to the TOSCA Simple profile in YAML specification as it is now supported in Alien. TOSCA is a standard specification that allow dev_ops and architects to define reusable components and topologies that can be easily ported across clouds and orchestrators.

Alien 4 Cloud is designed so you can easily add your own components and leverage your existing scripts, puppet or chef recipes, using the TOSCA YAML based DSL.

# TOSCA

Alien 4 Cloud is compliant with OASIS's TOSCA standard to model it's different components (nodes, relationships, capabilities and requirements).

In order to define components in TOSCA you can use the XML or YAML profile (TOSCA Simple Profile). We recommend using the simple profile and thus this documentation describe only the way to configure elements using the simple profile.

{% warning %}
<h5>Tosca support in ALien 4 Cloud 2.0.0</h5>
Alien 4 Cloud only supports TOSCA Simple Profile in YAML, XML version is discontinuated and not supported by OASIS TOSCA TC and people still using it should migrate.

Alien 4 Cloud2.0.0 is very close to TOSCA 1.0.0 but still has a few differences.

Note that Simple Profile 1.0 specification will soon be released as a TOSCA standard however the standard test-suites have not been written yet.
{% endwarning %}

# Known differences

This section details the differences between TOSCA Simple Profile and Alien 4 Cloud 2.0.0 dsl:

* __imports__: alien4cloud imports are based on archive name and version rather than url or relative paths. We think that this is a better way to reference artifacts and to increase portability. Most of great tools support this kind of referencing (maven, bower, node etc.). Note that we plan to support TOSCA notation in the future but keep extended support of version notation (hopefully change the standard to include it).
* __get_artifact__: We don't support get_artifact function in alien4cloud currently but rather provide an environment variable with the name of the artifact that provide the local path of the file.
* __valid_source_types__ is not supported in a capability as we don't think that this is a good practice as it limit the ability to create a new node that could connect to multiple services (there is no multiple inheritance but multiple requirements/capabilites). In addition this doesn't bring real value except saving 2 yaml lines to create a new capability.
* __attach_to__ relationships direction has changed in TOSCA from the working draft to latest release and we still support the previous version basically BlockStorage is the source and Compute the target which actually sounds to make more sense to us. We plan to support parsing/export to TOSCA by reverting the relation at parsing time.
* __range type__ alien4cloud currently don't support the range type primitive.
* __attributes on capabilites__ are not yet parsed in alien4cloud.
* __data types on attributes__ is not yet supported
* __network__ we don't support yet the TOSCA network types but have a simplified support for network definitions.
* __group_types__ we don't support group types as they can define operation but the impact of their operations on the workflow is not defined. Note that there is actually no group interface in TOSCA. We have a group support on node templates but this is currently used to assign policies (like H.A.).
* __policy_types__ While some policies are supported in alien4cloud they are supported through group and are not flexible. Note that before the TOSCA Simple profile 1.1 version policies where experimental as the definition syntax has quite changed.
* __interface_types__ TOSCA Simple Profile working draft had no interface_types and the interfaces where defined directly on the node types or relationship types. Alien 4 Cloud is compliant with the working drafts that provide simpler notation.
* __implementation artifacts type__ Alien 4 Cloud currently relies on file extensions to automatically find the type of an implementation artifact which is very efficient in the simple definition notation. TOSCA however allow users to specify explicitly the artifact type.
* __metadata__ Metadata was added in the late versions of the specification. Alien4Cloud currently supports tags which is similar to metadata but applies to the nodes types also. We are planning to work with the TOSCA TC to allow metadata on types and templates.

# Declarative workflow differences

Declarative workflow generation is the main difference between the TOSCA Simple Profile and Alien 4 Cloud.

# DSL extentions

* __tags__ As stated we don't support metadata but provide support for tags element which is similar but applies to all type elements.
* __workflow__ Alien 4 Cloud support the definition of imperative workflows. TOSCA Simple Profile 1.0 doesn't provide support for imperative workflows but we have pushed this into the 1.1 specification. Note that we however don't support the 1.1 workflow specification that has just been defined and allow some more advanced options than the version we currently support.
