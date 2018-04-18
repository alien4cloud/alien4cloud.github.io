---
layout: post
title: Advanced feature that allows configuration of modifiers associated with this location.
root: ../../
categories: DOCUMENTATION-2.1.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_location-modifiers-controller
weight: 14
---

### Get all modifiers for a given location.
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/modifiers
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|locationId|Id of the location for which to get all modifiers.|false|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«LocationModifierReference»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Add a modifier to a location.
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/modifiers
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|locationId|Id of the location|true|string||
|BodyParameter|locationModifierReference|The location modifier to add|true|LocationModifierReference||


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

### Update the order of a modifier.
```
PUT /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/modifiers/from/{from}/to/{to}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|locationId|Id of the location|true|string||
|PathParameter|from|From index|true|integer (int32)||
|PathParameter|to|To index|true|integer (int32)||


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

### Delete a location modifier at the given index.
```
DELETE /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/modifiers/{index}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|locationId|Id of the location|true|string||
|PathParameter|index|Index of the location modifier to delete|true|integer (int32)||


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

