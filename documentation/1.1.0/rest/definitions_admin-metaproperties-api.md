---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_admin-metaproperties-api]
node_name: rest_api_definitions_admin-metaproperties-api
weight: 9000
---

{% summary %}{% endsummary %}

# SearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||
|type||false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE)||


# RestResponse«TagConfigurationSaveResponse»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|TagConfigurationSaveResponse||
|error||false|RestError||


# PropertyDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|constraints||false|PropertyConstraint array||
|default||false|string||
|definition||false|boolean||
|description||false|string||
|password||false|boolean||
|required||false|boolean||
|type||false|string||


# RestResponse«MetaPropConfiguration»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|MetaPropConfiguration||
|error||false|RestError||


# Map«string,Array«string»»

# MetaPropConfiguration


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|constraints||false|PropertyConstraint array||
|default||false|string||
|definition||false|boolean||
|description||false|string||
|entrySchema||false|PropertyDefinition||
|id||false|string||
|name||false|string||
|password||false|boolean||
|required||false|boolean||
|target||false|string||
|type||false|string||


# PropertyConstraint

# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


# TagConfigurationSaveResponse


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|id||false|string||
|validationErrors||false|TagConfigurationValidationError array||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# Map«string,Array«FacetedSearchFacet»»

# TagConfigurationValidationError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|string||
|path||false|string||


# FacetedSearchResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object array||
|facets||false|object||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


