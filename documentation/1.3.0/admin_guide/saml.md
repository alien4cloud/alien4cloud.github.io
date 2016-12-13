---
layout: post
title:  SAML integration
categories: DOCUMENTATION-1.3.0
root: ../../
parent: [admin, advanced_configuration]
node_name: saml
weight: 200
---

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

Alien 4 Cloud support SAML authentication, this section describe the configuration for SAML enablement.

# Configuration

SAML configuration can be done by updating the configuration of alien4cloud yaml configuration file (config/alien4cloud-config.yml).

Enabled flag must of course be configured to true. You should then configure the various options available from the configuration file:

{% highlight yaml %}
saml:
  enabled: false
  maxAuthenticationAge: 7200
  maxAssertionTime: 3000
  # logoutUrl: http://alien4cloud.org
#  proxy:
#    host: 193.56.47.20
#    port: 8080
  ssl:
    keystore: samlKeystore.jks
    defaultKey: apollo
    keystorepassword: nalle123
  metadata:
    idp:
      url: "https://idp.ssocircle.com/idp-meta.xml"
      # file: "/path/to/file.xml"
    sp:
      entityId: "org:alien4cloud:sp"
      # entityBaseURL: defaults to localhost:8088
      # requestSigned:
      # wantAssertionSigned:
#  mapping:
#    email: EmailAddress
#    firstname: FirstName
#    lastname: LastName
{% endhighlight %}

{% note %}
maxAuthenticationAge and maxAssertionTime allows to configure SAML message validation in alien4cloud so it accepts SAML responses that allows long duration user sessions (meaning authentication on the IDP could be quite old).
{% endnote %}

Once alien4cloud is started you can retrieve alien's Service Provider metadata from http(s)://alien4cloud.host:alien4cloud.port/saml/metadata.

{% warning %}
<h5>1.3.1 new parameters</h5>
logoutUrl and attribute mappings are new options in alien4cloud 1.3.1.
{% endwarning %}

LogoutUrl allows to specify an url on which the user will be redirected after performing a logout from alien4cloud when SAML is enabled.

Attribute mapping allow alien4cloud to configure the user from values of attributes send in the SAML assertion by the IDP. The mapping should contains the name of the attribute from which to fetch the email, firstname or lastname. You can use all or only some of the attributes.
