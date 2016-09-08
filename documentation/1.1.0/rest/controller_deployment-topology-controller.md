---
layout: post
exclude_from_search: true
title: Prepare a topology to be deployed on a specific environment (location matching, node matching and inputs configuration).
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_deployment-topology-controller
weight: 20
---

### Get the deployment topology of an application given an environment.
```
GET /rest/applications/{appId}/environments/{environmentId}/deployment-topology
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«DeploymentTopologyDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Updates by merging the given request into the given application's deployment topology.
```
PUT /rest/applications/{appId}/environments/{environmentId}/deployment-topology
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||
|BodyParameter|updateRequest|updateRequest|true|UpdateDeploymentTopologyRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«object»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Set location policies for a deployment. Creates if not yet the {@link DeploymentTopology} object linked to this deployment.
```
POST /rest/applications/{appId}/environments/{environmentId}/deployment-topology/location-policies
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|Id of the application.|true|string||
|PathParameter|environmentId|Id of the environment on which to set the location policies.|true|string||
|BodyParameter|request|Location policies request body.|true|SetLocationPoliciesRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«DeploymentTopologyDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Substitute a specific node by the location resource template in the topology of an application given an environment.
```
POST /rest/applications/{appId}/environments/{environmentId}/deployment-topology/substitutions/{nodeId}
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||
|PathParameter|nodeId|nodeId|true|string||
|QueryParameter|locationResourceTemplateId|locationResourceTemplateId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«DeploymentTopologyDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Update substitution's capability property.
```
POST /rest/applications/{appId}/environments/{environmentId}/deployment-topology/substitutions/{nodeId}/capabilities/{capabilityName}/properties
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||
|PathParameter|nodeId|nodeId|true|string||
|PathParameter|capabilityName|capabilityName|true|string||
|BodyParameter|updateRequest|updateRequest|true|UpdatePropertyRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«object»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Update substitution's property.
```
POST /rest/applications/{appId}/environments/{environmentId}/deployment-topology/substitutions/{nodeId}/properties
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||
|PathParameter|nodeId|nodeId|true|string||
|BodyParameter|updateRequest|updateRequest|true|UpdatePropertyRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«object»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

