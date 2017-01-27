---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_admin-orchestrator-api]
node_name: rest_api_definitions_admin-orchestrator-api
weight: 9000
---

{% summary %}{% endsummary %}

# RestResponse«OrchestratorConfiguration»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|OrchestratorConfiguration||
|error||false|RestError||


# UserDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|email||false|string||
|firstName||false|string||
|lastName||false|string||
|username||false|string||


# GroupDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|email||false|string||
|id||false|string||
|name||false|string||


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
|nodeType||false|string||
|relationshipType||false|string||
|type||false|string||
|upperBound||false|integer (int32)||


# Orchestrator update request.


A request object to pass when updating an orchestrator. Contains updatable fields. a topology deployment. An orchestrator may manage one or multiple locations.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|deploymentNamePattern||false|string||
|name||false|string||


# FilterDefinition


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||


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


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
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


# Request to update a location resource.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|enabled|Flag to know if the resource is available to be used for configuration or matching.|false|boolean||
|name|New name of the resource.|false|string||


# LocationSupport


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|multipleLocations||false|boolean||
|types||false|string array||


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


# Request for creation of a new orchestrators.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name|Name of the orchestrators (must be unique as this allow users to identify it).|true|string||
|pluginBean|Id of the element of the plugin to use to manage communication with the orchestrators (plugins may have multiple components).|true|string||
|pluginId|Id of the plugin to use to manage communication with the orchestrators.|true|string||


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


# LocationDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|location||false|Location||
|resources||false|Contains the types and templates of elements configured for a given location.||


# Map«string,FilterDefinition»

# UpdateLocationRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|environmentType||false|string||
|name||false|string||


# Contains a custom resource template with its location's updated dependencies.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|newDependencies|The location's dependencies, which might have been updated when creating the resource template.|false|CSARDependency array||
|resourceTemplate|A custom configured resource template.|false|LocationResourceTemplate||


# RestResponse«GetMultipleDataResult«Orchestrator.»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult«Orchestrator.»||
|error||false|RestError||


# RestResponse«Contains a custom resource template with its location's updated dependencies.»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Contains a custom resource template with its location's updated dependencies.||
|error||false|RestError||


# Capability


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# Contains the types and templates of elements configured for a given location.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|allNodeTypes|Map that contains all node types.|false|object||
|capabilityTypes|Map that contains the capability types used by the configuration types or node types.|false|object||
|configurationTemplates|List of configuration templates already configured for the location. Usually abstract  types.|false|LocationResourceTemplate array||
|configurationTypes|Map of node types id, node type used to configure a given location.|false|object||
|nodeTemplates|List of node templates already configured for the location.|false|LocationResourceTemplate array||
|nodeTypes|Map of node types id, node type used to configure the templates of on-demand resources in a location.|false|object||
|onDemandTypes|Map that contains the on demdand types.|false|object||
|providedTypes|List of recommended node types ID, e.g. defined at the orchestrator level|false|string array||


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


# RestResponse«boolean»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|boolean||
|error||false|RestError||


# Map«string,Capability»

# Request to update a location resource template property.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|propertyName|Name of the property to update.|false|string||
|propertyValue|Value of the property to update, the type must be equal to the type of the property that will be updated.|false|object||


# PropertyValue


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definition||false|boolean||
|value||false|object||


# Map«string,Interface»

# Map«string,RelationshipTemplate»

# Map«string,PropertyDefinition»

# Map«string,List«PropertyConstraint»»

# RestResponse«Array«string»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string array||
|error||false|RestError||


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


# RestResponse«ConstraintInformation»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ConstraintInformation||
|error||false|RestError||


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


# Request for creation of a new location.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|infrastructureType|Type of the infrastructure of the new location.|true|string||
|name|Name of the location (must be unique for this orchestrator as this allow users to identify it).|true|string||


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


# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


# Map«string,NodeType»

# Request for creation of a new location's resource.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|archiveName|Archive name of the resource type.|false|string||
|archiveVersion|Archive version of the resource type.|false|string||
|resourceName|Name of the location's resource.|true|string||
|resourceType|Type of the location's resource.|true|string||


# LocationResourceTemplate


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|enabled||false|boolean||
|generated||false|boolean||
|id||false|string||
|locationId||false|string||
|name||false|string||
|portabilityDefinitions||false|object||
|service||false|boolean||
|template||false|NodeTemplate||
|types||false|string array||


# RestResponse«List«GroupDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GroupDTO array||
|error||false|RestError||


# RestResponse«LocationDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|LocationDTO||
|error||false|RestError||


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


# RestResponse«List«UserDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|UserDTO array||
|error||false|RestError||


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


# Map«string,Set«string»»

# ApplicationEnvironmentAuthorizationUpdateRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationsToAdd||false|string array||
|applicationsToDelete||false|string array||
|environmentsToAdd||false|string array||
|environmentsToDelete||false|string array||


# RestResponse«List«LocationDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|LocationDTO array||
|error||false|RestError||


# RestResponse«List«ApplicationEnvironmentAuthorizationDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationEnvironmentAuthorizationDTO array||
|error||false|RestError||


# Map«string,IValue»

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


# Usage


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|resourceId||false|string||
|resourceName||false|string||
|resourceType||false|string||
|workspace||false|string||


# GetMultipleDataResult«Orchestrator.»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Orchestrator. array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# Map«string,Requirement»

# RestResponse«Orchestrator.»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Orchestrator.||
|error||false|RestError||


# ConstraintInformation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|path||false|string||
|reference||false|object||
|type||false|string||
|value||false|string||


# RestResponse«LocationSupport»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|LocationSupport||
|error||false|RestError||


# RestResponse«List«LocationResourceTemplate»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|LocationResourceTemplate array||
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


# Map«string,AbstractPropertyValue»

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


# OrchestratorConfiguration


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|configuration||false|object||
|id||false|string||


# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|hash||false|string||
|name||false|string||
|version||false|string||


# Map«string,CapabilityType»

# Map«string,string»

# Map«string,DeploymentArtifact»

# ApplicationEnvironmentAuthorizationDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|application||false|Application||
|environments||false|ApplicationEnvironment array||


# Request to update or check the value of a property.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|definitionId|Id of the property to set.|true|string||
|value|Value to set for the property.|true|string||


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
|groupPermissions||false|object||
|id||false|string||
|infrastructureType||false|string||
|lastUpdateDate||false|string (date-time)||
|metaProperties||false|object||
|name||false|string||
|orchestratorId||false|string||
|userPermissions||false|object||


# NodeFilter


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilities||false|object||
|properties||false|object||


