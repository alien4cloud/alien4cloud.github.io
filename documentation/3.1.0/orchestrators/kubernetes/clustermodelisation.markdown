---
layout: post
title:  Kubernetes Cluster parameter
root: ../../../../
categories: DOCUMENTATION-3.1.0
parent: [orchestrators, kubernetes, kubernetespluginconcretemode]
node_name: clusterk8s
weight: 1000
---

## Prerequisites

{%info%}
In this page, we will use AWS features so you will need a Kubernetes cluster integrated with a AWS account.
However if you want to deploy a basic Kubernetes cluster you can use our TOSCA types based on kubeadm which can be found [here](https://github.com/alien4cloud/csar-public-library/tree/develop/org/alien4cloud/kubernetes/kubeadm)
{%endinfo%}

To deploy onto Kubernetes cluster through ALIEN, you will need:

- A Kubernetes cluster deployed on AWS with AWS extensions (ability to provision EBS) with at least 2 nodes
- An alien with:
  - the kubernetes plugin
  - the http repository plugin (the samples use an http repository)
  - the following archives imported from GIT:
    - https://github.com/alien4cloud/tosca-normative-types.git branch **3.0.0-SM6**
    - https://github.com/alien4cloud/alien4cloud-extended-types.git branch **3.0.0-SM6** folder **alien-base-types**
    - https://github.com/alien4cloud/docker-tosca-types.git **3.0.0-SM6** folder **docker-types**

## Location configuration

You'll need to setup a location in order to be able to deploy onto a K8S cluster. Let's create an AWS location on a Yorc orchestrator

## Client Kubernetes configuration

An org.alien4cloud.kubernetes.api.types.nodes.KubeCluster service has to be created to refrence the K8S cluster config file
![KubeCluster](../../images/3.1.0/orchestrators/kubernetes/kubecluster_1.png)

In the instance tab, the property "config" has to be set to the content of the K8S cluster config file.
External files cannot be referenced to this content.

**config** property content:

{% highlight yaml %}
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: <content of certificate authority>
    server: <URL of K8S cluster>
  name: kubernetes
contexts:
- context:
    cluster: <cluster name>
    user: <kubernetes client user>
  name: <cluster name>
current-context: <current context>
kind: Config
preferences: {}
users:
- name: <kubernetes client user>
  user:
    client-certificate-data: <client certificate content>
    client-key-data: <client key content>
{% endhighlight %}

This service has to be activated to the location to deploy onto the K8S cluster

The property node_address is not mandatory. It is used to built the URL of a Kubernetes service when there are services to created. It the external addresse of one of the Kubernetes cluster node





