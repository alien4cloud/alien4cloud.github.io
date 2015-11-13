---
layout: post
title: Location Roles Controller
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_location-roles-controller
weight: 4
---

### Add a role to a group on a specific location
```
PUT /rest/orchestrators/{orchestratorId}/locations/{locationId}/roles/groups/{groupId}/{role}
```

#### Description

Only user with ADMIN role can assign any role to a group of users.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|PathParameter|groupId|groupId|true|string||
|PathParameter|role|role|true|string||


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

### Remove a role of a group on a specific location
```
DELETE /rest/orchestrators/{orchestratorId}/locations/{locationId}/roles/groups/{groupId}/{role}
```

#### Description

Only user with ADMIN role can unassign any role to a group.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|PathParameter|groupId|groupId|true|string||
|PathParameter|role|role|true|string||


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

### Add a role to a user on a specific location
```
PUT /rest/orchestrators/{orchestratorId}/locations/{locationId}/roles/users/{username}/{role}
```

#### Description

Only user with ADMIN role can assign any role to another user.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|PathParameter|username|username|true|string||
|PathParameter|role|role|true|string||


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

### Remove a role to a user on a specific location
```
DELETE /rest/orchestrators/{orchestratorId}/locations/{locationId}/roles/users/{username}/{role}
```

#### Description

Only user with ADMIN role can unassign any role to another user.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|PathParameter|username|username|true|string||
|PathParameter|role|role|true|string||


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

