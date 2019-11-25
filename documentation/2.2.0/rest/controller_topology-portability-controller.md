---
layout: post
title: Topology Portability Controller
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_topology-portability-controller
weight: 56
---

### Evaluate the portability of a topology.
```
GET /rest/v1/portability/topology/{topologyId}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|Id of the orchestrator for which to update resource template property.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyPortabilityInsight»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

