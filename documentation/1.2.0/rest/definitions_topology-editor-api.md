---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_topology-editor-api]
node_name: rest_api_definitions_topology-editor-api
weight: 9000
---

{% summary %}{% endsummary %}

# ILocationMatch


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|location||false|Location||
|orchestrator||false|Orchestrator.||
|ready||false|boolean||
|reasons||false|object||


# Map«string,AbstractStep»

# RestResponse«AbstractTopologyVersion»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|AbstractTopologyVersion||
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


# AbstractStep


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|followingSteps||false|string array||
|name||false|string||
|precedingSteps||false|string array||


# Map«string,IndexedCapabilityType»

# Map«string,IndexedRelationshipType»

# AddRelationshipTemplateRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|relationshipTemplate||false|RelationshipTemplate||


# FilterDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||


# RestResponse«List«string»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string array||
|error||false|RestError||


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


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


# Map«string,Workflow»

# AbstractWorkflowError

# UpdateIndexedTypePropertyRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|propertyName||true|string||
|propertyValue||true|string||
|type||true|string||


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


# Map«string,IndexedNodeType»

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
|authorizedGroups||false|string array||
|authorizedUsers||false|string array||
|deploymentNamePattern||false|string||
|id||false|string||
|name||false|string||
|pluginBean||false|string||
|pluginId||false|string||
|state||false|enum (DISABLED, CONNECTING, CONNECTED, DISCONNECTED)||


# Map«string,Capability»

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

# AbstractActivity


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|nodeId||false|string||


# Topology


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|delegateId||false|string||
|delegateType||false|string||
|dependencies||false|CSARDependency array||
|empty||false|boolean||
|groups||false|object||
|id||false|string||
|inputArtifacts||false|object||
|inputs||false|object||
|lastUpdateDate||false|string (date-time)||
|nodeTemplates||false|object||
|outputAttributes||false|object||
|outputCapabilityProperties||false|object||
|outputProperties||false|object||
|substitutionMapping||false|SubstitutionMapping||
|workflows||false|object||


# Map«string,PropertyDefinition»

# Map«string,List«PropertyConstraint»»

# ImplementationArtifact


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName||false|string||
|archiveVersion||false|string||
|artifactRef||false|string||
|artifactType||false|string||


# TopologyValidationResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|taskList||false|AbstractTask array||
|valid||false|boolean||
|warningList||false|AbstractTask array||


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
|groups||false|string array||
|interfaces||false|object||
|name||false|string||
|properties||false|object||
|relationships||false|object||
|requirements||false|object||
|type||false|string||


# TopologyDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilityTypes||false|object||
|nodeTypes||false|object||
|outputCapabilityProperties||false|object||
|relationshipTypes||false|object||
|topology||false|Topology||


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


# RestResponse«Set«string»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string array||
|error||false|RestError||


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


# RestResponse«ConstraintInformation»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ConstraintInformation||
|error||false|RestError||


# Map«string,NodeGroup»

# RestResponse«Workflow»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Workflow||
|error||false|RestError||


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


# TopologyWorkflowAddActivityRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|activity||false|AbstractActivity||
|before||false|boolean||
|relatedStepId||false|string||


# Map«string,Operation»

# Operation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|implementationArtifact||false|ImplementationArtifact||
|inputParameters||false|object||


# SubstitutionMapping


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|requirements||false|object||
|substitutionType||false|IndexedNodeType||


# Map«string,SubstitutionTarget»

# PropertyConstraint

# IValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||


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


# RestResponse«List«ILocationMatch»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ILocationMatch array||
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


# Map«string,AbstractPropertyValue»

# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|version||false|string||


# RestResponse«TopologyValidationResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|TopologyValidationResult||
|error||false|RestError||


# NodeTemplateRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|indexedNodeTypeId||false|string||
|name||false|string||


# Map«string,NodeTemplate»

# Map«string,string»

# Map«string,DeploymentArtifact»

# RestResponse«Array«IndexedNodeType»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|IndexedNodeType array||
|error||false|RestError||


# AbstractTopologyVersion


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|delegateId||false|string||
|delegateType||false|string||
|description||false|string||
|id||false|string||
|latest||false|boolean||
|released||false|boolean||
|snapshot||false|boolean||
|topologyId||false|string||
|version||false|string||


# Map«string,List«string»»

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


# Location


A location represents a cloud, a region of a cloud, a set of machines and resources.basically any location on which alien will be allowed to perform deployment. Locations are managed by orchestrators.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|dependencies||false|CSARDependency array||
|environmentType||false|string||
|groupRoles||false|object||
|id||false|string||
|infrastructureType||false|string||
|lastUpdateDate||false|string (date-time)||
|metaProperties||false|object||
|name||false|string||
|orchestratorId||false|string||
|userRoles||false|object||


# NodeFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|properties||false|object||


