---
layout: post
title: Orchestrator Roles Controller
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_orchestrator-roles-controller
weight: 7
---

### Add a role to a group on all locations of a specific orchestrator
```
PUT /rest/orchestrators/{orchestratorId}/roles/groups/{groupId}/{role}
```

#### Description

Only user with ADMIN role can assign any role to a group of users.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
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

### Remove a role of a group on all locations of a specific orchestrator
```
DELETE /rest/orchestrators/{orchestratorId}/roles/groups/{groupId}/{role}
```

#### Description

Only user with ADMIN role can unassign any role to a group.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
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

### Add a role to a user on all locations of a specific orchestrator
```
PUT /rest/orchestrators/{orchestratorId}/roles/users/{username}/{role}
```

#### Description

Only user with ADMIN role can assign any role to another user.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
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

### Remove a role to a user on all locations of a specific orchestrator
```
DELETE /rest/orchestrators/{orchestratorId}/roles/users/{username}/{role}
```

#### Description

Only user with ADMIN role can unassign any role to another user.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
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

