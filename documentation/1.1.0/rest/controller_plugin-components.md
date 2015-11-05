---
layout: post
title: Allow to query for enabled plugin components.
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_plugin-components
weight: 32
---

### Search for plugin components.
```
GET /rest/plugincomponents
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|type|Type of plugin component to query for.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«Result for a request for specific plugin components.»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

