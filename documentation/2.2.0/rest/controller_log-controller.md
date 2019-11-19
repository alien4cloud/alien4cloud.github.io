---
layout: post
title: Adminitration api for deployment logs access.
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_log-controller
weight: 52
---

### Search for logs of a given deployment
```
POST /rest/v1/deployment/logs/search
```

#### Description

Returns a search result with that contains logs matching the request.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
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

