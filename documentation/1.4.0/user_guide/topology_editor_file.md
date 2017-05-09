---
layout: post
title: Archive files edition
root: ../../..
categories: DOCUMENTATION-1.4.0
parent: [user_guide, topology_editor]
node_name: topology_editor_file
weight: 200
---

{% summary %}{% endsummary %}


# Upload new file

In this view you can upload or remove a file to your topology archive. This file can be, for example, a new script for your components or a new artifact.
To select your file click on ![upload button](../../images/1.4.0/user_guide/upload-file-menu-upload-button.png){: .inline} and then, click on ![add button](../../images/1.4.0/user_guide/upload-file-menu-add-button.png){: .inline} to add it to your topology archive. You can also create a file or a new repository but it cannot be empty (for example, write `foo/bar.txt` to create a new repository 'foo' with a new file 'bar.txt').

[![Upload file view](../../images/1.4.0/user_guide/upload-file-menu.png)](../../images/1.4.0/user_guide/upload-file-menu.png)


# Update the YAML of your topology

Alien4cloud provides a view to see the YAML of your topology exists, useful to export the YAML.  
Since `1.3.0`,  you can directly edit your YAML to, for example, override an existing relationships or create a new capability type.
Don't forget to save your change by clicking on the save button.

[![YAML editor](../../images/1.4.0/user_guide/editor-yaml-view.png)](../../images/1.4.0/user_guide/editor-yaml-view.png)

##Error handling
The __validation__ of the YAML is __done on saving__. If errors occurs, you will be displayed a popup where you can se what exactly when wrong.

[![YAML editor](../../images/1.4.0/user_guide/topology_editor/yaml_editor_validation_popup.png)](../../images/1.4.0/user_guide/topology_editor/yaml_editor_validation_popup.png)

In addition, you can see errors annotations on the left of the line where the error occur. A mouser over the annotation will display the error in question.
[![YAML editor](../../images/1.4.0/user_guide/topology_editor/yaml_editor_validation_annotation.png)](../../images/1.4.0/user_guide/topology_editor/yaml_editor_validation_annotation.png)

{%warning%}
<h5>Limitations</h5>
* The content of the yaml file is currently not automatically updated. If you work with a milestone version of 1.4.0 you must save all pending operations in order to have a generated yaml file up to date with the changes you may have done in the editor.

* In order to edit the YAML of the topology all previous operations must have been saved.
{%endwarning%}

{%info%}
<h5>Shortcuts</h5>
While you are working in the context of the file editor shortcuts like save, undo and redo are not applied to the alien 4 cloud editor but to the file editor (meaning you won't save pending operations but only changes to the file currently under edition). When the focus leaves the editor panel then shortcuts are applied to alien 4 cloud topology editor and to pending operations.
{%endinfo%}
