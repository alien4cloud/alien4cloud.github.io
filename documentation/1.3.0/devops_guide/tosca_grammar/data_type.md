---
layout: post
title:  Data type
root: ../../../
categories: DOCUMENTATION-1.3.0
parent: [devops, tosca_concepts, tosca_ref_definitions]
node_name: tosca_ref_types_data_type
weight: 1500
---

# Credential

The Credential type is a complex TOSCA data type used when describing authorization credentials used to access network accessible resources.
Type URI : `tosca.datatypes.Credential`.

## Properties

{: .table .table-bordered}
| Name       | Required  | Type        | Description |
|:-----------|:----------|:------------|:------------|
| token      | yes       | string      | The required token used as a credential for authorization or access to a networked resource.|
| user       | no        | string      | The optional user (name or ID) used for non-token based credentials. |

## Example

{% highlight yaml %}
<some_tosca_entity>:
  properties:
    my_credential:
      type: Credential
        properties:
          user: myusername
          token: mypassword
{% endhighlight %}
