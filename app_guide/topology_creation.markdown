---
layout: post
title:  Topology creation
categories: APP_GUIDE
root: ../
parent: none
weight: 200
---

## How to create a topology template in **ALIEN**

### Create you topology template

A topology template can be used when you create your application.

{% info %}Only users with role **ARCHITECT** can create topology template.{% endinfo %}

> Click on *[New Template]* > Enter topology basic information then click on *[Create]*

[![Create a topology template](../images/app_guide/topology-template-creation.png)](../images/app_guide/topology-template-creation.png)

> Click on *[New Template]* > Enter topology basic information then click on *[Create]*

You will have the view to compose you topology, **draging** elements from components list on the right and **droping** it on the
central area.

{% info %}At each drop your template is **automaticly updated**. You can leave this topology template creation view at any time and edit it later.{% endinfo %}

[![Topology template creation view](../images/app_guide/topology-create-draw.png)](../images/app_guide/topology-create-draw.png)

### Compose your topology

In this example we will create a simple topology with :

**3 nodes** template :

* Compute
* Java
* TomcatRPM

**3 relationships** :

* Java **hostedOn** Compute : java has to run on a compute
* TomcatRPM **hostedOn** Compute : tomcat application server is hosted on the same compute
* TomcatRPM **dependsOn** Java : tomcat needs depends on java to run

[![Topology template composition](../images/app_guide/topology-basic-java-app.png)](../images/app_guide/topology-basic-java-app.png)

{% info %}
When you select a node you can see details about it on the *[Properties]* tab next to *[Add Node Template]*.
On each node template properties you will have details such as relationships between the selected node and others.
{% endinfo %}

When you have created the topology template, you will see it template in the main list page :

[![Topology template list](../images/app_guide/topology-template-list.png)](../images/app_guide/topology-template-list.png)

{% info %}
On the topology template list you can **delete** with the "trash" button on the right and **edit** a template clicking on it.
{% endinfo %}