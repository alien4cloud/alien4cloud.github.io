---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_components-api]
node_name: rest_api_definitions_components-api
weight: 9000
---

{% summary %}{% endsummary %}

# Deployment


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|endDate||false|string (date-time)||
|environmentId||false|string||
|id||false|string||
|locationIds||false|string array||
|orchestratorDeploymentId||false|string||
|orchestratorId||false|string||
|sourceId||false|string||
|sourceName||false|string||
|sourceType||false|enum (APPLICATION, CSAR)||
|startDate||false|string (date-time)||
|versionId||false|string||
|workflowExecutions||false|object||


# RestResponse«List«Usage»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Usage array||
|error||false|RestError||


# RequirementDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilityName||false|string||
|description||false|string||
|id||false|string||
|lowerBound||false|integer (int32)||
|nodeFilter||false|NodeFilter||
|relationshipType||false|string||
|type||false|string||
|upperBound||false|integer (int32)||


# RecommendationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capability||false|string||
|componentId||false|string||


# RestResponse«IndexedToscaElement»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|IndexedToscaElement||
|error||false|RestError||


# Map«string,Array«string»»

# FilterDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


# RestResponse«CsarUploadResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CsarUploadResult||
|error||false|RestError||


# Map«string,Array«FacetedSearchFacet»»

# CsarUploadResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|csar||false|Csar||
|errors||false|object||


# IndexedNodeType


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|abstract||false|boolean||
|alienScore||false|integer (int64)||
|archiveName||false|string||
|archiveVersion||false|string||
|artifacts||false|object||
|attributes||false|object||
|capabilities||false|CapabilityDefinition array||
|creationDate||false|string (date-time)||
|defaultCapabilities||false|string array||
|derivedFrom||false|string array||
|description||false|string||
|elementId||false|string||
|highestVersion||false|boolean||
|id||false|string||
|interfaces||false|object||
|lastUpdateDate||false|string (date-time)||
|olderVersions||false|string array||
|properties||false|object||
|requirements||false|RequirementDefinition array||
|substitutionTopologyId||false|string||
|tags||false|Tag array||


# CapabilityDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|id||false|string||
|properties||false|object||
|type||false|string||
|upperBound||false|integer (int32)||


# DeploymentArtifact


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|artifactName||false|string||
|artifactRef||false|string||
|artifactRepository||false|string||
|artifactType||false|string||


# Map«string,FilterDefinition»

# ParsingContext


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|fileName||false|string||
|parsingErrors||false|ParsingError array||


# RestResponse«boolean»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|boolean||
|error||false|RestError||


# RestResponse«List«ParsingResult«Csar»»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ParsingResult«Csar» array||
|error||false|RestError||


# Collection«CSARDependency»

# Map«string,Interface»

# Map«string,PropertyDefinition»

# CsarGitRepository


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|id||false|string||
|importLocations||false|Information of the branch and eventually folder on the branch to import as an alien csar. array||
|password||false|string||
|repositoryUrl||false|string||
|storedLocally||false|boolean||
|username||false|string||


# Map«string,List«PropertyConstraint»»

# Information of the branch and eventually folder on the branch to import as an alien csar.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|branchId|Id of the git branch to import.|true|string||
|subPath|Optional path of the location in which lies the csar to be imported.|false|string||


# ImplementationArtifact


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|artifactRef||false|string||
|artifactType||false|string||


# Map«string,List«ParsingError»»

# Request for creation of a new csar git repository.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|importLocations|Information of branches and eventually folders to import for the given repository.|true|Information of the branch and eventually folder on the branch to import as an alien csar. array||
|password|Password to access the git repository.|false|string||
|repositoryUrl|Url of the git repository.|true|string||
|storedLocally|Flag to know if the repository should be kept on the alien4cloud server disk (so next imports will be faster).|false|boolean||
|username|Username to access the git repository.|false|string||


# SearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||
|type||false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE)||


# ParsingResult«Csar»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|context||false|ParsingContext||
|result||false|Csar||


# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


# RestResponse«IndexedNodeType»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|IndexedNodeType||
|error||false|RestError||


# RestResponse«Deployment»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Deployment||
|error||false|RestError||


# SimpleMark


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|column||false|integer (int32)||
|line||false|integer (int32)||


# RestResponse«GetMultipleDataResult«CsarGitRepository»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult«CsarGitRepository»||
|error||false|RestError||


# UpdateTagRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|tagKey||false|string||
|tagValue||false|string||


# Map«string,Operation»

# Operation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|implementationArtifact||false|ImplementationArtifact||
|inputParameters||false|object||


# PropertyConstraint

# IValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# IndexedToscaElement


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|creationDate||false|string (date-time)||
|description||false|string||
|elementId||false|string||
|highestVersion||false|boolean||
|id||false|string||
|lastUpdateDate||false|string (date-time)||
|olderVersions||false|string array||
|tags||false|Tag array||


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


# Csar


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|cloudId||false|string||
|dependencies||false|CSARDependency array||
|description||false|string||
|id||false|string||
|license||false|string||
|name||false|string||
|substitutionTopologyId||false|string||
|templateAuthor||false|string||
|topologyId||false|string||
|toscaDefaultNamespace||false|string||
|toscaDefinitionsVersion||false|string||
|version||false|string||


# Usage


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|resourceId||false|string||
|resourceName||false|string||
|resourceType||false|string||


# Map«string,IValue»

# GetMultipleDataResult«CsarGitRepository»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CsarGitRepository array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# CsarInfoDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|csar||false|Csar||
|relatedResources||false|Usage array||


# RestResponse«CsarInfoDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CsarInfoDTO||
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


# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|version||false|string||


# ParsingError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|context||false|string||
|endMark||false|SimpleMark||
|errorCode||false|enum (INVALID_YAML, CSAR_ALREADY_EXISTS, SINGLE_DEFINITION_SUPPORTED, ENTRY_DEFINITION_NOT_FOUND, ERRONEOUS_ARCHIVE_FILE, SYNTAX_ERROR, MISSING_TOSCA_VERSION, UNRECOGNIZED_PROPERTY, UNKNWON_DISCRIMINATOR_KEY, MISSING_FILE, FAILED_TO_READ_FILE, DUPLICATED_ELEMENT_DECLARATION, TYPE_NOT_FOUND, INVALID_ICON_FORMAT, ALIEN_MAPPING_ERROR, VALIDATION_ERROR, UNKNOWN_CONSTRAINT, INVALID_CONSTRAINT, MISSING_DEPENDENCY, INVALID_SCALAR_UNIT, UNKNOWN_IMPLEMENTATION_ARTIFACT, TOPOLOGY_DETECTED, TOPOLOGY_UPDATED, MISSING_TOPOLOGY_INPUT, YAML_SEQUENCE_EXPECTED, YAML_MAPPING_NODE_EXPECTED, YAML_SCALAR_NODE_EXPECTED, UNKNOWN_CAPABILITY, REQUIREMENT_TARGET_NODE_TEMPLATE_NAME_REQUIRED, RELATIONSHIP_NOT_BUILT, REQUIREMENT_NOT_FOUND, REQUIREMENT_TARGET_NOT_FOUND, REQUIREMENT_CAPABILITY_NOT_FOUND, OUTPUTS_BAD_PARAMS_COUNT, OUTPUTS_UNKNOWN_FUNCTION, UNKOWN_GROUP_POLICY, UNKOWN_GROUP_MEMBER, EMPTY_TOPOLOGY, UNKNWON_WORKFLOW_STEP, WORKFLOW_HAS_ERRORS)||
|errorLevel||false|enum (ERROR, WARNING, INFO)||
|note||false|string||
|problem||false|string||
|startMark||false|SimpleMark||


# Map«string,string»

# ElementFromArchiveRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|componentType||false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE)||
|dependencies||false|Collection«CSARDependency»||
|elementName||false|string||


# Map«string,DeploymentArtifact»

# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# Map«string,List«string»»

# RestResponse«CsarGitRepository»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CsarGitRepository||
|error||false|RestError||


# Tag


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|value||false|string||


# Interface


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|operations||false|object||


# CreateCsarRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|name||false|string||
|version||false|string||


# NodeFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|properties||false|object||


