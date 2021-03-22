#!/bin/sh -e

dot -Tpng  install_wf_node.dot > install_wf_node.png
dot -Tpng  install_wf_rel.dot  > install_wf_rel.png
dot -Tpng  uninstall_wf_node.dot > uninstall_wf_node.png
dot -Tpng  uninstall_wf_rel.dot > uninstall_wf_rel.png
dot -Tpng  start_wf_node.dot > start_wf_node.png
dot -Tpng  start_wf_rel.dot > start_wf_rel.png
dot -Tpng  stop_wf_node.dot > stop_wf_node.png
dot -Tpng  stop_wf_rel.dot > stop_wf_rel.png
