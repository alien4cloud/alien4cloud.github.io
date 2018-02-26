---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_definitions_topology-editor-api
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


# ILocationMatch


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|location||false|Location||
|orchestrator||false|Orchestrator.||
|ready||false|boolean||
|reasons||false|object||


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


# Map«string,DataType»

# FilterDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||


# Map«string,PolicyType»

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


# Capability


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# Orchestrator.


An orchestrator is alien 4 cloud is a software engine that alien 4 cloud connects to in order to orchestrate a topology deployment. An orchestrator may manage one or multiple locations.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|deploymentNamePattern||false|string||
|id||false|string||
|name||false|string||
|pluginBean||false|string||
|pluginId||false|string||
|state||false|enum (DISABLED, CONNECTING, CONNECTED, DISCONNECTED)||


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


# TopologyValidationResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|infoList||false|AbstractTask array||
|taskList||false|AbstractTask array||
|valid||false|boolean||
|warningList||false|AbstractTask array||


# LocationModifierReference


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|beanName||false|string||
|phase||false|string||
|pluginId||false|string||


# Requirement


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


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

# Map«string,NodeGroup»

# Map«string,NodeType»

# AbstractTask


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|enum (LOG, EMPTY, IMPLEMENT_RELATIONSHIP, SATISFY_LOWER_BOUND, PROPERTIES, SCALABLE_CAPABILITY_INVALID, NODE_FILTER_INVALID, WORKFLOW_INVALID, ARTIFACT_INVALID, DEPRECATED_NODE, MISSING_VARIABLES, UNRESOLVABLE_PREDEFINED_INPUTS, PREDEFINED_INPUTS_CONSTRAINT_VIOLATION, PREDEFINED_INPUTS_TYPE_VIOLATION, INPUT_PROPERTY, INPUT_ARTIFACT_INVALID, LOCATION_POLICY, LOCATION_UNAUTHORIZED, LOCATION_DISABLED, NO_NODE_MATCHES, NODE_NOT_SUBSTITUTED, FORBIDDEN_OPERATION, IMPLEMENT, REPLACE, ORCHESTRATOR_PROPERTY, CFY_MULTI_RELATIONS)||
|source||false|string||


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


# Map«string,SubstitutionTarget»

# SecretProviderConfiguration


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|configuration||false|object||
|pluginName||false|string||


# PropertyConstraint

# IValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||


# RestResponse«TopologyDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|TopologyDTO||
|error||false|RestError||


# Map«string,Set«string»»

# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


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


# RestResponse«List«ILocationMatch»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ILocationMatch array||
|error||false|RestError||


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


# RestResponse«TopologyValidationResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|TopologyValidationResult||
|error||false|RestError||


# Map«string,WorkflowStep»

# Map«string,NodeTemplate»

# Map«string,CapabilityType»

# Map«string,DeploymentArtifact»

# Map«string,string»

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


# AbstractConditionClause

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


