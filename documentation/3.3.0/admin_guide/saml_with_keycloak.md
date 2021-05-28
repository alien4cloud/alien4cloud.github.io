---
layout: post
title:  SAML integration with Keycloak
categories: DOCUMENTATION-3.3.0
root: ../../
parent: [admin, advanced_configuration]
node_name: saml_with_keycloak
weight: 200
---

Alien4Cloud supports SAML authentication, this section describes the configuration for enabling SAML and how to integrate Keycloak.

## How does it work

Alien4Cloud serves as a SP (Service Provider) and the authentication of users could be delegated to an existing IdP (Identity Provider). Keycloak is an open-source tool managing the SP and IdP and providing the SSO (Single-Sign-On). The diagram below shows a high-level intuition of how A4C interacts with Keycloak when an user tries to login A4C.

![Authentication process](../images/3.3.0/admin_guide/authentication_process.png)

## How to configure

{% warning %}
<h5>Prerequistes</h5>
Before configuring the IdP in A4C, just for testing, please create a new realm firstly and then create a new IdP as well as some users in this realm.
{% endwarning %}

To remind that Alien4Cloud serves as SP and Keycloak as IdP. So firstly, for A4C, we need to set up the configuration file of IdP which has been created in Keycloak. And then, we go to configure A4C to generate a configuration file of SP and then download it from **_http(s)://alien4cloud.host:alien4cloud.port/saml/metadata_** and import it on Keycloak.

Here is the diagram showing the configuration process:

![Configuration process](../images/3.3.0/admin_guide/configuration_process.png)

SAML configuration can be done by updating the A4C configuration file located in  _config/alien4cloud-config.yml_.

Here is an example:

{% highlight yaml %}
saml:
  enabled: true
  maxAuthenticationAge: 7200
  maxAssertionTime: 3000
  logoutUrl: http://alien4cloud.org
  ssl:
    keystore: samlKeystore.jks
    defaultKey: apollo
    keystorepassword: nalle123
  metadata:
    idp:
      url: "https://idp.ssocircle.com/idp-meta.xml"
    sp:
      entityId: "org:alien4cloud:sp"
{% endhighlight %}

###Table: definition of parameters

| Parameters | Description | Mandatory | Default value | Example |
| ------------- | ------------- | ----- | ----- | ----- |
| saml:enabled |Flag for enabling SAML | yes | | true |
| saml:maxAuthenticationAge | Maximum life of an authentication in seconds | yes | | 7200 |
| saml:maxAssertionTime | The duration fo validity of assertions processed during the signle sign-on process in seconds | yes | | 3000
| saml:logoutUrl | Allows to specify an url on which the user will be redirected after performing a logout from A4C when SAML is enabled | no | | http://alien4cloud.org
| saml:proxy:host | TODO | no | | 193.56.47.20
| saml:proxy:port | TODO | no | | 8080
| saml:ssl:keystore | Certificate configured in Keycloak server | yes | | samlKeystore.jks
| saml:ssl:defaultKey | Alias of keystore | yes | apollo
| saml:ssl:keystorepassword | Password of keystore | yes | | nalle123
| saml:ssl:metadata:idp:url| URL pointing to the IdP metadata file |  **yes** if not setting file path to IdP metadata file; **no** otherwise  | | "https://idp.ssocircle.com/idp-meta.xml"
| saml:ssl:metadata:idp:file| Local file path to the IdP metadata file |  **yes** if not setting URL to IdP metadata file; **no** otherwise | | "/path/to/file.xml"
| saml:ssl:metadata:sp:entityId | Unique identifier of the service provider. | yes | | "org:alien4cloud:sp"
| saml:ssl:metadata:sp:entityBaseURL | Base URL to construct SAML endpoints from, needs to be a URL with protocol, server, port and context path. | no | "http://localhost:8088" |
| saml:ssl:metadata:sp:requestSigned | Flag indicating whether this service signs authentication requests. | no | false |
| saml:ssl:mapping:email | Mapping of user email inside SAML attribute assertion | no | false |
| saml:ssl:mapping:firstname | Mapping of user firstname inside SAML attribute assertion | no | false |
| saml:ssl:mapping:lastname | Mapping of user lastname inside SAML attribute assertion | no | false |


{% warning %}
<h5>How to download SP metadata file</h5>
Once alien4cloud is started you can retrieve A4C's SP metadata from _**http(s)://alien4cloud.host:alien4cloud.port/saml/metadata**_.
{% endwarning %}
