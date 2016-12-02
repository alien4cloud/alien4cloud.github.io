---
layout: post
title: Manages application's deploymeng logs
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-log-controller
weight: 20
---

### Search for applications
```
POST /rest/v1/applications/{applicationId}/environments/{applicationEnvironmentId}/logs/search
```

#### Description

Returns a search result with that contains applications matching the request. A application is returned only if the connected user has at least one application role in [ APPLICATION_MANAGER | APPLICATION_USER | APPLICATION_DEVOPS | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||
|BodyParameter|searchRequest|searchRequest|true|SearchLogRequest||


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

### Search for applications
```
POST /rest/v1/applications/{applicationId}/logs/search
```

#### Description

Returns a search result with that contains applications matching the request. A application is returned only if the connected user has at least one application role in [ APPLICATION_MANAGER | APPLICATION_USER | APPLICATION_DEVOPS | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|searchRequest|searchRequest|true|SearchLogRequest||


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

