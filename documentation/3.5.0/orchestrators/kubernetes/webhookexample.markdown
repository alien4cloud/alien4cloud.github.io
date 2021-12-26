---
layout: post
title:  Webhook
root: ../../../../
categories: DOCUMENTATION-3.5.0
parent: [orchestrators, kubernetes, kubernetespluginconcretemode]
node_name: webhook
weight: 3000
---
{% summary %}{% endsummary %}
# Prerequisites

{%info%}
In this page, we will use AWS features so you will need a Kubernetes cluster integrated with a AWS account.
However if you want to deploy a basic Kubernetes cluster you can use our TOSCA types based on kubeadm which can be found [here](https://github.com/alien4cloud/csar-public-library/tree/develop/org/alien4cloud/kubernetes/kubeadm)
{%endinfo%}

To deploy onto Kubernetes cluster through ALIEN, you will need:

- A Kubernetes cluster deployed on AWS with AWS extensions (ability to provision EBS) with at least 2 nodes
- An alien with:
  - the kubernetes plugin with **kubernetes-adapter-modifier** set to the location
  - the alien4cloud-k8s-spark-jobs plugin withe **k8s-spark-jobs-modifier** set to location, a runnable distribution of Spark 2.3 or above if you want to use spark jobs
  - the http repository plugin (the samples use an http repository)

## Topology modifiers

You'll need to setup modifiers on your location. On the location screen, in the **Topology Modifier** tab:


- add a **webhook-generator** modifier at the phase `post-matched-node-setup` after the **k8s-spark-jobs-modifier** if you use spark, after **kubernetes-adapter-modifier** if you are not using Spark on Kubernetes.
- add a **runner-accesscontrol-generator** modifier at the phase `post-matched-node-setup` after the **k8s-spark-jobs-modifier**.
- add a **pseudoresource-cleaner** modifier at the phase `post-matched-node-setup` after the ** 	yorc-wf-simplifier-modifier**.



The modifiers will generate webhook on the Kubernetes cluster.

## Pseudo resources design

When applying **PseudoResourcePolicy** policy on a **KubeDeployment** node, there will no created Kubernetes deployment when the application is installed.

It can be used for launching pods from a pod. It will not be created at the A4C application deployment.

Just setup the policy **PseudoResourcePolicy** on the nodes you don't want to deployed by A4C but from inner pods of the application.

![Topology](../../images/3.4.0/orchestrators/kubernetes/webhook_1.png)

# Resource and priority assignement

When specifying a **KubeNamespace** node type in the topology, Kubernetes priorityClass and resources requests and limits (CPU, RAM) can be deleted or let


![Topology](../../images/3.4.0/orchestrators/kubernetes/webhook_2.png)


The priorityClass must be specified in the alien4cloud configuration file in the webhook plugin configuration :
```
webhook:
  prioritesk8s:
    location1: priority1
    location2: priority2
  removeResources: true
```

For exemple, vhen deploying an application to the location **location1**, the deployed will be assigned to priorityClass **priority1**.

The priorityClass **priority1** must be predefined on the Kubernetes cluster.


When specifying requests and limits resources, they can be deleted if the location has a meta property **Bac à sable** set to **true** if the **removeResources** parameter is set to true to alien4cloud configuration file .

It can be useful if you want to priorize Kubernetes resources deployed. For instance, you can define a production location and a test location. 







