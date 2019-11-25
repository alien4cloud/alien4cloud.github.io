---
layout: post
title: Manages plugins.
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_admin-plugin-api]
node_name: rest_api_controller_plugin-controller
weight: 3
---

### Search for plugins registered in ALIEN.
```
GET /rest/v1/plugins
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|query|Query text.|false|string||
|QueryParameter|from|Query from the given index.|false|integer (int32)||
|QueryParameter|size|Maximum number of results to retrieve.|false|integer (int32)||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«GetMultipleDataResult«Plugin»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Upload a plugin archive.
```
POST /rest/v1/plugins
```

#### Description

Content of the zip file must be compliant with the expected alien 4 cloud plugin structure.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|FormDataParameter|file|Zip file that contains the plugin.|true|file||


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

* multipart/form-data

#### Produces

* application/json

### Remove a plugin.
```
DELETE /rest/v1/plugins/{pluginId}
```

#### Description

Remove a plugin (and unloads it if enabled). Note that if the plugin is used (deployment plugin for example) it won't be disabled but will be marked as deprecated. In such situation an error code 350 is returned as part of the error and a list of plugin usages will be returned as part of the returned data. Role required [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|pluginId|pluginId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«PluginUsage»»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get a plugin configuration object.
```
GET /rest/v1/plugins/{pluginId}/config
```

#### Description

Retrieve a plugin configuration object.  Role required [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|pluginId|pluginId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«object»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Save a configuration object for a plugin.
```
POST /rest/v1/plugins/{pluginId}/config
```

#### Description

Save a configuration object for a plugin. Returns the newly saved configuration.  Role required [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|pluginId|pluginId|true|string||
|BodyParameter|configObjectRequest|configObjectRequest|true|object||


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

### Disable a plugin.
```
GET /rest/v1/plugins/{pluginId}/disable
```

#### Description

Disable a plugin (and unloads it if enabled). Note that if the plugin is used (deployment plugin for example) it won't be disabled but will be marked as deprecated. In such situation an error code 350 is returned as part of the error and a list of plugin usages will be returned as part of the returned data. Role required [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|pluginId|pluginId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«PluginUsage»»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Enable a plugin.
```
GET /rest/v1/plugins/{pluginId}/enable
```

#### Description

Enable and load a plugin. Role required [ ADMIN ]

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|pluginId|pluginId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«Void»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

