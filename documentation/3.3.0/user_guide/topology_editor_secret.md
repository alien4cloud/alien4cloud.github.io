---
layout: post
title: Secret property
root: ../../..
categories: DOCUMENTATION-3.3.0
parent: [user_guide, topology_editor]
node_name: topology_editor_secret
weight: 192
---

Property's value that contains sensitive data should be stored in a secret provider (such as HashiCorp Vault).

Click on ![Go to admin](../../images/3.3.0/user_guide/topology_editor/secret_property _button.png){: .inline} to turn a property into a secret.

In the opened text input, you should enter the path to retrieve the secret in the configured Vault.

[![secret_property](../../images/3.3.0/user_guide/topology_editor/secret_property.png)](../../images/3.3.0/user_guide/topology_editor/secret_property.png)