---
layout: post
title:  get_secret
root: ../../../
categories: DOCUMENTATION-2.1.0
parent: [devops, tosca_grammar, tosca_ref_types_function_definition]
node_name: tosca_ref_get_secret
weight: 101
---

The **get_secret** function is used to retrieve secret stored in a Secret Vault technology such as HashiCorp Vault.
It can be used anywhere inside Alien Tosca Yaml as a normal function (such as get_property)

## Grammar

{% highlight yaml %}
get_secret: [ secret_path ]
{% endhighlight %}

## Example

As input of an operation

{% highlight yaml %}
node_types:
 org.alien4cloud.nodes.SecretComponent:
    interfaces:
      Standard:
        create:
          inputs:
            secret: { get_secret: [ secret/mysql_password ] }
          implementation: scripts/install.sh
{% endhighlight %}

As property of a node template

{% highlight yaml %}
topology_template:
  node_templates:
    SecretComponent:
      type: org.alien4cloud.nodes.SecretComponent
      properties:
        secret_prop: { get_secret: [secret/mysql_password] }
{% endhighlight %}