---
layout: post
title: Audit Controller
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [rest_api, rest_api_admin-audit-api]
node_name: rest_api_controller_audit-controller
weight: 12
---

### Get audit configuration
```
GET /rest/v1/audit/configuration
```

#### Description

Get the audit configuration object. Audit configuration is only accessible to user with role [ ADMIN ]

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«AuditConfigurationDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Enable/Disable audit on a list of methods
```
POST /rest/v1/audit/configuration/audited-methods
```

#### Description

Audit configuration update is only accessible to user with role [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|methods|methods|true|AuditedMethod array||


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

### Enable/Disable audit
```
POST /rest/v1/audit/configuration/enabled
```

#### Description

Audit configuration update is only accessible to user with role [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|enabled|enabled|true|boolean||


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

### Reset the audit configuration
```
POST /rest/v1/audit/configuration/reset
```

#### Description

Reset the audit configuration to its default state. Audit search is only accessible to user with role [ ADMIN ]

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«AuditConfigurationDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Search for audit trace
```
POST /rest/v1/audit/search
```

#### Description

Returns a search result with that contains auti traces matching the request. Audit search is only accessible to user with role [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|searchRequest|searchRequest|true|FilteredSearchRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«FacetedSearchResult»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

