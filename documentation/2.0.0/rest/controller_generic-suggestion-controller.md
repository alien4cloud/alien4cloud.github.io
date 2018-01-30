---
layout: post
title: Generic Suggestion Controller
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_generic-suggestion-controller
weight: 50
---

### Create a suggestion entry
```
POST /rest/v1/suggestions/
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|request|request|true|Creation request for a suggestion.||


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

### Initialize the default configured suggestions
```
POST /rest/v1/suggestions/init
```

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

### Get matched suggestions
```
GET /rest/v1/suggestions/{suggestionId}/values
```

#### Description

Returns the matched suggestions.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|suggestionId|suggestionId|true|string||
|QueryParameter|input|input|false|string||
|QueryParameter|limit|limit|false|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Array«string»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Add new suggestion value
```
PUT /rest/v1/suggestions/{suggestionId}/values/{value}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|suggestionId|suggestionId|true|string||
|PathParameter|value|value|true|string||


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

