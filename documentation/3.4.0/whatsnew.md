---
layout: post
title: New in 3.4.0
root: ../
categories: DOCUMENTATION-3.4.0
parent: []
node_name: whatsnew
weight: 75
published: true
---

{%summary%}{%endsummary%}




# Ability to define suggestions by plugins
It is now possible to inject suggestions to help end-user when typing values in A4C UI with a plugin.
It can be used in **topology edition**, in deployment preparation, ...
The [git plugin sample project](https://github.com/alien4cloud/alien4cloud-plugin-sample/tree/3.0.x/alien4cloud-plugin-sample-suggestions) illustrates the way it can be done. 


# Workflow schedule deployment inputs
Runtime schedule policies can be now set in deployment preparation phase in Full UI and wizard.
Sample suggestions for cron expressions at deployment preparation phase are set.
It is also possible to set plugin paramaters to interact with monitoring tools Prometheus and Zabbix.


# A4C Spray
Spray is now available for deploying **alien4cloud** on Kubernetes engine.
Docker image with versions 3.2.0 and 3.3.0 are now available on [Alien4cloud dockerHub](https://hub.docker.com/r/alien4cloud/alien4cloud)
The set of Ansible scripts is available on [A4C Spray - k8s ](https://github.com/alien4cloud/alien4cloud-spray/tree/features/ALIEN-3663-install-on-k8s) project.