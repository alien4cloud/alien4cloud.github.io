---
layout: post
title: Operations on application's tags
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_application-tags-controller
weight: 21
---

### Update/Create a tag for the application.
```
POST /rest/v1/applications/{applicationId}/tags
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|BodyParameter|updateApplicationTagRequest|updateApplicationTagRequest|true|UpdateTagRequest||


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

### Delete a tag for the application.
```
DELETE /rest/v1/applications/{applicationId}/tags/{tagId}
```

#### Description

The logged-in user must have the application manager role for this application. Application role required [ APPLICATION_MANAGER ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|applicationId|applicationId|true|string||
|PathParameter|tagId|tagId|true|string||


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

