---
layout: post
exclude_from_search: true
title: Topology Controller
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_controller_topology-controller
weight: 28
---

### Retrieve a topology from it's id.
```
GET /rest/topologies/{topologyId}
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

### Un-associate an artifact from the input artifact.
```
DELETE /rest/topologies/{topologyId}/inputArtifacts/{inputArtifactId}
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|inputArtifactId|inputArtifactId|true|string||


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

### Rename input artifact id.
```
POST /rest/topologies/{topologyId}/inputArtifacts/{inputArtifactId}
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|inputArtifactId|inputArtifactId|true|string||
|QueryParameter|newId|newId|true|string||


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

### Updates the deployment artifact of the node template.
```
POST /rest/topologies/{topologyId}/inputArtifacts/{inputArtifactId}/upload
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|inputArtifactId|inputArtifactId|true|string||
|FormDataParameter|file|artifactFile|true|file||


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

* multipart/form-data

#### Produces

* application/json

### Check if a topology is valid or not.
```
GET /rest/topologies/{topologyId}/isvalid
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

### updateGroupName
```
PUT /rest/topologies/{topologyId}/nodeGroups/{groupName}
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|groupName|groupName|true|string||
|QueryParameter|newName|newGroupName|true|string||


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

### deleteNodeGroup
```
DELETE /rest/topologies/{topologyId}/nodeGroups/{groupName}
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|groupName|groupName|true|string||


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

### Remove a node from a node group.
```
DELETE /rest/topologies/{topologyId}/nodeGroups/{groupName}/members/{nodeName}
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|groupName|groupName|true|string||
|PathParameter|nodeName|nodeName|true|string||


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

### Add a node to a node group. If the group doesn't exists, it's created.
```
POST /rest/topologies/{topologyId}/nodeGroups/{groupName}/members/{nodeName}
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|groupName|groupName|true|string||
|PathParameter|nodeName|nodeName|true|string||


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

### Add a new node template in a topology.
```
POST /rest/topologies/{topologyId}/nodetemplates
```

#### Description

Returns the details of the node template (computed from it's type). Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|BodyParameter|nodeTemplateRequest|nodeTemplateRequest|true|NodeTemplateRequest||


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

### Delete a node tempalte from a topology
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}
```

#### Description

If successful returns a result containing the list of impacted nodes (that will loose relationships). Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||


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

### Updates the deployment artifact of the node template.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/artifacts/{artifactId}
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|artifactId|artifactId|true|string||
|FormDataParameter|file|artifactFile|true|file||


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

* multipart/form-data

#### Produces

* application/json

### Reset the deployment artifact of the node template.
```
PUT /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/artifacts/{artifactId}/reset
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|artifactId|artifactId|true|string||


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

### Un-associate an artifact from the input artifact.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/artifacts/{artifactId}/{inputArtifactId}
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|artifactId|artifactId|true|string||
|PathParameter|inputArtifactId|inputArtifactId|true|string||


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

### Associate an artifact to an input artifact (create it if it doesn't exist).
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/artifacts/{artifactId}/{inputArtifactId}
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|artifactId|artifactId|true|string||
|PathParameter|inputArtifactId|inputArtifactId|true|string||


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

### Get the list of input artifacts candidates for this node's artifact.
```
GET /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/artifacts/{artifactName}/inputcandidates
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|artifactName|artifactName|true|string||


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

### Remove an attribute from the output attributes list.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/attributes/{attributeName}/output
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|attributeName|attributeName|true|string||


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

### Activate an attribute as an output attribute.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/attributes/{attributeName}/output
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|attributeName|attributeName|true|string||


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

### Remove a capability property from the output property list.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/capability/{capabilityId}/property/{propertyId}/isOutput
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|capabilityId|capabilityId|true|string||
|PathParameter|propertyId|propertyId|true|string||


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

### Activate a capability property as an output property.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/capability/{capabilityId}/property/{propertyId}/isOutput
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|propertyId|propertyId|true|string||
|PathParameter|capabilityId|capabilityId|true|string||


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

### Update a relationship property value.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/capability/{capabilityId}/updateProperty
```

#### Description

Returns a topology with it's details. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|capabilityId|capabilityId|true|string||
|BodyParameter|updatePropertyRequest|updatePropertyRequest|true|UpdateIndexedTypePropertyRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ConstraintInformation»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update properties values.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/properties
```

#### Description

Returns a topology with it's details. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|BodyParameter|updatePropertyRequest|updatePropertyRequest|true|UpdatePropertyRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ConstraintInformation»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Remove a property from the output property list.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/property/{propertyName}/isOutput
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|propertyName|propertyName|true|string||


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

### Activate a property as an output property.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/property/{propertyName}/isOutput
```

#### Description

Returns a response with no errors and no data in success case. Application role required [ APPLICATION_MANAGER | ARCHITECT ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|propertyName|propertyName|true|string||


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

### Delete a relationship from a node template.
```
DELETE /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/relationships/{relationshipName}
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|relationshipName|relationshipName|true|string||


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

### Add a relationship to a node template.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/relationships/{relationshipName}
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|relationshipName|relationshipName|true|string||
|BodyParameter|relationshipTemplateRequest|relationshipTemplateRequest|true|AddRelationshipTemplateRequest||


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

### Change the name of a node template in a topology.
```
PUT /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/relationships/{relationshipName}/updateName
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|relationshipName|relationshipName|true|string||
|QueryParameter|newName|newRelationshipName|true|string||


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

### Update a relationship property value.
```
POST /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/relationships/{relationshipName}/updateProperty
```

#### Description

Returns a topology with it's details. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|relationshipName|relationshipName|true|string||
|BodyParameter|updatePropertyRequest|updatePropertyRequest|true|UpdateIndexedTypePropertyRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«ConstraintInformation»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get possible replacement indexedNodeTypes for a node template.
```
GET /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/replace
```

#### Description

Returns An array of indexedNodeType which can replace the node template. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Array«IndexedNodeType»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Replace a node template possible with another one.
```
PUT /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/replace
```

#### Description

Returns the details of the new node template (computed from it's type). Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|BodyParameter|nodeTemplateRequest|nodeTemplateRequest|true|NodeTemplateRequest||


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

### Change the name of a node template in a topology.
```
PUT /rest/topologies/{topologyId}/nodetemplates/{nodeTemplateName}/updateName/{newNodeTemplateName}
```

#### Description

Returns a response with no errors in case of success. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|topologyId|topologyId|true|string||
|PathParameter|nodeTemplateName|nodeTemplateName|true|string||
|PathParameter|newNodeTemplateName|newNodeTemplateName|true|string||


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

### Get the version of application or topology related to this topology.
```
GET /rest/topologies/{topologyId}/version
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
|200|OK|RestResponse«AbstractTopologyVersion»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### getYaml
```
GET /rest/topologies/{topologyId}/yaml
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
|200|OK|RestResponse«string»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

