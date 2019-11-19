---
layout: post
title: Operations on Components
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_catalog-api]
node_name: rest_api_controller_component-controller
weight: 22
---

### Get details for a component (tosca type) from it's id (including archive hash).
```
GET /rest/v1/components/element/{elementId}/version/{version}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|elementId|elementId|true|string||
|PathParameter|version|version|true|string||
|QueryParameter|toscaType|toscaType|false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE, POLICY_TYPE)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«AbstractToscaType»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Get details for a component (tosca type).
```
GET /rest/v1/components/element/{elementId}/versions
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|elementId|elementId|true|string||
|QueryParameter|toscaType|toscaType|false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE, POLICY_TYPE)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Array«CatalogVersionResult»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Verify that a component (tosca element) exists in alien's repository.
```
POST /rest/v1/components/exist
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|checkElementExistRequest|checkElementExistRequest|true|ElementFromArchiveRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«boolean»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get details for a component (tosca type).
```
POST /rest/v1/components/getInArchives
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|checkElementExistRequest|checkElementExistRequest|true|ElementFromArchiveRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«AbstractToscaType»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Set the given node type as default for the given capability.
```
POST /rest/v1/components/recommendation
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|recommendationRequest|recommendationRequest|true|RecommendationRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«NodeType»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get details for an indexed node type..
```
GET /rest/v1/components/recommendation/{capability}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|capability|capability|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«NodeType»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Search for components (tosca types) in alien.
```
POST /rest/v1/components/search
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|searchRequest|searchRequest|true|ComponentSearchRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«FacetedSearchResult«AbstractToscaType»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Remove a recommendation for a node type.
```
POST /rest/v1/components/unflag
```

#### Description

If a node type is set as default for a given capability, you can remove this setting by calling this operation with the right request parameters.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|recommendationRequest|recommendationRequest|true|RecommendationRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«NodeType»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Update or insert a tag for a component (tosca element).
```
POST /rest/v1/components/{componentId}/tags
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|componentId|componentId|true|string||
|BodyParameter|updateTagRequest|updateTagRequest|true|UpdateTagRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Delete a tag for a component (tosca element).
```
DELETE /rest/v1/components/{componentId}/tags/{tagId}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|componentId|componentId|true|string||
|PathParameter|tagId|tagId|true|string||


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

### Get details for a component (tosca type) from it's id (including archive hash).
```
GET /rest/v1/components/{id}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|id|id|true|string||
|QueryParameter|toscaType|toscaType|false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE, POLICY_TYPE)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«AbstractToscaType»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

