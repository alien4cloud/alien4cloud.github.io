---
layout: post
title:  Kubernetes
root: ../../../
categories: DOCUMENTATION-3.3.0
parent: [orchestrators]
node_name: kubernetes
weight: 1000
---

## Overview

Starting from 3.0.0 the way we manage Kubernetes integration has changed and is now independent from the orchestrator. Any orchestrator that can fulfill the prerequisites will now be able to leverage on Kubernetes scheduler.

Here, We will explain concepts, describe the kubernetes plugin, and try it using simple examples.

## Portable modelization

This legacy portable mode aim to let you design portable container topologies that can be transformed into concrete K8S topology (with willingness to target other kind of container schedulers ...).

- A CSAR with dedicated Kubernetes abstract and concrete types and policies.
- 2 topology modifiers that transform an abstract container based topology into something deployable onto a Kubernetes cluster.
- policies’ modifiers

## K8S modelization

Portability often means limitations : regarding the fact that K8S became a standard _de facto_, we have decided to able you directly target K8S scheduler, leveraging all it's features.

- The same CSAR with Kubernetes dedicated concrete types only
- It can be only used with Kubernetes
- 1 single topology modifier that transform container based topology into something deployable onto a Kubernetes cluster.


## Spark modelization
Deploying and running Spark jobs is now available with the plugin. Il can be realized only with the K8S modelization mode.
