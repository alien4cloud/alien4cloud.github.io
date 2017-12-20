---
layout: post
title: Variables and préconfigured inputs
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, topology_editor]
node_name: topology_editor_var_inputs
weight: 170
---

From version `2.0.0`, Alien 4 cloud provides a way to define a set of key/value data called variables, that can be used to configure a deployment on different environements.  
This section details what is the purpose of variables, how they work, and how a user can manage (define and reference) these on a deployment.

#Goal
Inputs can be defined when designing the application topology. Generally, they are use to customize the deployment of the topology on different environements. The deployer should then, fill them up, according to some information such as the context, the environement type, the location, etc. You can have many of them, and it can sometimes be a burden for the deployer to fill them up, especially when they do not change that much between deployments and environments.
The purpose of the variables in alien4cloud is, in general to ease such tasks, but more:

- Defining reusable informations for inputs,
- Reducing the number of inputs the deployer need to manage,
- Allowing the Architect (topology designer ) to specify, using variables, default values for inputs per deployent context
- Thus, making the topology usable in different environments without redefining/adapting all inputs. (assumption the number of variables to update/define will be lower than the number of inputs)

Now, here are

- [how it works](#/documentation/2.0.0/user_guide/inputs_vars/topology_editor_var_inputs_concept.html)

- [how to manage variables](#/documentation/2.0.0/user_guide/inputs_vars/topology_editor_manage_vars.html).

- [how to pre-configure inputs](#/documentation/2.0.0/user_guide/inputs_vars/topology_editor_preconf_inputs.html).
