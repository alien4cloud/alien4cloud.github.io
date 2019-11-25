---
layout: post
title: Definitions
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [rest_api, rest_api_admin-user-api]
node_name: rest_api_definitions_admin-user-api
weight: 9000
---

{% summary %}{% endsummary %}

# Group


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|email||false|string||
|id||false|string||
|name||false|string||
|roles||false|string array||
|users||false|string array||


# User


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|accountNonExpired||false|boolean||
|accountNonLocked||false|boolean||
|credentialsNonExpired||false|boolean||
|email||false|string||
|enabled||false|boolean||
|firstName||false|string||
|groupRoles||false|string array||
|groups||false|string array||
|internalDirectory||false|boolean||
|lastName||false|string||
|password||false|string||
|roles||false|string array||
|username||false|string||


# RestResponse«string»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|string||
|error||false|RestError||


# RestResponse«List«User»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|User array||
|error||false|RestError||


# RestResponse«List«Group»»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Group array||
|error||false|RestError||


# RestResponse«User»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|User||
|error||false|RestError||


# RestResponse«Group»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|Group||
|error||false|RestError||


# Map«string,Array«string»»

# UpdateGroupRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|email||false|string||
|name||false|string||
|roles||false|string array||
|users||false|string array||


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


# UserSearchRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|from||false|integer (int32)||
|group||false|string||
|query||false|string||
|size||false|integer (int32)||


# RestError


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|code||false|integer (int32)||
|message||false|string||


# CreateGroupRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|description||false|string||
|email||false|string||
|name||false|string||
|roles||false|string array||
|users||false|string array||


# RestResponse«FacetedSearchResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|FacetedSearchResult||
|error||false|RestError||


# Map«string,Array«FacetedSearchFacet»»

# RestResponse«GetMultipleDataResult»


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|GetMultipleDataResult||
|error||false|RestError||


# CreateUserRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|email||false|string||
|firstName||false|string||
|lastName||false|string||
|password||false|string||
|roles||false|string array||
|username||false|string||


# GetMultipleDataResult


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|data||false|object array||
|from||false|integer (int32)||
|queryDuration||false|integer (int64)||
|to||false|integer (int32)||
|totalResults||false|integer (int64)||
|types||false|string array||


# UpdateUserRequest


{: .table .table-bordered}
|Name|Description|Required|Schema|Default|
|----|----|----|----|----|
|email||false|string||
|firstName||false|string||
|lastName||false|string||
|password||false|string||
|roles||false|string array||


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


