---
layout: post
title:  Portable modeling
root: ../../../../
categories: DOCUMENTATION-3.4.0
parent: [orchestrators, kubernetes]
node_name: kubernetespluginabstractmode
weight: 1000
---

## Kubernetes plugin

The [kubernetes plugin](https://github.com/alien4cloud/alien4cloud-kubernetes-plugin) comes with:

- A CSAR with dedicated Kubernetes abstract and concrete types and policies.
- 2 topology modifiers that transform an abstract container based topology into something deployable onto a Kubernetes cluster.
- policies' modifiers

The plugins offers the following features:

- you can deploy containers into [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/) (group of containers that are deployed as a single unit).
- you can connect container between each others: we use [kubernetes services](https://kubernetes.io/docs/concepts/services-networking/service/) to expose endpoint.
- you can attach a volume to several containers of the same unit. For the moment, the following volume types are managed:
  - [emptyDir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)
  - [hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath)
  - [awsElasticBlockStore](https://kubernetes.io/docs/concepts/storage/volumes/#awselasticblockstore)
  - [persistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/volumes/#persistentvolumeclaim)
- you can use the following policies:
  - **AntiAffinityLabel**: this policy will help you ensure some given pods are not colocated (for example if you want some pods not to be deployed on the same [node](https://kubernetes.io/docs/concepts/architecture/nodes/)).
  - **NodeAffinityLabel**: this policy can be used to ensure a pod will be deployed on a specific node.
  - **AutoscalingPolicy**: this policy will create an [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/).
