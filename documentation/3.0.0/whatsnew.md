---
layout: post
title: New in 3.0.0
root: ../
categories: DOCUMENTATION-3.0.0
parent: []
node_name: whatsnew
weight: 75
published: true
---

{%summary%}{%endsummary%}

### Opensource
We no longer have a premium distribution for A4C : all previously premium components (plugins, distributions ...) have been opensourced.

### Elastisearch upgrade
Alien4Cloud now supports Elasticsearch version 6.6.2.
Data migration guide is available on [Github](https://github.com/alien4cloud/alien4cloud-data-migration-scripts/tree/develop).

### Yorc Orchestrator integration
This version no longer uses Cloudidy as Orchestrator.
We have focused on strongly integrating with [Yorc](https://github.com/ystia/yorc) Orchestrator.

### Wizard4Cloud
This version includes a new simplified UI witch mainly provides a step by step application creation wizard.
The [following guide](#/documentation/3.0.0/user_guide/wizard.html) describes all of this new UI's features.

### A4C Spray
To bootstrap a full A4C stack (including A4C, Yorc, Consul and so on ...), a set of Ansible scripts is available on [A4C Spray](https://github.com/alien4cloud/alien4cloud-spray/tree/develop) project.
