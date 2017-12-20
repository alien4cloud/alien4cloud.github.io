---
layout: post
title: Manage variables
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, topology_editor, topology_editor_var_inputs]
node_name: topology_editor_manage_vars
weight: 200
---

{% summary %}{% endsummary %}

Here we will go through the ***variables*** management and usage in Alien4Cloud.  
You might want to check out the [concept behind variables](#/documentation/2.0.0/user_guide/inputs_vars/topology_editor_var_inputs_concept.html) first.

# Scopes  

Variables are key/value data that can be provided at different scopes of the application (application, environment, environments type). They are stored and editable as YAML files:

- **Application variables (APP_VARs)** at `${directories.alien}/variables/app_[APP_ID].yml`

- **Environment type variables (ENV_TYPE_VARs)** at `${directories.alien}/${csar_repository}/[APP_ID]/[TOPOLOGY_VERSION]/expanded/inputs/var_env_[ENV_TYPE].yml`

- **Environment type variables (ENV_VARs)** at `${directories.alien}/${csar_repository}/[APP_ID]/[TOPOLOGY_VERSION]expanded/inputs/var_env_[ENV_ID].yml`

# Application variables
Once on the application information view, click on `variables` button,
![App var button](../../images/2.0.0/user_guide/topology_editor/app_vars.png)  

You will have an editor where you can fill in your APP_VARs in yaml format

![App var editor](../../images/2.0.0/user_guide/topology_editor/app_vars_editor.png)  


Don't forget to hit the ![var_modal_edit](../../images/2.0.0/user_guide/topology_editor/var_modal_save_btn.png){: height="26px" .inline} button.

# Topology variables

Topology variables are environment and environment type variables. They are editable via the __inputs and Variables__ button ![Inputs / variables](../../images/2.0.0/user_guide/topology_editor/inputs_vars_button.png){: height="26px" .inline} in the editor. Once clicked, will be displayed a tab menu with: inputs and variables.


![editor variables](../../images/2.0.0/user_guide/topology_editor/editor_variables.png)  

The variables listed here are the ones having a value set in at least one scope (application, environment or environment type).   
Click on a variable to see where it is defined, and edit it if possible.

![variables modal](../../images/2.0.0/user_guide/topology_editor/var_modal.png)  


Let's call that modal the `variable value modal`.   
On the left, are the different scopes of variables.   
The right side is the place to view and edit the value set to a variable in scope.  

If a value is set, then the scope name will appear green, otherwise it means the variable is not defined.
Either way, a click on a scope item will display the value (or undefined) on the right panel, and you can edit it by clicking on the ![var_modal_edit](../../images/2.0.0/user_guide/topology_editor/var_modal_edit_btn.png){: height="26px" .inline} button (this button allows you to toggle edit mode on / off):

![variables modal edit mode](../../images/2.0.0/user_guide/topology_editor/var_modal_edit_mode.png)

The editor is a Yaml editor. Do not forget to hit the ![var_modal_edit](../../images/2.0.0/user_guide/topology_editor/var_modal_save_btn.png){: height="26px" .inline} button if you've modify the value, before selecting another scope, otherwise the changes will be lost.

{%info%}
As you can notice, application variables can not be edited on this view. They are only in read-only mode
{%endinfo%}

{%warning%}
<h5>Save the topology</h5>
Editing a variable is an operation like adding a node or editing a node property in the topology. Thus, do not forget to save the topology if you want to validate your changes.
{%endwarning%}

### Adding a variable

__Adding a variable__ means setting a value for that variable name in a scope.  

As said before, variables displayed in this view are only the ones having a values in at least one scope. The filter bar allows you to refine the list by entering the name of the variable you would like to view.  
when you type in a name, and press enter, the variable valu modal will be displayed. Two cases scenario:

- the variable is **already defined** somewhere: In that case, it is like you've clicked on the variable name in the list.

- the variable is **not defined** anywhere: In that case, setting its value in a scope will lead to the creation of that variable, and you will be able to view it in the list.

Now that the variable value is edited, you might want to use it to [pre-configure an input](#/documentation/2.0.0/user_guide/inputs_vars/topology_editor_preconf_inputs.html).
