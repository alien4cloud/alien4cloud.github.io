---
layout: post
title:  ALIEN internal architecture
root: ../
categories: DEVELOPER_GUIDE
parent: []
node_name: internal_arch
weight: 100
---

ALIEN is an AngularJS (front) + Spring (back) web-application. Plugins for ALIEN are managed as singular Spring applications context that all share the same parent context (ALIEN core application context). Each plugin uses it's own classloader to ensure that they don't collide with each others. Here also all of the plugin's classloaders have a common parent classloader which is ALIEN's core classloader.

[![Alien High Level Internal Software Architecture](../images/admin_guide/AlienHighLevelSwArch.jpg)](../images/admin_guide/AlienHighLevelSwArch.jpg)
