---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_definitions_other-apis
weight: 9000
---

{% summary %}{% endsummary %}

# RestResponse«TopologyPortabilityInsight»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|TopologyPortabilityInsight||
|error||false|RestError||


# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


# RepositoryPluginComponent


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|pluginComponent||false|Result for a request for specific plugin components.||
|repositoryType||false|string||


# Creation request for a suggestion.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|esIndex|Id of elasticsearch index where, the property to be suggested, is located .|false|string||
|esType|Id of elasticsearch type where, the property to be suggested, is located.|false|string||
|suggestions|List of initial values for suggestions.|false|string array||
|targetElementId|Id of the element where, the property to be suggested, is located.|false|string||
|targetProperty|Id of the property to be suggested.|false|string||


# UserStatus


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|authSystem||false|string||
|githubUsername||false|string||
|groups||false|string array||
|isLogged||false|boolean||
|roles||false|Collection«string»||
|username||false|string||


# Map«string,Array«string»»

# FilteredSearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


# TopologyPortabilityInsight


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|limitations||false|PortabilityLimitation array||
|locationLimitations||false|object||
|locations||false|PortableLocationDTO array||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# PortableLocationDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|environmentNames||false|string array||
|infrastructureType||false|string||
|locationId||false|string||
|locationName||false|string||
|orchestratorId||false|string||
|orchestratorName||false|string||
|portabilityLevel||false|enum (ERROR, WARNING, INFO)||


# Map«string,Array«FacetedSearchFacet»»

# Collection«string»

# PortabilityLimitation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|enum (NOT_NORMATIVE, ORCHESTRATOR_DEPENDENT, IAAS_DEPENDENT, LOCATION_RESOURCE_MATCH, ARTIFACT_NOT_SUPPORTED_ON_HOST, RUNTIME_PACKAGE_NOT_SATISFIED, ARTIFACT_AND_RUNTIME_NOT_SATISFIED, ORCHESTRATOR_CONFLICT, IAAS_CONFLICT, ARTIFACT_SUPPORT, RUNTIME_PACKAGE)||
|info||false|string array||
|level||false|enum (ERROR, WARNING, INFO)||


# CreateRepositoryRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|configuration||false|object||
|name||false|string||
|pluginId||false|string||


# Map«string,List«PortabilityLimitation»»

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


# RestResponse«UserStatus»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|UserStatus||
|error||false|RestError||


# Result for a request for specific plugin components.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|componentDescriptor|Description of the component within the plugin.|false|Describe a component of a plugin (can be an IOrchestrator etc.).||
|pluginId|Id of the plugin that contains the component.|false|string||
|pluginName|Name of the plugin that contains the component.|false|string||
|version|Version of the plugin that contains the component.|false|string||


# Describe a component of a plugin (can be an IOrchestrator etc.).


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|beanName|Name of the component bean in the plugin spring context.|false|string||
|description|Description of the plugin.|false|string||
|name|Name of the plugin component.|false|string||
|type|Type of the plugin.|false|string||


# RestResponse«Array«string»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string array||
|error||false|RestError||


# RestResponse«List«RepositoryPluginComponent»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|RepositoryPluginComponent array||
|error||false|RestError||


# BasicSearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||


# UpdateRepositoryRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|configuration||false|object||
|name||false|string||


# RestResponse«object»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# RestResponse«GetMultipleDataResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult||
|error||false|RestError||


# GetMultipleDataResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


