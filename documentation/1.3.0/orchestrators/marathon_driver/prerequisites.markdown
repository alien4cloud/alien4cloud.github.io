---
layout: post
title:  Prerequisites
root: ../../../
categories: DOCUMENTATION-1.3.0
parent: [orchestrators, marathon_driver]
node_name: marathon_prequisites
weight: 1000
---

You can start orchestrating containers with the Marathon plugin in just a few simple steps. Here's how.

## Requirements

To operate the plugin, you will need a Mesos cluster running Marathon. You can use an already existing cluster or let Alien4Cloud do all the heavy-lifting and setup one for you. You will also need to upload the [Docker TOSCA node types](https://github.com/alien4cloud/docker-tosca-types/tree/master/docker-types) into Alien.

Note that the plugin has been tested only on clusters running on EC2 or Openstack but should work with other IaaS as well as on a bare metal infrastructure.

### Setup a Marathon+Mesos cluster using Alien

We modeled Mesos, Marathon, the Docker engine and other useful components into TOSCA node types. You can create your own custom Mesos TOSCA composition or use one of the provided templates. We recommend using the Marathon template which will provide automated service discovery.

{% warning %}
Supported distributions for Mesos + Marathon :
- Ubuntu 14.10, 16.04
- Debian 7 (wheezy)
- RedHat 6, 7
- CentOS 6, 7
{% endwarning %}

- First, upload the following CSARs into Alien using the [GIT importer](#/documentation/1.3.0/user_guide/catalog_type_upload):
  - [docker-engine](https://github.com/alien4cloud/docker-engine)
  - [mesos-types](https://github.com/alien4cloud/mesos-tosca-blueprints)
  - and [docker-types](https://github.com/alien4cloud/docker-tosca-types/tree/master/docker-types), which are not necessary to setup the cluster but are required by the plugin, so you might as well want to install them now too.
- Then, create your own custom Mesos TOSCA composition or use one of our templates. Note that if your IaaS doesn't automatically assigns public IPs you'll have to add a public network to your template.

You can also follow our demonstration [video](https://youtu.be/IoOzf7wwCnM).
