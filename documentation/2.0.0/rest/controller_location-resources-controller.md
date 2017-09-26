---
layout: post
title: Manages locations for a given orchestrator.
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_location-resources-controller
weight: 5
---

### Add resource template to a location.
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/resources
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which to add resource template.|true|string||
|PathParameter|locationId|Id of the location of the orchestrator to add resource template.|true|string||
|BodyParameter|resourceTemplateRequest|resourceTemplateRequest|true|Request for creation of a new location's resource.||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Contains a custom resource template with its location's updated dependencies.»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Auto configure the resources, if the location configurator plugin provides a way for.
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/resources/auto-configure
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which to Auto configure the resources.|true|string||
|PathParameter|locationId|Id of the location of the orchestrator to Auto configure the resources.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«LocationResourceTemplate»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update location's resource.
```
PUT /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/resources/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which to update resource template.|true|string||
|PathParameter|locationId|Id of the location of the orchestrator to update resource template.|true|string||
|PathParameter|id|Id of the location's resource.|true|string||
|BodyParameter|mergeRequest|mergeRequest|true|Request to update a location resource.||


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

### Delete location's resource.
```
DELETE /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/resources/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which to delete resource template.|true|string||
|PathParameter|locationId|Id of the location of the orchestrator to delete resource template.|true|string||
|PathParameter|id|Id of the location's resource.|true|string||


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

### Update location's resource's capability template capability property.
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/resources/{id}/template/capabilities/{capabilityName}/properties
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which to update resource template capability property.|true|string||
|PathParameter|locationId|Id of the location of the orchestrator to update resource template capability property.|true|string||
|PathParameter|id|Id of the location's resource.|true|string||
|PathParameter|capabilityName|Id of the location's resource template capability.|true|string||
|BodyParameter|updateRequest|updateRequest|true|Request to update a location resource template property.||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ConstraintInformation»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update location's resource's template property.
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/resources/{id}/template/properties
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which to update resource template property.|true|string||
|PathParameter|locationId|Id of the location of the orchestrator to update resource template property.|true|string||
|PathParameter|id|Id of the location's resource.|true|string||
|BodyParameter|updateRequest|updateRequest|true|Request to update a location resource template property.||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ConstraintInformation»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

