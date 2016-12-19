---
layout: post
title:  TOSCA grammar
root: ../../../
categories: DOCUMENTATION-1.3.0
parent: [devops]
node_name: tosca_grammar
weight: 1
---

This section describes the TOSCA grammar as supported in latest alien4cloud version.

Alien4cloud supports multiple versions of the __tosca_definitions_version__:

* alien_dsl_1_3_0: DSL used in alien4cloud 1.3.0
* alien_dsl_1_2_0: DSL used in alien4cloud 1.2.0 _deprecated_
* alien_dsl_1_1_0: DSL used in alien4cloud 1.1.0 _deprecated_. While alien4cloud is still able to parse this definition version it is not officially supported and not recommended.

* tosca_simple_yaml_1_0: Official Tosca definition. The support is getting improved but some elements of the specification may not be supported yet and therefore we don't recommend using it with alien4cloud.
* http://docs.oasis-open.org/tosca/ns/simple/yaml/1.0: Same as _tosca_simple_yaml_1_0_

The recommended version is __alien_dsl_1_3_0__ and provides all the functionalities that alien4cloud currently supports.

Child pages details the specification as currently supported in alien4cloud.

# Migration from 1.2.0 version

This section highlight the chances between alien_dsl_1_2_0 and alien_dsl_1_3_0 and is intendeed for users to easily migrate to the latest version.


* relationship_type
  => artifact definition has changed
  TODO all sample and new sample.

* node_type
  => artifact definition has changed
  TODO all sample and new sample.

* requirement definition
  => previous version allowed support of a node_type, this is not authorized anymore and only a capability type is valid. You can however use the Root capability from any node and use the node property to specify the type.
