---
layout: post
title: Manages application's deployment logs
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-log-controller
weight: 32
---

### Search for logs of a given deployment
```
POST /rest/v1/applications/{applicationId}/environments/{applicationEnvironmentId}/logs/search
```

#### Description

Returns a search result with that contains logs matching the request. 

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
|200|OK|RestResponse«FacetedSearchResult«PaaSDeploymentLog»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Search for logs of all deployments for a given application
```
POST /rest/v1/applications/{applicationId}/logs/search
```

#### Description

Returns a search result with that contains logs matching the request.

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
|200|OK|RestResponse«FacetedSearchResult«PaaSDeploymentLog»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

