---
layout: post
title:  Application runtime
root: ../../
categories: DOCUMENTATION-3.0.0
parent: [user_guide, application_management]
node_name: application_runtime
weight: 200
---

{% summary %}{% endsummary %}

On this runtime submenu view `Application > Runtime`, you can have the detailed deployment
progress.

![Petclinc url](../../images/3.0.0/user_guide/user_guide_topology_template_runtime.png)

{%info%}
The previous picture was taken during a Petclinc deployement, to deploy your own Petclinc, please refer to [this section](#/documentation/3.0.0/orchestrators/yorc/quickstart.html).
{%endinfo%}

#Logs

You can access to the logs view by a submenu of the runtime view. In this page you can see deployments logs in alien4cloud.

![Logs view](../../images/3.0.0/user_guide/log_view.png)

<br/>
You can search for logs, and filter them by date. Some facets are also available to search specific logs:

![Logs view](../../images/3.0.0/user_guide/log_view_filters.png)

<br/>
You can dynamically tails the lasted logs

<br/>
To add or remove the log information in the table, click on the cogs button of its first line. A modal will appear and you will choose your columns.

![Logs modal](../../images/user_guide/application/log_modal.png)

#Deployment workflow

You can access to the workflow view by a submenu of the workflow view. In this page you can see deployment steps diagramm :

![Workflow view](../../images/3.0.0/user_guide/workflow_view.png)

#Execution

You can access to the Execution view by a submenu of the Execution view. In this page you can see deployment steps list :

![Execution view](../../images/3.0.0/user_guide/execution_view_1.png)

You can access to the log step by clicking on the log icon.

![Step Execution view](../../images/3.0.0/user_guide/execution_view_2.png)

#Custom workflows inputs

Since version 3.0.0, it is possible to specify custom workflow inputs.
These inputs can only be defined in topology YAML editor.

{% highlight yaml %}
    customWorkflowSample:
      inputs:
        comment:
          type: string
          required: true
          description: "Just a string"
        data:
          type: string
          required: true
          constraints:
          - min_length: 5
          description: "A string with a length >= 5" 
{% endhighlight %}


You can set the inputs in the custom workflow view details 

![Custom workflow view](../../images/3.0.0/user_guide/custom_workflow_inputs.png)

#Scaling

***TODO*** how to scale

# Launching operations
***TODO*** how to trigger an operation execution
