---
layout: post
title: Location policy resource security batch operations
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_location-policy-resources-batch-security-controller
weight: 6
---

### Update applications, environments and environment type authorized to access the location resource
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/policies/security/environmentsPerApplication
```

#### Description

Only user with ADMIN role can update authorized applications/environments for the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|BodyParameter|request|request|true|ApplicationEnvironmentAuthorizationUpdateRequest||


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

### Bulk api to grant/revoke permissions for multiple groups on multiple location resources.
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/policies/security/groups
```

#### Description

Only user with ADMIN role can grant access to a group.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|BodyParameter|request|request|true|SubjectsAuthorizationRequest||


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

### Bulk api to grant/revoke permissions to multiple users on multiple location resources.
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/policies/security/users
```

#### Description

Only user with ADMIN role can grant access to another users.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|BodyParameter|request|request|true|SubjectsAuthorizationRequest||


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

