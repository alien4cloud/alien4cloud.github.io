---
layout: post
title:  Blockstorage
categories: CLOUDIFY2_DRIVER
parent:  none
weight: 20000
root: ../
---

Here are informations about blockstorage support.
  
## `tosca.nodes.BlockStorage` type ##
You should add the node type `tosca.nodes.BlockStorage` to your topology, and attach it to a compute node.

###Node properties ###

#### volumeId ####
The driver can attach to a compute a **`created and formatted`** storage. Thus, you need to provide it for the ID of the volume you would like to attach, through the (mandatory) node property **`volumeId`**.

#### size ####
If no volumeId is provided, the driver will check for the size property, and use it to match a storage compute defined in the used cloud. Then, it will create a new volume, and format it ( default file system is `ext4` ).

## How it works ##

### Driver configuration ###
If you have storage templates defined in your Clouify cloud's file, you can configure them in the driver.

### Flow ###
First you should add a BlockStorage node to your topology, attach it to a Compute node, and fill in the `volumeId` property.  
When the driver process the topology for deployment, 

**If the `volumeId` is define**, the driver will:

- try to locate the storage
- attach it to the compute
- mount it to the `/mountedStorage` directory. 

**Else, if the `size` is defined**, it will: 

- Try to determin a storage template matching the exact given size.
- Create a volume based on the choosen template
- Format it using `ext4` file system
- attach it to the compute
- mount it to the `/mountedStorage` directory. 

{%warning%}
If neither the `volumeId` nor the `size` are defined, the deployment fails.
{%endwarning%} 

When undeploying the application, the driver will:

- unmount the strorage
- detach it from the compute node to set free the resource. Note that the data **are not deleted**.

{%info%}
In the second case (when volumeId is not provided), a volume is created, but not destroyed at the end. If you want to reuse it, you have to check for its Id on cloudify UI or logs.  
We'll make that Id available to A4C UI user in a planified feature. 
{%endinfo%}