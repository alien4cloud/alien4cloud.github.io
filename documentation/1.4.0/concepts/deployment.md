---
layout: post
title: Deployment and portability
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [concepts]
node_name: concepts-deployment
weight: 500
---

The holy graal of your work in alien4cloud, deploying your target topology in any targeted infrastructure with the benefits of the TOSCA declarative model is of course the deployment of the target topology.

In alien4cloud the deployment is done through the application environment. As an environment is associated with a version you will basically deploy the topology specified for the given version.

However a topology in the editor may not contains enough information to be deployed, this is why the environment + version association will allow you to provide them.

![Configuration process](../images/1.4.0/concepts/configuration_process.png)

## Topology inputs

The first element that one can specify per environment for same topology are inputs, basically any properties that are environment specific and that should not be configured by the user that make the topology but actually by the user that will deploy it.

## Location choice

As we have seen, the first concept of alien4cloud was orchestrators and Locations defined by the admin. As a responsible of a deployment you will have several locations available to you as configured by the admin, this may be all or a subset of alien4cloud's available locations.

For example for your deployment of a testing environment you may have the internal test OpenStack, Azure and Amazon available. While for your production you may have the internal VSphere and a set of physical machines (host-pool).

Once you choosed the location you wish to use for your deployment you may proceed to the next phase: Node matching

## Node matching

In a portable topology some of the node specified will be abstract meaning there is no implementation associated with them and so there is no way to actually run them. The most obvious example of an abstract node is the _tosca.nodes.Compute_ node that actually represents a machine (either virtual machine or physical machine).

Alien4cloud will automatically try to find a best-match and associate a location provided implementation for every of your abstract nodes. For example a _tosca.nodes.Compute_ node on an Amazon location that is provided by cloudify3 orchestrator will be matched against an _alien.cloudify.aws.nodes.Compute_ that will add some imageId and flavorId properties (that the admin may have configured for you).

Note that there may be two different kind of matched nodes for an abstract node in your topology:

* On demand resources, that are provided by a given location.
* Services, that are provided by the admin or other applications and accessible on the location you choosed.

![Matching](../images/1.4.0/concepts/matching.png)

### On demand resources

On demand resources are elements that will be created (or reserved in the special case of the host pool) for you dynamically when you deploy the application. They will also most of the time be released once the deployment is completed. They follow the same lifecycle as the deployment that is consuming them.

The _tosca.nodes.Compute_ matching to a VM is typically on an demand resource, you will create the VM when needed, i.e. when deploying your application and release it once completed.

### Services

Services are running applications/components that may or may not be managed by alien4cloud and that provide some features required for other deployments. This may be a load-balancer service, a DNS service or a Data-Lake service that is reused by multiple applications working on it. The lifecycle and the ownership of the service is of course not the same as the lifecycle of the application that consume them.

Still as a consumer you can match your abstract node on a service. And actually when you deploy an application you can turn it into a service so others may just consume it!

## Deployment

Once all these configurations are done (it is faster than it may seem as matching is mostly automatic) you can just deploy your application and let alien4cloud do everything next.
