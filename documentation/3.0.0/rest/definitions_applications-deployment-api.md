---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [rest_api, rest_api_applications-deployment-api]
node_name: rest_api_definitions_applications-deployment-api
weight: 9000
---

{% summary %}{% endsummary %}

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
|deployerUsername||false|string||
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


# GetMultipleJsonResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||


# Map«string,DataType»

# FilterDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||


# Map«string,PolicyType»

# ScrollJsonResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|queryDuration||false|integer (int64)||
|scrollId||false|string||
|totalResults||false|integer (int64)||


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


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


# Map«string,Workflow»

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


# DeploymentDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|deployment||false|Deployment||
|locations||false|Location array||
|source||false|IDeploymentSource||


# TreeNode


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|artifactId||false|string||
|children||false|TreeNode array||
|fullPath||false|string||
|leaf||false|boolean||
|name||false|string||


# Map«string,object»

# DependencyConflictDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|dependency||false|string||
|resolvedVersion||false|string||
|source||false|string||


# RestResponse«DeploymentDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|DeploymentDTO||
|error||false|RestError||


# PropertyValue«Topology»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||
|value||false|Topology||


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


# RestResponse«List«DeploymentDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|DeploymentDTO array||
|error||false|RestError||


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


# TimedRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|from||false|integer (int32)||
|intervalEnd||false|integer (int64)||
|intervalStart||false|integer (int64)||
|size||false|integer (int32)||


# ScrollTimedRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|intervalEnd||false|integer (int64)||
|intervalStart||false|integer (int64)||
|size||false|integer (int32)||


# Capability


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# Map«string,Capability»

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


# Map«string,PropertyDefinition»

# PreconditionDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|condition||false|AbstractConditionClause array||
|target||false|string||
|targetRelationship||false|string||


# Map«string,List«PropertyConstraint»»

# DeferredResult«RestResponse«object»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|result||false|object||
|setOrExpired||false|boolean||


# LocationModifierReference


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|beanName||false|string||
|phase||false|string||
|pluginId||false|string||


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
|policyTypes||false|object||
|relationshipTypes||false|object||
|topology||false|Topology||


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


# Map«string,NodeGroup»

# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|enum (DEPLOYED, UNDEPLOYED, INIT_DEPLOYMENT, DEPLOYMENT_IN_PROGRESS, UPDATE_IN_PROGRESS, UPDATED, UNDEPLOYMENT_IN_PROGRESS, WARNING, FAILURE, UPDATE_FAILURE, UNKNOWN)||
|error||false|RestError||


# Map«string,NodeType»

# AbstractWorkflowActivity

# Map«string,Operation»

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


# SubstitutionMapping


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|requirements||false|object||
|substitutionType||false|string||


# SecretProviderConfiguration


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|configuration||false|object||
|pluginName||false|string||


# Map«string,SubstitutionTarget»

# PropertyConstraint

# IValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||


# IDeploymentSource


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|id||false|string||
|name||false|string||


# Map«string,Set«string»»

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


# AbstractPolicy


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|type||false|string||


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


# OperationExecRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationEnvironmentId||false|string||
|instanceId||false|string||
|interfaceName||false|string||
|nodeTemplateName||false|string||
|operationName||false|string||
|parameters||false|object||
|secretProviderCredentials||false|object||
|secretProviderPluginName||false|string||


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


# PolicyType


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
|id||false|string||
|lastUpdateDate||false|string (date-time)||
|nestedVersion||false|Version||
|properties||false|object||
|tags||false|Tag array||
|targets||false|string array||
|triggers||false|object||
|workspace||false|string||


# Map«string,IValue»

# Map«string,PolicyTemplate»

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


# Map«string,Requirement»

# TimeInterval


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|endTime||false|string||
|startTime||false|string||


# SubstitutionTarget


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|nodeTemplateName||false|string||
|serviceRelationshipType||false|string||
|targetId||false|string||


# AbstractEditorOperation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|author||false|string||
|id||false|string||
|previousOperationId||false|string||


# Map«string,AbstractPropertyValue»

# PropertyDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|constraints||false|PropertyConstraint array||
|default||false|PropertyValue«Topology»||
|definition||false|boolean||
|description||false|string||
|entrySchema||false|PropertyDefinition||
|password||false|boolean||
|required||false|boolean||
|suggestionId||false|string||
|type||false|string||


# Map«string,RelationshipType»

# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|hash||false|string||
|name||false|string||
|version||false|string||


# Map«string,WorkflowStep»

# Map«string,NodeTemplate»

# Map«string,CapabilityType»

# Map«string,string»

# Map«string,DeploymentArtifact»

# RestResponse«GetMultipleDataResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult||
|error||false|RestError||


# Tag


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|value||false|string||


# RestResponse«Map«string,NodeTemplate»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


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


# Location


A location represents a cloud, a region of a cloud, a set of machines and resources.basically any location on which alien will be allowed to perform deployment. Locations are managed by orchestrators.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationPermissions||false|object||
|creationDate||false|string (date-time)||
|dependencies||false|CSARDependency array||
|environmentPermissions||false|object||
|environmentType||false|string||
|environmentTypePermissions||false|object||
|groupPermissions||false|object||
|id||false|string||
|infrastructureType||false|string||
|lastUpdateDate||false|string (date-time)||
|metaProperties||false|object||
|modifiers||false|LocationModifierReference array||
|name||false|string||
|orchestratorId||false|string||
|secretProviderConfiguration||false|SecretProviderConfiguration||
|userPermissions||false|object||


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


# AbstractConditionClause

