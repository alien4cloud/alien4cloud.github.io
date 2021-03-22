---
layout: post
title: Edition validation
root: ../../..
categories: DOCUMENTATION-3.1.0
parent: [user_guide, topology_editor]
node_name: topology_editor_validation
weight: 250
---

# Topology validation

In the topology validation  view you can see the validation of the current topology and the last topology saved.
The current validation is the validation of the last topology saved with the pending operations.
The validation of the last saved topology is important because it's the topology used in the deployment.
Be sure to save a valid topology if you want to deploy.

[![topology editor validation](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation.png)](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation.png)


The icon **Invalid topology** is also displayed in the topology editor
[![topology editor warning](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_icon.png)](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_icon.png)


# Auto validation

Since version 3.1.0, if the button __Auto-validate__ is checked, If the button __Auto-validation__ is set, all operations on the editor except node move will check if the topology is valid. 
[![topology editor auto validation](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_icon_2.png)](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_icon_2.png)

Click on the button enable or disable the auto validation
[![topology editor auto validation enabled](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_auto_1.png)](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_auto_1.png)


[![topology editor auto validation disabled](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_auto_2.png)](../../images/3.1.0/user_guide/topology_editor/topology_editor_validation_auto_2.png)

The Auto-validate button is default disabled in topology editor.

Tha Auto-validate button can be not displayed by setting the Alien4Cloud config file parameter **features.client.autoValidation** to false.
When it is not set in configuration file, its value is true, Auto-validate button is default displayed.

