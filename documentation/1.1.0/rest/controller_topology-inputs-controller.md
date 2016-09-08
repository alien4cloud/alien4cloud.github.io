---
layout: post
exclude_from_search: true
title: Topology Inputs Controller
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_controller_topology-inputs-controller
weight: 25
---

### Change the name of an input parameter.
```
PUT /rest/topologies/{topologyId}/inputs/{inputId}
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|inputId|The name of the old input.|true|string||
|QueryParameter|newInputId|The name of the new input.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Remove an input from a topology.
```
DELETE /rest/topologies/{topologyId}/inputs/{inputId}
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|inputId|The name of the input.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Activate a property as an input property.
```
POST /rest/topologies/{topologyId}/inputs/{inputId}
```

#### Description

Activate a property as an input property. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|inputId|The name of new input.|true|string||
|BodyParameter|newPropertyDefinition|The property definition of the new input.|true|PropertyDefinition||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Associate the property of a capability template to an input of the topology.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/capability/{capabilityId}/property/{propertyId}/input
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||
|PathParameter|capabilityId|The capability template id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Associate the property of a capability template to an input of the topology.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/capability/{capabilityId}/property/{propertyId}/input
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|QueryParameter|inputId|The name of the input.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||
|PathParameter|capabilityId|The capability template id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get the possible inputs candidates to be associated with this capability property.
```
GET /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/capability/{capabilityId}/property/{propertyId}/inputcandidats
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||
|PathParameter|capabilityId|The capability template id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«string»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Disassociated the property of a node template to an input of the topology.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/property/{propertyId}/input
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Associate the property of a node template to an input of the topology.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/property/{propertyId}/input
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|QueryParameter|inputId|The name of the input.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get the possible inputs candidates to be associated with this property.
```
GET /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/property/{propertyId}/inputcandidats
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«string»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Disassociated the property of a relationship template to an input of the topology.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/relationship/{relationshipId}/property/{propertyId}/input
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||
|PathParameter|relationshipId|The relationship template id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Associate the property of a relationship template to an input of the topology.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/relationship/{relationshipId}/property/{propertyId}/input
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|QueryParameter|inputId|The name of the input.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||
|PathParameter|relationshipId|The relationship template id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«TopologyDTO»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get the possible inputs candidates to be associated with this relationship property.
```
GET /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/relationship/{relationshipId}/property/{propertyId}/inputcandidats
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|nodeTemplateName|The node temlate id.|true|string||
|PathParameter|propertyId|The property id.|true|string||
|PathParameter|relationshipId|The relationship template id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«string»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

