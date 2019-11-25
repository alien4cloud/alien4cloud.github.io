---
layout: post
title: Secret Management
root: ../../
categories: DOCUMENTATION-2.2.0
parent:
  - user_guide
node_name: secret
weight: 599
published: true
---

{%summary%}{%endsummary%}

{%info%}
This section describe in a transverse manner how to configure a secret provider (such as HashiCorp Vault), how to declare / use a secret for a deployment.
{%endinfo%}

# Pre-requisite

Alien4Cloud offers the ability to integrate any secret provider thanks to its plugin system.
For the moment only one plugin is provided for HashiCorp Vault but that can change in the future.

### HashiCorp Vault

Alien4Cloud is not responsible for storing your secrets, the task is delegated an external HashiCorp Vault.
It should be properly installed, unsealed and configured:

- [Install](https://www.vaultproject.io/docs/install/index.html).
- [Seal / Unseal](https://www.vaultproject.io/docs/concepts/seal.html)
- [Configure Vault with LDAP](https://www.vaultproject.io/docs/auth/ldap.html)
- [Read / Write Secret](https://www.vaultproject.io/docs/commands/read-write.html)

# Configure

Administrator should configure a Secret Vault on the orchestrator location.

To associate a secret provider (such as HashiCorp Vault) to the location, please refer to [this page](#/documentation/2.2.0/user_guide/location_secret.html).

# Usage

### In Tosca Yaml

**get_secret** function details can be found on [this page](#/documentation/2.2.0/devops_guide/tosca_grammar/get_secret.html).

### In Topology Editor

**get_secret** function can be declared on node's properties, please take a look [here](#/documentation/2.2.0/user_guide/topology_editor_secret.html) for more details.

### In deployment's input

**get_secret** function can be declared on deployment's inputs, please take a look [here](#/documentation/2.2.0/user_guide/application_deployment.html) for more details.

### In location's resources properties

**get_secret** function can be declared on properties of location resources

### In service's properties and attributes

**get_secret** function can be declared on service's properties and attributes

# Runtime

When an application deployment is associated with a location with Secret Vault enabled (configured), each deployer's action (workflow execution, for example deploy, undeploy ...) will bring up a modal so that the deployer can enter the Vault credentials.

The credentials will be checked and used by Alien4Cloud and the underlying orchestrator to resolve secrets declared in your deployment (inputs, properties etc ...).

If your action does not need to access to a secret vault, you can click on Skip but then the action will fail at orchestrator runtime level if a secret is needed.

[![credential_modal](../../images/2.2.0/user_guide/applications/deployment/credential_modal.png)](../../images/2.2.0/user_guide/applications/deployment/credential_modal.png)

List of actions that brings up secret credentials modal:

- **Deploy**
- **Undeploy**
- **Update**
- **Scale**
- **Custom command execution**
- **Custom workflow execution**
- **Post deployment operation**
- **Patch**

Under the hood for HashiCorp Vault and Cloudify orchestrator, to resolve secret for an action:

- Alien4Cloud log in with user's provided credentials, generate a token if necessary (for LDAP authentication method for example).
- Alien4Cloud sends the deployment with the Vault's configuration and the token to Cloudify orchestrator.
- The token is saved inside Cloudify's internal Vault for the duration of the action.
- Secrets are retrieved and injected just before script's execution by using the token in Cloudify's internal Vault.