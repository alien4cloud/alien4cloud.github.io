---
layout: post
title: Services
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [concepts]
node_name: concepts-services
weight: 600
---

Services in alien4cloud design any already running resource (databases, application providing an API etc.) that can be used by applications through matching of abstract nodes (just like on demand resources).

The fundamental difference between service and on-demand resource is the ownership of the resource lifecycle. While on-demand resources lifecycle is managed by the consuming application, services are elements external to the application but yet consumed by the application.

For example you may have an on-demand database, which will be created when you deploy the application and (eventually) deleted when the application will be un-deployed.

When using a service you expect someone else to start the service (either externally to alien4cloud or through an alien deployment) and just consume it. In any case you will not be the owner of the service lifecycle.

When a service is matched against an abstract node of the topology the lifecycle of this node is overriden, some relationship operations won't be executed and the other service side operations will be overriden if any where defined. This is a really different mechanism as the service lifecycle is not managed by the consumer but is owned by the service provider. However the consumer is still responsible for providing a relationship with the implementation of it's own side of the relationship.

![Configuration process](../images/3.0.0/concepts/services_lifecycle.png)

{%info%}
<h5>Service security</h5>
Access to services is configured by the admin with the same options as on demand resources. They can be accessible to some users, group of users, applications or specific environments.
[Read more about...](#/documentation/3.0.0/user_guide/services_management.html)
{%endinfo%}

{%info%}
<h5>Turning deployments into services</h5>
While the platform admin can configure external services (deployments not managed by alien but performed manually outside of alien4cloud) manually in the UI, it may be useful to turn an alien4cloud deployment into service.
Before deployment the deployer user can easily check an option to turn it's deployment into a service. However the checkbox will be available only if the devops (that configured the topology) has defined a substitution for the topology. Indeed from the outside world the full deployment is seen as a single node to be consumed without all it's potential complexity.
[Read more about...](#/documentation/3.0.0/user_guide/services_management.html)
{%endinfo%}

{%info%}
<h5>Service accessibility</h5>
Services may be available only to some of the locations either for segregation or because some network settings may prevent their consumption from some locations. The configuration of locations is manual and should be done by a platform administrator.

Note that services created from deployments are automatically available on the location selected for the deployment once deployed.
[Read more about...](#/documentation/3.0.0/user_guide/services_management.html)
{%endinfo%}
