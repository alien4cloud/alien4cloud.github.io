---
layout: post
title: Operations on workspaces
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_workspaces-api]
node_name: rest_api_controller_workspace-controller
weight: 23
---

### Get workspaces that the current user has the right to upload to
```
GET /rest/v1/workspaces
```

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«Workspace»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Search for csars with workspaces information
```
POST /rest/v1/workspaces/csars/search
```

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

### Calculate the impact of the promotion
```
GET /rest/v1/workspaces/promotion-impact
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|csarName|csarName|true|string||
|QueryParameter|csarVersion|csarVersion|true|string||
|QueryParameter|targetWorkspace|targetWorkspace|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«CSARPromotionImpact»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Perform or accept the promotion
```
POST /rest/v1/workspaces/promotions
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|promotionRequest|promotionRequest|true|PromotionRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«PromotionRequest»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Search for promotion
```
POST /rest/v1/workspaces/promotions/search
```

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

