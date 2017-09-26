---
layout: post
title:  TOSCA catalog
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide]
node_name: tosca_catalog
weight: 10
---

{% summary %}{% endsummary %}

{%note%}
TOSCA types are referred as components in alien4cloud. High level concepts are detailed in [this section](#/documentation/2.0.0/concepts/components.html).
{%endnote%}

# Introduction

TOSCA is at the heart of Alien 4 Cloud, and so is the TOSCA Catalog feature. TOSCA is an open standard from OASIS that allows to define components for cloud deployments in a reusable and eventually agnostic fashion.

The goal of TOSCA is to let users provide building blocks called Types to define the desired topologies from a very abstract level to a very concrete level allowing the actual deployment of the topology. Any abstract element in a topology has to be replaced with concrete implementations in order to allow the TOSCA deployer to actually perform the deployment. Most of TOSCA implementations provides their own implementations for some of the nodes (like the normative ones defined within the standard).

{%info%}
For more informations on TOSCA and supported archive format please go [here](#/documentation/2.0.0/devops_guide/tosca_concepts.html).
{%endinfo%}

# TOSCA Catalog

Alien 4 Cloud TOSCA Catalog is an index of components/elements defined in a TOSCA archive. Among these elements we find two main categories Types (reusable building blocks) and Topologies (Composition and definition of the building blocks to define what a user want's to deploy).

When adding or creating a TOSCA archive in Alien 4 Cloud the archive is automatically store on a File System but also indexed to provide browsing and search features in your various archives and truly making them reusable for all the people working on the alien instance!

{%info%}
<h5>Accessing the catalog</h5>
Every user with the role COMPONENT_BROWSER can actually browse the global catalog both to look types or topology templates.
{%endinfo%}

[![Tosca archive and indexing in alien](../../images/user_guide/catalog_archive_content.png)](../../images/user_guide/catalog_archive_content.png)

### Archive meta-data

In addition to the types and topology in an archive we also index an object that represents the archive and it's meta-data. This is referenced in alien as the CSAR (for Cloud Service ARchive).

### TOSCA Types

The first element indexed in alien 4 cloud are the TOSCA Types. Amongst them we find some high level types used to ease reusability when creating other types:

* Artifact types
* Capability types
* Data types
* Interface types

And some types that can actually get instanciated in a topology:

* Node types (the main building blocks)
* Relationship types (elements that can define how relations between nodes can actually be implemented)

### Topologies

Topologies are the second element indexed in alien 4 cloud.

{%info%}
While a TOSCA archive may contains multiple types a single topology can be defined in an archive. The id of a topology in alien4cloud is the same id of the enclosing archive Id.
{%endinfo%}
