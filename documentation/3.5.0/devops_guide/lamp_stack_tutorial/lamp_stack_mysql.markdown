---
layout: post
title:  Component MySQL
root: ../../
categories: DOCUMENTATION-3.5.0
parent: [devops, tosca_custom_types, lamp_stack]
node_name: lamp_stack_mysql
weight: 200
---

This component will install the MySQL RDBMS on the host server.

Used version for this tutorial : [MySQL](https://github.com/alien4cloud/samples/tree/master/mysql){:target="_blank"}

{% note %}
This installation is based on Ubuntu distribution with apt-get command.
{% endnote %}

# Definition

Let's describe important parts of this full [MySQL definition](https://github.com/alien4cloud/samples/blob/master/mysql/definition/mysql-types.yml){:target="_blank"} description.

## Namming / description

The node name is important since it's unique. We follow this template in A4C recipe development : **[organisation].nodes.Name**

<div data-gist="https://gist.github.com/OresteVisari/71722e4e98dfd501606b.js"></div>

- **tosca_simple_yaml_1_0_0_wd03** : version of tosca used in the definition, let it as is it for the moment
- Our node name / id : **alien.nodes.Mysql**
- The parent : **tosca.nodes.Database**

{% note %}
It's a good practice to inherit from a base type to create your own component when it's possible. Here **tosca.nodes.Database**.
{% endnote %}

## Properties

All properties required or optional to use the component.

<div data-gist="https://gist.github.com/OresteVisari/c99550fb9b4e54eb38b1.js"></div>

MySQL proper properties :

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|port  | port number injected in the MySQL installation | Default : **3306** |
|storage_path  | path where the blockstorage is mounted in the compute | Constant value with the Cloudify Driver version we use in this tutorial. All blockstorage attached to a compute will have this mounted volume. |
|bind_address | Allow remote access to your server | Default : **true** |

Properties inherited from its parent : *tosca.nodes.Database*

Here we are overriding those properties from parent component and we describe a database with a user we want to create at initialization.

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|db_name  | Database name we want to create | *wordpress* to match to our final application case |
|db_user  | Name of the user who will have rights on this database | This user will have all privileges on this dedicated database |
|db_password  | Password for this user | ... |

## Lifecycle and related scripts

<div data-gist="https://gist.github.com/OresteVisari/521640547934b1f8ee39.js"></div>

The real script you will run during you different component life steps. Two main steps here in *operations* bloc :

{: .table .table-bordered}
|Operation  | Usage | Comment |
|:---------|:------------|:------------|
|create  | Executed script to install MySQL on the server | Through apt-get on you ubuntu image |
|start   | Executed script to configure MySQL to use a specific storage path (the blockstorage) | Configured and started with specific ubuntu hints (rights concerns) |
