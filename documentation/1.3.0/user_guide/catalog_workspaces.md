---
layout: post
title:  Workspaces
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_workspaces
weight: 10
---

Workspaces feature is a new feature introduced in 1.3.0 version. Thanks to workspaces Applications can define topologies and types in their backing archive and benefits from all the indexing features without sharing specific types across applications.

{%info%}
<h5>Premium edition</h5>
In Premium edition Workspaces provide even more benefits with the ability for every user to have their own workspaces and with all out of the box features to manage promotion of archives from one workspace to another one! See the premium section below for more info!
{%endinfo%}

# Workspaces

Workspaces are defined in a hierarchy, on top of the hierarchy is the global workspace which basically is the main catalog of components which is managed by users with roles COMPONENT_MANAGER (to add types) and/or ARCHITECT (to add topologies).

{%note%}
Before 1.3 version alien had only the global workspace and applications where not allowed to define types.
{%endnote%}

<div class="row">
  <div class="col-xs-12">
    <div class="btn-primary">Global workspace</div>
  </div>
</div>
<div class="row" style="margin-top: 4px;">
  <div class="col-xs-3"><div class="btn-info">App 1 workspace</div></div>
  <div class="col-xs-3"><div class="btn-info">App 2 workspace</div></div>
  <div class="col-xs-3"><div class="btn-info">App 3 workspace</div></div>
  <div class="col-xs-3">...</div>
</div>



# Premium workspaces

In premium version of alien 4 cloud workspaces are more flexible and designed to support large enterprise collaboration. In addition to application workspaces the enterprise version introduce user workspaces that allows user to validate the types and design topologies in their own workspaces.

Premium version also support the management of archive promotion and relocation across workspaces.

<div class="row">
  <div class="col-xs-12">
    <div class="btn-primary">Global workspace</div>
  </div>
</div>
<div class="row" style="margin-top: 4px;">
  <div class="col-xs-6"><div class="btn-warning">Group 1 workspace</div></div>
  <div class="col-xs-4"><div class="btn-warning">Group 2 workspace</div></div>
  <div class="col-xs-2"></div>
</div>
<div class="row" style="margin-top: 4px;">
  <div class="col-xs-2"><div class="btn-success">User 1 workspace</div></div>
  <div class="col-xs-2"><div class="btn-success">User 2 workspace</div></div>
  <div class="col-xs-2"><div class="btn-info">App 3 workspace</div></div>
  <div class="col-xs-2"><div class="btn-success">User 1 workspace</div></div>
  <div class="col-xs-2"><div class="btn-info">App 2 workspace</div></div>
  <div class="col-xs-2">...</div>
</div>

{%warning%}
<h5>Group workspaces</h5>
While documented already, 1.3 version does not support group workspaces. Stay tuned for next versions!
{%endwarning%}

# Premium workspaces catalog

## Adding an archive to a specific workspace

## Filtering workspaces in the browser

# Workspace relocation

# Workspace promotion
