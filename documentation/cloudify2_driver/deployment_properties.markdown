---
layout: post
title:  Deployment properties
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index]
node_name: cloudify_2_deployment_properties
weight: 40000
---

The Alien4Cloud cloudify 2.X provider provides some properties to setup or customize a deployment:  

{: .table .table-bordered}
| Property           | Default Value       | Possible values | Description                                  |
|:----------------------|:--------------------|:----------------|:---------------------------------------------|
| startDetection_timeout_inSecond      | 600 (Seconds) | > 0  | Cloudify startDetection timeout: Timeout for the application to be fully started |
| disable_self_healing                 | No(False) | Yes(True), No(False)  | Whether to disable or not the cloudify's self-healing mechanism for this deployment. |
| events_lease_inHour                  | 2 (hour)) | > 0  | Lease time in hour for alien4cloud events. After this time, events will e deleted. |
| deletable_blockstorage               | No(False) | Yes(True), No(False) | Whether to delete or not the created volumes when undeploying. |
| log_level                            | INFO | OFF, ERROR, INFO, DEBUG |Log level for this deployment.|