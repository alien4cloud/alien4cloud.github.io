---
layout: post
title: Manages application topology versions for a given application version
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-topology-version-controller
weight: 25
---

### Create a new application topology version
```
POST /rest/v1/applications/{applicationId}/versions/{applicationVersionId}/topologyVersions
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationVersionId|applicationVersionId|true|string||
|BodyParameter|request|request|true|CreateApplicationTopologyVersionRequest||


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

### Delete an application topology version from its id
```
DELETE /rest/v1/applications/{applicationId}/versions/{applicationVersionId}/topologyVersions/{topologyVersion}
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|applicationVersionId|applicationVersionId|true|string||
|PathParameter|topologyVersion|topologyVersion|true|string||


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

