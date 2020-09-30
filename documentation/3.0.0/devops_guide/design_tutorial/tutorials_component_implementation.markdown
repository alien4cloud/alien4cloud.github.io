---
layout: post
title:  Component implementation
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [devops, tutorials]
node_name: tutorial_component_impl
weight: 200
---

**Target:** Middleware experts, operations teams.

**Goal:** Explain how to implement a type. This tutorial follows the component design tutorial and we will describe how to implement the component designed in the previous tutorial. In this tutorial we also covers how the component archive can be added and tested through ALIEN.

**Pre-requisite:** A git repository will hold the source code for the component archive. We will also use a Jenkins CI instance in order to demonstrate how we can continuously test our archives and develop components following quality best-practices.

# Prepare the archive

Elements in TOSCA and ALIEN are defined in definitions files that can be packed in a [Cloud Service Archive](#/documentation/3.0.0/concepts/tosca.html) (CSAR). The first task therefore is to prepare the directory structure of our Cloud Service Archive.

{% highlight bash %}
├── my-definition-file.yml
├── images
│   ├── component-icon.png
│   └── ...
├── scripts
│   └── install.sh
│   └── ...
{% endhighlight %}

Now that we have a cloud service archive with a definition file, we can edit it to define TOSCA elements. In our case we will focus on creating types.

When creating type it is important to correctly defines the meta-informations of the type, and to try to reuse existing nodes, capabilities and requirements.
