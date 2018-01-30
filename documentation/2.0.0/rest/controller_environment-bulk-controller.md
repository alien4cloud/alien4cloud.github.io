---
layout: post
title: Bulk API for application environments.
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_applications-api]
node_name: rest_api_controller_environment-bulk-controller
weight: 33
---

### Get a list of environment from their ids.
```
POST /rest/v1/applications/environments/bulk/ids
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|deploymentIds|deploymentIds|true|string array||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|JsonRawRestResponse|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

