---
layout: post
title: Get matching options for a given topology.
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_controller_topology-location-matching-controller
weight: 44
---

### Retrieve the list of locations on which the current user can deploy the topology.
```
GET /rest/v1/topologies/{topologyId}/locations
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|QueryParameter|environmentId|environmentId|false|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«ILocationMatch»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

