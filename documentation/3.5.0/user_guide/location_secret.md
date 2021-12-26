---
layout: post
title:  Location secret provider configuration
root: ../../
categories: DOCUMENTATION-3.5.0
parent: [user_guide, admin, orchestrator_location_management]
node_name: location_secret
weight: 49
---

Secret vault technologies can be integrated easily into Alien4Cloud thanks to the plugin system. Alien4Cloud provides by default a plugin to integrate with [HashiCorp Vault](https://www.vaultproject.io/).

You should configure the secret provider configuration in order to associate it with the location.

[![secret_config_provider](../../images/3.4.0/user_guide/secret/secret_config_provider.png)](../../images/3.4.0/user_guide/secret/secret_config_provider.png)

This configuration will be used by all deployment on this location to retrieve secrets.

Fields that should be configured for Vault HashiCorp plugin:

- **Vault URL** the URL to connect to your Vault
- **Authentication Method** for the moment, 2 methods are supported token and ldap. The choice of the method will influence the credentials asked for a deployment (token or user / password), and the manner Alien4Cloud handle the login.
- **Vault Certificate** the certificate chain (multiple certificates can be separated by newline character) that Alien4Cloud should trust to connect to the Vault for a HTTPS Vault connection.

{%warning%}
- Alien4Cloud will always verify the certificate, for self-signed certificate, you should always configure the field **Vault Certificate**
- You should enable the text area mode before pasting the certificate or else all new line character will be removed
{%endwarning%}
