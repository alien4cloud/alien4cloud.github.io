---
layout: post
title: The 30 min Start Guide!
root: ../
categories: DOCUMENTATION
parent: []
node_name: quickstart
weight: 100
---

{%summary%}{%endsummary%}

This is a step-by-step guide that describes how to build a Virtual Machine containing Alien4Cloud, Cloudify v2 bootstraped on AWS cloud.

# How to Install

##1. Prerequisites:

* Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (Working with version 4.3.26 but older versions might work as well)

* Download and install [Vagrant](https://www.vagrantup.com/downloads.html) (Working with version 1.7.2 but older versions might work as well)

* Install triggers plugin for Vagrant: `vagrant plugin install vagrant-triggers` (Working with version 0.5.0 but older versions might work as well)

* An active AWS account. Make sure you have all the account informations we will need later (user key, access key, key file and key pair)


##2. VM Automated Install:
* Download and unzip the package [vm-alien4cloud-SM25](https://fastconnect.org/owncloud/public.php?service=files&t=e2a17fc56fabf2c141218f5c1fd063a1) (for other version, see on the page footer). As a result, a subdirectory vm-alien4cloud should be created

* Copy your .pem file to the directory `vm-alien4cloud/vm/key`

* Edit the file `vm-alien4cloud/puppet/manifests/install.pp` and set your aws "user key" and "access key" (`user` and `apiKey` parameters), key file name and key pair (`keyFile` and `keyPair` parameters) and finally change `machineNamePrefix` and `managementGroup`.

* Change your working directory: `cd vm-alien4cloud/vm/centos-6`

* Execute the following command to build a new VM: `vagrant up`

* At the first run, vagrant will download the base box which will be used to create the alien4cloud VM, then provision the VM with Puppet. The time needed to create a VM is around 30 minutes and depends on your internet connection speed.

* At the end of the installation, you'll see a message `==> alien4cloud: Notice: Finished catalog run in 1648.89 seconds`. You can then access Alien4Cloud Web interface from a browser on the following address: [http://192.168.32.10:8088](http://192.168.32.10:8088)



##3. Deploy your application

To deploy this new application, just go on `Applications > Deployments` submenu.

[![Configure your deployment](../../images/user_guide/user_guide_topology_template_deploy.png)](../../images/user_guide/user_guide_topology_template_deploy.png)

### Zone A : Select an environment and a cloud

Keep the default environment `Environment` and select your cloud `OpenStackCloud` created above.

### Zone B : Provider properties

Those properties depends on the provider implementation. You usualy have default settings.

### Zone C : Topology required settings

Those basic settings are required for `Compute` nodes.

### Zone D : Cloud resources matching

In this part, you will be able to check matching cloud resources and possible
matching errors. This should not happen if your cloud is well configured.

# Check that your application is up and running

### Runtime view

On this submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Wordpress url](../../images/user_guide/user_guide_topology_template_runtime.png)

### Wordpress url

Go back in the `Application > Informations` submenu to get the Wordpress application url and
test it !

![Wordpress url](../../images/user_guide/user_guide_topology_template_wordpressurl.png)

And voilà !

# How to Uninstall
If you would like to de-provision the VM and the associated cloud created by Alien4Cloud, just execute the following commands:

* Change your working directory: `cd vm-alien4cloud/vm/centos-6`

* Run the following command: `vagrant destroy`

### Older versions

[vm-alien4cloud-SM23](https://fastconnect.org/owncloud/public.php?service=files&t=8c3bc5fabf7fc132f4d8b29f2cffcae4)

[vm-alien4cloud-SM24](https://fastconnect.org/owncloud/public.php?service=files&t=3d2dded7ff0f4a3acea1380eb7f86e33)

[vm-alien4cloud-SM25](https://fastconnect.org/owncloud/public.php?service=files&t=e2a17fc56fabf2c141218f5c1fd063a1)
