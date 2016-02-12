---
layout: post
title: New in 1.1.0
root: ../
categories: "DOCUMENTATION-1.1.0"
parent: []
node_name: whatsnew
weight: 75
published: true
---


{%summary%}{%endsummary%}

# Orchestrator and Locations

"Cloud" concept as it existed in 1.0.0 has been replaced by Orchestrator and Location concepts that reflects in a better way our actual supports. "Cloud" name was also not a great choice as it could refer to a "cloud" but also to some existing hosts pools, for example that people doesn't really consider as clouds. Anyway "location" sounds much better and can be easily understood.

The refactoring also allows to give a much nicer support for orchestrators that can deploy to multiple locations from a single manager (like Apache Brooklyn) and bring great features and openings like the Location Matching. It was also a mandatory step to open us to multi-location deployments and other very cool features that we want to support in future releases.

More details on Orchestrators and Locations are provided in the Concept section.

## Location matching

Location matching allows to match a topology against locations and provide choices of the best locations for the topology. Default implementation is simple and just provides all locations on which the current user has the deployer role.

Plugin system allows to create advanced location matching, overriding the location matching logic and event the choice selection ui.

## Node matching

Node matching is an existing feature of Alien 4 Cloud but 1.1.0 introduce more possibilities thanks to the location refactoring and related custom types. It is now possible to benefits from the most specific configuration options of a IaaS without loosing the ability to design portable topologies.

Moreover node matching is now pluggable so you can override our logic with more advanced or custom logic.

# Custom Workflows

1.1.0 version keeps the simplicity of TOSCA declarative modeling of topologies and automatic workflow generation but introduce in addition a support for imperative workflows.
Imperative workflow is something we are pushing into TOSCA TC and is planned to be part of TOSCA 1.1 specification. Indeed if declarative support is the preferred way to address workflows and topologies some specific scenarios may require more complex workflows that cannot yet be addressed through declarative modeling.

# BlockStorage support

Block storage support has changed in 1.1.0. In 1.0.0 when a block storage was defined and attached to a Compute node in a topology, the storage was automatically attached, partitioned, formatted and mounted. This behavior has changed and the Block Storage is now attached but neither partitioned, formatted and mounted.

In order to do so we created a separate TOSCA node LinuxFileSystem (right now available for linux only).

# TOSCA support improvements

We have upgraded our normative types support to be closer to TOSCA. In 1.1.0 we recommend people to use the following version of the normative types: "1.0.0-ALIEN11". It basically is a version derived from the TOSCA Simple Profile in YAML 1.0.0 preview in order to match our Alien TOSCA like DSL (there is still some effort planned for 1.2.0 to increase TOSCA support).

# Orchestrators support
## Cloudify 3 support

Alien 4 cloud 1.1.0 brings support for cloudify 3.3.x orchestrator. Thanks to alien 4 cloud the TOSCA support of cloudify 3 is improved. In addition we added some workarounds to bring to cloudify 3 support for scalability on OpenStack for bigdata scenarios we had to handle (scaling of a combined group of nodes, such as Compute and BlockStorage) and some very basic self-healing support (More info [here](#/documentation/1.1.0/orchestrators/cloudify3_driver/index.html)).

## Cloudify 2 End Of Life

GigaSpaces doesn't support cloudify 2 anymore, as a consequence we stopped investing efforts on our cloudify 2 provider and it won't work with alien 1.1.0.
Hopefully if all your artifacts uses only portable scripts and no orchestrator specific logic migration to cloudify 3 you won't have migration effort!

## Apache Brooklyn integration

We're very happy that our friends from Apache Brooklyn invested in the integration of Brooklyn orchestrator to Alien4Cloud in order to bring Apache Brooklyn into the TOSCA interoperable world. Check this here :https://github.com/cloudsoft/brooklyn-tosca
