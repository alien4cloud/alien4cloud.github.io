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

You can create your own Apache recipe and upload it to Alien. A recipe is an archive file with some contents.  To explain the creation of a recipe, we will create a simple Apache recipe.

The first step is to create the TOSCA-Metadata folder. In this folder we need a « ALIEN-META.yaml » file. Below, the content of this file :

<script src="https://gist.github.com/OresteVisari/3440fa2cc51e1c883173.js"></script>

{% note %}
The last line is important because it's the reference to the definition of Apache.
{% endnote %}

In the definitions folder, we need to write the TOSCA description of our component. It's also a YAML file use to describe your component. The first line is the TOSCA definition version of the file. The second is a text description of the component. The tags icon is optional.

<script src="https://gist.github.com/OresteVisari/fadc6e7504c804922f8d.js"></script>

After this lines we have the description of all nodes. Here, we just have the template of our Apache implementation. TOSCA assumes the existence of a base set of node types. The TOSCA type of Apache is the tosca.nodes.WebServer.

The Apache recipe has only 2 properties, the version and the port. The version is fixe to 2.4, it's only to informe the user of the version installed by the scripts. The port is use on configuration, we accept all port greater or equal to 1. According to Apache, the default port is 80.

<script src="https://gist.github.com/OresteVisari/050034534980988a21e1.js"></script>

To conclude, we have the interfaces and the artifacts. In the interfaces we defined the script uses to created the node. In our case we just use the create operation, see the documentation to see all oprations. In the artifact, we define the folder of the previous script. As we used a Groovy artifact, we defined this artifact at the end of file.

<script src="https://gist.github.com/OresteVisari/34eac7137dbcf5a60c05.js"></script>

That's it for the YAML ! Now, you need to create the scripts. All scripts are specific of the target compute so we don't explain this part on this tutorial. If you want, you can read the content of our scripts for an Ubuntu on Github : [https://github.com/alien4cloud/samples/tree/master/apache](https://github.com/alien4cloud/samples/tree/master/apache){:target="_blank"} 

To test the recipe, you can create a Topology with a compute and the Apache.
[![Apache Topology](../../images/developer_guide/small-apache-topology.png)](../../images/developer_guide/small-apache-topology.png)
