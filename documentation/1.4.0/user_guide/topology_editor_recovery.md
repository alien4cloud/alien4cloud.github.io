---
layout: post
title: Topology recovery
root: ../../..
categories: DOCUMENTATION-1.4.0
parent: [user_guide, topology_editor]
node_name: topology_editor_recovery
weight: 900
---

{% summary %}{% endsummary %}

# Problem

A topology is designed with nodes and relationships, based on some imported archives. The topology thus depends on these archives specific versions present at a moment in the catalog. When working with `snapshots archives`, it might happen that these are updated (as we allow uploading and updating snapshots in Alien4cloud) while being used as dependency, eventually leading to a non consistent topology depending on what has changed within it. For example, let's assume we have a topology using a node type coming from a snapshot archive A. Now for some reason, we want to update, or even remove that type from the archive A. What will become of the topology?  
The purpose of this feature is to try to recover the topology and have a consistent one.

# Recovery choices

After the update of the used snapshot, if you try to edit the topology, you'll be displayed the list of dependencies that have been updated. You'll not be able to edit the topology if you do not perform one of the reconciliation action.

[![topology recovery modal](../../images/1.4.0/user_guide/topology_recovery_modal.png)](../../images/1.4.0/user_guide/topology_recovery_modal.png){:target="_blank"}<br>

The choices are: recover or reset the topology.

## Recover the topology

choosing this, alien4cloud will try to recover the topology and make it consistent with what is currently in the repository.  
By analyzing the topology and matching it against the updated archive, the following can be decided:

  * **Delete a node template** : If the type related to the Node template has been deleted from the archive
  * **Delete a relationship template** : If the type related to the relationship template has been deleted from the archive, or if, the requirement / capability related to the relationship has been removed from the source / target node type.
  * **Rebuild a node / relationship template** : If the type related to a Node/Relationship template has somehow change.

## Reset the topology

This option will delete everything within the topology, leaving it completely empty.

{%warning%}
<h5>No rollback possible</h5>
Beware that these actions will automatically save the topology after being executed, then there is no way back with undo/redo mechanism.
{%endwarning%}
