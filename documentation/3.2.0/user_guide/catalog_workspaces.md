---
layout: post
title:  Workspaces
root: ../../
categories: DOCUMENTATION-3.2.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_workspaces
weight: 10
---

## Adding an archive to a specific workspace

As usual, a user can upload an archive into Alien. If the user doesn't have the permision to manage many workspaces, the types (or a topology) will be add to the user's workspace.
If the user has authorization to manage some workspaces, he can select one of this workspaces as target workspace for the upload.

[![Upload target](../../images/3.2.0/user_guide/catalog/workspace/workspace-target-upload.png)](../../images/3.2.0/user_guide/catalog/workspace/workspace-target-upload.png)

## Workspace relocation

If a user with sufficient authorization to manage a workspace (COMPONENT_MANAGER for all types ; ARCHITECT for all topologies ; APPLICATION_MANAGER or DEVOPS for an application) want to change the workspace of an archive for wich he as authorization, he can directly change the workspace of this archive in the catalog. Indeed, a dropdown is available to select the workspace of any archive. An archive cannot be relocate in workspace with less visibility (ie: from the global workspace to a user workspace) if the archive is a dependency for an archive placed in a workspace without visibility on the target workspace.

[![Upload target](../../images/3.2.0/user_guide/catalog/workspace/workspace-csar-view.png)](../../images/3.2.0/user_guide/catalog/workspace/workspace-csar-view.png)

## Workspace promotion

If a user, who can't manage the desire target workspace, want to promote one of this archive to another workspace, he need to make a promotion request in the workspace view. A modal will appear and, if the promotion has some impacts, display this impacts.

[![Request promotion](../../images/3.2.0/user_guide/catalog/workspace/request-promotion.png){: style="margin: 0 auto"}](../../images/3.2.0/user_guide/catalog/workspace/request-promotion.png)

Any user with sufficient right will be able to accept or discard the request in the promotion management view.

[![Promotion management](../../images/3.2.0/user_guide/catalog/workspace/promotion-management.png)](../../images/3.2.0/user_guide/catalog/workspace/promotion-management.png)


# Delete the workspace plugin

Admin users can remove the workspace plugin. However a bug can occur if some CSAR are used by a user or an application workspace during this suppression. To avoid it, we recommend to move all CSAR to the global workspace before this operation.
