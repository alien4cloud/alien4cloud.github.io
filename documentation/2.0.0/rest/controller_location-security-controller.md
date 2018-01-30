---
layout: post
title: Orchestrator security operations
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_controller_location-security-controller
weight: 5
---

### List all applications,environments and environment types authorized to access the location
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/applications/search
```

#### Description

Only user with ADMIN role can list authorized applications,environments and environment types to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|QueryParameter|query|Text Query to search.|false|string||
|QueryParameter|from|Query from the given index.|false|integer (int32)||
|QueryParameter|size|Maximum number of results to retrieve.|false|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult«ApplicationEnvironmentAuthorizationDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Revoke the application's authorisation to access the location
```
DELETE /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/applications/{applicationId}
```

#### Description

Only user with ADMIN role can revoke access to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|PathParameter|applicationId|applicationId|true|string||


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

### List all applications,environments and environment types authorized to access the location
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/environmentsPerApplication
```

#### Description

Only user with ADMIN role can list authorized applications,environments and environment types for the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«ApplicationEnvironmentAuthorizationDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update applications,environments and environment types authorized to access the location
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/environmentsPerApplication
```

#### Description

Only user with ADMIN role can update authorized applications,environments and environment types for the location.

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

### List all groups authorized to access the location
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/groups
```

#### Description

Only user with ADMIN role can list authorized groups to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«GroupDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Grant access to the location to the groups
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/groups
```

#### Description

Only user with ADMIN role can grant access to a group.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|BodyParameter|groupIds|groupIds|true|string array||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«GroupDTO»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### List all groups authorized to access the location
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/groups/search
```

#### Description

Only user with ADMIN role can list authorized groups to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|QueryParameter|query|Text Query to search.|false|string||
|QueryParameter|from|Query from the given index.|false|integer (int32)||
|QueryParameter|size|Maximum number of results to retrieve.|false|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult«GroupDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Revoke the group's authorisation to access the location
```
DELETE /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/groups/{groupId}
```

#### Description

Only user with ADMIN role can revoke access to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|PathParameter|groupId|groupId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«GroupDTO»»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### List all users authorized to access the location
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/users
```

#### Description

Only user with ADMIN role can list authorized users to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«UserDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Grant access to the location to the users, send back the new authorised users list
```
POST /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/users
```

#### Description

Only user with ADMIN role can grant access to another users.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|BodyParameter|userNames|userNames|true|string array||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«UserDTO»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### List all users authorized to access the location
```
GET /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/users/search
```

#### Description

Only user with ADMIN role can list authorized users to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|QueryParameter|query|Text Query to search.|false|string||
|QueryParameter|from|Query from the given i*ndex.|false|integer (int32)||
|QueryParameter|size|Maximum number of results to retrieve.|false|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult«UserDTO»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Revoke the user's authorisation to access the location, send back the new authorised users list
```
DELETE /rest/v1/orchestrators/{orchestratorId}/locations/{locationId}/security/users/{username}
```

#### Description

Only user with ADMIN role can revoke access to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|orchestratorId|orchestratorId|true|string||
|PathParameter|locationId|locationId|true|string||
|PathParameter|username|username|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«UserDTO»»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

