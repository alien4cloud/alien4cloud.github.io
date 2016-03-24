---
layout: post
title: Update values for meta-properties associated with locations.
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_location-meta-properties
weight: 5
---

### upsertMetaProperty
```
POST /rest/orchestrators/{orchestratorId}/locations/{locationId}/properties
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|Id of the orchestrator for which the location is defined.|false|string||
|PathParameter|locationId|Id of the location to get|true|string||
|BodyParameter|propertyRequest|Id of the location to get|true|Request to update or check the value of a property.||


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

