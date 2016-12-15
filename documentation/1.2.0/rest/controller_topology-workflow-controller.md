---
layout: post
exclude_from_search: true
title: Topology Workflow Controller
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_controller_topology-workflow-controller
weight: 27
---

### getWorkflows
```
GET /rest/topologies/{topologyId}/workflows
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Set«string»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### createWorkflow
```
POST /rest/topologies/{topologyId}/workflows
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### removeWorkflow
```
DELETE /rest/topologies/{topologyId}/workflows/{workflowName}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### renameWorkflow
```
POST /rest/topologies/{topologyId}/workflows/{workflowName}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|QueryParameter|newName|newName|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### addActivity
```
POST /rest/topologies/{topologyId}/workflows/{workflowName}/activities
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|BodyParameter|activityRequest|activityRequest|true|TopologyWorkflowAddActivityRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### removeEdge
```
DELETE /rest/topologies/{topologyId}/workflows/{workflowName}/edges/{from}/{to}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|PathParameter|from|from|true|string||
|PathParameter|to|to|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### initWorkflow
```
POST /rest/topologies/{topologyId}/workflows/{workflowName}/init
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### removeStep
```
DELETE /rest/topologies/{topologyId}/workflows/{workflowName}/steps/{stepId}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|PathParameter|stepId|stepId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### renameStep
```
POST /rest/topologies/{topologyId}/workflows/{workflowName}/steps/{stepId}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|PathParameter|stepId|stepId|true|string||
|QueryParameter|newStepName|newStepName|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### connectStepFrom
```
POST /rest/topologies/{topologyId}/workflows/{workflowName}/steps/{stepId}/connectFrom
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|PathParameter|stepId|stepId|true|string||
|BodyParameter|stepNames|stepNames|true|string array||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### connectStepTo
```
POST /rest/topologies/{topologyId}/workflows/{workflowName}/steps/{stepId}/connectTo
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|PathParameter|stepId|stepId|true|string||
|BodyParameter|stepNames|stepNames|true|string array||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### swap
```
POST /rest/topologies/{topologyId}/workflows/{workflowName}/steps/{stepId}/swap
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|workflowName|workflowName|true|string||
|PathParameter|stepId|stepId|true|string||
|QueryParameter|targetId|targetId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Workflow»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

