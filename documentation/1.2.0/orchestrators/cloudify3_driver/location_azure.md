---
layout: post
title:  Azure
root: ../../../
categories: DOCUMENTATION-1.2.0
parent: [orchestrators, cloudify_3, supported_locations]
node_name: azure
weight: 1000
---

The premium version of the cloudify 3 orchestrator plugin allows you to deploy applications on Azure.

## Configuration
 Note that all the location azure configuration's properties are required.  
 In addition to the base configurations that are DSL and imports, you'll need to provide some informations from your bootstrapped manager (available on your Azure portal, or contact your administrator):

  - __location__: The location in which the cloudify manager is bootstrapped. For now, all the deployed application will be done in that location.
  - __resourceGroup__: The `resource group name` in which your manager is
  - __storageAccount__: The `storage account name` associated to your manager
  - __virtualNetwork__: The `virtual network name` to which the manager is linked.
  - __subnet__: The subnet name on which the manager is connected

It is important to mention that the resources, when deploying an application (virtual machines, volumes, networks,...) will be created in the location provided, as part of the provided resource group,and linked if need to the provided storage account.

## Tosca mapped types
The Azure location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the azure nodes:

 - `alien.cloudify.azure.nodes.Compute` for a linux compute,
 - `alien.cloudify.azure.nodes.WindowsCompute` for a windows compute.

Their configurations required to be familiar with the azure way to describe an image (see  [image reference](https://msdn.microsoft.com/en-us/library/azure/mt163591.aspx#bk_imageref){:target="_blank"} ) and flavor  (see [hardware profile](https://msdn.microsoft.com/en-us/library/azure/mt163591.aspx#bk_hardware){:target="_blank"} )

 <!-- **TODO: screenshoot Compute on demand resource** -->

### Network

#### Public Network
The tosca type `tosca.nodes.Network` can be mapped as a public network `alien.cloudify.azure.nodes.PublicNetwork`.  

#### Private Network
{% warning %}
Not supported yet
{% endwarning %}

### Volumes
{% warning %}
Not supported yet
{% endwarning %}

## Scaling
{% warning %}
For now, Scaling is supported on for a single compute, ie a Compute which is not linked to a network, or doesn't have any volumes attached to.
This should be fixed with the cloudify 3.4 version.
{% endwarning %}

