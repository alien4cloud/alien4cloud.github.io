---
layout: post
title: Heapdump Mvc Endpoint
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_admin-api]
node_name: rest_api_controller_heapdump-mvc-endpoint
weight: 60
---

### invoke
```
GET /rest/admin/heapdump
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|live|live|false|boolean||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/octet-stream

### invoke
```
GET /rest/admin/heapdump.json
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|live|live|false|boolean||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/octet-stream

