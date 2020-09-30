---
layout: post
title:  Kubernetes
root: ../../../
categories: DOCUMENTATION-3.0.0
parent: [orchestrators]
node_name: kubernetes
weight: 1000
---

## Overview

Starting from 3.0.0 the way we manage Kubernetes integration has changed and is now independent from the orchestrator. Any orchestrator that can fulfill the prerequisites will now be able to leverage on Kubernetes scheduler.

Here, We will explain concepts, describe the kubernetes plugin, and try it using simple examples.

## Kubernetes modelization - abstract mode
- A CSAR with dedicated Kubernetes abstract and concrete types and policies.
- 2 topology modifiers that transform an abstract container based topology into something deployable onto a Kubernetes cluster.
- policies’ modifiers

## Kubernetes modelization - simplified mode
- The same CSAR with Kubernetes dedicated concrete types only
- It can be only used with Kubernetes
- 1 single topology modifier that transform container based topology into something deployable onto a Kubernetes cluster.


## Spark modelization
Deploying and running Spark jobs is now available with the plugin. Il can be realized only with the simplified modelization mode
