---
layout: post
title: What's new in 1.1.0 ?
root: ../
categories: DOCUMENTATION-1.1.0
parent: []
node_name: whatsnew
weight: 75
---

{% summary %}{% endsummary %}

# Orchestrator and Locations

"Cloud" concept as it existed in 1.0.0 has been replaced by Orchestrator and Location concepts that reflects in a better way our actual supports. "Cloud" name was also not a great choice as it could refer to a "cloud" but also to some BYON deployments for example that people doesn't really consider as clouds (even if that may be discussed). Anyway "location" sounds much better and can be easily understood.

The refactoring also allows to give a much nicer support for orchestrators that can deploy to multiple locations (like Apache Brooklyn) and bring great features and openings like the Location Matching. It was also a mandatory step to open us to multi-location deployments and other very cool features that we want to support in future releases.

More details on Orchestrators and Locations are provided in the Concept section.

## Location matching

Location matching allows to match a topology against locations and provide choices of the best locations for the topology. Default implementation is simple and just provides all locations on which the current user has the deployer role.

Plugin system allows to create advanced location matching, overriding the location matching logic and event the choice selection ui.

## Node matching

Node matching is an existing feature of Alien 4 Cloud but 1.1.0 introduce more possibilities thanks to the location refactoring and related custom types.

Moreover node matching is now pluggable so you can override our logic with more advanced or custom logic.

# Custom Workflows

# BlockStorage support

Block storage support has changed in 1.1.0. In 1.0.0 when a block storage was defined and attached to a Compute node in a topology, the storage was automatically attached, partitioned, formatted and mounted. This behavior has changed and the Block Storage is now attached but neither partitioned, formatted and mounted.

In order to do so we created a separate TOSCA node LinuxFileSystem (right now available for linux only).

# TOSCA support improvements

We have upgraded our normative types support to be closer to TOSCA. In 1.1.0 we recommend people to use the following version of the normative types: "1.1.0.wd06.alien". It basically is a version derived from the TOSCA Simple Profile in YAML Working Draft 06 to match our Alien TOSCA like DSL (there is still some effort planned for 1.2.0 to increase TOSCA support).

## Deprecated usages

## Addition to TOSCA

We received complains and realized also on our end that TOSCA currently has some limitations that makes quite complex to manage some modelings. As TOSCA doesn't have yet an API to access the runtime model from scripts (both to read and update attributes for example) it leverage the definition of inputs on the scripts and get_attribute or get_properties functions.

This model is very nice as people don't have to build TOSCA clients or uses REST calls but can just expect the TOSCA orchestrator to retrieve attributes for them. Using get_attribute and get_property in conjunction with inputs does a pretty good job.

Our main complain however is related to the get_operation_output function.

# Cloudify 2 End Of Life

GigaSpaces doesn't support cloudify 2 anymore, as a consequence we stopped investing efforts on our cloudify 2 provider and it won't work with alien 1.1.0.
Hopefully if all your artifacts uses only portable scripts and no orchestrator specific logic migration to cloudify 3 should not be painful for you!
