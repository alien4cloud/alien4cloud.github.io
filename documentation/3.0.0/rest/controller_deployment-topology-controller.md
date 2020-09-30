---
layout: post
title: Prepare a topology to be deployed on a specific environment (location matching, node matching and inputs configuration).
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_deployment-topology-controller
weight: 39
---

### Get the deployment topology of an application given an environment.
```
GET /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology
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
PUT /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology
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

### updateDeploymentInputArtifact
```
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/inputArtifacts/{inputArtifactId}/update
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||
|PathParameter|inputArtifactId|inputArtifactId|true|string||
|BodyParameter|artifact|artifact|true|DeploymentArtifact||


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

* application/json

### Upload input artifact.
```
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/inputArtifacts/{inputArtifactId}/upload
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||
|PathParameter|inputArtifactId|inputArtifactId|true|string||
|FormDataParameter|file|file|true|file||


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

* multipart/form-data

#### Produces

* application/json

### Set location policies for a deployment. Creates if not yet the {@link DeploymentTopology} object linked to this deployment.
```
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/location-policies
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

### Update policy substitution's property.
```
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/policies/{nodeId}/substitution/properties
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

### Substitute a specific policy by a location policy resource template in the topology of an application, given an environment.
```
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/policies/{policyId}/substitution
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|appId|appId|true|string||
|PathParameter|environmentId|environmentId|true|string||
|PathParameter|policyId|policyId|true|string||
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

### Substitute a specific node by the location resource template in the topology of an application given an environment.
```
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/substitutions/{nodeId}
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
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/substitutions/{nodeId}/capabilities/{capabilityName}/properties
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

### Update node substitution's property.
```
POST /rest/v1/applications/{appId}/environments/{environmentId}/deployment-topology/substitutions/{nodeId}/properties
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

