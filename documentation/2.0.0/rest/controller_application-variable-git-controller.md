---
layout: post
title: Controller to retrieve and setup git configuration for application variables.
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-variable-git-controller
weight: 26
---

### Retrieve information about a git repository using environment Id.
```
GET /rest/v1/applications/{applicationId}/variables/git
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|Application id|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GitLocation»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* */*

### Update the git repository parameters for storing deployment config
```
DELETE /rest/v1/applications/{applicationId}/variables/git
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|Application id|true|string||


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

* */*

### Update the remote git repository parameters for storing application variables.
```
POST /rest/v1/applications/{applicationId}/variables/git
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|Application id|true|string||
|BodyParameter|request|request|true|Request for updating of a repository for storing deployment config.||


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

* */*

