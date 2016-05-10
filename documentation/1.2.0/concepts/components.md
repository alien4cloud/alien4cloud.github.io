---
layout: post
title: Components
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [concepts]
node_name: concepts-components
weight: 200
---

Components are building blocks that directly refers to TOSCA's Node Types. Alien4Cloud maintain a catalog of Components that is shared across the platform users. Alien's component catalog is indexed allowing users to browse, search and use filtering to find the components they need. Thanks to the components available in the platform, architect and application developers will be able to define application topologies (or blueprints).

There is multiple types of components in Alien 4 Cloud that directly refers to the TOSCA specification, below is explained the different types of components that you can find and extend.

# Node Types

Node Types are used to define some cloud resources elements (Compute - machine, Block-Storage - persistent disk, Network etc.) as well as software components (Database, WebServer etc.).

{%note%}
TOSCA Simple profile in YAML provides some pre-defined Node Types, more informations on the various pre-defined node types can be found [here](#/documentation/1.2.0/devops_guide/normative_types/tosca_concepts_types_normative.html).
{%endnote%}

A node type as every component may expose some capabilities (things that the node provides and that other nodes will be able to consume) and requirements (things that nodes actually requires in order to work correctly). For example a Compute node type (that represents a Machine) has the capability to host some softwares and a Software Component (or any inherited node) requires a Compute on which to be hosted on (installed and run).

# Relationship Types

Relationship types are used to connect nodes. A relationship in TOSCA and Alien is directional, it connects the requirement of a source node to the capability of a target node. In order to be used in the right context only, a relationship can specify what type of capability (thus requirement) it can connects.
