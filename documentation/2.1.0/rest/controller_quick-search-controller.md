---
layout: post
title: Quick Search Controller
root: ../../
categories: DOCUMENTATION-2.1.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_quick-search-controller
weight: 55
---

### Search for applications or tosca elements in ALIEN's repository.
```
POST /rest/v1/quicksearch
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|requestObject|requestObject|true|BasicSearchRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Search for relationship types in ALIEN's repository.
```
POST /rest/v1/quicksearch/relationship_types
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|requestObject|requestObject|true|BasicSearchRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

