---
layout: post
title: Topology Substitutions Controller
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_controller_topology-substitutions-controller
weight: 29
---

### Expose the given capability as a capability for the substitution type associated with this topology.
```
PUT /rest/topologies/{topologyId}/substitutions/capabilities/{substitutionCapabilityId}
```

#### Description

Role required [ ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|substitutionCapabilityId|The substitution capability name.|true|string||
|QueryParameter|nodeTemplateName|The node template id.|true|string||
|QueryParameter|capabilityId|The source node capability id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|201|Created|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Remove the substitution capability from the substitution type.
```
DELETE /rest/topologies/{topologyId}/substitutions/capabilities/{substitutionCapabilityId}
```

#### Description

Role required [ ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|substitutionCapabilityId|The substitution capability name.|true|string||


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

### Update the substitution capability (typically change it's name).
```
POST /rest/topologies/{topologyId}/substitutions/capabilities/{substitutionCapabilityId}
```

#### Description

Role required [ ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|substitutionCapabilityId|The substitution capability name.|true|string||
|QueryParameter|newCapabilityId|The new capability name.|true|string||


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

### Expose the given requirement as a requirement for the substitution type associated with this topology.
```
PUT /rest/topologies/{topologyId}/substitutions/requirements/{substitutionRequirementId}
```

#### Description

Role required [ ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|substitutionRequirementId|The substitution requirement name.|true|string||
|QueryParameter|nodeTemplateName|The node template id.|true|string||
|QueryParameter|requirementId|The source node requirement id.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|201|Created|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Remove the requirement from the substitution type associated to this topology.
```
DELETE /rest/topologies/{topologyId}/substitutions/requirements/{substitutionRequirementId}
```

#### Description

Role required [ ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|substitutionRequirementId|The substitution requirement name.|true|string||


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

### Update the substitution requirement (typically change it's name).
```
POST /rest/topologies/{topologyId}/substitutions/requirements/{substitutionRequirementId}
```

#### Description

Role required [ ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|The topology id.|true|string||
|PathParameter|substitutionRequirementId|The substitution requirement name.|true|string||
|QueryParameter|newRequirementId|The new substution requirement name.|true|string||


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

### Define the type this topology can substitute. When this method is called, a new type is created : it is derived from this one.
```
PUT /rest/topologies/{topologyId}/substitutions/type
```

#### Description

Returns a topology with it's details. Role required [ ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|QueryParameter|elementId|elementId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|201|Created|RestResponse«TopologyDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Remove the substitution type, delete the corresponding type (if not already used)
```
DELETE /rest/topologies/{topologyId}/substitutions/type
```

#### Description

Returns a topology with it's details. Role required [ ARCHITECT ]

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
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

