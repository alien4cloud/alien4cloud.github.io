---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-2.0.0
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

# UpdateApplicationVersionRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|version||false|string||


# RestResponse«Map«string,Array«ApplicationEnvironmentDTO»»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


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
|dataTypes||false|object||
|locationPolicies||false|object||
|locationResourceTemplates||false|object||
|nodeTypes||false|object||
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

# Map«string,DataType»

# PaaSDeploymentLog


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|content||false|string||
|deploymentId||false|string||
|deploymentPaaSId||false|string||
|executionId||false|string||
|id||false|string||
|instanceId||false|string||
|interfaceName||false|string||
|level||false|enum (debug, info, warn, error)||
|nodeId||false|string||
|operationName||false|string||
|timestamp||false|string (date-time)||
|type||false|string||
|workflowId||false|string||


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


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


# Map«string,Workflow»

# RestResponse«FacetedSearchResult«PaaSDeploymentLog»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult«PaaSDeploymentLog»||
|error||false|RestError||


# Map«string,object»

# PropertyValue«Topology»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||
|value||false|Topology||


# CreateApplicationTopologyVersionRequest


Request to set locations policies for a deployment.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationTopologyVersion|Id of the application topology version to use to initialize this application topology versions.|false|string||
|description|Description for this specific variant of the topology for the application version.|false|string||
|qualifier|Qualifier string that allow having a distinct topology version for every Application Topology Version in an Application Version.|false|string||
|topologyTemplateId|Id of the topology template to use to initialize the application topology version that will be created with the new application version.|false|string||


# Map«string,Map«string,InstanceInformation»»

# Capability


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# FacetedSearchResult«PaaSDeploymentLog»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|PaaSDeploymentLog array||
|facets||false|object||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


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
|hosts||false|string array||
|name||false|string||
|standard||false|boolean||
|steps||false|object||


# Map«string,Interface»

# Map«string,RelationshipTemplate»

# CreateApplicationVersionRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|fromVersionId|Id of the application version to use to initialize all application topology versions.|false|string||
|topologyTemplateId|Id of the topology template to use to initialize the application topology version that will be created with the new application version.|false|string||
|version||true|string||


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


# RestResponse«object»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


# TopologyDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveContentTree||false|TreeNode||
|capabilityTypes||false|object||
|dataTypes||false|object||
|delegateType||false|string||
|dependencyConflicts||false|DependencyConflictDTO array||
|lastOperationIndex||false|integer (int32)||
|nodeTypes||false|object||
|operations||false|AbstractEditorOperation array||
|relationshipTypes||false|object||
|topology||false|Topology||


# RestResponse«ConstraintInformation»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ConstraintInformation||
|error||false|RestError||


# Service.


A service is something running somewhere, exposing capabilities and requirements, matchable in a topology in place of an abstract component.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationPermissions||false|object||
|capabilitiesRelationshipTypes||false|object||
|creationDate||false|string (date-time)||
|dependency||false|CSARDependency||
|deploymentId||false|string||
|description||false|string||
|environmentId||false|string||
|environmentPermissions||false|object||
|groupPermissions||false|object||
|id||false|string||
|lastUpdateDate||false|string (date-time)||
|locationIds||false|string array||
|name||false|string||
|nestedVersion||false|Version||
|nodeInstance||false|NodeInstance||
|requirementsRelationshipTypes||false|object||
|userPermissions||false|object||
|version||false|string||


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


# NodeInstance


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|attributeValues||false|object||
|nodeTemplate||false|NodeTemplate||
|typeVersion||false|string||


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


# Map«string,NodeType»

# AbstractTask


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|enum (IMPLEMENT, IMPLEMENT_RELATIONSHIP, REPLACE, SATISFY_LOWER_BOUND, PROPERTIES, HA_INVALID, SCALABLE_CAPABILITY_INVALID, NODE_FILTER_INVALID, WORKFLOW_INVALID, INPUT_ARTIFACT_INVALID, ARTIFACT_INVALID, LOCATION_POLICY, LOCATION_UNAUTHORIZED, LOCATION_DISABLED, ORCHESTRATOR_PROPERTY, INPUT_PROPERTY, NODE_NOT_SUBSTITUTED, FORBIDDEN_OPERATION)||


# EnvironmentStatusDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|environmentName||false|string||
|environmentStatus||false|enum (DEPLOYED, UNDEPLOYED, INIT_DEPLOYMENT, DEPLOYMENT_IN_PROGRESS, UPDATE_IN_PROGRESS, UPDATED, UNDEPLOYMENT_IN_PROGRESS, WARNING, FAILURE, UPDATE_FAILURE, UNKNOWN)||


# Map«string,InstanceInformation»

# Map«string,Operation»

# SubstitutionMapping


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|requirements||false|object||
|substitutionType||false|string||


# LocationResourceTypes


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|allNodeTypes|Map that contains all node types.|false|object||
|capabilityTypes|Map that contains the capability types used by the configuration types or node types.|false|object||
|configurationTypes|Map of node types id, node type used to configure a given location.|false|object||
|dataTypes|Map of data types id, data type used to configure the templates of on-demand resources in a location.|false|object||
|nodeTypes|Map of node types id, node type used to configure the templates of on-demand resources in a location.|false|object||
|onDemandTypes|Map that contains the on demdand types.|false|object||
|providedTypes|List of recommended node types ID, e.g. defined at the orchestrator level|false|string array||


# Map«string,LocationResourceTemplate»

# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# RestResponse«TopologyDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|TopologyDTO||
|error||false|RestError||


# Request for creation of a new service.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|fromRuntime|Create the service from the deployed topology of this environment? Thorws an error if the environement is not deployed. Default to false|true|boolean||
|serviceName|Name of the new service (must be unique for a given version).|true|string||


# Map«string,EnvironmentStatusDTO»

# DataType


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|abstract||false|boolean||
|archiveName||false|string||
|archiveVersion||false|string||
|creationDate||false|string (date-time)||
|deriveFromSimpleType||false|boolean||
|derivedFrom||false|string array||
|description||false|string||
|elementId||false|string||
|id||false|string||
|lastUpdateDate||false|string (date-time)||
|nestedVersion||false|Version||
|properties||false|object||
|tags||false|Tag array||
|workspace||false|string||


# JsonRawRestResponse


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


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
|serviceRelationshipType||false|string||
|targetId||false|string||


# PropertyDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|constraints||false|PropertyConstraint array||
|default||false|PropertyValue«DeploymentTopology»||
|definition||false|boolean||
|description||false|string||
|entrySchema||false|PropertyDefinition||
|password||false|boolean||
|required||false|boolean||
|suggestionId||false|string||
|type||false|string||


# CreateApplicationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|description||false|string||
|name||false|string||
|topologyTemplateVersionId||false|string||


# RestResponse«ApplicationEnvironmentDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationEnvironmentDTO||
|error||false|RestError||


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
|type||false|string||


# NodeFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|properties||false|object||


# SortConfiguration


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|ascending||false|boolean||
|sortBy||false|string||


# ApplicationVersion


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationId||false|string||
|description||false|string||
|id||false|string||
|nestedVersion||false|Version||
|released||false|boolean||
|topologyVersions||false|object||
|version||false|string||


# RelationshipType


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
|id||false|string||
|interfaces||false|object||
|lastUpdateDate||false|string (date-time)||
|nestedVersion||false|Version||
|properties||false|object||
|tags||false|Tag array||
|validSources||false|string array||
|validTargets||false|string array||
|workspace||false|string||


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
|serviceResourceIds||false|string array||
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
|nodeType||false|string||
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


# ApplicationTopologyVersion


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveId||false|string||
|description||false|string||
|qualifier||false|string||


# RelationshipTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|artifacts||false|object||
|attributes||false|object||
|interfaces||false|object||
|name||false|string||
|properties||false|object||
|requirementName||false|string||
|requirementType||false|string||
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


# PropertyValue«DeploymentTopology»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||
|value||false|DeploymentTopology||


# RestResponse«Map«string,Map«string,EnvironmentStatusDTO»»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


# TreeNode


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|artifactId||false|string||
|children||false|TreeNode array||
|fullPath||false|string||
|leaf||false|boolean||
|name||false|string||


# DependencyConflictDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|dependency||false|string||
|resolvedVersion||false|string||
|source||false|string||


# DeployApplicationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationEnvironmentId||false|string||
|applicationId||false|string||


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


# UpdateApplicationEnvironmentRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|currentVersionId||false|string||
|description||false|string||
|environmentType||false|enum (OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION)||
|name||false|string||


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


# Map«string,ApplicationTopologyVersion»

# DeploymentTopology


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|creationDate||false|string (date-time)||
|dependencies||false|CSARDependency array||
|deployed||false|boolean||
|description||false|string||
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
|nestedVersion||false|Version||
|nodeTemplates||false|object||
|orchestratorId||false|string||
|originalNodes||false|object||
|outputAttributes||false|object||
|outputCapabilityProperties||false|object||
|outputProperties||false|object||
|providerDeploymentProperties||false|object||
|substitutedNodes||false|object||
|substitutionMapping||false|SubstitutionMapping||
|uploadedInputArtifacts||false|object||
|versionId||false|string||
|workflows||false|object||
|workspace||false|string||


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
|substitutionMapping||false|SubstitutionMapping||
|workflows||false|object||
|workspace||false|string||


# RestResponse«Service.»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Service.||
|error||false|RestError||


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
|portability||false|object||
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


# Map«string,PropertyValue»

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


# UpdateTopologyVersionForEnvironmentRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|environmentToCopyInput||false|string||
|newTopologyVersion||false|string||


# Map«string,NodeGroup»

# LocationResourceTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationPermissions||false|object||
|enabled||false|boolean||
|environmentPermissions||false|object||
|generated||false|boolean||
|groupPermissions||false|object||
|id||false|string||
|locationId||false|string||
|name||false|string||
|portabilityDefinitions||false|object||
|service||false|boolean||
|template||false|NodeTemplate||
|types||false|string array||
|userPermissions||false|object||


# RestResponse«Deployment»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Deployment||
|error||false|RestError||


# GetInputCandidatesRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationEnvironmentId||false|string||
|applicationTopologyVersion||false|string||


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
|deployedVersion||false|string||
|description||false|string||
|environmentType||false|enum (OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION)||
|groupRoles||false|object||
|id||false|string||
|name||false|string||
|status||false|enum (DEPLOYED, UNDEPLOYED, INIT_DEPLOYMENT, DEPLOYMENT_IN_PROGRESS, UPDATE_IN_PROGRESS, UPDATED, UNDEPLOYMENT_IN_PROGRESS, WARNING, FAILURE, UPDATE_FAILURE, UNKNOWN)||
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
|inputCandidate||false|string||
|name||false|string||
|versionId||false|string||


# RestResponse«List«ApplicationEnvironment»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationEnvironment array||
|error||false|RestError||


# CapabilityType


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|abstract||false|boolean||
|archiveName||false|string||
|archiveVersion||false|string||
|attributes||false|object||
|creationDate||false|string (date-time)||
|derivedFrom||false|string array||
|description||false|string||
|elementId||false|string||
|id||false|string||
|lastUpdateDate||false|string (date-time)||
|nestedVersion||false|Version||
|properties||false|object||
|tags||false|Tag array||
|validSources||false|string array||
|workspace||false|string||


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


# SearchLogRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|filters||false|object||
|from||false|integer (int32)||
|fromDate||false|string (date-time)||
|query||false|string||
|size||false|integer (int32)||
|sortConfiguration||false|SortConfiguration||
|toDate||false|string (date-time)||


# AbstractEditorOperation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|author||false|string||
|id||false|string||
|previousOperationId||false|string||


# SetLocationPoliciesRequest


Request to set locations policies for a deployment.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|groupsToLocations|Locations settings for groups. key = groupeName, value = locationId. Note that for now, the only groupe name valid is _A4C_ALL, as we do not yet support multiple locations policies settings.|true|object||
|orchestratorId|Id of the Orchestratrator managing the locations on which we want to deploy.|true|string||


# Map«string,AbstractPropertyValue»

# Map«string,RelationshipType»

# ApplicationEnvironment


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationId||false|string||
|description||false|string||
|environmentType||false|enum (OTHER, DEVELOPMENT, INTEGRATION_TESTS, USER_ACCEPTANCE_TESTS, PRE_PRODUCTION, PRODUCTION)||
|groupRoles||false|object||
|id||false|string||
|name||false|string||
|topologyVersion||false|string||
|userRoles||false|object||
|version||false|string||


# Map«string,Array«ApplicationEnvironmentDTO»»

# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|hash||false|string||
|name||false|string||
|version||false|string||


# Map«string,NodeTemplate»

# Map«string,CapabilityType»

# Map«string,string»

# Map«string,DeploymentArtifact»

# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


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


