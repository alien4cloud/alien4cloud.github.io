---
layout: post
title:  Deployment Update
root: ../../../
categories: DOCUMENTATION-2.2.0
parent: [orchestrators, cloudify_4]
node_name: cloudify_4_deployment_update
weight: 6000
---

Updating a deployment is the operation of modifying a running topology by adding/removing/modifying nodes. It's a kind of hot update.

The deployment update feature of Cloudify is documented [here](http://docs.getcloudify.org/3.4.0/manager/update-deployment/).

Obviously, we are not talking about some kind of magic here: when you upgrade a deployment, Cloudify will compare both topologies and will try to discover the way to go from the original to the updated one (add nodes that need to be added, remove thoses that need to be removed ...).

You can:

- add nodes
- add relationships
- changes properties (note that the node is not reinstalled when a property is updated, so the modification of a property will only impact added relationships that eventually refer to this updated property).
- rename nodes
- remove nodes
- remove relationships

You can't:

- change the type of a node
- change a target of a hostedOn relationship
- add/remove a node group
- add a scalable compute (as a consequence of the preceding point, since scaling is managed using scaling groups)
- add/remove a custom workflow

## Workflow & Lifecyle

{%info%}
An important thing to note concerning deployment upgrade is that the task sequence will differ from a standard workflow (when the target topology is deployed from scratch):

- Cloudify use it's own sequence that differs from TOSCA.
- when a node becomes the source of a relationship, the TOSCA workflow can't be respected.
{%endinfo%}

In the following section, we will illustrate fews simple update scenarios and the resulting operation sequence call.

### Add a node

A node nammed *Source* is hosted on a node named *Host*.

![Before adding node](../../images/cloudify3_driver/deployment_upgrade/add_node_before.png)

After the update, a node named *Target* is also hosted on *Host*.

![After adding node](../../images/cloudify3_driver/deployment_upgrade/add_node_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Target</td>
<td>create</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>pre_configure_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>pre_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Target</td>
<td>configure</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>post_configure_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>post_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Target</td>
<td>start</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>add_source</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>add_target</td>
<td>Host</td>
</tr>
  </tbody>
</table>

### Add a relationship

A node nammed *Source* and another named *Target* are hosted on a node named *Host*.

![Before adding relationship](../../images/cloudify3_driver/deployment_upgrade/add_relationship_before.png)

After update, a relationship link *Source* to *Target*.

![After adding relationship](../../images/cloudify3_driver/deployment_upgrade/add_relationship_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Source</td>
<td>add_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>add_source</td>
<td>Source</td>
</tr>
  </tbody>
</table>

### Add a component and a relationship (new node is target of the relationship)

A node nammed *Source* is hosted on a node named *Host*.

![Before adding target](../../images/cloudify3_driver/deployment_upgrade/add_target_before.png)

After the update, a node named *Target* is also hosted on *Host* and a relation is weaved between *Source* and *Target*.

![After adding target](../../images/cloudify3_driver/deployment_upgrade/add_target_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Target</td>
<td>create</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>pre_configure_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>pre_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Target</td>
<td>configure</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>post_configure_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>post_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Target</td>
<td>start</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>add_source</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>add_target</td>
<td>Host</td>
</tr>
<tr>
<td>Source</td>
<td>add_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>add_source</td>
<td>Source</td>
</tr>
  </tbody>
</table>

### Add a component and a relationship (new node is source of the relationship)

A node nammed *Target* is hosted on a node nammed *Host*.

![Before adding source](../../images/cloudify3_driver/deployment_upgrade/add_source_before.png)

After the update, a node named *Source* is also hosted on *Host* and a relation is weaved between *Source* and *Target*.

![After adding source](../../images/cloudify3_driver/deployment_upgrade/add_source_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
    <tr>
      <td>Source</td>
      <td>create</td>
      <td></td>
    </tr>
    <tr>
      <td>Host</td>
      <td>pre_configure_target</td>
      <td>Source</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>pre_configure_source</td>
      <td>Host</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>pre_configure_source</td>
      <td>target</td>
    </tr>
    <tr>
      <td>Target</td>
      <td>pre_configure_target</td>
      <td>Source</td>
    </tr>
    <tr>
      <td>source</td>
      <td>configure</td>
      <td></td>
    </tr>
    <tr>
      <td>Host</td>
      <td>post_configure_target</td>
      <td>Source</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>post_configure_source</td>
      <td>Host</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>post_configure_source</td>
      <td>Target</td>
    </tr>
    <tr>
      <td>Target</td>
      <td>post_configure_target</td>
      <td>Source</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>start</td>
      <td></td>
    </tr>
    <tr>
      <td>Host</td>
      <td>add_source</td>
      <td>Source</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>add_target</td>
      <td>Host</td>
    </tr>
    <tr>
      <td>Target</td>
      <td>add_source</td>
      <td>Source</td>
    </tr>
    <tr>
      <td>Source</td>
      <td>add_target</td>
      <td>Target</td>
    </tr>
  </tbody>
</table>

### Remove a node

A node nammed *Source* is hosted on a node named *Host*.

![Before removing node](../../images/cloudify3_driver/deployment_upgrade/remove_node_before.png)

After the update, the node named *Source* is removed.

![After removing node](../../images/cloudify3_driver/deployment_upgrade/remove_node_after.png)

Here is the sequence of operations that will be trigered during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Source</td>
<td>stop</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>remove_source</td>
<td>Source</td>
</tr>
<tr>
<td>Source</td>
<td>remove_target</td>
<td>Host</td>
</tr>
<tr>
<td>Source</td>
<td>delete</td>
<td></td>
</tr>
  </tbody>
</table>

### Remove a relationship

A node nammed *Source* is hosted on a node named *Host*. Another node *Target* is also hosted on *Host* and linked to *Source* by a connectTo relationship.

![Before ](../../images/cloudify3_driver/deployment_upgrade/remove_rs_before.png)

After the update, the relationship between *Source* and *Target* is removed.

![After ](../../images/cloudify3_driver/deployment_upgrade/remove_rs_after.png)

{%warning%}
No operations are called, this seems to be a bug !
{%endwarning%}

### Remove a node that is source of a relationship

A node nammed *Source* is hosted on a node named *Host*. Another node *Target* is also hosted on *Host* and linked to *Source* by a connectTo relationship.

![Before](../../images/cloudify3_driver/deployment_upgrade/rm_src_before.png)

After the update, the node *Source* and the relationship are removed.

![After](../../images/cloudify3_driver/deployment_upgrade/rm_src_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Source</td>
<td>stop</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>remove_source</td>
<td>Source</td>
</tr>
<tr>
<td>Source</td>
<td>remove_target</td>
<td>Host</td>
</tr>
<tr>
<td>Source</td>
<td>remove_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>remove_source</td>
<td>Source</td>
</tr>
<tr>
<td>Source</td>
<td>delete</td>
<td></td>
</tr>
  </tbody>
</table>

### Remove a node that is target of a relationship

A node nammed *Source* is hosted on a node named *Host*. Another node *Target* is also hosted on *Host* and linked to *Source* by a connectTo relationship.

![Before ](../../images/cloudify3_driver/deployment_upgrade/rm_tgt_before.png)

After the update, the node *Target* and the relationship are removed.

![After ](../../images/cloudify3_driver/deployment_upgrade/rm_tgt_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Source</td>
<td>remove_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>remove_source</td>
<td>Source</td>
</tr>
<tr>
<td>Target</td>
<td>stop</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>remove_source</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>remove_target</td>
<td>Host</td>
</tr>
<tr>
<td>Target</td>
<td>delete</td>
<td></td>
</tr>
  </tbody>
</table>

### Renaming a node

{%warning%}
Renaming a node is just like removing it and adding another (with the new name).
{%endwarning%}

A node nammed *Source* is hosted on a node named *Host*.

![Before ](../../images/cloudify3_driver/deployment_upgrade/rename_node_before.png)

After the update, the node *Source* is renamed to *Renamed*.

![After ](../../images/cloudify3_driver/deployment_upgrade/rename_node_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Renamed</td>
<td>create</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>pre_configure_target</td>
<td>Renamed</td>
</tr>
<tr>
<td>Renamed</td>
<td>pre_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Renamed</td>
<td>configure</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>post_configure_target</td>
<td>Renamed</td>
</tr>
<tr>
<td>Renamed</td>
<td>post_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Renamed</td>
<td>start</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>add_source</td>
<td>Renamed</td>
</tr>
<tr>
<td>Renamed</td>
<td>add_target</td>
<td>Host</td>
</tr>
<tr>
<td>Source</td>
<td>stop</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>remove_source</td>
<td>Source</td>
</tr>
<tr>
<td>Source</td>
<td>remove_target</td>
<td>Host</td>
</tr>
<tr>
<td>Source</td>
<td>delete</td>
<td></td>
</tr>
  </tbody>
</table>

### Adding a node, removing another

A node nammed *Source* is hosted on a node named *Host*.

![Before ](../../images/cloudify3_driver/deployment_upgrade/replace_node_before.png)

After the update, the node *Source* is removed, and a node *Target* is added.

![After ](../../images/cloudify3_driver/deployment_upgrade/replace_node_after.png)

Here is the sequence of operations that will be trigerred during deployment update:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Node</th>
      <th>Operation</th>
      <th>Tiers</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
<tr>
<td>Target</td>
<td>create</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>pre_configure_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>pre_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Target</td>
<td>configure</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>post_configure_target</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>post_configure_source</td>
<td>Host</td>
</tr>
<tr>
<td>Target</td>
<td>start</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>add_source</td>
<td>Target</td>
</tr>
<tr>
<td>Target</td>
<td>add_target</td>
<td>Host</td>
</tr>
<tr>
<td>Source</td>
<td>stop</td>
<td></td>
</tr>
<tr>
<td>Host</td>
<td>remove_source</td>
<td>Source</td>
</tr>
<tr>
<td>Source</td>
<td>remove_target</td>
<td>Host</td>
</tr>
<tr>
<td>Source</td>
<td>delete</td>
<td></td>
</tr>
  </tbody>
</table>
