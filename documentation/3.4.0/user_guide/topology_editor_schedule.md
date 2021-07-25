---
layout: post
title: Scheduler policy
root: ../../..
categories: DOCUMENTATION-3.4.0
parent: [user_guide, topology_editor]
node_name: topology_editor_schedule
weight: 195
---

{% summary %}{% endsummary %}

  
From the policy view, the ![Add policies](../../images/3.4.0/user_guide/policy_btn.png){: .inline} allows you to browse policy catalog.
Scheduler policy can be found by entering **RMS** inside the search box : 

![policy RMSScheduleWorkflowPolicy](../../images/3.4.0/user_guide/policy_catalog_1.png){: .inline} 


- A runtime policy RMSScheduleWorkflowPolicy is defined in the embedded csar.
- This policy features a schedule time window. Inside this time window, the workflow can be launched when its conditions are met.
Conditions are expressed using a DSL that admin can enrich.
- The workflow will be launched when the time criteria and the conditions (if any) are both satisfied. 
- Conditions are initially defined by the administrator and can be modified by the user when preparing the deployment


![policy update RMSScheduleWorkflowPolicy](../../images/3.4.0/user_guide/policy_deploy_1.png) 

Since version 3.4.0, some values are proposed for helping the administrator :
![policy update RMSScheduleWorkflowPolicy2](../../images/3.4.0/user_guide/policy_deploy_2.png) 

It is also available in the Wizard UI
![policy update RMSScheduleWorkflowPolicy3](../../images/3.4.0/user_guide/policy_deploy_3.png) 

Interaction criterias for launching workflow with monitoring tools Zabbix and Prometheus is now possible in **Conditions** parameter

![policy update RMSScheduleWorkflowPolicy4](../../images/3.4.0/user_guide/policy_deploy_4.png) 

A pop up is displayed by clicking on **Conditions**
![policy update RMSScheduleWorkflowPolicy5](../../images/3.4.0/user_guide/policy_deploy_5.png) 


In this example below, several conditions are automatically proposed about the cpu use with the last known metric collected from the monitoring.
![policy update RMSScheduleWorkflowPolicy6](../../images/3.4.0/user_guide/policy_deploy_6.png) 



- More information is available at [RMS Scheduler plugin](https://github.com/alien4cloud/alien4cloud-rms-scheduler-plugin) project.



