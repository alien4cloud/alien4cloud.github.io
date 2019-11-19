---
layout: post
title: Allow to create/read/update/delete and search services linked to an application environment.
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_managed-service-resource-controller
weight: 36
---

### Get a service associated with an application environment.
```
GET /rest/v1/applications/{applicationId}/environments/{environmentId}/services
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|environmentId|environmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Service.»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Delete the managed service resource associated with an application environment.
```
DELETE /rest/v1/applications/{applicationId}/environments/{environmentId}/services
```

#### Description

The service can not be deleted if used by other resources.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|environmentId|environmentId|true|string||


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

* */*

### Create a service from an application environment.
```
POST /rest/v1/applications/{applicationId}/environments/{environmentId}/services
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|environmentId|environmentId|true|string||
|BodyParameter|createRequest|Create service|true|Request for creation of a new service.||


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

* */*

### Unbind the managed service resource from associated application environment.
```
PATCH /rest/v1/applications/{applicationId}/environments/{environmentId}/services
```

#### Description

This operation will only stop the management of the service via the application environment. The Service will still be present in Alien4Cloud, and updatable via service api or admin ui.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|environmentId|environmentId|true|string||


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

* */*

