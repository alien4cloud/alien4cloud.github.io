---
layout: post
title:  Scheduler rules management
root: ../../
categories: DOCUMENTATION-3.5.0
parent: [user_guide, admin]
node_name: scheduler_rules_management
weight: 450
---

{%summary%}{%endsummary%}

Since version 3.4.0, a basic DSL editor is provided to set advanced parameters of the **RMS Scheduler** plugin.

# DSL

A basic builtin DSL is provided by the plugin, but you can add your own DSL definitions. This can allow you to translate DSL in your own language, or to give more signification to sentences.

![Scheduler rule 1](../../images/3.4.0/user_guide/admin_scheduler_rules.png)

For example, if you have a sensor that injects a metric named "Load_Average" in the rule engine, you can already use the builtin DSL to add condition to your policy :



![Scheduler rule 2](../../images/3.4.0/user_guide/admin_scheduler_rules2.png)