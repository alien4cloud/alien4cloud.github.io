---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_definitions_applications-api
weight: 9000
---

{% summary %}{% endsummary %}

# GetMultipleDataResult«ApplicationVersion»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationVersion array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# Map«string,AbstractStep»

# RestResponse«DeploymentTopologyDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|DeploymentTopologyDTO||
|error||false|RestError||


# DeploymentTopologyDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|availableSubstitutions||false|Contains the types and templates of resources that can be substituted for a deployment.||
|capabilityTypes||false|object||
|locationPolicies||false|object||
|locationResourceTemplates||false|object||
|nodeTypes||false|object||
|outputCapabilityProperties||false|object||
|relationshipTypes||false|object||
|topology||false|DeploymentTopology||
|validation||false|TopologyValidationResult||


# Contains the types and templates of resources that can be substituted for a deployment.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|availableSubstitutions|Map of node id to list of available location resource templates' id.|false|object||
|substitutionTypes|Location resources types contain types for the templates.|false|LocationResourceTypes||
|substitutionsTemplates|Map of location resource id to location resource template.|false|object||


# Map«string,Array«string»»

# Map«string,IndexedRelationshipType»

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


# Map«string,Workflow»

# Map«string,IndexedNodeType»

# Map«string,Map«string,InstanceInformation»»

# Capability


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# Workflow


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|errors||false|AbstractWorkflowError array||
|hosts||false|string array||
|name||false|string||
|standard||false|boolean||
|steps||false|object||


# Map«string,Interface»

# Map«string,RelationshipTemplate»

# Map«string,PropertyDefinition»

# UpdateDeploymentTopologyRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|inputProperties||false|object||
|providerDeploymentProperties||false|object||


# ImplementationArtifact


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|artifactRef||false|string||
|artifactType||false|string||


# Requirement


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# RestResponse«object»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


# IndexedCapabilityType


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|abstract||false|boolean||
|archiveName||false|string||
|archiveVersion||false|string||
|creationDate||false|string (date-time)||
|derivedFrom||false|string array||
|description||false|string||
|elementId||false|string||
|highestVersion||false|boolean||
|id||false|string||
|lastUpdateDate||false|string (date-time)||
|olderVersions||false|string array||
|properties||false|object||
|tags||false|Tag array||


# RestResponse«ConstraintInformation»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ConstraintInformation||
|error||false|RestError||


# Application


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|creationDate||false|string (date-time)||
|description||false|string||
|groupRoles||false|object||
|id||false|string||
|imageId||false|string||
|lastUpdateDate||false|string (date-time)||
|metaProperties||false|object||
|name||false|string||
|tags||false|Tag array||
|userRoles||false|object||


# RestResponse«Application»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Application||
|error||false|RestError||


# DeferredResult«RestResponse«Map«string,Map«string,InstanceInformation»»»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|result||false|object||
|setOrExpired||false|boolean||


# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


# AbstractTask


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|enum (IMPLEMENT, REPLACE, SATISFY_LOWER_BOUND, PROPERTIES, HA_INVALID, SCALABLE_CAPABILITY_INVALID, NODE_FILTER_INVALID, WORKFLOW_INVALID, LOCATION_POLICY, LOCATION_UNAUTHORIZED, LOCATION_DISABLED, ORCHESTRATOR_PROPERTY, INPUT_PROPERTY, NODE_NOT_SUBSTITUTED)||


# EnvironmentStatusDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|environmentName||false|string||
|environmentStatus||false|enum (DEPLOYED, UNDEPLOYED, DEPLOYMENT_IN_PROGRESS, UNDEPLOYMENT_IN_PROGRESS, WARNING, FAILURE, UNKNOWN)||


# Map«string,InstanceInformation»

# Map«string,Operation»

# SubstitutionMapping


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|requirements||false|object||
|substitutionType||false|IndexedNodeType||


# LocationResourceTypes


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|allNodeTypes|Map that contains all node types.|false|object||
|capabilityTypes|Map that contains the capability types used by the configuration types or node types.|false|object||
|configurationTypes|Map of node types id, node type used to configure a given location.|false|object||
|nodeTypes|Map of node types id, node type used to configure the templates of on-demand resources in a location.|false|object||
|onDemandTypes|Map that contains the on demdand types.|false|object||


# Map«string,LocationResourceTemplate»

# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# Map«string,EnvironmentStatusDTO»

# RestResponse«Map«string,Map«string,InstanceInformation»»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


# Map«string,IValue»

# Map«string,Requirement»

# UpdatePropertyRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|propertyName||false|string||
|propertyValue||false|object||


# ConstraintInformation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|path||false|string||
|reference||false|object||
|type||false|string||
|value||false|string||


# SubstitutionTarget


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|nodeTemplateName||false|string||
|targetId||false|string||


# PropertyDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|constraints||false|PropertyConstraint array||
|default||false|string||
|definition||false|boolean||
|description||false|string||
|entrySchema||false|PropertyDefinition||
|password||false|boolean||
|required||false|boolean||
|type||false|string||


# CreateApplicationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|name||false|string||
|topologyTemplateVersionId||false|string||


# Request to update or check the value of a property.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definitionId|Id of the property to set.|true|string||
|value|Value to set for the property.|true|string||


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


# NodeFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|properties||false|object||


# ApplicationVersion


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationId||false|string||
|description||false|string||
|id||false|string||
|latest||false|boolean||
|released||false|boolean||
|snapshot||false|boolean||
|topologyId||false|string||
|version||false|string||


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


# AbstractStep


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|followingSteps||false|string array||
|name||false|string||
|precedingSteps||false|string array||


# Map«string,IndexedCapabilityType»

# RelationshipTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|artifacts||false|object||
|attributes||false|object||
|interfaces||false|object||
|properties||false|object||
|requirementName||false|string||
|requirementType||false|string||
|target||false|string||
|targetedCapabilityName||false|string||
|type||false|string||


# AbstractWorkflowError

# RestResponse«Map«string,Map«string,EnvironmentStatusDTO»»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


# DeployApplicationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationEnvironmentId||false|string||
|applicationId||false|string||


# Map«string,Array«FacetedSearchFacet»»

# UpdateApplicationEnvironmentRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|currentVersionId||false|string||
|description||false|string||
|environmentType||false|enum (OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION)||
|name||false|string||


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

# NodeGroup


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|index||false|integer (int32)||
|members||false|string array||
|name||false|string||
|policies||false|AbstractPolicy array||


# Map«string,Map«string,EnvironmentStatusDTO»»

# RestResponse«GetMultipleDataResult«ApplicationEnvironmentDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult«ApplicationEnvironmentDTO»||
|error||false|RestError||


# DeploymentTopology


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|delegateId||false|string||
|delegateType||false|string||
|dependencies||false|CSARDependency array||
|empty||false|boolean||
|environmentId||false|string||
|groups||false|object||
|id||false|string||
|initialTopologyId||false|string||
|inputArtifacts||false|object||
|inputProperties||false|object||
|inputs||false|object||
|lastDeploymentTopologyUpdateDate||false|string (date-time)||
|lastUpdateDate||false|string (date-time)||
|locationDependencies||false|CSARDependency array||
|locationGroups||false|object||
|nodeTemplates||false|object||
|orchestratorId||false|string||
|originalNodes||false|object||
|outputAttributes||false|object||
|outputCapabilityProperties||false|object||
|outputProperties||false|object||
|providerDeploymentProperties||false|object||
|substitutedNodes||false|object||
|substitutionMapping||false|SubstitutionMapping||
|versionId||false|string||
|workflows||false|object||


# RestResponse«boolean»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|boolean||
|error||false|RestError||


# Map«string,Capability»

# InstanceInformation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|attributes||false|object||
|instanceStatus||false|enum (SUCCESS, PROCESSING, FAILURE, MAINTENANCE)||
|runtimeProperties||false|object||
|state||false|string||


# Map«string,List«PropertyConstraint»»

# TopologyValidationResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|taskList||false|AbstractTask array||
|valid||false|boolean||
|warningList||false|AbstractTask array||


# Map«string,Map«string,Set«string»»»

# NodeTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|artifacts||false|object||
|attributes||false|object||
|capabilities||false|object||
|groups||false|string array||
|interfaces||false|object||
|name||false|string||
|properties||false|object||
|relationships||false|object||
|requirements||false|object||
|type||false|string||


# UpdateApplicationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|name||false|string||


# IndexedRelationshipType


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|abstract||false|boolean||
|archiveName||false|string||
|archiveVersion||false|string||
|artifacts||false|object||
|attributes||false|object||
|creationDate||false|string (date-time)||
|derivedFrom||false|string array||
|description||false|string||
|elementId||false|string||
|highestVersion||false|boolean||
|id||false|string||
|interfaces||false|object||
|lastUpdateDate||false|string (date-time)||
|olderVersions||false|string array||
|properties||false|object||
|tags||false|Tag array||
|validSources||false|string array||
|validTargets||false|string array||


# ApplicationVersionRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|topologyId||false|string||
|version||true|string||


# Map«string,NodeGroup»

# SearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||
|type||false|enum (NODE_TYPE, CAPABILITY_TYPE, RELATIONSHIP_TYPE, ARTIFACT_TYPE)||


# LocationResourceTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|enabled||false|boolean||
|generated||false|boolean||
|id||false|string||
|locationId||false|string||
|name||false|string||
|service||false|boolean||
|template||false|NodeTemplate||
|types||false|string array||


# RestResponse«Deployment»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Deployment||
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
|description||false|string||
|implementationArtifact||false|ImplementationArtifact||
|inputParameters||false|object||


# RestResponse«ApplicationVersion»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationVersion||
|error||false|RestError||


# Map«string,SubstitutionTarget»

# PropertyConstraint

# IValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||


# ApplicationEnvironmentDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationId||false|string||
|currentVersionName||false|string||
|description||false|string||
|environmentType||false|enum (OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION)||
|groupRoles||false|object||
|id||false|string||
|name||false|string||
|status||false|enum (DEPLOYED, UNDEPLOYED, DEPLOYMENT_IN_PROGRESS, UNDEPLOYMENT_IN_PROGRESS, WARNING, FAILURE, UNKNOWN)||
|userRoles||false|object||


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


# ApplicationEnvironmentRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|environmentType||false|enum (OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION)||
|name||false|string||
|versionId||false|string||


# RestResponse«GetMultipleDataResult«ApplicationVersion»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult«ApplicationVersion»||
|error||false|RestError||


# DeferredResult«RestResponse«Void»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|result||false|object||
|setOrExpired||false|boolean||


# SetLocationPoliciesRequest


Request to set locations policies fro a deployment.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|groupsToLocations|Locations settings for groups. key = groupeName, value = locationId. Note that for now, the only groupe name valid is _A4C_ALL, as we do not yet support multiple locations policies settings.|true|object||
|orchestratorId|Id of the Orchestratrator managing the locations on which we want to deploy.|true|string||


# ApplicationEnvironment


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationId||false|string||
|currentVersionId||false|string||
|description||false|string||
|environmentType||false|enum (OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION)||
|groupRoles||false|object||
|id||false|string||
|name||false|string||
|userRoles||false|object||


# Map«string,AbstractPropertyValue»

# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|version||false|string||


# Map«string,NodeTemplate»

# Map«string,string»

# Map«string,DeploymentArtifact»

# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# Map«string,List«string»»

# GetMultipleDataResult«ApplicationEnvironmentDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationEnvironmentDTO array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# RestResponse«ApplicationEnvironment»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationEnvironment||
|error||false|RestError||


