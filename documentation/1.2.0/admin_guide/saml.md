---
layout: post
title:  SAML integration
categories: DOCUMENTATION-1.2.0
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
  enabled: true
#  maxAuthenticationAge:
#  maxAssertionTime:
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
      file: "/path/to/file.xml"
    sp:
      entityId: "org:alien4cloud:sp"
      # entityBaseURL: defaults to localhost:8088
      # requestSigned:
      # wantAssertionSigned:
{% endhighlight %}

{% note %}
maxAuthenticationAge and maxAssertionTime allows to configure SAML message validation in alien4cloud so it accepts SAML responses that allows long duration user sessions (meaning authentication on the IDP could be quite old).
{% endnote %}
