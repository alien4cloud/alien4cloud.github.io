---
layout: post
title: Topology recovery
root: ../../..
categories: DOCUMENTATION-3.1.0
parent: [user_guide, topology_editor]
node_name: topology_editor_recovery
weight: 900
---

{% summary %}{% endsummary %}

# Problem

A topology is designed with nodes and relationships, based on some imported archives. Thus, it depends on these archives specific versions present at a moment in the catalog. When working with `snapshots archives`, it might happen that these are updated (as we allow uploading and updating snapshots in Alien4cloud) while being used as dependency, eventually leading to a non consistent topology depending on what has changed within it.
For example, let's assume we have a topology using a node type coming from a snapshot archive _A_. Now for some reason, we want to update, or even remove that type from the archive _A_. What will become of the topology?
The purpose of this feature is to try to recover the topology and have a consistent one.

# Recovery choices

After the update of the used snapshot, if you try to edit the topology, you'll be displayed the list of dependencies that have been updated. You'll not be able to edit the topology if you do not perform one of the reconciliation action.

[![topology recovery modal](../../images/3.1.0/user_guide/topology_editor/topology_recovery_modal.png)](../../images/3.1.0/user_guide/topology_editor/topology_recovery_modal.png){:target="_blank"}<br>

The choices are: _recover_ or _reset_ the topology.

## Recover the topology

choosing this, alien4cloud will try to recover the topology and make it consistent with what is currently in the repository.
By analyzing the topology and matching it against the updated archive, the following can be decided:

  * **Delete a node template** : If the type related to the Node template has been deleted from the archive
  * **Delete a relationship template** : If the related type has been deleted from the archive, or if, the related requirement / capability has been removed from the source / target node type.
  * **Rebuild a node / relationship template** : If the related type has somehow change.

## Reset the topology

This option will __delete everything__ within the topology, leaving it completely empty.

{%warning%}
<h5>No rollback possible</h5>
Beware that these actions will automatically save the topology after being executed, then there is no way back with undo/redo mechanism.
{%endwarning%}

#Limitations

Following are modifications that are not yet processed on topology recovery, along with some illustrations.

## Capability type
Changing the type of a capability that is already a relationship's target, will not leads to the validation / rebuilding of the related relationships. Therefore after recovering, you might end up with a relationship with an invalid targeted capability.

{% highlight yaml %}
## original archive
node_types:
  alien.test.nodes.TestComponent:
    capabilities:
      capa_to_be_changed:
        type: alien.test.capabilities.CapaToBeChanged
{%endhighlight%}

{% highlight yaml %}
## Updated archive
node_types:
  alien.test.nodes.TestComponent:
    capabilities:
      capa_to_be_changed:
        type: alien.test.capabilities.CapaToBeChanged2 #updated capability type
{%endhighlight%}

{% highlight yaml %}
## Topology template
node_templates:
  TestComponentSource:
    type: alien.test.nodes.TestComponentSource
    requirements:
      - capa_to_be_changed:   ## This relationship will not be rebuilt or validated against the new targeted capability type
        node: TestComponent
        capability: alien.test.capabilities.CapaToBeChanged
{%endhighlight%}
