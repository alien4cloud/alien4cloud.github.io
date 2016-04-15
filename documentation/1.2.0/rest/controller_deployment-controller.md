---
layout: post
title: Deployment Controller
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_deployment-controller
weight: 33
---

### Get deployments for an orchestrator.
```
GET /rest/deployments
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|orchestratorId|Id of the orchestrator for which to get deployments. If not provided, get deployments for all orchestrators|false|string||
|QueryParameter|sourceId|Id of the application for which to get deployments. if not provided, get deployments for all applications|false|string||
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

### getEvents
```
GET /rest/deployments/{applicationEnvironmentId}/events
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

### Get deployment status from its id.
```
GET /rest/deployments/{deploymentId}/status
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
|200|OK|DeferredResult«RestResponse«string»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Undeploy deployment from its id.
```
GET /rest/deployments/{deploymentId}/undeploy
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

