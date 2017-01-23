---
layout: post
title:  Azure
root: ../../../
categories: DOCUMENTATION-1.3.0
parent: [orchestrators, cloudify_3, supported_locations]
node_name: azure
weight: 1000
---

{%info%}
<h5>Premium feature</h5>
Azure is a Premium feature.
{%endinfo%}

## Configuration
The configuration of the location is done while configuring the orchestrator, before or after activation.
Note that for the azure location, some properties are required.

{% info %}
In addition to the base configuration that are DSL and imports, you'll need to provide some informations from your bootstrapped manager (available on your Azure portal, or contact your administrator):

  - __location__: The location in which the cloudify manager is bootstrapped (i.e: westeurope, northeurope, eastus, etc). For now, all the deployed application will be done in that location.
  - __resourceGroup__: The `resource group name` in which your manager is.
  - __virtualNetwork__: The `virtual network name` to which the manager is linked.
  - __subnet__: The `subnet name` on which the manager is connected.
{% endinfo %}

Here are the minimum required properties you must configure before enable the location
[![Azure location configuration][config_location_azure]][config_location_azure]

## Tosca mapped types
The Azure location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the azure nodes:

 - `alien.cloudify.azure.nodes.Compute` for a linux compute,
 - `alien.cloudify.azure.nodes.WindowsCompute` for a windows compute.

Their configurations required to be familiar with the azure way to describe an image (see  [image reference](https://msdn.microsoft.com/en-us/library/azure/mt163591.aspx#bk_imageref){:target="_blank"} ) and flavor  (see [hardware profile](https://msdn.microsoft.com/en-us/library/azure/mt163591.aspx#bk_hardware){:target="_blank"} )

{% info %}
Note that if the property `storage_account_name` is not set on the compute node, Alien4Cloud will create a temporary Storage Account to store the os-disk files.
This storage account will be deleted when undeploying the application.
{% endinfo %}

To help you getting started with Azure, here a step by step instructions to quickly add an Ubuntu and a Windows compute resources:

#### Configuring an Ubuntu compute resource

1. Go to the your orchestrator locations screen. You should see a screen like this:
[![Azure resource configuration][resource_configuration]][resource_configuration]

2. Select the resource type `alien.cloudify.azure.nodes.Image` in the combox box and click the add button.

3. Then set the properties as in the screenshot:
[![Configure Ubuntu image][resource_image_ubuntu]][resource_image_ubuntu]

4. Next step is to set an Ubuntu image id like the following:
[![Configure Ubuntu image id][resource_image_ubuntu_id]][resource_image_ubuntu_id]

5. Add a `alien.cloudify.azure.nodes.hardwareProfile` and configure it like the following:
[![Configure hardware profile][resource_hardware_medium]][resource_hardware_medium]

6. Go to the On demand tab and click the auto_config button 

7. You should notice that the user property is mandatory. Let's set a `ubuntu` user.
[![Azure auto-config][on_demand_resource_auto_config]][on_demand_resource_auto_config]

8.  Make sure you check the `pubkey auth only` checkbox.
[![Pubkey auth only checkbox][on_demand_resource_ubuntu_pubkey_auth_only]][on_demand_resource_ubuntu_pubkey_auth_only]

9. Let's configure a compute which use an public key auth only. Click the configuration property of the Compute node and add a public key as in the screenshot.
[![User configuration][on_demand_resource_ubuntu_user_config]][on_demand_resource_ubuntu_user_config]
- The `path` property specifies the full path on the created VM where ssh public key is stored.
- The `keyData` property is the SSH public key certifiate used to authenticate with the VM through ssh. The key needs to be at least 2048-bit and in ssh-rsa format.

{% info %}
The `keyData` value must correspond to the private key file that the manager will use to connect to the target VM.  
By default the manager will use a agent key defined during bootstrap. You can override the private key that the manager will use by overriding the property _cloudify_agent > key_ on the compute's node. This property specifies a path to the private key that will be used to connect to the host. Make sure that the path to the key exist on the manager.
  
You can use the following to get the keyData for Azure: `ssh-keygen -y -f <your private keyfile>`
{% endinfo %}

#### Configuring a Windows compute resource

Let's configure a Windows compute resource for Azure using a user/password.

[![Windows compute configuration][ondemand_resource_windows]][ondemand_resource_windows]

[![Windows image id configuration][ondemand_resource_windows_imageid]][ondemand_resource_windows_imageid]

### Networks

#### Public Network
Exposed as the location type a public network `alien.cloudify.azure.nodes.PublicNetwork`, which will result to the attribution of public ip to the linked resource (compute).

#### Private Network
The tosca type `tosca.nodes.Network` can also be mapped as a private network using a location node of type `alien.cloudify.azure.nodes.PrivateNetwork`.

### Volumes

The tosca type `tosca.nodes.BlockStorage` can be mapped as two types of volumes:

#### Deletable volumes
Exposed as the location type `alien.cloudify.azure.nodes.DeletableVolume`, this is a volume that will ALWAYS be DELETED when undeploying the application, leading therefore to the lost of all data stored on it.
{% info %}
If the property `storage_account_name` is not set. Alien4Cloud will create a temporary Storage Account to store the datadisk files.
This storage account will be deleted when undeploying the application.
{% endinfo %}

#### Reusable volumes
Exposed as the location type `alien.cloudify.azure.nodes.Volume`, this is a volume that will not be deleted at the end of the application life-cycle. It can therefore, between two deployment of the same application on the same environment and location, be re-used and attached to a compute, rending accessible the data previously stored on it.
{% info %}
When using reusable volumes, the property `storage_account_name` is mandatory.
The storage account won't be deleted when undeploying the application and it will keep the datadisk file.
{% endinfo %}

## Scaling
Scaling is now supported with Azure.  
When scaling a compute it will scale all resources linked to the compute (the Compute itself, the volumes, the IPs and nodes that are hosted on the compute).

{% warning %}
Known scaling limitations due to the combination of 2 contraints using Cloudify's scaling group:

  - One node can only belongs to one group at a time
  - Storage Account nodes must be part of the scaling group.

When having multiple scalable computes in a single application, each compute and its volumes must be place inside a distinct storage account from the each other.  
For instance:

- Scalable compute A has 2 Volumes in storage account S1. 
- Scalable compute B must be in a different storage account from S1.
- Scalable compute C can have its osdisk stored in storage account S3 and its volumes in different storage accounts S3' and S3'' as long as it is different than the ones used by compute A and B and their volumes.
{% endwarning %}

[config_location_azure]: ../../images/cloudify3_driver/config_location_azure.png  "Azure location configuration"
[resource_configuration]: ../../images/cloudify3_driver/azure_resource_configuration.png "Azure Resource configuration"
[resource_image_ubuntu]: ../../images/cloudify3_driver/azure_resource_image_ubuntu.png "Configure Ubuntu image"
[resource_image_ubuntu_id]: ../../images/cloudify3_driver/azure_resource_image_ubuntu_id.png "Configure Ubuntu image id"
[resource_hardware_medium]: ../../images/cloudify3_driver/azure_resource_hardware_medium.png "Configure hardware profile"
[on_demand_resource_auto_config]: ../../images/cloudify3_driver/azure_ondemand_resource_auto_config.png "Azure auto-config"
[on_demand_resource_ubuntu_user_config]: ../../images/cloudify3_driver/azure_ondemand_resource_ubuntu_user_config.png "User configuration"
[on_demand_resource_ubuntu_pubkey_auth_only]: ../../images/cloudify3_driver/azure_ondemand_resource_ubuntu_pubkey_auth_only.png "Pubkey auth only checkbox"
[ondemand_resource_windows]: ../../images/cloudify3_driver/azure_ondemand_resource_windows.png "Windows compute configuration"
[ondemand_resource_windows_imageid]: ../../images/cloudify3_driver/azure_ondemand_resource_windows_imageid.png "Windows image id configuration"
