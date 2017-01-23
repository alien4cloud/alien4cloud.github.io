---
layout: post
title: Get and update orchestrator configuration.
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_orchestrator-configuration-controller
weight: 11
---

### Get an orchestrator configuration.
```
GET /rest/v1/orchestrators/{id}/configuration
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
|200|OK|RestResponse«OrchestratorConfiguration»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update the configuration for an orchestrator.
```
PUT /rest/v1/orchestrators/{id}/configuration
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|Id of the orchestrator for which to update the configuration.|true|string||
|BodyParameter|configuration|The configuration object for the orchestrator - Type depends of the selected orchestrator.|true|object||


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

