---
layout: post
title:  Services management
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [user_guide, admin]
node_name: services_management
weight: 300
---

{%summary%}{%endsummary%}

Services in alien4cloud design any already running resource (databases, application providing an API etc.) that can be used by the applications through matching of abstract nodes (just like on demand resources).

The fundamental difference between service and on-demand resource is the ownership of the resource lifecycle. While on-demand resources lifecycle is managed by the consuming application, services are elements external to the application but yet consumed by the application.

For example you may have an on-demand database, which will be created when you deploy the application and (eventually) deleted when the application will be un-deployed.

When using a service you expect someone else to start the service (either externally to alien4cloud or through an alien deployment) and just consume it. In any case you will not be the owner of the service lifecycle.

# Referencing external services in alien4cloud

The first method to define a service in alien4cloud is to declare manually a service. In order to do this, click on *[Administration]* > *Service*

![service_list](../../images/2.2.0/user_guide/admin/services/service_list.png)

Let's say you have a Mongodb database that you want to expose to other applications, you can drag the component `MongoSingle` and drop it on the demarcated zone on the left to create the service Mongo.

![create_external_service](../../images/2.2.0/user_guide/admin/services/create_external_service.png)

After the creation, the service appears on the left hand side list and can be configured.

![service_list_with_external_mongo](../../images/2.2.0/user_guide/admin/services/service_list_with_external_mongo.png)

## Service details
 Click on the service to see its details. Here the status does not have much sense, a service in enabled state cannot be modified and deleted (it will make more sense with a service exposed by a deployment as Alien4Cloud knows the state of the service).

![service_detail](../../images/2.2.0/user_guide/admin/services/service_detail.png)

## Instance informations
The instance tab gives you access to properties and attributes of your service. The properties and attributes values, that you enter here, can be used later by consumer of the service to establish the connection with the service. In the example, the property `ip_address` of the external Mongo DB has been given.

{%info%}
<h5>IP Address</h5>
When a service is not managed by A4C you need to define manually how to access the service (i.e. the IP address)
{%endinfo%}

### Capabilities attributes

Capabilities attributes are very important as they will provide for infos on how to use / connect to the service.
`Alien4Cloud 1.4` does not yet support capabilitie attributes edition. Thus, you cannot define for example the endpoint ip_address on the endpoint itself.

To do that, you need to add an attribute on the service node type level following the naming convention:

`capabilities.YOUR_CAPABILITY_NAME.ATTRIBUTE_KEY`.

For example in our case of Mongo service, we would define the capability `service_api` attribute `ip_address` like this:

![defining_capabilities_attributes_for_service](../../images/2.2.0/user_guide/service/user_attributes.png)

## Enable service on locations
The location tab allows to authorize service access to locations. It means only application deployed on the authorized locations can have access to the service.

![service_location](../../images/2.2.0/user_guide/service/service_location.png)

## Security
The security tab allows to authorize service access to application / environments / environment types / user or group. Only authorized entity can use the service on deployment.

![service_security](../../images/2.2.0/user_guide/service/service_security.png)

Once the service has been properly defined, authorization has been properly configured. You can begin to consume it with your application. As you can see, the example use the abstract type `AbstractMongod` which is the base type that was used to define the service.

![service_consumption](../../images/2.2.0/user_guide/service/service_consumption.png)

On matching screen, your AbstractMongod will be matched to the service that has been defined lately

![service_matching](../../images/2.2.0/user_guide/admin/services/service_matching.png)

# Turning deployments into services

Turning deployments into services is usually done by the deployment manager of the application environment.

Service definition within Alien4Cloud uses substitution in order to expose properties, requirements or capabilities.
The first thing you need to do is to define your service topology, and a substitution for it

![service_topology](../../images/2.2.0/user_guide/admin/services/service_topology.png)


Once the service topology is done, you can set up an environment to be deployed on your chosen location.
Before deploying, you can choose to expose your deployment as a service in the *Service management* section

![service_exposition](../../images/2.2.0/user_guide/admin/services/service_exposition.png)


As an admin, the service exposed will be displayed automatically in the service list *[Administration]* > *Service*

![service_list_with_exposed_mongo](../../images/2.2.0/user_guide/admin/services/service_list_with_exposed_mongo.png)

Once the service is exposed, access to the service, the matching can be configured in the same manner as an external service.
However, note that the exosed services are automatically available on the location selected for the deployment once deployed.

# Limitations

### multiple capabilities exposure

On a topology, a service can expose multiple capabilities, but only 1 can be used. Otherwise, relationship operations won't be called properly.
More precisely, asume we have the following node types:

{%highlight yaml%}
nodes types:
  # abstract type, on which the service will be based
  org.alien4cloud.nodes.AS
    abstract: true
    capabilities:
      ACapa: org.alien4cloud.capabilities.ACapa
      BCapa: org.alien4cloud.capabilities.BCapa

  org.alien4cloud.nodes.A
    requirements:
      AReq: org.alien4cloud.capabilities.ACapa

  org.alien4cloud.nodes.B
    requirements:
      BReq: org.alien4cloud.capabilities.BCapa
{%endhighlight%}

> __wont work__: One node AS, connect both A and B to AS

{%highlight yaml%}
 #topology
node_templates:
 # one abstract node template, will be matched to a service on deployment config
  AS:
    type: org.alien4cloud.service.AS
  A:
    type: org.alien4cloud.nodes.A
    requirements:
      AReq:
        node: AS # connect A to AS
        capability: org.alien4cloud.capabilities.ACapa
  B:
    type: org.alien4cloud.nodes.B
    requirements:
      BReq:
        node: AS # also connect B to AS
        capability: org.alien4cloud.capabilities.BCapa
{%endhighlight%}

> __Workaround__: Two nodes of type AS, connect each A and B to different node templates of type AS.
Match the two AS type nodetemplates to the same service on deployment

{%highlight yaml%}
 #topology
node_templates:
 # TWO abstract nodes templates, each will be matched to the SAME service on deployment config
  AS1:
    type: org.alien4cloud.service.AS
  AS2:
    type: org.alien4cloud.service.AS
  A:
    type: org.alien4cloud.nodes.A
    requirements:
      AReq:
        node: AS1     # connect A to AS1
        capability: org.alien4cloud.capabilities.ACapa
  B:
    type: org.alien4cloud.nodes.B
    requirements:
      BReq:
        node: AS2     # connect B to AS2
        capability: org.alien4cloud.capabilities.BCapa
{%endhighlight%}

### Scalability and services
Services substitution does not yet supports the exposure of multiple instances. Output properties cannot reference properties of scaled instances.

### Services properties
Input properties are used both for topology input and deployment inputs.
Users __SHOULD__ handle __connection to services__ using __capabilities properties/attributes__ and eventually __node attributes__.
They __SHOULD NOT__ use  __node properties__ for that purpose.



{%warning%}
 <h5>Services from snapshot versions</h5>
 While creation of services out of snapshot types is possible, it is not recommended for two reasons:

 - We believe it is not a good practice to interact with other teams based on unstable / unreleased features.
 - Alien4cloud may not handle node type updates correctly and such usage is done at your own risks.
{%endwarning%}

# Example

The MongoDB service example in the two sections above [can be found here](https://github.com/alien4cloud/samples/tree/master/mongo). It comes with a topology template *mongod-type* that defines a simple topology containing a MongoDB hosted on a Compute. This template is exposed as a type named *mongod-type* using substitution exposition.

The node cellar application, which consumes the service, [can be found here](https://github.com/alien4cloud/samples/tree/master/topology-nodecellar-service). In the topology template _Nodecellar-ClientService_, the abstract node *alien.nodes.AbstractMongod* was matched to the MongoDB service.


# Advanced

## Relationship and service

**TLDR;** When a relationship is involving a service, think “half relationship”, one half relationship is managing the source side, and the other one the target side.

Services are running resources managed by third parties, as such only the third party is authorized to manage the service settings.
In order to protect the integrity of: services, service consumers and service providers, we cannot let everybody alters a service and vice versa.
Only operations defined by the owner can be executed on it.

For example: a service consumer is not allowed to execute operations on the service side.

In Tosca, the source of the relatonship is responsible to define operations executed on both side (source and target), this is a problem when a service is involved.
The solution chosen by A4C is to:

- let the administrator configures the source with one relationship that holds all the operations impacting the source and another one for the target with operations that will impact the target.
- not execute any operations impacting a side we don't manage

When a service is involved, a relationship should be seen as a half relationship.
One part of the relationship is defined by the consumer and the other part by the provider. At runtime the 2 relationships are merged into 1.



## How to define relationships on the service side

Depending if the service is a consumer or a provider you will need to add a *half* relationship on a service capability or a service requirement.

In the case of the MongoDB service described above we need to add the relationship to the *"database_endpoint"* capability.

Let's say we'd like to run a script everytime a new consumer is added.
For that we need to create a relationship dedicated to the service side:

{%highlight yaml%}
tosca_definitions_version: alien_dsl_1_3_0
description: A relationship definition for the service side
template_name: mongo_db_relaitonship_service_side
template_version: 0.1.0-SNAPSHOT
template_author: admin

imports:
  - tosca-normative-types:1.0.0-ALIEN12

relationship_types:
    org.alien4cloud.relationships.NodejsConnectToMongoServiceSide:
        derived_from: tosca.relationships.ConnectsTo
        description: Relationship use to define operations run on the mongo side
        interfaces:
          Configure:
              add_source:
                  implementation: scripts/when_new_source.sh
{%endhighlight%}

And upload this yaml as we would do if it was a component.

Then attach the NodejsConnectToMongoServiceSide to the service capability *"database_endpoint"*:

![service_list](../../images/2.2.0/user_guide/service/service_mongodb_relationship.png)

And that's it.
