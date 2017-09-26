---
layout: post
title:  Workspaces
root: ../../
categories: DOCUMENTATION-2.0.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_workspaces
weight: 10
---

Workspaces is a new feature introduced in 1.4.0 version. The goal of workspaces is to provide catalog isolation so that users can upload specific types without sharing them in the global catalog. Thanks to workspaces an application can define not only topologies but also types in their backing archive and benefits from all the indexing features without sharing specific types across the organization or other applications.

{%info%}
<h5>Premium edition</h5>
In Premium edition Workspaces provide even more benefits with the ability for every user to have their own workspaces and with all out of the box features to manage promotion of archives from one workspace to another one! See the premium section below for more info!
{%endinfo%}

# Workspace hierarchy

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

## Constraints on workspaces

While workspaces provide isolation between the different sub-workspaces there are constraints that alien4cloud enforce for consistency reasons.

* An archive with the same name and version can not exist in multiple workspaces. Indeed we don't want to allow a same name and version to have different content. If the same content has to be shared between multiple entities then it should lie in an upper workspace so ownership and updates potential is clear.
* An archive in an upper workspace is available for read (COMPONENT_BROWSER) to every child workspace.
* Only COMPONENT_MANAGER (for types) and ARCHITECT (for topologies) can change an archive in the global workspace.
* Any user with role APPLICATION_MANAGER or DEVOPS can change types and topologies in the application (theses users have the COMPONENT_MANAGER and ARCHITECT roles on the application workspace). Every user registered with a role on the application can have read (COMPONENT_BROWSER) access to the application archive content.

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

As usual, a user can upload an archive into Alien. If the user doesn't have the permision to manage many workspaces, the types (or a topology) will be add to the user's workspace.
If the user has authorization to manage some workspaces, he can select one of this workspaces as target workspace for the upload.

[![Upload target](../../images/2.0.0/user_guide/catalog/workspace/workspace-target-upload.png)](../../images/2.0.0/user_guide/catalog/workspace/workspace-target-upload.png)

## Workspace relocation

If a user with sufficient authorization to manage a workspace (COMPONENT_MANAGER for all types ; ARCHITECT for all topologies ; APPLICATION_MANAGER or DEVOPS for an application) want to change the workspace of an archive for wich he as authorization, he can directly change the workspace of this archive in the catalog. Indeed, a dropdown is available to select the workspace of any archive. An archive cannot be relocate in workspace with less visibility (ie: from the global workspace to a user workspace) if the archive is a dependency for an archive placed in a workspace without visibility on the target workspace.

[![Upload target](../../images/2.0.0/user_guide/catalog/workspace/workspace-csar-view.png)](../../images/2.0.0/user_guide/catalog/workspace/workspace-csar-view.png)

## Workspace promotion

If a user, who can't manage the desire target workspace, want to promote one of this archive to another workspace, he need to make a promotion request in the workspace view. A modal will appear and, if the promotion has some impacts, display this impacts.

[![Request promotion](../../images/2.0.0/user_guide/catalog/workspace/request-promotion.png){: style="margin: 0 auto"}](../../images/2.0.0/user_guide/catalog/workspace/request-promotion.png)

Any user with sufficient right will be able to accept or discard the request in the promotion management view.

[![Promotion management](../../images/2.0.0/user_guide/catalog/workspace/promotion-management.png)](../../images/2.0.0/user_guide/catalog/workspace/promotion-management.png)


# Delete the workspace plugin

Admin user's can remove the workspace plugin. However a bug can occur if some CSAR are in locate in user or application workspace during this suppresion. To avoid it, we recommed to move all CSAR to the global workspace before this operation.
