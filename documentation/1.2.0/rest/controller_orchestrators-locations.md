---
layout: post
title: Manages locations for a given orchestrator.
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_orchestrators-locations
weight: 10
---

### Get all locations for a given orchestrator.
```
GET /rest/orchestrators/{orchestratorId}/locations
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which to get all locations.|false|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«LocationDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Create a new location.
```
POST /rest/orchestrators/{orchestratorId}/locations
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which the location is defined.|false|string||
|BodyParameter|locationRequest|Request for location creation|true|Request for creation of a new location.||


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

### Get a location from it's id.
```
GET /rest/orchestrators/{orchestratorId}/locations/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which the location is defined.|false|string||
|PathParameter|id|Id of the location to get|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«LocationDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update the name of an existing location.
```
PUT /rest/orchestrators/{orchestratorId}/locations/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which the location is defined.|false|string||
|PathParameter|id|Id of the location to update|true|string||
|BodyParameter|updateRequest|Location update request, representing the fields to updates and their new values.|true|UpdateLocationRequest||


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

### Delete an existing location.
```
DELETE /rest/orchestrators/{orchestratorId}/locations/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which the location is defined.|false|string||
|PathParameter|id|Id of the location to delete.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«boolean»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

