---
layout: post
title: Pre-configure inputs
root: ../../../
categories: DOCUMENTATION-3.1.0
parent: [user_guide, topology_editor, topology_editor_var_inputs]
node_name: topology_editor_preconf_inputs
weight: 300
---

{% summary %}{% endsummary %}

Here we will see how to **pre-configure inputs** in Alien4Cloud UI.
You might want to check out the [concept behind variables](#/documentation/3.0.0/user_guide/inputs_vars/topology_editor_var_inputs_concept.html) first, and also [how to manage variables](#/documentation/3.0.0/user_guide/inputs_vars/topology_editor_manage_vars.html).

# Categories of inputs

In Alien4cloud, inputs are now divided in two categories:

- **Deployer inputs**: Inputs provided just before the deployment. In the UI, we call them `Input Properties`

- **Predefined inputs**: Inputs provided thanks to inputs mapping files. In the UI we call them `Preconfigured input properties`

In the deployment configuration flow, an input that had a value set by the topology designer is a Preconfigured input, and the value cannot be changed. If not, it is a Deployer input, and its values has to be set by the deployer on this phase.

Pre-configured inputs are stored and editable as YAML file at `${directories.alien}/${csar_repository}/[APP_ID]/[TOPOLOGY_VERSION]/expanded/inputs/inputs.yml`

# Pre-configure an input

When you click on the __inputs and Variables__ button ![Inputs / variables](../../images/3.1.0/user_guide/topology_editor/inputs_vars_button.png){: height="26px" .inline}, the **inputs** tab allows you to manage **ALL** the inputs properties defined in the topology.

Let assume we have set two properties "num_cpu" and "disk_share" as input in the topology editor. The inputs view will display all of them, allowing you to preconfigure them, or not!

![editor inputs](../../images/3.1.0/user_guide/topology_editor/editor_inputs.png)

Here are displayed the couples *input name / value (expression)*. When no value is set, the input is displayed as *deployer input*.

Click on ![editor inputs edit](../../images/3.1.0/user_guide/topology_editor/editor_inputs_edit.png){: height="26px" .inline} button to set or edit the expression associated to an input.
As you can see, the modal has two tabs: Value and Expression.

## Value

Remember we said inputs are typed? Well, on the __Value__ tab, you can set a value for this input, using the common property editor you find in the topology editor or anywhere else in Alien4cloud when it comes to edit a property.

![editor_input_edit_value_modal](../../images/3.1.0/user_guide/topology_editor/editor_input_edit_value_modal.png)


## Expression

On another hand, the __Expression__ tab let you use anything allowed to set the value of the input. This could be:

- a yaml representation of the input value (integer, string, list, object, etc.)
- a String referencing one or more variables
- a SpEL expression

For example, we want to use the variable _env_var_ to pre-configure a value for the input _disk_share_

![editor_inputs_expression_modal](../../images/3.1.0/user_guide/topology_editor/editor_inputs_expression_modal.png)

Hit "save" when finish to validate the change.

![editor_inputs_var_clickable](../../images/3.1.0/user_guide/topology_editor/editor_inputs_var_clickable.png)

As you can see, the variable referenced in __disk_share__ expression is displayed as a link. A click will open the variable value modal.

{%warning%}
<h5>Save the topology</h5>
Editing an input expression is an operation like adding a node or editing a node property in the topology. Thus, do not forget to save the topology if you want to validate your changes.
{%endwarning%}
