---
layout: post
title:  Services management
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide, admin]
node_name: services_management
weight: 300
---
{%summary%}{%endsummary%}

*in progress...*

A service is something running somewhere that you can reference in Alien and match to an abstract node in your topology.

In our samples, import the type [mongo](https://github.com/alien4cloud/samples/tree/master/mongo). It comes with a topology template *mongod-type* that defines a simple topology containing a MongoDB hosted on a Compute.

This template is exposed as a type named *mongod-type* using substitution exposition.

Create a new application _MongoAsAService_ using this topology template and deploy it. It will ouputs the _ip_address_ and _port_ of your MongoDB.

In Administration / Services create a service named _MongoService_ using the *mongod-type*. Fill it's attributes _ip_address_ and _port_ using those given by your deployment.
Start the service.

You must add a location to be able to match the service in another deployment.

We'll now create another topology that will leverage this service. In the template [topology-nodecellar-service](https://github.com/alien4cloud/samples/tree/master/topology-nodecellar-service) you'll find a topology template _Nodecellar-ClientService_ that use the abstract type *alien.nodes.AbstractMongod* for the mongoDb node. Create an application using this template. You'll be able to match this node to the recently started service.
