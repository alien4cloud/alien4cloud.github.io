---
layout: post
title: Post deployment operations
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, application_management, application_runtime]
node_name: appliation_post_deployment
weight: 300
published: true
---

{% summary %}{% endsummary %}

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

Once an application is deployed, we might need to be able to upgrade some file (config, binary, licence file) related to a given component without modifying the topology itself (no change on relationships, no node added, no instances added), or maybe just to execute a custom operation to put or get some informations from the deployed nodes.  
The **Cloudify 3 premium plugin** plugin allows you to perform such actions. When the plugin is enabled, you can see `patches` and `operations` sub menu on the left side bar on the runtime view. The two concepts are very similar in some ways.

# What it is?
Functionally speaking, a patch / operation can be defined as a set of actions that will be executed on a node, for example upgrading a version or the configuration of a component, accessing some informations about a component, etc....  It is linked to a specific version of a node, and can be triggered for one or more instances of that node.  
Technically speaking, it can be a script file, or a zipped set of files, that one will upload once the topology is deployed, via the provided user interface. Supported format are: *bash script* for linux, *power shell* for windows, *zip* and *tar.gz*.

{%warning%}
If you provide an archive, you must make sure to have only one script file at the root. If you need to provide additional scripts, just put them in subfolders and refer to them using relative path (at execution stage, the current working folder will be the root of the archive).
{%endwarning%}

# What it is not?
This feature is not a *hot upgrade* assistant: it's your responsibility to enhance your TOSCA components once you have provided a patch for a given component.

A real life scenario could be:

- you write TOSCA components.
- you assemble them in a topology V1.
- you deploy your application.
- you provide a patch that change a config for example.
- in parallel, you upgrade your component in order to integrate the changes, and release a new version of this component.
- you upgrade your topology to make it use your new component version. By the way you will probably release a new version V2 of your application topology.

Then, if you redeploy the application V1, the patches will be executed but if you deploy V2, they won't be (since a patch is associated to a component version).

# Creation

{%info%}
<h5>Requirements</h5>
To use this feature, your orchestrator should be configure with a functional URL for the [post-deployment application](#/documentation/2.0.0/admin_guide/post_deployment_application.html).
{%endinfo%}

Once you have your script or archive, you can upload it. In the modal, choose a name for your operation, eventually add a description,
and select a node.  
Note that in the list of nodes, there are not nodes such as ___Compute___, ___Network___ and ___Storage___ nodes (nodes provided by the IAAS).

<!-- [![add patch][config_orchestrator_postdeployment_ssl]][config_orchestrator_postdeployment_ssl]{:target="_blank"} -->
[![add patch][add_patch]][add_patch]{:target="_blank"}

# Execution
Alien4Cloud interface allows the user to trigger a patch/operation execution for one or all instances of a node. There are somehow specific behaviors.

{%warning%}
<h5>Known issue</h5>
Actually, the result we see on the UI doesn't represent the real result of the execution of the operation or patch command.
{%endwarning%}

## Operation execution
An operation can be triggered as many time as we want on a node.

[![Operation view][operation_view]][operation_view]{:target="_blank"}

## Patches execution
As stated above, triggering a patch execution is possible via the provided user interface.  
However and most importantly, once a patch is added for a node, it will be triggered automatically on:

- all the instances of the node, in case of fail-over
- all the newly created instances in case of scaling up.

If the execution is successful, the patch is acknowledged and you can see it on the view.  

***TODO***: image patch acknowledged  

Once a patch is executed and acknowledged on an instance, it will not be executed again even if it is triggered.

## Node properties and attributes

Some inputs are auto-generated when the operation is added while blueprint is generated, so for a given node, in any patch or post deployment operation, you can access the node's properties and attributes.

Attribute names are prefixed by `self_attribute_` and property names by `self_property_`. Like any inputs in any operation implementation script, you can access them in your script using environment variables.

# Deletion
You can remove a patch / operation if you need to via the provided user interface. **However, note that if the patch / operation has already been executed on some instances, deleting it will not undo the changes on those instances**.  
Also, when an application environment is deleted, all patches and operations related to a deployment with that environment are deleted.

[operation_view]: ../../images/user_guide/application/runtime-operation-view.png
[add_patch]: ../../images/user_guide/application/deployment/add_patch.png