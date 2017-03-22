---
layout: post
title: This api allows to perfom admin oriented requests on deployment events.
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_applications-deployment-api]
node_name: rest_api_controller_deployment-events-controller
weight: 34
---

### Get deployment status events from a given date.
```
POST /rest/v1/deployments/events/status
```

#### Description

Batch processing oriented API to retrieve deployment status events. This API is not intended for frequent requests but can retrieve lot of data.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|timedRequest|timedRequest|true|TimedRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|GetMultipleJsonResult|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get deployment status events from a given date.
```
GET /rest/v1/deployments/events/status/scroll
```

#### Description

Batch processing oriented API to retrieve deployment status events. This API is not intended for frequent requests but can retrieve lot of data.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|scrollId|scrollId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|ScrollJsonResult|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get deployment status events from a given date.
```
POST /rest/v1/deployments/events/status/scroll
```

#### Description

Batch processing oriented API to retrieve deployment status events. This API is not intended for frequent requests but can retrieve lot of data.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|timedRequest|timedRequest|true|ScrollTimedRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|ScrollJsonResult|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

