---
layout: post
title:  Application start process
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [cloudify_2_index, cloudify_2_runtime]
node_name: cloudify_2_runtime_app_start_process
weight: 100
---

##Node start process

The following diagram shows how the provider process the start of a node: 

[![start process][start_process_png_url]][start_process_html_url]{:target="_blank"}
  
  

## Global start assertion
In addition to the process above, a global start detection is executed to assert that the application on his entirety is started. This is:

1. Executing all the provided startDetection scripts and making sure they all pass;
2. Checking that every nodes has reached at least the `started` state.  

Only then will Cloudify consider the application as fully started.

{%info%}
Note that the timeout mentioned in the diagram above is the `9/10` of the global timeout provided by the **startDetection_timeout_inSecond** [deployment property](#/documentation/cloudify2_driver/deployment_properties.html).
This is a known limitation, as we are currently thinking of the best way to provide as intall / start timeout per component.
{%endinfo%}

[start_process_png_url]: ../../images/cloudify2_driver/start_processing.png  "start process"
[start_process_html_url]: ../../files/cloudify2_driver/start_lifecycle.html "start process"