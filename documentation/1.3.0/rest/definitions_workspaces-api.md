---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_workspaces-api]
node_name: rest_api_definitions_workspaces-api
weight: 9000
---

{% summary %}{% endsummary %}

# Csar


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definitionHash||false|string||
|delegateId||false|string||
|delegateType||false|string||
|dependencies||false|CSARDependency array||
|description||false|string||
|hash||false|string||
|id||false|string||
|importDate||false|string (date-time)||
|importSource||false|string||
|license||false|string||
|name||false|string||
|nestedVersion||false|Version||
|tags||false|Tag array||
|templateAuthor||false|string||
|toscaDefaultNamespace||false|string||
|toscaDefinitionsVersion||false|string||
|version||false|string||
|workspace||false|string||
|yamlFilePath||false|string||


# SearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||
|type||false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE)||


# Usage


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|resourceId||false|string||
|resourceName||false|string||
|resourceType||false|string||
|workspace||false|string||


# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


# RestResponse«PromotionRequest»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|PromotionRequest||
|error||false|RestError||


# Map«string,List«Usage»»

# Map«string,Csar»

# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|hash||false|string||
|name||false|string||
|version||false|string||


# Map«string,Array«string»»

# RestResponse«List«Workspace»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Workspace array||
|error||false|RestError||


# Version


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|buildNumber||false|integer (int32)||
|incrementalVersion||false|integer (int32)||
|majorVersion||false|integer (int32)||
|minorVersion||false|integer (int32)||
|qualifier||false|string||


# CSARPromotionImpact


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|currentUsages||false|object||
|hasWriteAccessOnTarget||false|boolean||
|impactedCsars||false|object||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# PromotionRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|csarName||false|string||
|csarVersion||false|string||
|id||false|string||
|processDate||false|string (date-time)||
|processUser||false|string||
|requestDate||false|string (date-time)||
|requestUser||false|string||
|status||false|enum (INIT, ACCEPTED, REFUSED)||
|targetWorkspace||false|string||


# CreateTopologyRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|fromTopologyId||false|string||
|name||false|string||
|version||false|string||
|workspace||false|string||


# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# Map«string,Array«FacetedSearchFacet»»

# RestResponse«CSARPromotionImpact»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CSARPromotionImpact||
|error||false|RestError||


# Tag


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|value||false|string||


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


# Workspace


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|id||false|string||
|name||false|string||
|roles||false|enum (ADMIN, APPLICATIONS_MANAGER, ARCHITECT, COMPONENTS_MANAGER, COMPONENTS_BROWSER) array||
|scope||false|enum (user, group, app, ALIEN_GLOBAL_WORKSPACE)||


