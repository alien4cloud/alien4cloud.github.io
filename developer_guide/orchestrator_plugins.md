---
layout: post
exclude_from_search: true
title: Orchestrator plugins
root: ../
categories: DEVELOPER_GUIDE
parent: []
node_name: orchestrator_plugins
weight: 300
---

Orchestrator plugins are used to effectively deploy topologies on location(s) through the orchestrator technology backed up by the plugin.

TODO Interface to implement TODO

# Orchestrator and Locations

Writing a plugin requires to be familiar with Alien 4 Cloud concepts. As you know an orchestrator instance in alien 4 cloud is supposed to connect to an orchestrator engine. This orchestrator engine may be able to support deployments on one or multiple locations.

Some orchestrator implementations like the current cloudify implementation can only manage an deploy to a single location. Some other like brooklyn allows the configuration of multiple locations for a single orchestrator.

Every location has a location type, the plugin is responsible for exposing the different supported types. This is done by implementing the plugin interface method
TODO Method to be implemented TODO

## Definition of supported types.

The plugin may support normative types or just support it's own specific types. If so it won't be able to deploy TOSCA topologies but only specific topologies that will loose the portability of the normative TOSCA.

As specified a plugin may supports it's own types, a subset of TOSCA or the full TOSCA normative types. In any case the plugin is responsible to declare the supported types.
