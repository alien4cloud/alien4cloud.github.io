---
layout: post
title: Auth Controller
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [rest_api, rest_api_other-apis]
node_name: rest_api_controller_auth-controller
weight: 43
---

### Get the current authentication status and user's roles.
```
GET /rest/v1/auth/status
```

#### Description

Return the current user's status and it's roles.

#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«UserStatus»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

