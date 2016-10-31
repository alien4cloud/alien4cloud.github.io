---
layout: post
title: New in 1.3.0
root: ../
categories: DOCUMENTATION-1.3.0
parent: []
node_name: whatsnew
weight: 75
published: true
---

{%summary%}{%endsummary%}

# TOSCA editor

Alien 4 Cloud 1.3.0 introduce a brand new version of the editor that now allows to edit a full archive, including topology yaml, scripts and any other files while still providing the topology and workflow edition views.

The core of the editor has been rewritten to allow support for undo/redo and user-triggered save (rather than automatic save on every operation) allowing to update the topology only when your changes are consistent.

To ease usage we now includes basic keyboard shortcuts in the editor and plan to improve their support with new ones. If you have a wish-list join our slack and share with us and the community!

The editor is now fully integrated with git, providing a local history through commits (performed automatically on a save) and allowing to push and/or pull from a remote repository.

[Read more here...](#/documentation/1.3.0/user_guide/topology_editor.html)

# Workspaces

TOSCA archives are now uploaded within workspaces. OpenSource support allow better isolation of application workspace. Premium support includes user workspaces and promotion mechanisms to allow archive sharing.

[Read more here...](#/documentation/1.3.0/user_guide/catalog_workspaces.html)

# TOSCA conformance improvements

## Complex inputs

Alien 4 Cloud now supports complex data types (including lists and maps) for topology inputs. Remember that you can access your complex properties using the get_property input in TOSCA [Read more here...](#/documentation/1.3.0/devops_guide/tosca_grammar/get_property_definition.html)

## Repositories support

Alien 4 Cloud now support artifact repositories definition and parsing. See more in _Artifact repositories support_ section below.

## Implementation artifact primary and dependencies support

TODO.

# Artifact repositories support

Ability to define artifact repositories to override url and credential based on artifact id (usefull when behind proxy).

Support of various repository types:
 - Http
 - Maven/Nexus [Premium only]
 - Git [Premium only]

# API improvements

Support for single call topology update or git pull making it easy to update your topology before deployment.

# Alien4Cloud High Availability - Premium


# Docker support

Support for docker deployment using our Marathon plugin and experimental support for Kubernetes through cloudify

## Marathon plugin
