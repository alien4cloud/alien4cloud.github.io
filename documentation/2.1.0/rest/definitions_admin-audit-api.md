---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-2.1.0
parent: [rest_api, rest_api_admin-audit-api]
node_name: rest_api_definitions_admin-audit-api
weight: 9000
---

{% summary %}{% endsummary %}

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


# AuditConfigurationDTO


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|enabled||false|boolean||
|methodsConfiguration||false|object||


# Map«string,List«AuditedMethod»»

# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# AuditedMethod


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|action||false|string||
|bodyHiddenFields||false|string array||
|category||false|string||
|enabled||false|boolean||
|method||false|string||
|signature||false|string||


# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# RestResponse«AuditConfigurationDTO»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|AuditConfigurationDTO||
|error||false|RestError||


# Map«string,Array«FacetedSearchFacet»»

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


# Map«string,Array«string»»

