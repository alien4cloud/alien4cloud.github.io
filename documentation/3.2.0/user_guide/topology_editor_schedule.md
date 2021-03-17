---
layout: post
title: Scheduler policy
root: ../../..
categories: DOCUMENTATION-3.2.0
parent: [user_guide, topology_editor]
node_name: topology_editor_schedule
weight: 195
---

{% summary %}{% endsummary %}

  
On the policy view, the ![Add policies](../../images/3.2.0/user_guide/policy_btn.png){: .inline} allows you to browse policy catalog.
Scheduler policy can be found by entering **RMS** inside the search box : 

![policy RMSScheduleWorkflowPolicy](../../images/3.2.0/user_guide/policy_catalog_1.png){: .inline} 


- A runtime policy RMSScheduleWorkflowPolicy is defined in the embedded csar.
- This policy features a schedule time window. Inside this time window, the workflow can be launched if it's conditions are met.
Conditions are expressed using a DSL that admin can enrich.
- The workflow will be launched when the defined conditions are met. 
- Conditions are initially defined by the administrator and can be modified by the user when preparing the deployment


![policy update RMSScheduleWorkflowPolicy](../../images/3.2.0/user_guide/policy_deploy_1.png) 

- More information is available at [RMS Scheduler plugin](https://github.com/alien4cloud/alien4cloud-rms-scheduler-plugin) project.



