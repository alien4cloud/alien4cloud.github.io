---
layout: post
title:  Workflow generation
root: ../../
categories: DOCUMENTATION-3.3.0
parent: [devops, workflows]
node_name: workflow_generation
weight: 200
---

Default workflows are generated based on the following rules:

## Install workflow

### Node workflow

This is a graph showing default steps that a node must pass through in order to be instantiated in the default **install** workflow

[![*Default node's install workflow](../../images/3.3.0/concepts/install_wf_node.png)](../../images/3.3.0/concepts/install_wf_node.png){:target="_blank"}

### Relationship workflow

This is a graph showing default steps that 2 nodes with relationship between them must pass through in order to be instantiated in the default **install** workflow

[![*Default relationship's install workflow](../../images/3.3.0/concepts/install_wf_rel.png)](../../images/3.3.0/concepts/install_wf_rel.png){:target="_blank"}

## Uninstall workflow

### Node workflow

This is a graph showing default steps that a node must pass through in order to be deleted in the default **uninstall** workflow

[![*Default node's uninstall workflow](../../images/3.3.0/concepts/uninstall_wf_node.png)](../../images/3.3.0/concepts/uninstall_wf_node.png){:target="_blank"}

### Relationship workflow

This is a graph showing default steps that 2 nodes with relationship between them must pass through in order to be deleted in the default **uninstall** workflow

[![*Default relationship's uninstall workflow](../../images/3.3.0/concepts/uninstall_wf_rel.png)](../../images/3.3.0/concepts/uninstall_wf_rel.png){:target="_blank"}

## Start workflow

### Node workflow

This is a graph showing default steps that a node must pass through in order to be started in the default **start** workflow

[![*Default node's start workflow](../../images/3.3.0/concepts/start_wf_node.png)](../../images/3.3.0/concepts/start_wf_node.png){:target="_blank"}

### Relationship workflow

This is a graph showing default steps that 2 nodes with relationship between them must pass through in order to be started in the default **start** workflow

[![*Default relationship's start workflow](../../images/3.3.0/concepts/start_wf_rel.png)](../../images/3.3.0/concepts/start_wf_rel.png){:target="_blank"}

## Stop workflow

### Node workflow

This is a graph showing default steps that a node must pass through in order to be stopped in the default **stop** workflow

[![*Default node's stop workflow](../../images/3.3.0/concepts/stop_wf_node.png)](../../images/3.3.0/concepts/stop_wf_node.png){:target="_blank"}

### Relationship workflow

This is a graph showing default steps that 2 nodes with relationship between them must pass through in order to be stopped in the default **stop** workflow

[![*Default relationship's stop workflow](../../images/3.3.0/concepts/stop_wf_rel.png)](../../images/3.3.0/concepts/stop_wf_rel.png){:target="_blank"}
