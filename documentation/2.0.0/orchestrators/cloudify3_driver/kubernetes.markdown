---
layout: post
title:  Kubernetes (Beta)
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [orchestrators, cloudify_3]
node_name: cloudify_3_kubernetes
weight: 5000
---

This page helps you configure and deploy a hybrid nodecellar application on Kubnernetes through Alien4Cloud/Cloudify.

## Prerequisites ## 

- A Kubernetes cluster
- A Cloudify Manager
- The Cloudify Manager has a [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-binary-via-curl) installed on it.
- The Cloudify manager must have access to Kubernetes REST API.
- The Kubernetes nodes should eventually be able to communication with Cloudify's agents. In our case, the Nodecellar node deployed on Kubernetes shouls be able to contact its MongoDB database deployed on Openstack through the port 3000.

{% info %}
You can deploy a Kubernetes Cluster with Alien4Cloud using our components:

- [Kubernetes components](https://github.com/alien4cloud/samples/tree/master/kubernetes)
- [Kubernetes topology](https://github.com/alien4cloud/samples/tree/master/topology-kubernetes)
{% endinfo %}

## Configurations ##

When [configuring your orchestrator](#/documentation/2.0.0/orchestrators/cloudify3_driver/install_config.html), before enabling it, configure the Kubernetes URL and port.

[![Kubernetes orchestrator configuration][k8s_orchestrator_config]][k8s_orchestrator_config]

## Upload TOSCA Components ##

In order to build our hybrid nodecellar topology, you will need to import some TOSCA components.
Follow the [import from Git location](#/documentation/2.0.0/user_guide/catalog_type_upload.html) instructions to import the [docker-tosca-types](https://github.com/alien4cloud/docker-tosca-types) into Alien4Cloud.

Once uploaded, your Alien4Cloud will contains additional types:

- docker-types 
- nodecellar-docker-types (with the 2 node types `alien.nodes.Application.Docker.Nodecellar` and `alien.nodes.Application.Docker.Mongo`)
- and 2 topology templates: `NodecellarDocker` and `NodecellarDockerHybrid`

{% warning %}
Node that the `NodecellarDocker` won't deploy right now since the Kubernetes plugin do not yet support volumes.
But you can modify the topology by removing the 2 volumes and deploy the 2 containers.
{% endwarning %}

## Deploy the Hybrid Topology ##

Create a [new application](#/documentation/2.0.0/user_guide/application_management.html) using the `NodecellarDockerHybrid` topology template.

[![Kubernetes create application][k8s_create_application]][k8s_create_application]

Finally, you just have to clic the `deploy` button and wait for the deployment to complete.

[![Kubernetes deployed application][k8s_deployed]][k8s_deployed]

And if you have access to the Kubernetes webui, you can check that you have a nodecellar deployed on it

[![Kubernetes UI][k8s_ui]][k8s_ui]

[k8s_orchestrator_config]: ../../images/cloudify3_driver/k8s_orchestrator_config.png  "Kubernetes orchestrator configuration"
[k8s_create_application]: ../../images/cloudify3_driver/k8s_create_application.png  "Kubernetes create application"
[k8s_deployed]: ../../images/cloudify3_driver/k8s_deployed.png  "Kubernetes deployed application"
[k8s_ui]: ../../images/cloudify3_driver/k8s_ui.png  "Kubernetes UI"
