---
layout: post
title: Maintenance mode operations.
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_maintenance-mode-controller
weight: 46
---

### Get state on current maintenance task.
```
GET /rest/v1/maintenance
```

#### Description

Maintenance mode task contains an optional percentage element to provide state on maintenance progress.

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«MaintenanceModeState»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update maintenance state.
```
PUT /rest/v1/maintenance
```

#### Description

Allow to add a message and eventually update progress of the maintenance.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|updateDTO|updateDTO|true|MaintenanceUpdateDTO||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|201|Created|RestResponse«Void»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Disable maintenance mode.
```
DELETE /rest/v1/maintenance
```

#### Description

Maintenance mode can be disabled only when it has been enabled by a user. Automatic maintenance (migrations etc) cannot be disabled through rest api.

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

### Enable maintenance mode.
```
POST /rest/v1/maintenance
```

#### Description

All requests but disable maintenance mode and get maintenance mode state will be denied.

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|201|Created|RestResponse«Void»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

