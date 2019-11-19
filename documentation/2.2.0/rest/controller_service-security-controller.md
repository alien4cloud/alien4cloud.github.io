---
layout: post
title: Allow to grant/revoke services authorizations
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_service-security-controller
weight: 49
---

### Revoke the application's authorisation to access the service resource
```
DELETE /rest/v1/services/{serviceId}/security/applications/{applicationId}
```

#### Description

Only user with ADMIN role can revoke access to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||
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

### List all applications, environments and environment types authorized to access the service resource
```
GET /rest/v1/services/{serviceId}/security/environmentsPerApplication
```

#### Description

Only user with ADMIN role can list authorized applications, environments and environment types for the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||


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

### Update applications, environments and environment types authorized to access the service resource
```
POST /rest/v1/services/{serviceId}/security/environmentsPerApplication
```

#### Description

Only user with ADMIN role can update authorized applications, environments and environment types for the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||
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

### List all groups authorized to access the service resource
```
GET /rest/v1/services/{serviceId}/security/groups
```

#### Description

Only user with ADMIN role can list authorized groups to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||


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

### Grant access to the service resource to the groups
```
POST /rest/v1/services/{serviceId}/security/groups
```

#### Description

Only user with ADMIN role can grant access to a group.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||
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

### Revoke the group's authorisation to access the service resource
```
DELETE /rest/v1/services/{serviceId}/security/groups/{groupId}
```

#### Description

Only user with ADMIN role can revoke access to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||
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

### List all users authorized to access the service resource
```
GET /rest/v1/services/{serviceId}/security/users
```

#### Description

Only user with ADMIN role can list authorized users to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||


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

### Grant access to the service to the users, send back the new authorised users list
```
POST /rest/v1/services/{serviceId}/security/users
```

#### Description

Only user with ADMIN role can grant access to another users.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||
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

### Revoke the user's authorisation to access the service resource, send back the new authorised users list
```
DELETE /rest/v1/services/{serviceId}/security/users/{username}
```

#### Description

Only user with ADMIN role can revoke access to the location.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|serviceId|serviceId|true|string||
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

