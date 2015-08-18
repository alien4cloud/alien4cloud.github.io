---
layout: post
title:  Defaut Blockstorage
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [cloudify_2_index, cloudify_2_blockstorage]
node_name: cloudify_2_blockstorage_default
weight: 100
---

Here are informations about the default normative type Blockstorage support.

## `tosca.nodes.BlockStorage` type ##
You should add the node type `tosca.nodes.BlockStorage` to your topology, and attach it to a compute node.

###Node properties ###

#### volumeId ####
The provider can attach to a compute a **`created and formatted`** storage. Thus, you need to provide it for the ID of the volume you would like to attach, through the node property **`volumeId`**.

#### size ####
If no volumeId is provided, the provider will check for the size property, and use it to match a storage compute configured in the used cloud. Then, it will create a new volume, and format it ( default file system is `ext4` ).

## How it works ##

### provider configuration ###
If you have storage templates defined in your Clouify cloud's file, you can configure them in the provider.

### Flow ###
First you should add a BlockStorage node to your topology, attach it to a Compute node, and fill in if necessary the properties `volumeId` and `size`.  
When the provider process the topology for deployment,

**If the `volumeId` is defined**, the provider will:

- try to locate the storage
- attach it to the compute
- mount it to the `/mountedStorage` directory.

**Else, if the `size` is defined**, it will:

- Try to determin a storage template matching the exact given size.
- Create a volume based on the choosen template
- Format it using `ext4` file system
- attach it to the compute
- mount it to the `/mountedStorage` directory.  

When the volume is created, `his Id is updated in the deployed topology`, so that it could be reused fro the next deployment.

{%note%}
If neither the `volumeId` nor the `size` are defined, the provider will use the storage template difined with the lowest size to create the volume.
{%endnote%}

When undeploying the application, the provider will:

- unmount the strorage
- detach it from the compute node to set free the resource. Note that the data **are not deleted**.

### Working with scaling policy ###
If you are deploying the application with more than one instance, you can provide comma separated volumes Ids, ordered by instances id.  
Let take an example for illustration: deploying with the following configuations: 
{% highlight yaml %}
minInstances: 1
maxInstance: 3
initialInstances: 3
volumeId: a,b,c
{% endhighlight %}
Then, the `instance 1,2,3` will use respectively the Ids `a,b,c`. As for the `instance 4`, if a size is specified, it will be used to find the matching storage template (if not the default template is used) and create a volume (`d`). After then, the volumeId property will be updated to `a,b,c,d`.

{%note%}
As stated previously, a storage created with the type `tosca.nodes.BlockStorage` is not deleted when undeploying the concerned application. However, if you want a storage auto-deletable, you can use the type `alien.nodes.DeletableBlockStorage`. That will ensure that the volume is destroyed, but of course the topology won't be updated with the created volumeId.
{%endnote%}