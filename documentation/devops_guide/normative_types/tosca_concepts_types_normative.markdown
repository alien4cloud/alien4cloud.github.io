---
layout: post
title:  Normative Types
root: ../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts]
node_name: tosca_ref_types_normative
weight: 200
---

TOSCA Specification defines some basic root types (TOSCA Normative types). There is default types for the Infrastructure and for the appliction.

Most of the application components however are not part of normative types but should extends from the TOSCA root types. This allows the container to leverage the default nodes lifecycle in order to automate Plan creation.

If you add some custom nodes that doesn’t extends from the Normative types, the container will not be able to include them in an auto-generated plan, every application that uses such types will require a custom defined plan. Even if it is possible to do so this is not recommended.

## Normative Lifecycle

TOSCA Normative types defines the root nodes and default lifecycle to ease writing and using TOSCA for real applications. The default lifecycle can be extended and improved through the creation of custom plans but should fit most usages.
