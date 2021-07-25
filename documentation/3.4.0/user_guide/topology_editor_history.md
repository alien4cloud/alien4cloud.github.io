---
layout: post
title: Edition history
root: ../../..
categories: DOCUMENTATION-3.4.0
parent: [user_guide, topology_editor]
node_name: topology_editor_history
weight: 300
---

# Pending operations history

The sub-menu history provide a view to see the two histories.

The default history is the list of current operation on the topology with :

  * the author
  * the operation name

Select an operation to see it's details.

# Git history

Every archive under edition in alien4cloud is managed using the git version control system. This enabled git history feature out of the box in addition to the current operations history. Every time a topology is saved in alien4cloud a commit is performed on the local git history with an auto-generated commit message that contains the summary of operations applied while saving.

  * date of commit
  * name of the user who save the topology archive
  * email of the user who save the topology archive
  * message with all operations applied during save and their author (which may be or not the same as the commit author)

[![Editor history git](../../images/3.4.0/user_guide/topology_editor/editor-history-git.png)](../../images/3.4.0/user_guide/topology_editor/editor-history-git.png)
