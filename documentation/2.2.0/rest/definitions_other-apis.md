---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_definitions_other-apis
weight: 9000
---

{% summary %}{% endsummary %}

# SortConfiguration


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|ascending||false|boolean||
|sortBy||false|string||


# RestResponse«TopologyPortabilityInsight»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|TopologyPortabilityInsight||
|error||false|RestError||


# RepositoryPluginComponent


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|pluginComponent||false|Result for a request for specific plugin components.||
|repositoryType||false|string||


# RestResponse«MaintenanceModeState»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|MaintenanceModeState||
|error||false|RestError||


# UpdateServiceResourceRequest


Request to update a service resource.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilitiesRelationshipTypes|Map capability name -> relationship type id that optionally defines a relationship type to use to perform the service side operations to connect to the service on a given capability|false|object||
|description|The description of the service.|false|string||
|locationIds|The list of locations.|false|string array||
|name|The name of the service.|true|string||
|nodeInstance|The node instance definition for the service.|true|Represents a simple node instance with it's properties and attributes.||
|requirementsRelationshipTypes|Map requirement name -> relationship type id that optionally defines a relationship type to use to perform the service side operations to connect to the service on a given requirement.|false|object||
|version|The version of the service.|true|string||


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


# MaintenanceUpdateDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|message||false|string||
|progressPercentage||false|integer (int32)||


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


# Version


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|buildNumber||false|integer (int32)||
|incrementalVersion||false|integer (int32)||
|majorVersion||false|integer (int32)||
|minorVersion||false|integer (int32)||
|qualifier||false|string||


# RestResponse«FacetedSearchResult«PaaSDeploymentLog»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult«PaaSDeploymentLog»||
|error||false|RestError||


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

# PatchServiceResourceRequest


Request to update a service resource.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|capabilitiesRelationshipTypes|Map capability name -> relationship type id that optionally defines a relationship type to use to perform the service side operations to connect to the service on a given capability|false|object||
|description|The new description of the service or undefined if update request should not update the service description.|false|string||
|locationIds|The new list of location ids or undefined if update request should not update the service location ids.|false|string array||
|name|The new name of the service or undefined if the update request should not update the service name.|false|string||
|nodeInstance|The new node instance definition for the service or undefined if update request should not update the node instance definition.|false|Represents a simple node instance with it's properties and attributes.||
|requirementsRelationshipTypes|Map requirement name -> relationship type id that optionally defines a relationship type to use to perform the service side operations to connect to the service on a given requirement.|false|object||
|version|The new version of the service or undefined if the update request should not update the service version.|false|string||


# Collection«string»

# CreateRepositoryRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|configuration||false|object||
|name||false|string||
|pluginId||false|string||


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


# Capability


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|properties||false|object||
|type||false|string||


# Map«string,Capability»

# Map«string,Interface»

# Map«string,RelationshipTemplate»

# RestResponse«Service.»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Service.||
|error||false|RestError||


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


# RestResponse«object»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


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


# Represents a simple node instance with it's properties and attributes.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|attributeValues|Map of values for the runtime attributes of a tosca instance.|false|object||
|capabilities|Map of capability that contains the values of the properties as defined in the instance type.|false|object||
|properties|Map of property values that must match the properties defined in the instance type.|false|object||
|type|The tosca node type of the instance.|true|string||
|typeVersion|The version of the tosca node type of the instance.|true|string||


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
|environmentTypePermissions||false|object||
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


# RestResponse«ConstraintInformation»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ConstraintInformation||
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


# NodeInstance


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|attributeValues||false|object||
|nodeTemplate||false|NodeTemplate||
|typeVersion||false|string||


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


# SortedSearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|desc||false|boolean||
|filters||false|object||
|from||false|integer (int32)||
|query||false|string||
|size||false|integer (int32)||
|sortField||false|string||


# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


# RestResponse«List«GroupDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GroupDTO array||
|error||false|RestError||


# MaintenanceModeState


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|id||false|string||
|log||false|MaintenanceLog array||
|progressPercent||false|integer (int32)||
|user||false|string||
|userTriggered||false|boolean||


# RestResponse«GetMultipleDataResult«Service.»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult«Service.»||
|error||false|RestError||


# GetMultipleDataResult«Service.»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Service. array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# MaintenanceLog


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|date||false|integer (int64)||
|message||false|string||
|user||false|string||


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


# Map«string,Set«string»»

# Request for creation of a new service.


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name|Name of the new service (must be unique for a given version).|true|string||
|nodeType|The node type to use to build the service node template.|true|string||
|nodeTypeVersion|Archive version of the node type.|true|string||
|version|Version of the new service.|true|string||


# ApplicationEnvironmentAuthorizationUpdateRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|applicationsToAdd||false|string array||
|applicationsToDelete||false|string array||
|environmentTypesToAdd||false|string array||
|environmentTypesToDelete||false|string array||
|environmentsToAdd||false|string array||
|environmentsToDelete||false|string array||
|resources||false|string array||


# PortabilityLimitation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|enum (NOT_NORMATIVE, ORCHESTRATOR_DEPENDENT, IAAS_DEPENDENT, LOCATION_RESOURCE_MATCH, ARTIFACT_NOT_SUPPORTED_ON_HOST, RUNTIME_PACKAGE_NOT_SATISFIED, ARTIFACT_AND_RUNTIME_NOT_SATISFIED, ORCHESTRATOR_CONFLICT, IAAS_CONFLICT, ARTIFACT_SUPPORT, RUNTIME_PACKAGE)||
|info||false|string array||
|level||false|enum (ERROR, WARNING, INFO)||


# RestResponse«List«ApplicationEnvironmentAuthorizationDTO»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|ApplicationEnvironmentAuthorizationDTO array||
|error||false|RestError||


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


# ConstraintInformation


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|name||false|string||
|path||false|string||
|reference||false|object||
|type||false|string||
|value||false|string||


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


# RestResponse«List«RepositoryPluginComponent»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|RepositoryPluginComponent array||
|error||false|RestError||


# CSARDependency


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|hash||false|string||
|name||false|string||
|version||false|string||


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


# Map«string,DeploymentArtifact»

# Map«string,string»

# ApplicationEnvironmentAuthorizationDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|application||false|Application||
|environmentTypes||false|string array||
|environments||false|ApplicationEnvironment array||


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


