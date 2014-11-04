---
layout: post
title:  Component MySQL
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_mysql
weight: 200
---

This component will install the MySQL RDBMS on the host server.

Used version for this tutorial : [MySQL WD02](https://github.com/alien4cloud/samples/tree/wd02/mysql )

{% note %}
This installation is based on Ubuntu distribution with apt-get command.
{% endnote %}

# Definition

<script src="https://gist.github.com/cmourouvin/ec7eb7b782e1da647cae.js"></script>

1. The node name is also important, itt should be like [organisation].nodes.Name
2. Important part in the definition is the **properties** bloc
3. Second important part **lifecycle**
  - the real script you will run during you different component life step

# Configuration

- Component properties image with configuration details

{% note %}
Give right on volumes, mounted stuff...
{% endnote %}

# Installation steps

Main steps to install the component..

1. Install MySQL
<script src="https://gist.github.com/cmourouvin/7b9544312c285ce9cb2f.js"></script>
2. Configure the MySQl and the BlockStorage
3. Start mysql
