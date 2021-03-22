---
layout: post
title: Git integration
root: ../../..
categories: DOCUMENTATION-3.1.0
parent: [user_guide, topology_editor]
node_name: topology_editor_git_integration
weight: 120
---

When you create a new topology or application, Alien4Cloud also create a related local git repository.
It allows users to benefit from the git history for every modifications that occurs on the topology and it also enable users to push to or to pull from a remote repository.

![Git buttons](../../images/3.1.0/user_guide/topology_editor/git_buttons.png)<br>

## Define your remote git repository

![Git remote](../../images/3.1.0/user_guide/topology_editor/git_config.png)<br>

You will have to configure the remote git URL before being able to push or pull.

{%info%}
You can push or pull only if you have saved the modifications on the topology.
{%endinfo%}

## Push to a remote repository

You can decide on which branch to push to. If none is defined, it will push to the master branch.
To avoid storing the credentials inside Alien4Cloud, it is requested when you want to perform the action to push.

{%warning%}
<h5>Alien4Cloud don't support conflicts resolution right now</h5>
When having a conflict, Alien4Cloud will push the commits into a new branch (`alien-conflicts-*`) and re-branch to the current.
We will let you merge the changes into your choosen branch using your prefered tool.
{%endwarning%}

## Pull from a remote repository

You can decide on which branch to pull to. If none is defined, it will pull to the master branch.
To avoid storing the credentials inside Alien4Cloud, it is requested when you want to perform the action to pull.

{%warning%}
<h5>Alien4Cloud don't support conflicts resolution right now</h5>
When having a conflict, you will have to merge using your prefered tool before continuing the edition.
{%endwarning%}
