---
layout: post
title: Allow to list all repository plugins (artifact resolver).
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_repository-plugin-controller
weight: 48
---

### Search for repository resolver plugins.
```
GET /rest/v1/repository-plugins
```

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«RepositoryPluginComponent»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

