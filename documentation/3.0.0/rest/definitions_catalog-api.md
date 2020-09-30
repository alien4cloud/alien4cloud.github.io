---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [rest_api, rest_api_catalog-api]
node_name: rest_api_definitions_catalog-api
weight: 9000
---

{% summary %}{% endsummary %}

# RestResponse«List«Usage»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Usage array||
|error||false|RestError||


# RecommendationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capability||false|string||
|componentId||false|string||


# RestResponse«NodeType»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|NodeType||
|error||false|RestError||


# Map«string,Array«string»»

# FilterDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||


# FilteredSearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||


# CatalogVersionResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|id||false|string||
|version||false|string||


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


# Map«string,Workflow»

# CreateTopologyRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|fromTopologyId||false|string||
|name||false|string||
|version||false|string||


# RestResponse«CsarUploadResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CsarUploadResult||
|error||false|RestError||


# CsarUploadResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|csar||false|Csar||
|errors||false|object||


# ParsingContext


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|fileName||false|string||
|parsingErrors||false|ParsingError array||


# Capability


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# PropertyValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||
|value||false|object||


# Workflow


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|errors||false|AbstractWorkflowError array||
|hasCustomModifications||false|boolean||
|hosts||false|string array||
|inputs||false|object||
|metadata||false|object||
|name||false|string||
|preconditions||false|PreconditionDefinition array||
|standard||false|boolean||
|steps||false|object||


# Map«string,Interface»

# Map«string,RelationshipTemplate»

# Map«string,PropertyDefinition»

# ImplementationArtifact


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|artifactRef||false|string||
|artifactRepository||false|string||
|artifactType||false|string||
|repositoryCredential||false|object||
|repositoryName||false|string||
|repositoryURL||false|string||


# Requirement


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# RestResponse«FacetedSearchResult«Topology»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult«Topology»||
|error||false|RestError||


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


# InputStreamResource


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|file||false|file||
|filename||false|string||
|inputStream||false|InputStream||
|open||false|boolean||
|readable||false|boolean||
|uri||false|URI||
|url||false|URL||


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


# AbstractWorkflowActivity

# Map«string,Operation»

# SubstitutionMapping


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|requirements||false|object||
|substitutionType||false|string||


# URI


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|absolute||false|boolean||
|authority||false|string||
|fragment||false|string||
|host||false|string||
|opaque||false|boolean||
|path||false|string||
|port||false|integer (int32)||
|query||false|string||
|rawAuthority||false|string||
|rawFragment||false|string||
|rawPath||false|string||
|rawQuery||false|string||
|rawSchemeSpecificPart||false|string||
|rawUserInfo||false|string||
|scheme||false|string||
|schemeSpecificPart||false|string||
|userInfo||false|string||


# URL


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|authority||false|string||
|content||false|object||
|defaultPort||false|integer (int32)||
|file||false|string||
|host||false|string||
|path||false|string||
|port||false|integer (int32)||
|protocol||false|string||
|query||false|string||
|ref||false|string||
|userInfo||false|string||


# FacetedSearchResult«AbstractToscaType»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|AbstractToscaType array||
|facets||false|object||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# ComponentSearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||
|type||false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE, POLICY_TYPE)||


# FacetedSearchResult«Topology»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Topology array||
|facets||false|object||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# PolicyTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|name||false|string||
|properties||false|object||
|tags||false|Tag array||
|targets||false|string array||
|triggers||false|object||
|type||false|string||


# Usage


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|resourceId||false|string||
|resourceName||false|string||
|resourceType||false|string||
|workspace||false|string||


# Map«string,IValue»

# Map«string,Requirement»

# RestResponse«Array«CatalogVersionResult»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CatalogVersionResult array||
|error||false|RestError||


# CsarInfoDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|csar||false|Csar||
|relatedResources||false|Usage array||


# SubstitutionTarget


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|nodeTemplateName||false|string||
|serviceRelationshipType||false|string||
|targetId||false|string||


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
|default||false|PropertyValue||
|definition||false|boolean||
|description||false|string||
|password||false|boolean||
|required||false|boolean||
|suggestionId||false|string||
|type||false|string||


# Map«string,WorkflowStep»

# ElementFromArchiveRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|componentType||false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE, POLICY_TYPE)||
|dependencies||false|CSARDependency array||
|elementName||false|string||


# Tag


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|value||false|string||


# AbstractPropertyValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||


# Interface


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|operations||false|object||
|type||false|string||


# NodeFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|properties||false|object||


# PolicyEventFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capability||false|string||
|node||false|string||
|requirement||false|string||


# PolicyTrigger


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|actionOperation||false|Operation||
|actionWorkflow||false|string||
|condition||false|PolicyCondition||
|description||false|string||
|eventFilter||false|PolicyEventFilter||
|eventType||false|string||
|timeInterval||false|TimeInterval||


# WorkflowStep


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|activities||false|AbstractWorkflowActivity array||
|filter||false|AbstractConditionClause array||
|name||false|string||
|onFailure||false|string array||
|onSuccess||false|string array||
|operationHost||false|string||
|precedingSteps||false|string array||
|target||false|string||


# RequirementDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilityName||false|string||
|description||false|string||
|id||false|string||
|lowerBound||false|integer (int32)||
|nodeFilter||false|NodeFilter||
|nodeType||false|string||
|relationshipType||false|string||
|type||false|string||
|upperBound||false|integer (int32)||


# RelationshipTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|artifacts||false|object||
|attributes||false|object||
|description||false|string||
|interfaces||false|object||
|name||false|string||
|properties||false|object||
|requirementName||false|string||
|requirementType||false|string||
|tags||false|Tag array||
|target||false|string||
|targetedCapabilityName||false|string||
|type||false|string||


# AbstractWorkflowError

# Version


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|buildNumber||false|integer (int32)||
|incrementalVersion||false|integer (int32)||
|majorVersion||false|integer (int32)||
|minorVersion||false|integer (int32)||
|qualifier||false|string||


# Map«string,Array«FacetedSearchFacet»»

# CapabilityDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|id||false|string||
|properties||false|object||
|type||false|string||
|upperBound||false|integer (int32)||
|validSources||false|string array||


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
|deployPath||false|string||
|description||false|string||
|repositoryCredential||false|object||
|repositoryName||false|string||
|repositoryURL||false|string||


# Map«string,FilterDefinition»

# RestResponse«Topology»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Topology||
|error||false|RestError||


# NodeGroup


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|index||false|integer (int32)||
|members||false|string array||
|name||false|string||
|policies||false|AbstractPolicy array||


# RestResponse«boolean»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|boolean||
|error||false|RestError||


# Map«string,Capability»

# RestResponse«List«ParsingResult«Csar»»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ParsingResult«Csar» array||
|error||false|RestError||


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


# Topology


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|creationDate||false|string (date-time)||
|dependencies||false|CSARDependency array||
|description||false|string||
|empty||false|boolean||
|groups||false|object||
|id||false|string||
|inputArtifacts||false|object||
|inputs||false|object||
|lastUpdateDate||false|string (date-time)||
|nestedVersion||false|Version||
|nodeTemplates||false|object||
|outputAttributes||false|object||
|outputCapabilityProperties||false|object||
|outputProperties||false|object||
|policies||false|object||
|substitutionMapping||false|SubstitutionMapping||
|tags||false|Tag array||
|unprocessedWorkflows||false|object||
|workflows||false|object||
|workspace||false|string||


# PreconditionDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|condition||false|AbstractConditionClause array||
|target||false|string||
|targetRelationship||false|string||


# Map«string,List«PropertyConstraint»»

# Information of the branch and eventually folder on the branch to import as an alien csar.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|branchId|Id of the git branch to import.|true|string||
|subPath|Optional path of the location in which lies the csar to be imported.|false|string||


# Map«string,Map«string,Set«string»»»

# NodeTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|artifacts||false|object||
|attributes||false|object||
|capabilities||false|object||
|danglingRequirement||false|boolean||
|description||false|string||
|groups||false|string array||
|interfaces||false|object||
|name||false|string||
|nodeFilter||false|NodeFilter||
|portability||false|object||
|properties||false|object||
|relationships||false|object||
|requirements||false|object||
|tags||false|Tag array||
|type||false|string||


# AbstractToscaType


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|creationDate||false|string (date-time)||
|description||false|string||
|elementId||false|string||
|id||false|string||
|lastUpdateDate||false|string (date-time)||
|nestedVersion||false|Version||
|tags||false|Tag array||
|workspace||false|string||


# NodeType


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
|id||false|string||
|interfaces||false|object||
|lastUpdateDate||false|string (date-time)||
|nestedVersion||false|Version||
|portability||false|object||
|properties||false|object||
|requirements||false|RequirementDefinition array||
|substitutionTopologyId||false|string||
|tags||false|Tag array||
|workspace||false|string||


# Map«string,PolicyTrigger»

# File


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|absolute||false|boolean||
|absolutePath||false|string||
|canonicalPath||false|string||
|directory||false|boolean||
|file||false|boolean||
|freeSpace||false|integer (int64)||
|hidden||false|boolean||
|name||false|string||
|parent||false|string||
|path||false|string||
|totalSpace||false|integer (int64)||
|usableSpace||false|integer (int64)||


# Map«string,NodeGroup»

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


# Operation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|dependencies||false|DeploymentArtifact array||
|description||false|string||
|implementationArtifact||false|ImplementationArtifact||
|inputParameters||false|object||
|portability||false|object||


# PolicyCondition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|constraints||false|PropertyConstraint array||
|evaluations||false|integer (int32)||
|method||false|string||
|period||false|string||


# RestResponse«AbstractToscaType»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|AbstractToscaType||
|error||false|RestError||


# Map«string,SubstitutionTarget»

# PropertyConstraint

# IValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||


# RestResponse«FacetedSearchResult«AbstractToscaType»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult«AbstractToscaType»||
|error||false|RestError||


# Map«string,Set«string»»

# AbstractPolicy


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|type||false|string||


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
|definitionHash||false|string||
|delegateId||false|string||
|delegateType||false|string||
|dependencies||false|CSARDependency array||
|description||false|string||
|hasTopology||false|boolean||
|hash||false|string||
|id||false|string||
|importDate||false|string (date-time)||
|importSource||false|string||
|license||false|string||
|name||false|string||
|nestedVersion||false|Version||
|nodeTypesCount||false|integer (int64)||
|tags||false|Tag array||
|templateAuthor||false|string||
|toscaDefaultNamespace||false|string||
|toscaDefinitionsVersion||false|string||
|version||false|string||
|workspace||false|string||
|yamlFilePath||false|string||


# Map«string,PolicyTemplate»

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


# TimeInterval


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|endTime||false|string||
|startTime||false|string||


# InputStream

# Map«string,AbstractPropertyValue»

# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|hash||false|string||
|name||false|string||
|version||false|string||


# Map«string,NodeTemplate»

# ParsingError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|context||false|string||
|endMark||false|SimpleMark||
|errorCode||false|enum (INVALID_YAML, CSAR_ALREADY_INDEXED, CSAR_ALREADY_EXISTS, CSAR_ALREADY_EXISTS_IN_ANOTHER_WORKSPACE, CSAR_IMPORT_ITSELF, UNSUPPORTED_SUBSTITUTION, DERIVED_FROM_CONCRETE_TYPE_SUBSTITUTION, DEPENDENCY_NOT_VISIBLE_FROM_TARGET_WORKSPACE, CSAR_USED_IN_ACTIVE_DEPLOYMENT, SINGLE_DEFINITION_SUPPORTED, ENTRY_DEFINITION_NOT_FOUND, ERRONEOUS_ARCHIVE_FILE, SYNTAX_ERROR, MISSING_TOSCA_VERSION, UNKNOWN_TOSCA_VERSION, TOSCA_VERSION_NOT_FIRST, UNRECOGNIZED_PROPERTY, UNKNWON_DISCRIMINATOR_KEY, MISSING_FILE, FAILED_TO_READ_FILE, DUPLICATED_ELEMENT_DECLARATION, TYPE_NOT_FOUND, CYCLIC_DERIVED_FROM, DERIVED_FROM_NOTHING, INVALID_ICON_FORMAT, ALIEN_MAPPING_ERROR, VALIDATION_ERROR, UNKNOWN_CONSTRAINT, INVALID_CONSTRAINT, MISSING_DEPENDENCY, SNAPSHOT_DEPENDENCY, INVALID_SCALAR_UNIT, POTENTIAL_BAD_PROPERTY_VALUE, UNKNOWN_ARTIFACT_KEY, UNKNOWN_REPOSITORY, INVALID_ARTIFACT_REFERENCE, UNRESOLVED_ARTIFACT, TOPOLOGY_DETECTED, TOPOLOGY_UPDATED, MISSING_TOPOLOGY_INPUT, YAML_SEQUENCE_EXPECTED, YAML_MAPPING_NODE_EXPECTED, YAML_SCALAR_NODE_EXPECTED, UNKNOWN_CAPABILITY, REQUIREMENT_TARGET_NODE_TEMPLATE_NAME_REQUIRED, REQUIREMENT_NOT_FOUND, REQUIREMENT_TARGET_NOT_FOUND, REQUIREMENT_CAPABILITY_MULTIPLE_MATCH, REQUIREMENT_CAPABILITY_NOT_FOUND, OUTPUTS_BAD_PARAMS_COUNT, OUTPUTS_UNKNOWN_FUNCTION, UNKOWN_GROUP_POLICY, UNKOWN_GROUP_MEMBER, EMPTY_TOPOLOGY, UNKNWON_WORKFLOW_STEP, WORKFLOW_HAS_CYCLE, WORKFLOW_INLINED_WORKFLOW_NOT_FOUND, WORKFLOW_HAS_ERRORS, UNKNWON_WORKFLOW_STEP_TARGET, UNKNWON_WORKFLOW_STEP_RELATIONSHIP_TARGET, POLICY_TARGET_NOT_FOUND, INVALID_NODE_TEMPLATE_NAME, INVALID_NAME, TOSCA_TYPE_ALREADY_EXISTS_IN_OTHER_CSAR, TRANSITIVE_DEPENDENCY_VERSION_CONFLICT, DEPENDENCY_VERSION_CONFLICT)||
|errorLevel||false|enum (ERROR, WARNING, INFO)||
|note||false|string||
|problem||false|string||
|startMark||false|SimpleMark||


# Map«string,DeploymentArtifact»

# Map«string,string»

# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# RestResponse«CsarGitRepository»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|CsarGitRepository||
|error||false|RestError||


# AbstractConditionClause

