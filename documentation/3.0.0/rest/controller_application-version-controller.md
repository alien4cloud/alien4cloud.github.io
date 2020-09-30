---
layout: post
title: Manages application's versions
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-version-controller
weight: 38
---

### Get the first snapshot application version for an application.
```
GET /rest/v1/applications/{applicationId}/versions
```

#### Description

Return the first snapshot application version for an application. Application role required [ APPLICATION_MANAGER | APPLICATION_USER | APPLICATION_DEVOPS | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ApplicationVersion»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Create a new application version.
```
POST /rest/v1/applications/{applicationId}/versions
```

#### Description

If successfull returns a rest response with the id of the created application version in data. If not successful a rest response with an error content is returned. Application role required [ APPLICATIONS_MANAGER ]. By default the application version creator will have application roles [APPLICATION_MANAGER]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|request|request|true|CreateApplicationVersionRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|201|Created|RestResponse«string»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Search application versions
```
POST /rest/v1/applications/{applicationId}/versions/search
```

#### Description

Returns a search result with that contains application versions matching the request. A application version is returned only if the connected user has at least one application role in [ APPLICATION_MANAGER | APPLICATION_USER | APPLICATION_DEVOPS | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|searchRequest|searchRequest|true|FilteredSearchRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult«ApplicationVersion»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get an application version based from its id.
```
GET /rest/v1/applications/{applicationId}/versions/{applicationVersionId}
```

#### Description

Returns the application version details. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationVersionId|applicationVersionId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ApplicationVersion»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Updates by merging the given request into the given application version
```
PUT /rest/v1/applications/{applicationId}/versions/{applicationVersionId}
```

#### Description

Updates by merging the given request into the given application version. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationVersionId|applicationVersionId|true|string||
|BodyParameter|request|request|true|UpdateApplicationVersionRequest||


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

### Delete an application version from its id
```
DELETE /rest/v1/applications/{applicationId}/versions/{applicationVersionId}
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationVersionId|applicationVersionId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«boolean»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

