---
layout: post
title:  Customised Blockstorage
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index, cloudify_2_blockstorage]
node_name: cloudify_2_blockstorage_custom
weight: 200
---
{% warning %}
Note that the driver only supports groovy scripts for all these scripts.  
{% endwarning %}

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

### Environment variables ###
In addition to the provided base node environment variables [SELF, HOST, SERVICE_NAME](#/documentation/1.0.0/cloudify2_driver/inputs_env_vars.html):

{: .table .table-bordered}
| Keyword |  Description |
|:---------|:-------|
| volumeId  |  if provided, the Id of the volume to attach. This might be null |
| storageTemplate |  The Id of the storage template to use to create a volume, base on the size provided. This is never null. |


### Return ###
The script must return a map <String --> String> containing the keys:  

- **volumeId**: id of the created (or provided) volume,
- **device**: device name on which the volume is attached

### Example ###

{% highlight groovy %}
import org.cloudifysource.utilitydomain.context.ServiceContextFactory

def context = ServiceContextFactory.getServiceContext()
def device = "/dev/vdb"

//Creating the volume
if(volumeId == null){
	volumeId = context.storage.createVolume(storageTemplate)
}

//attaching the volume
context.storage.attachVolume(volumeId, device)

//return the map
return [volumeId: volumeId, device:device]
{% endhighlight %}

## Format and mount ##
Provide your custom way to **format** and **mount** the storage on your compute in the **`configure`** TOSCA Standard's operation.

### Environment variables ###
In addition to the provided base node environment variables [SELF, HOST, SERVICE_NAME](#/documentation/1.0.0/cloudify2_driver/inputs_env_vars.html):

{: .table .table-bordered}
| Keyword | Description |
|:---------|:-------|
| device  |  device name on which the volume is attached |

### Return ###
The script must return a string value:  

- **location**: location path where the device is mounted on the compute


### Example ###

{% highlight groovy %}
import org.cloudifysource.utilitydomain.context.ServiceContextFactory
def context = ServiceContextFactory.getServiceContext()
def location = "/mountTest"
denew AntBuilder().sequential {
  chmod(dir:"${context.serviceDirectory}/scripts", perm:"+x", includes:"*.sh")
  exec(executable: "${context.serviceDirectory}/scripts/formatStorage.sh",failonerror: "true") {
    arg(value:"${device}")
  }
  mkdir(dir: location)
  exec(executable: "${context.serviceDirectory}/scripts/mountStorage.sh",failonerror: "true") {
    arg(value:"${device}")
    arg(value:"${location}")
  }
}

//return the mounted path name
return location
{% endhighlight %}


## Unmount and delete ##
Provide your custom way to **unmount** and/or **delete** the storage in the **`delete`** TOSCA Standard's operation.

### Environment variables ###
In addition to the provided base node environment variables [SELF, HOST, SERVICE_NAME](#/documentation/1.0.0/cloudify2_driver/inputs_env_vars.html):

{: .table .table-bordered}
| Keyword |  Description |
|:---------|:-------|
| volumeId  |  if provided, the Id of the attached volume. |
| device  |  device name on which the volume is attached |

### Return ###
No need to return anything for this script.  


### Example ###

{% highlight groovy %}
import org.cloudifysource.utilitydomain.context.ServiceContextFactory
def context = ServiceContextFactory.getServiceContext()

println "Storage volume: volumeId <${volumeId}>, device <${device}>"
println "deletable-unmountDelete.groovy: unmounting storage volume... "
context.storage.unmount(device)
println "deletable-unmountDelete.groovy: detaching storage volume... "
context.storage.detachVolume(volumeId)
{% endhighlight %}
