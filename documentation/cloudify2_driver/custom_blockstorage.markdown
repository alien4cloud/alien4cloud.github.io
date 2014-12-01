---
layout: post
title:  Customised Blockstorage
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index, cloudify_2_blockstorage]
node_name: cloudify_2_blockstorage_custom
weight: 200
---

Some times you might need to provide your own way to manage the storage lifecycle. This is for example if you have a custom way to create, attach, format, mount it. For that, you can provide every node of type `tosca.nodes.BlockStorage` with the `lifcycle` operation **`create`** and **`configure`**. And for the destroy process, you'll use the **`delete`** operation.

{% highlight yaml %}
alien.test.nodes.UbuntuBlockStorage:
  derived_from: tosca.nodes.BlockStorage
  description: >
    A custom storage for Ubuntu OS.
  interfaces:
    Standard:
      create: scripts/createAttach.groovy
      configure: scripts/formatMount.groovy
      delete: scripts/unmountDelete.groovy
  [...]
{% endhighlight %}

## Create and attach ##
Provide your custom way to **create** and **attach** the storage to your compute in the **`create`** TOSCA Standard's operation. 

### Arguments ###

{: .table .table-bordered}
| Argument | Access | Description |
|:---------|:-------|:------------|
| *volumeId*  | `args[0]` |  if provided, the Id of the volume to attach. This might be null |
| *storageTemplateId*  | `args[1]` |  The Id of the storage template to use to create a volume, base on the size provided. This is never null. |


### Return ###
The script must return a map <String --> String> containing the keys:  

- **volumeId**: id of the created (or provided) volume,
- **device**: device name on which the volume is attached 

### Example ###

{% highlight groovy %}
import org.cloudifysource.utilitydomain.context.ServiceContextFactory

def context = ServiceContextFactory.getServiceContext()

//getting args
def volumeId = args[0]
def storageTemplateId = args[1]

def device = "/dev/vdb"

//Creating the volume
if(volumeId == null){
	volumeId = context.storage.createVolume(storageTemplateId)
}

//attaching the volume
context.storage.attachVolume(volumeId, device)

//return the map
return [volumeId: volumeId, device:device]
{% endhighlight %}

## Format and mount ##
Provide your custom way to **format** and **mount** the storage on your compute in the **`configure`** TOSCA Standard's operation. 

### Arguments ###

{: .table .table-bordered}
| Argument | Access | Description |
|:---------|:-------|:------------|
| *device*  | `args[0]` |  device name on which the volume is attached |

### Return ###
The script must return a string value:  

- **storagePath**: path of the directory where the device is mounted on the compute 


### Example ###

{% highlight groovy %}
import org.cloudifysource.utilitydomain.context.ServiceContextFactory
def context = ServiceContextFactory.getServiceContext()

//getting the args
def device = args[0]

def storagePath = "/mountTest"
denew AntBuilder().sequential {
  chmod(dir:"${context.serviceDirectory}/scripts", perm:"+x", includes:"*.sh")
  exec(executable: "${context.serviceDirectory}/scripts/formatStorage.sh",failonerror: "true") {
    arg(value:"${device}")			
  }
  mkdir(dir: storagePath)
  exec(executable: "${context.serviceDirectory}/scripts/mountStorage.sh",failonerror: "true") {
    arg(value:"${device}")			
    arg(value:"${storagePath}")			
  }
}

//return the mounted path name
return storagePath
{% endhighlight %}


## Unmount and delete ##
Provide your custom way to **unmount** and/or **delete** the storage in the **`delete`** TOSCA Standard's operation. 

### Arguments ###

{: .table .table-bordered}
| Argument | Access | Description |
|:---------|:-------|:------------|
| *volumeId*  | `args[0]` |  if provided, the Id of the volume to attach. This is never null. |
| *device*  | `args[0]` |  device name on which the volume is attached. |

### Return ###
No need to return anything for this script.  


### Example ###

{% highlight groovy %}
import org.cloudifysource.utilitydomain.context.ServiceContextFactory

def context = ServiceContextFactory.getServiceContext()

//getting args
def volumeId = args[0]
def device = args[1]

println "Storage volume: volumeId <${volumeId}>, device <${device}>"
println "deletable-unmountDelete.groovy: unmounting storage volume... "
context.storage.unmount(device)
println "deletable-unmountDelete.groovy: detaching storage volume... "
context.storage.detachVolume(volumeId) 
{% endhighlight %}