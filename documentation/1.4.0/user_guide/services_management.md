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

The fundamental difference between service and on-demand resource is the ownership of the resource lifecycle. While on-demand resources lifecycle is managed by the consuming application, services are elements external to the application but yet consumed by the application.

For example you may have an on-demand database, which will be created when you deploy the application and (eventually) deleted when the application will be un-deployed.

When using a service you expect someone else to start the service (either externally to alien4cloud or through an alien deployment) and just consume it. In any case you will not be the owner of the service lifecycle.

# Referencing external services in alien4cloud

The first method to define a service in alien4cloud is to declare manually a service. In order to do this, click on *[Administration]* > *Service*

![service_list](../../images/1.4.0/user_guide/service/service_list.png)

Let's say you have a Mongodb database that you want to expose to other applications, you can drag the component `mongod-type` and drop it on the demarcated zone on the left to create the service Mongo. It's not shown in the image but `mongod-type` derived from `AbstractMongod`

 ![create_external_service](../../images/1.4.0/user_guide/service/create_external_service.png)

After the creation, the service appears on the left hand side list and can be configured.

![service_list_with_external_mongo](../../images/1.4.0/user_guide/service/service_list_with_external_mongo.png)

 Click on the service to see its details. Here the status does not have much sense, a service in enabled state cannot be modified and deleted (it will make more sense with a service exposed by a deployment as Alien4Cloud knows the state of the service).

![service_detail](../../images/1.4.0/user_guide/service/service_detail.png)

The instance tab gives you access to properties and attributes of your service. The properties and attributes values, that you enter here, can be used later by consumer of the service to establish the connection with the service. In the example, the property `ip_address` of the external Mongo DB has been given.

![service_instance](../../images/1.4.0/user_guide/service/service_instance.png)

The location tab permits to authorize service access to locations. It means only application deployed on the authorized locations can have access to the service.

![service_location](../../images/1.4.0/user_guide/service/service_location.png)

The security tab permits to authorize service access to application / environment / user or group. Only authorized entity has access to the location.

![service_security](../../images/1.4.0/user_guide/service/service_security.png)

Once the service has been properly defined, authorization has been properly configured. You can begin to consume it with your application. As you can see, the example use the abstract type `AbstractMongod` which is the base type that was used to define the service.

![service_consumption](../../images/1.4.0/user_guide/service/service_consumption.png)

On matching screen, your AbstractMongod will be matched to the service that has been defined lately

![service_matching](../../images/1.4.0/user_guide/service/service_matching.png)

# Turning deployments into services

Turning deployments into services is usually done by the deployment manager of the application environment.

Service definition within Alien4Cloud uses substitution in order to expose properties, requirements or capabilities. The first thing that you need to do is to define your service topology with substitution

![service_topology](../../images/1.4.0/user_guide/service/service_topology.png)

Once the service topology is done, you might want to create an application and deploy it on your chosen location. Then you can choose to expose your deployment as a service in the *Service management* section

![service_exposition](../../images/1.4.0/user_guide/service/service_exposition.png)

As an admin, the service exposed will be displayed automatically in the service list *[Administration]* > *Service*

![service_list_with_exposed_mongo](../../images/1.4.0/user_guide/service/service_list_with_exposed_mongo.png)

Once the service is exposed, access to the service, the matching can be configured in the same manner as an external service

LIMITATIONS:

 - Services substitution does not yet supports the exposure of multiple instances. Output properties cannot reference properties of scaled instances.
 - Input properties are used both for topology input and deployment inputs. Users should handle connection to services using capabilities only properties/attributes and eventually node attributes but not node properties.

# Example

The MongoDB service example in the two sections above can be found [here](https://github.com/alien4cloud/samples/tree/master/mongo). It comes with a topology template *mongod-type* that defines a simple topology containing a MongoDB hosted on a Compute. This template is exposed as a type named *mongod-type* using substitution exposition.

The node cellar application, which consumes the service, can be found [here](https://github.com/alien4cloud/samples/tree/master/topology-nodecellar-service). In the topology template _Nodecellar-ClientService_, the abstract node *alien.nodes.AbstractMongod* was matched to the MongoDB service.


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

<pre>
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
</pre>

And upload this yaml as we would do if it was a component.

Then attach the NodejsConnectToMongoServiceSide to the service capability *"database_endpoint"*:

![service_list](../../images/1.4.0/user_guide/service/service_mongodb_relationship.png)

And that's it.