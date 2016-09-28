---
layout: post
title: Overview
root: ../../..
categories: DOCUMENTATION-1.3.0
parent: [user_guide, topology_editor]
node_name: topology_editor_overview
weight: 1
---

{%info%}
The topology editor in alien 4 cloud 1.3 has been rewritten and usage has changed from the ground. While editor in previous versions was auto-saving changes the users now have to trigger save operation manually.
{%endinfo%}

# Editor operations, save, undo, redo

When performing changes in the editor you actually perform an 'Operation', operations basically relates to any change you make on the topology from adding a node, changing the value of a property, adding inputs to adding files in the catalog.

After performing operations on the editor the edition menu will allow you to save, undo or redo the operations. You can also use usual shortcuts to perform these operations (_Ctrl+S_, _Ctrl+Z_, _Ctrl+Y_ on PCs and _Cmd+S_, _Cmd+Z_, _Cmd+Y_ on MacOS).

{%warning%}
<h5>Saving operations</h5>
When you save the topology, all pending operations will be saved, the content of the archive will be updated (yaml or pending file change operations) and all saved operations will be removed from the undo/redo queue meaning that you won't be able to undo them. If some operations have been undone before saving they will still exist in the operation queue and you will be able to redo them.
{%endwarning%}

{%note%}
<h5>Shortcuts</h5>
Save undo and redo are the first shortcuts that we have introduced in the alien 4 cloud editor. We will add some more shortcuts in the future versions, join us on slack and ask for your favorites shortcuts or even better contribute to the project and make things happen!

To get the list of all shortcuts available press the _?_ key.
{%endnote%}
