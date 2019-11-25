---
layout: post
title:  Prerequisites
root: ../../../
categories: DOCUMENTATION-2.2.0
parent: [orchestrators, marathon_driver]
node_name: marathon_prequisites
weight: 1000
---

You can start orchestrating containers with the Marathon plugin in just a few simple steps.

To operate the plugin, you will need a Mesos cluster running Marathon. You can use an already existing cluster or let Alien4Cloud do all the heavy-lifting and setup one for you.

Note that the plugin has been tested only on clusters running on EC2 or Openstack but should work with other IaaS as well as on a bare metal infrastructure.

## Setting up a Marathon + Mesos cluster using Alien

We modeled Mesos, Marathon, the Docker engine and other useful components into TOSCA node types. You can create your own custom Mesos TOSCA composition or use one of the provided templates in the [mesos-tosca-types repository](https://github.com/alien4cloud/mesos-tosca-blueprints).

To deploy the cluster, we currently leverage the Cloudify orchestrator. Supported distributions are :

- Ubuntu 14.04
- Debian 7 (wheezy)
- RedHat 6.2, 7.1
- CentOS 6.2, 7.1
{% warning %}
Marathon requires Java8+. For Ubuntu 14.04, we use unofficial third-party repositories from webupd8team to install Oracle's JDK - use it at your own risk.
{% endwarning %}

To deploy a Marathon cluster with Alien, assuming you already have a Cloudify orchestrator configured, follow this steps.

### Import TOSCA definitions for Mesos / Marathon

Import the following CSARs into Alien using the [GIT importer](#/documentation/2.2.0/user_guide/catalog_type_upload.html):

- The `docker-engine` archive, from the [samples repository](https://github.com/alien4cloud/samples) *(recommended version: master)*
- The `mesos-types` archive, from the [mesos-tosca-types repository](https://github.com/alien4cloud/mesos-tosca-blueprints) *(recommended version: 1.2.0)*
- The `docker-types`archive, from the [docker-tosca-types repository](https://github.com/alien4cloud/docker-tosca-types) *(recommended version: 1.1.0*).
Those are not necessary to setup the cluster but are required by the plugin, so you might as well install them now too.

### Create an Alien application for your cluster

[Create your own](#/documentation/2.2.0/user_guide/topology_editor_overview.html) custom Mesos TOSCA composition or use one of the templates present in the [mesos-tosca-types repository](https://github.com/alien4cloud/mesos-tosca-blueprints). Note that if your IaaS doesn't automatically assigns public IPs you'll have to add a public network to your topology.

We recommend using our latest template, [MarathonRexray](https://github.com/alien4cloud/mesos-tosca-blueprints/blob/1.2.0/topology-marathon-rexray/marathon-rexray-template.yml), which features service-discovery and external storage.

### Configure the cluster using the MarathonRexray template

The cluster designed with our template is ready to use. It provides service-discovery with MesosDNS & MarathonLB as well as external storage with REX-Ray.

#### Scaling and high availability

You can configure the compute nodes' `scalable` capabilities to fit your needs.

- Increasing the `default_instances` property of the *MasterCompute* node will **automatically** enable high availability.
- Increasing the `default_instances` property of the *SlaveCompute* nodes will add more slaves to your cluster. If the *SlaveCompute* also host a *MesosDNS* component, it will enable high availability for the cluster's DNS too.

{% note %}
Once the cluster is deployed, you can still adjust the number of slaves dynamically by using the **scale** button in the Runtime view.
{% endnote %}

#### Configuring REX-Ray

REX-Ray's configuration is required as a Topology Input: Alien will request it from you upon deployment.

{% warning %}
Both libStorage and REX-Ray use a YAML file for configuration. See their [documentation](https://rexray.readthedocs.io/en/stable/user-guide/config/#advanced-configuration) for more info.
To simplify things, we scripted REX-Ray clients' configuration and provided a template for libStorage's configuration - the *RexrayServer* node in our template. Remember that in order to operate, libStorage needs your IAAS credentials.

libStorage only supports a few storage providers at the moment. You can review available providers [here](http://libstorage.readthedocs.io/en/stable/user-guide/storage-providers/).
{% endwarning %}

In the **Deployments** View, go to the **Inputs** tab to configure the REX-Ray cluster:

- fill the `storage-provider` input property with the storage provider of your choosing. For example, if your going with Amazon's Elastic Block Storage service, use `ebs`.
- upload libStorage's configuration file using the `rexray_server_config` input artifact. For EBS, you can use the sample below - just update it with your AWS credentials at the end. For other providers, follow libStorage's [documentation](http://libstorage.readthedocs.io/en/stable/user-guide/storage-providers/).
{% highlight yaml %}
rexray:
  modules:
    default-docker:
      disabled: true
  logLevel: warn
libstorage:
  host: tcp://127.0.0.1:7979
  embedded: true
  client:
    type: controller
  integeration:
    volume:
      operations:
        # See Marathon & Rexray documentation
        mount:
          preempt: true
        unmount:
          ignoreusedcount: true
  server:
    endpoints:
      public:
        address: tcp://:7979
    services:
      ebs:
        driver: ebs # Refers to storage providers defined bellow
      # Use this to activate TLS encryption. Equivalent configuration must be set on clients too.
      # tls:
      #   certFile: /etc/libstorage/libstorage-server.crt
      #   keyFile: /etc/libstorage/libstorage-server.key
      #   trustedCertsFile: /etc/libstorage/trusted-certs.crt
      #   clientCertRequired: true

# Define storage providers like this - Example for AWS EBS
ebs:
  accessKey: <your-access-key>
  secretKey: <your-secret-key>
  region: <your-region>

{% endhighlight %}
- Hit deploy, sit back and relax.

You can also follow our demonstration [video](https://youtu.be/IoOzf7wwCnM).
