---
layout: post
title: Runtime Controller
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_runtime-controller
weight: 35
---

### Get runtime (deployed) topology of an application on a specific cloud.
```
GET /rest/runtime/{applicationId}/environment/{applicationEnvironmentId}/topology
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|Id of the application for which to get deployed topology.|true|string||
|PathParameter|applicationEnvironmentId|Id of the environment for which to get deployed topology.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Trigger a custom command on a specific node template of a topology .
```
POST /rest/runtime/{applicationId}/operations
```

#### Description

Returns a response with no errors and the command response as data in success case. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|operationRequest|operationRequest|true|OperationExecRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|DeferredResult«RestResponse«object»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

