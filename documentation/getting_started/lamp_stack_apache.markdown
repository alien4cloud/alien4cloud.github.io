---
layout: post
title:  Component Apache HTTP
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_apache
weight: 200
---
Apache HTTP server is a free software of the Apache software Foundation, created in 1995. Apache is the most popular web server on internet and the web server of LAMP bundle.

Used version for this tutorial : [Apache HTTP Server WD02](https://github.com/alien4cloud/samples/tree/wd02/apache){:target="_blank"}

# Definition

In the definitions folder, we need to write the TOSCA description of our component. It's also a YAML file use to describe your component. The first line is the TOSCA definition version of the file. The second is a text description of the component. The tags icon is optional.

## Namming / description

<script src="https://gist.github.com/OresteVisari/fadc6e7504c804922f8d.js"></script>

After this lines we have the description of all nodes. Here, we just have the template of our Apache implementation. TOSCA assumes the existence of a base set of node types. The TOSCA type of Apache is the tosca.nodes.WebServer.

## Properties

The Apache recipe has only 2 properties :

<script src="https://gist.github.com/OresteVisari/050034534980988a21e1.js"></script>

{: .table .table-bordered}
|Property  | Usage | Comment |
|:---------|:------------|:------------|
|version  | Mention the apache http server version | Constant version in our example |
|port  | Port where to expose the apache http service | 80 is the default port, you can change it |

## Lifecycle and related scripts

In the interfaces we defined the script used to create the node. In our case we just use the create operation, see the documentation to see all oprations. In the artifact, we define the folder that contains the script. As we are using Groovy artifact, we defined this artifact at the end of file.

<script src="https://gist.github.com/OresteVisari/34eac7137dbcf5a60c05.js"></script>

{: .table .table-bordered}
|Operation  | Usage | Comment |
|:---------|:------------|:------------|
|create  | Executed script to install your apache http server on the Compute | Through apt-get on ubuntu image |

To test this Apache recipe, you can create a simple Topology with a **Compute** and an **Apache** :

[![Simple Apache Topology](../../images/developer_guide/small-apache-topology.png)](../../images/developer_guide/small-apache-topology.png)
