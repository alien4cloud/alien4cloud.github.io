---
layout: post
title: Operations on Deployments
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [rest_api, rest_api_applications-deployment-api]
node_name: rest_api_controller_deployment-controller
weight: 43
---

### Get 100 last deployments for an orchestrator.
```
GET /rest/v1/deployments
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|orchestratorId|Id of the orchestrator for which to get deployments. If not provided, get deployments for all orchestrators|false|string||
|QueryParameter|sourceId|Id of the application for which to get deployments. if not provided, get deployments for all applications|false|string||
|QueryParameter|environmentId|Id of the environment for which to get deployments. if not provided, get deployments without filtering by environment|false|string||
|QueryParameter|includeSourceSummary|include or not the source (application or csar) summary in the results|false|boolean||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«DeploymentDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get a list of deployments from their ids.
```
POST /rest/v1/deployments/bulk/ids
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|deploymentIds|deploymentIds|true|string array||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|JsonRawRestResponse|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### getEvents
```
GET /rest/v1/deployments/{applicationEnvironmentId}/events
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationEnvironmentId|Id of the environment for which to get events.|true|string||
|QueryParameter|from|Query from the given index.|false|integer (int32)||
|QueryParameter|size|Maximum number of results to retrieve.|false|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get a deployment from its id.
```
GET /rest/v1/deployments/{deploymentId}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|deploymentId|Deployment id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«DeploymentDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get deployment status from its id.
```
GET /rest/v1/deployments/{deploymentId}/status
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|deploymentId|Deployment id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«string»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Undeploy deployment from its id.
```
GET /rest/v1/deployments/{deploymentId}/undeploy
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|deploymentId|Deployment id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

