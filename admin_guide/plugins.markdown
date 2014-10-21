---
layout: post
title:  Plugins Management
categories: ADMIN_GUIDE
root: ../
parent: none
weight: 200
---

This section details Alien 4 Cloud's *Plugins* management. For more information about what is a plugin, please see [ALIEN plugins](/developer_guide/plugin.html)

# How to navigate to Plugins Management view

Log in with admin credentials > Click on your user's name on the right top corner > Click on drop-down link **Plugins**.

![Navigate to plugins management view](../../images/admin_guide/plugins-management-link.png)

You'll arrive to the plugins management view, for the moment the page is empty as you haven't uploaded any plugin yet.

![Empty plugins management view](../../images/admin_guide/plugins-empty.png)
[Empty plugins management view](../../images/admin_guide/plugins-empty.png)

# Upload a new plugin

Drag plugin archive into the below dash dotted area.

![Plugin upload drop zone](../../images/admin_guide/plugins-drop-zone.png)

For browser which does not support drag & drop feature, you'll see a button instead to choose the archive to upload.

Once plugin uploaded, you'll be able to see it in the browser.

![Plugins list](../../images/admin_guide/plugins-full.png)
[Plugins list](../../images/admin_guide/plugins-full.png)

* **Id** : unique identifier of the plugin
* **Version** : version of the plugin
* **Name** : name of the plugin
* **Description** : the plugin's description
* **Enabled** : indicate if the plugin is available for deployment

# Plugin managements

Actions available to manage plugins can be found in the button group on the right hand side : delete, disable, configure. When you hover the mouse cursor on these buttons you'll have tooltips explaining their functionality.

![Plugin configuration actions](../../images/admin_guide/plugins-action.png)

### Delete

Click on the button below to delete the plugin.

![Plugin delete action](../../images/admin_guide/plugins-delete.png)

{% info %}All related resources to the plugin will be cleaned up.{% endinfo %}

### Disable

Click on the button below to disable a plugin.

![Plugin disable action](../../images/admin_guide/plugins-disable.png)

{% info %}The plugin resource will not be cleaned up, this action will just make the plugin unavailable for deployment, you can always re-enable the plugin later.{% endinfo %}

Click again on the button to enable the plugin.

![Plugin enable action](../../images/admin_guide/plugins-enable.png)

### Configure

Click on the button below to open configuration modal dialog.

![Plugin configure action](../../images/admin_guide/plugins-configure.png)

You can begin to edit the plugin configuration

![Plugin configure action](../../images/admin_guide/plugins-configuration.png)
[Plugin configure action](../../images/admin_guide/plugins-configuration.png)

{% info %}This view is specific to each plugin, the above image is just a mock. For more information on how to configure your plugin, please refer to the specific section concerning your plugin.{% endinfo %}
