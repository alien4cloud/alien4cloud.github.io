---
layout: post
title: Overview
root: ../../..
categories: DOCUMENTATION-1.4.0
parent: [user_guide, topology_editor]
node_name: topology_editor_overview
weight: 1
---


[![topology editor](../../images/1.4.0/user_guide/topology_editor/topology_editor.png)](../../images/1.4.0/user_guide/topology_editor/topology_editor.png)

# Editor operations, save, undo, redo

When performing changes in the editor you actually perform an 'Operation', operations basically relates to any change you make on the topology from adding a node, changing the value of a property, adding inputs to adding files in the catalog.

After performing operations on the editor the edition menu will allow you to __save__, __undo__ or __redo__ the operations. You can also use usual shortcuts to perform these operations (_Ctrl+S_, _Ctrl+Z_, _Ctrl+Y_ on PCs and _Cmd+S_, _Cmd+Z_, _Cmd+Y_ on MacOS).

{%warning%}
<h5>Saving operations</h5>
When you save the topology, all pending operations will be saved, the content of the archive will be updated (yaml or pending file change operations) and all saved operations will be removed from the undo/redo queue meaning that you won't be able to undo them. If some operations have been undone before saving they will still exist in the operation queue and you will be able to redo them.
{%endwarning%}

# Leaving the editor with pending operations

When you try to leave the editor, if there are pending (unsaved) operations, a popup will notify it to you, leaving you with two choices:

[![topology editor](../../images/1.4.0/user_guide/topology_editor/unsave_changes_popup.png)](../../images/1.4.0/user_guide/topology_editor/unsave_changes_popup.png)

- __Save__: Will trigger a save action on all pending operations.
- __Skip__: Will not trigger the save action. Note that this __WILL NOT CLEAR__ the pending operations. Therefore, you will still have them when comming back on the editor, as long as your edit session hasn't expired.

{%note%}
<h5>Shortcuts</h5>
_Save_, _undo_ and _redo_ are the first shortcuts that we have introduced in the alien 4 cloud editor. We will add some more shortcuts in the future versions, join us on slack and ask for your favorites shortcuts or even better contribute to the project and make things happen!

To get the list of all shortcuts available press the _?_ key.
{%endnote%}
