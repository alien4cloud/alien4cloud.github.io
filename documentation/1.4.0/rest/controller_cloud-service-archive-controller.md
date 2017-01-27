---
layout: post
title: Operations on CSARs
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [rest_api, rest_api_catalog-api]
node_name: rest_api_controller_cloud-service-archive-controller
weight: 15
---

### Upload a csar zip file.
```
POST /rest/v1/csars
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|QueryParameter|workspace|workspace|false|string||
|FormDataParameter|file|file|true|file||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«CsarUploadResult»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* multipart/form-data

#### Produces

* application/json

### Search for cloud service archives.
```
POST /rest/v1/csars/search
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|BodyParameter|searchRequest|searchRequest|true|SearchRequest||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«FacetedSearchResult»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Get a CSAR given its id.
```
GET /rest/v1/csars/{csarId}
```

#### Description

Returns a CSAR.

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|csarId|csarId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«CsarInfoDTO»|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Delete a CSAR given its id.
```
DELETE /rest/v1/csars/{csarId}
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|csarId|csarId|true|string||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«List«Usage»»|
|401|Unauthorized|No Content|
|204|No Content|No Content|
|403|Forbidden|No Content|


#### Consumes

* application/json

#### Produces

* application/json

### Add dependency to the csar with given id.
```
POST /rest/v1/csars/{csarId}/dependencies
```

#### Parameters

{: .table .table-bordered}
|Type|Name|Description|Required|Schema|Default|
|----|----|----|----|----|----|
|PathParameter|csarId|csarId|true|string||
|BodyParameter|dependency|dependency|true|CSARDependency||


#### Responses

{: .table .table-bordered}
|HTTP Code|Description|Schema|
|----|----|----|
|200|OK|RestResponse«boolean»|
|201|Created|No Content|
|401|Unauthorized|No Content|
|403|Forbidden|No Content|
|404|Not Found|No Content|


#### Consumes

* application/json

#### Produces

* application/json

