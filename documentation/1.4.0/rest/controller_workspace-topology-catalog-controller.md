---
layout: post
title: Topology catalog with workspace.
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_workspaces-api]
node_name: rest_api_controller_workspace-topology-catalog-controller
weight: 19
---

### Create a topology and register it in the catalog
```
POST /rest/v1/workspaces/topologies/template
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|createTopologyRequest|createTopologyRequest|true|CreateTopologyRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«string»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

