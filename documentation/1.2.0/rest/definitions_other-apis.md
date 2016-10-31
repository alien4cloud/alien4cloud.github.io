---
layout: post
exclude_from_search: true
title: Definitions
root: ../../
categories: DOCUMENTATION-1.2.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_definitions_other-apis
weight: 9000
---

{% summary %}{% endsummary %}

# Map«string,AbstractStep»

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


# AbstractStep


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|followingSteps||false|string array||
|name||false|string||
|precedingSteps||false|string array||


# Map«string,IndexedCapabilityType»

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


# Map«string,Workflow»

# AbstractWorkflowError

# DeploymentDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|deployment||false|Deployment||
|locations||false|Location array||
|source||false|IDeploymentSource||


# DeferredResult«RestResponse«string»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|result||false|object||
|setOrExpired||false|boolean||


# Collection«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|empty||false|boolean||


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

# DeferredResult«RestResponse«object»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|result||false|object||
|setOrExpired||false|boolean||


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
|data||false|enum (DEPLOYED, UNDEPLOYED, DEPLOYMENT_IN_PROGRESS, UNDEPLOYMENT_IN_PROGRESS, WARNING, FAILURE, UNKNOWN)||
|error||false|RestError||


# ModelAndView


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|empty||false|boolean||
|model||false|object||
|modelMap||false|object||
|reference||false|boolean||
|view||false|View||
|viewName||false|string||


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


# IDeploymentSource


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|id||false|string||
|name||false|string||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# Map«string,Set«string»»

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


# Map«string,IValue»

# Describe a component of a plugin (can be an IOrchestrator etc.).


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|beanName|Name of the component bean in the plugin spring context.|false|string||
|description|Description of the plugin.|false|string||
|name|Name of the plugin component.|false|string||
|type|Type of the plugin.|false|string||


# Map«string,Requirement»

# ModelMap

# SubstitutionTarget


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|nodeTemplateName||false|string||
|targetId||false|string||


# View


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|contentType||false|string||


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


# BasicSearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||


# Map«string,NodeTemplate»

# Map«string,string»

# Map«string,DeploymentArtifact»

# RestResponse«GetMultipleDataResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult||
|error||false|RestError||


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


# RestResponse«List«Result for a request for specific plugin components.»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Result for a request for specific plugin components. array||
|error||false|RestError||


# NodeFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|properties||false|object||


