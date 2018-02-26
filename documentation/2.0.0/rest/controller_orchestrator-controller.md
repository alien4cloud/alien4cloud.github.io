---
layout: post
title: Manages orchestrators.
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_orchestrator-controller
weight: 8
---

### Search for orchestrators.
```
GET /rest/v1/orchestrators
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|query|Query text.|false|string||
|QueryParameter|connectedOnly|If true only connected orchestrators will be retrieved.|false|boolean||
|QueryParameter|from|Query from the given index.|false|integer (int32)||
|QueryParameter|size|Maximum number of results to retrieve.|false|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult«Orchestrator.»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Create a new orchestrators.
```
POST /rest/v1/orchestrators
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|orchestratorRequest|Request for orchestrators creation|true|Request for creation of a new orchestrators.||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|201|Created|RestResponse«string»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get an orchestrators from it's id.
```
GET /rest/v1/orchestrators/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrator to get|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Orchestrator.»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update the name of an existing orchestrators.
```
PUT /rest/v1/orchestrators/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrators to update.|true|string||
|BodyParameter|request|Orchestrator update request, representing the fields to updates and their new values.|true|Orchestrator update request.||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Delete an existing orchestrators.
```
DELETE /rest/v1/orchestrators/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrators to delete.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get information on the artifacts that an orchestrator can support.
```
GET /rest/v1/orchestrators/{id}/artifacts-support
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrator for which to get artifact support informations|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Array«string»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Disable an orchestrator. Destroys the instance of the orchestrator connector.
```
DELETE /rest/v1/orchestrators/{id}/instance
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrator to enable|true|string||
|QueryParameter|force|This parameter is useful only when trying to disable the orchestrator, if deployments are performed using this orchestrator disable operation will fail unnless the force flag is true|false|boolean||
|QueryParameter|clearDeployments|In case an orchestrator with deployment is forced to be disabled, the user may decide to mark all deployments managed by this orchestrator as ended.|false|boolean||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«Usage»»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Enable an orchestrator. Creates the instance of orchestrator if not already created.
```
POST /rest/v1/orchestrators/{id}/instance
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrator to enable|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get information on the locations that an orchestrator can support.
```
GET /rest/v1/orchestrators/{id}/locationsupport
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrator for which to get location support informations|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«LocationSupport»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

