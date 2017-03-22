---
layout: post
title: Topology Controller
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_controller_topology-controller
weight: 38
---

### Retrieve a topology from it's id.
```
GET /rest/v1/topologies/{topologyId}
```

#### Description

Returns a topology with it's details. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Check if a topology is valid or not.
```
GET /rest/v1/topologies/{topologyId}/isvalid
```

#### Description

Returns true if valid, false if not. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

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
|200|OK|RestResponse«TopologyValidationResult»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

