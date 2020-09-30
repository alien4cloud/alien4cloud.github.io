---
layout: post
title: Archive content
root: ../../..
categories: DOCUMENTATION-3.0.0
parent: [user_guide, topology_editor]
node_name: topology_editor_file
weight: 200
---

{% summary %}{% endsummary %}


On the editor view, the ![upload button](../../images/3.0.0/user_guide/archive_content_btn.png){: .inline} allows you to browse and edit the content of the current edited topology archive.

[![Upload file view](../../images/3.0.0/user_guide/upload-file-menu.png)](../../images/3.0.0/user_guide/upload-file-menu.png)

# Upload new file
The architect has the possible to upload or remove a file to your topology archive. This file can for example be a new script for your components or a new artifact.
Click on ![upload button](../../images/3.0.0/user_guide/upload-file-menu-upload-button.png){: .inline} to select and upload into the archive a file from your local filesystem.
You can also create an empty file, to be edited later on. First, enter the name of the file to create in the edition box, then hit ![add button](../../images/3.0.0/user_guide/upload-file-menu-add-button.png){: .inline}. Note that if entering file name like the `foo/bar.txt`, a new folder 'foo' with a new file 'bar.txt' will be created.


# Update the YAML of your topology

Alien4cloud provides a view to see the YAML of your topology exists, useful to export the YAML.
You can directly edit your YAML to, for example, override an existing relationships or create a new capability type.
Don't forget to save your change by clicking on the save button.

[![YAML editor](../../images/3.0.0/user_guide/editor-yaml-view.png)](../../images/3.0.0/user_guide/editor-yaml-view.png)

##Error handling
The __validation__ of the YAML is __done on saving__. If errors occurs, you will be displayed a popup where you can se what exactly when wrong.

[![YAML editor](../../images/3.0.0/user_guide/topology_editor/yaml_editor_validation_popup.png)](../../images/3.0.0/user_guide/topology_editor/yaml_editor_validation_popup.png)

In addition, you can see errors annotations on the left of the line where the error occur. A mouser over the annotation will display the error in question.
[![YAML editor](../../images/3.0.0/user_guide/topology_editor/yaml_editor_validation_annotation.png)](../../images/3.0.0/user_guide/topology_editor/yaml_editor_validation_annotation.png)

{%warning%}
<h5>Limitations</h5>
* The content of the yaml file is currently not automatically updated. If you work with a milestone version of 3.0.0 you must save all pending operations in order to have a generated yaml file up to date with the changes you may have done in the editor.

* In order to edit the YAML of the topology all previous operations must have been saved.
{%endwarning%}

{%info%}
<h5>Shortcuts</h5>
While you are working in the context of the file editor shortcuts like save, undo and redo are not applied to the alien 4 cloud editor but to the file editor (meaning you won't save pending operations but only changes to the file currently under edition). When the focus leaves the editor panel then shortcuts are applied to alien 4 cloud topology editor and to pending operations.
{%endinfo%}
