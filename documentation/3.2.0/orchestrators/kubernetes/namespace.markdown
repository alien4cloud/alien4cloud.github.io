---
layout: post
title:  Meta-properties in k8s
root: ../../../../
categories: DOCUMENTATION-3.2.0
parent: [orchestrators, kubernetes, kubernetespluginabstractmode]
node_name: Meta-properties in k8s
weight: 4000
---

## Overview

We are now able to easily manage the k8s namespace where the deployment of pods should be landed. In the context of Alien4Cloud, a location of orchestrator corresponds to a k8s namespace. Hence, we can set up the namespace via location. Please go to **Administration** -> **Orchestrators** -> *Select one of the orchestrators* -> **Location(s)** -> **Meta-properties**

![Image1](../../images/kubernetes_walkthrough/namespace.jpg)

We can also give a prefix to a pod via setting up the **K8S_PREFIX** in the application such that all the resources related to this application will be prefixed by this meta-property.

![Image2](../../images/kubernetes_walkthrough/k8s_prefix.jpg)