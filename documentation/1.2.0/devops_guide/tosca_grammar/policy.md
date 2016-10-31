---
layout: post
exclude_from_search: true
title:  Policy
root: ../../../
categories: DOCUMENTATION-1.2.0
parent: [devops, tosca_concepts, tosca_ref_definitions, tosca_ref_topology_template]
node_name: tosca_ref_policy
weight: 300
---

A policy applies on a group of nodes in a topology template.

{% warning %}
Only one policy type is currently supported in A4C : *tosca.policy.ha*

This policy is not described by TOSCA (policies are actually a WIP). We have defined this one to support high availability features.
{% endwarning %}

## Keynames

The following is the list of recognized keynames recognized for a TOSCA Policy definition and parsed by Alien4Cloud:

{: .table .table-bordered}
| Keyname | Required | Description |
|:---------|:------------|:---------|
| name | yes | The required name of the policy. |
| type | yes | The type of the policy. |

Several notation are availables to express policy.

## Standard Grammar

{% highlight yaml %}
name: <policy_name>
type: <policy_type_name>
{% endhighlight %}

### Example

{% highlight yaml %}
node_templates:
  server1:
    type: tosca.nodes.Compute
  server2:
    type: tosca.nodes.Compute

groups:
  server_group_1:
    members: [ server1, server2 ]
    policies:
      - name: my_scaling_ha_policy
        type: tosca.policy.ha
{% endhighlight %}

## Shortcut Grammar

{% highlight yaml %}
<policy_name>: <policy_type_name>
{% endhighlight %}

### Example

{% highlight yaml %}
node_templates:
  server1:
    type: tosca.nodes.Compute
  server2:
    type: tosca.nodes.Compute

groups:
  server_group_1:
    members: [ server1, server2 ]
  policies:
    - my_scaling_ha_policy: tosca.policy.ha
{% endhighlight %}

## TOSCA Samples Grammar

This grammar has been used in TOSCA simple profile example. We support it for compatibility but don't recommend it.

{% highlight yaml %}
<policy_name>:
type: <policy_type_name>
{% endhighlight %}

### Example

{% highlight yaml %}
node_templates:
  server1:
    type: tosca.nodes.Compute
  server2:
    type: tosca.nodes.Compute

groups:
  server_group_1:
    members: [ server1, server2 ]
  policies:
    - my_scaling_ha_policy:
      type: tosca.policy.ha
{% endhighlight %}
