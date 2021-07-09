---
layout: post
title:  Catalog
root: ../../
categories: DOCUMENTATION-3.4.0
parent: [user_guide]
node_name: tosca_catalog
weight: 10
---

{% summary %}{% endsummary %}

{%note%}
TOSCA types are referred as components in alien4cloud. High level concepts are detailed in [this section](#/documentation/3.0.0/concepts/components.html).
{%endnote%}

# Introduction

TOSCA is at the heart of Alien 4 Cloud, and so is the TOSCA Catalog feature. TOSCA is an open standard from OASIS that allows to define components for cloud deployments in a reusable and eventually agnostic fashion.

The goal of TOSCA is to let users provide building blocks called Types to define the desired topologies from a very abstract level to a very concrete level allowing the actual deployment of the topology. Any abstract element in a topology has to be replaced with concrete implementations in order to allow the TOSCA deployer to actually perform the deployment. Most of TOSCA implementations provides their own implementations for some of the nodes (like the normative ones defined within the standard).

{%info%}
For more informations on TOSCA and supported archive format please go [here](#/documentation/3.0.0/devops_guide/dev_ops_guide.html).
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

# Workspaces

The goal of workspaces is to provide catalog isolation so that users can upload specific types without sharing them in the global catalog. Thanks to workspaces an application can define not only topologies but also types in their backing archive and benefits from all the indexing features without sharing specific types across the organization or other applications.



## Workspace hierarchy

Workspaces are defined in a hierarchy, on top of the hierarchy is the global workspace which basically is the main catalog of components which is managed by users with roles COMPONENT_MANAGER (to add types) and/or ARCHITECT (to add topologies).


<div class="row">
  <div class="col-xs-12">
    <div class="btn-primary">Global workspace</div>
  </div>
</div>
<div class="row" style="margin-top: 4px;">
  <div class="col-xs-3"><div class="btn-info">App 1 workspace</div></div>
  <div class="col-xs-3"><div class="btn-info">App 2 workspace</div></div>
  <div class="col-xs-3"><div class="btn-info">App 3 workspace</div></div>
  <div class="col-xs-3">...</div>
</div>

## Constraints on workspaces

While workspaces provide isolation between the different sub-workspaces there are constraints that alien4cloud enforce for consistency reasons.

* An archive with the same name and version can not exist in multiple workspaces. Indeed we don't want to allow a same name and version to have different content. If the same content has to be shared between multiple entities then it should lie in an upper workspace so ownership and updates potential is clear.
* An archive in an upper workspace is available for read (COMPONENT_BROWSER) to every child workspace.
* Only COMPONENT_MANAGER (for types) and ARCHITECT (for topologies) can change an archive in the global workspace.
* Any user with role APPLICATION_MANAGER or DEVOPS can change types and topologies in the application (theses users have the COMPONENT_MANAGER and ARCHITECT roles on the application workspace). Every user registered with a role on the application can have read (COMPONENT_BROWSER) access to the application archive content.

