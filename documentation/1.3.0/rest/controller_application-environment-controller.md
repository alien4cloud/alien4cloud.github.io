---
layout: post
title: Manages application's environments
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-environment-controller
weight: 23
---

### Create a new application environment
```
POST /rest/applications/{applicationId}/environments
```

#### Description

If successfull returns a rest response with the id of the created application environment in data. If not successful a rest response with an error content is returned. Role required [ APPLICATIONS_MANAGER ]By default the application environment creator will have application roles [ APPLICATION_MANAGER, DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|request|request|true|ApplicationEnvironmentRequest||


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

### Search for application environments
```
POST /rest/applications/{applicationId}/environments/search
```

#### Description

Returns a search result with that contains application environments DTO matching the request. A application environment is returned only if the connected user has at least one application role in [ APPLICATION_USER | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|searchRequest|searchRequest|true|SearchRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult«ApplicationEnvironmentDTO»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get an application environment from its id
```
GET /rest/applications/{applicationId}/environments/{applicationEnvironmentId}
```

#### Description

Returns the application environment. Application role required [ APPLICATION_USER | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ApplicationEnvironment»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Updates by merging the given request into the given application environment
```
PUT /rest/applications/{applicationId}/environments/{applicationEnvironmentId}
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||
|BodyParameter|request|request|true|UpdateApplicationEnvironmentRequest||


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

### Delete an application environment from its id
```
DELETE /rest/applications/{applicationId}/environments/{applicationEnvironmentId}
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


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

### Get an application environment from its id
```
GET /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/status
```

#### Description

Returns the application environment. Application role required [ APPLICATION_USER | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«string»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get the id of the topology linked to the environment
```
GET /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/topology
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«string»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

