---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_admin-plugin-api]
node_name: rest_api_definitions_admin-plugin-api
weight: 9000
---

{% summary %}{% endsummary %}

# PluginDescriptor


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|componentDescriptors||false|Describe a component of a plugin (can be an IOrchestrator etc.). array||
|configurationClass||false|string||
|dependencies||false|string array||
|description||false|string||
|id||false|string||
|name||false|string||
|uiEntryPoint||false|string||
|version||false|string||


# RestResponse«object»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object||
|error||false|RestError||


# RestResponse«Void»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|error||false|RestError||


# PluginUsage


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|resourceId||false|string||
|resourceName||false|string||
|resourceType||false|string||


# Describe a component of a plugin (can be an IOrchestrator etc.).


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|beanName|Name of the component bean in the plugin spring context.|false|string||
|description|Description of the plugin.|false|string||
|name|Name of the plugin component.|false|string||
|type|Type of the plugin.|false|string||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# GetMultipleDataResult«Plugin»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Plugin array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# RestResponse«List«PluginUsage»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|PluginUsage array||
|error||false|RestError||


# RestResponse«GetMultipleDataResult«Plugin»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult«Plugin»||
|error||false|RestError||


# Plugin


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|configurable||false|boolean||
|descriptor||false|PluginDescriptor||
|enabled||false|boolean||
|esId||false|string||
|id||false|string||
|pluginPathId||false|string||


