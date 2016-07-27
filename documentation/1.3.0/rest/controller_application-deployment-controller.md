---
layout: post
title: Manage operations on deployed application.
root: ../../
categories: DOCUMENTATION-1.3.0
parent:
  - rest_api
  - rest_api_applications-api
node_name: rest_api_controller_application-deployment-controller
weight: 17
published: true
---

### Deploys the application on the configured Cloud.
```
POST /rest/applications/deployment
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|deployApplicationRequest|deployApplicationRequest|true|DeployApplicationRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«object»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get the deployment status for the environements that the current user is allowed to see for a given application.
```
POST /rest/applications/statuses
```

#### Description

Returns the current status of an application list from the PaaS it is deployed on for all environments.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|applicationIds|applicationIds|true|string array||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Map«string,Map«string,EnvironmentStatusDTO»»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get active deployment for the given application on the given cloud.
```
GET /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/active-deployment
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Deployment»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Un-Deploys the application on the configured PaaS.
```
DELETE /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/deployment
```

#### Description

The logged-in user must have the [ APPLICATION_MANAGER ] role for this application. Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get detailed informations for every instances of every node of the application on the PaaS.
```
GET /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/deployment/informations
```

#### Description

Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ APPLICATION_USER | DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|DeferredResult«RestResponse«Map«string,Map«string,InstanceInformation»»»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### switchMaintenanceModeOff
```
DELETE /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/deployment/maintenance
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### switchMaintenanceModeOn
```
POST /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/deployment/maintenance
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### switchInstanceMaintenanceModeOff
```
DELETE /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/deployment/{nodeTemplateId}/{instanceId}/maintenance
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||
|PathParameter|nodeTemplateId|nodeTemplateId|true|string||
|PathParameter|instanceId|instanceId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### switchInstanceMaintenanceModeOn
```
POST /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/deployment/{nodeTemplateId}/{instanceId}/maintenance
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||
|PathParameter|nodeTemplateId|nodeTemplateId|true|string||
|PathParameter|instanceId|instanceId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Scale the application on a particular node.
```
POST /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/scale/{nodeTemplateId}
```

#### Description

Returns the detailed informations of the application on the PaaS it is deployed. Application role required [ APPLICATION_MANAGER | APPLICATION_DEVOPS ] and Application environment role required [ DEPLOYMENT_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationEnvironmentId|applicationEnvironmentId|true|string||
|PathParameter|nodeTemplateId|nodeTemplateId|true|string||
|QueryParameter|instances|instances|true|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|DeferredResult«RestResponse«Void»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Launch a given workflow.
```
POST /rest/applications/{applicationId}/environments/{applicationEnvironmentId}/workflows/{workflowName}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|Application id.|true|string||
|PathParameter|applicationEnvironmentId|Deployment id.|true|string||
|PathParameter|workflowName|Workflow name.|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|DeferredResult«RestResponse«Void»»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json
