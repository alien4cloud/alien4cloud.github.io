---
layout: post
title:  PaaS provider plugins
root: ../
categories: DEVELOPER_GUIDE
parent: []
node_name: plugin_paas_provider
weight: 400
---

ALIEN is not responsible for actual deployments of the defined topologies. It delegates the deployment and orchestration of topologies to PaaS providers.

A PaaS provider plugin is responsible for translation of ALIEN's topology to a topology/blueprint/recipe that can be understood by the actual orchestration tool that it aims to support and to manage deployments/undeployments and monitoring connectivity to ALIEN.
