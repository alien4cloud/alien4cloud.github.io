---
layout: post
exclude_from_search: true
title: Metrics Mvc Endpoint
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_admin-api]
node_name: rest_api_controller_metrics-mvc-endpoint
weight: 38
---

### invoke
```
GET /rest/admin/metrics
```

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|object|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### value
```
GET /rest/admin/metrics/{name}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|name|name|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|object|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

