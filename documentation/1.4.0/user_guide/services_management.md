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

*Section in progress...*

Services in alien4cloud design any already running resource (databases, application providing an API etc.) that can be used by the applications through matching of abstract nodes (just like on demand resources).

The fundamental difference between service and on-demand resource is the ownership of the resource lifecycle, while on-demand resources lifecycle is managed by the consuming application services are elements external to the application but yet consumed by the application in order to work.

For example you may have an on-demand database which will be created when you deploy the application and (eventually) deleted when the application will be un-deployed.

When using a service you expect someone else to start the service (either externally to alien4cloud or through an alien deployment) and just consume it. In any case you will not be the owner of the service lifecycle.

# Referencing external services in alien4cloud

The first way to define a service in alien4cloud is to

# Turning deployments into services

Turning deployments into services is usually done by the deployment manager of the application environment. Information on how to turn a deployment into a service can be found here.

LIMITATIONS:
 - Services substitution does not yet supports the exposure of multiple instances. Output properties cannot reference properties of scaled instances.
 - Input properties are used both for topology input and deployment inputs. Users should handle connection to services using capabilities only properties/attributes and eventually node attributes but not node properties.

# Example

In our samples, import the type [mongo](https://github.com/alien4cloud/samples/tree/master/mongo). It comes with a topology template *mongod-type* that defines a simple topology containing a MongoDB hosted on a Compute.

This template is exposed as a type named *mongod-type* using substitution exposition.

Create a new application _MongoAsAService_ using this topology template and deploy it. It will ouputs the _ip_address_ and _port_ of your MongoDB.

In Administration / Services create a service named _MongoService_ using the *mongod-type*. Fill it's attributes _ip_address_ and _port_ using those given by your deployment.
Start the service.

You must add a location to be able to match the service in another deployment.

We'll now create another topology that will leverage this service. In the template [topology-nodecellar-service](https://github.com/alien4cloud/samples/tree/master/topology-nodecellar-service) you'll find a topology template _Nodecellar-ClientService_ that use the abstract type *alien.nodes.AbstractMongod* for the mongoDb node. Create an application using this template. You'll be able to match this node to the recently started service.
