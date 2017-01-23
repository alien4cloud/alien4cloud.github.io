---
layout: post
title: Operations on Application's meta-properties
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-meta-property-controller
weight: 29
---

### upsertProperty
```
POST /rest/v1/applications/{applicationId}/properties
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|propertyRequest|propertyRequest|true|Request to update or check the value of a property.||


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

