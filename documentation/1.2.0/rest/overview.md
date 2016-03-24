---
layout: post
title: Rest API
root: ../../
categories: DOCUMENTATION-1.2.0
parent: []
node_name: rest_api
weight: 9000
published: true
---



# ALIEN 4 Cloud API

## Overview
This section contains documentation of Alien 4 Cloud REST API.

{% note %}
The rest API is available via swagger on this url :
http://alien4cloud.host:alien4cloud.port/swagger-ui.html
{% endnote %}

### Version information
***Current Version***: 1  
***Base url access***: `/rest/V1`

{% info %}
<h5>Rest API Versioning</h5>
The Rest API is versionned from now on. So, you should specify a version in the url when accessing resources.  
However, there is an exception with the ***alien4cloud 1.1.0 API***, which do not need a version.  
Also note that you can use the keyword `latest` in place of version (example: `/rest/latest/applications`), you will be then consuming the latest API version. We do not recommend this.
{%endinfo%}
