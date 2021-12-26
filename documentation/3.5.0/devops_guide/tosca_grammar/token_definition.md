---
layout: post
title:  token
root: ../../../
categories: DOCUMENTATION-3.5.0
parent: [devops, tosca_grammar, tosca_ref_types_function_definition]
node_name: tosca_ref_token_definition
weight: 550
---

The **token** function is used within a TOSCA service template on a string to parse out (tokenize) substrings separated by one or more token characters within a larger string.
Use this function for attributes
## Keynames

{: .table .table-striped }
| Parameter                    | Required                | Type | Description |
|:----------------           |:--------------------|:---------|:------------|
| string_with_tokens | yes  | string      | The composite string that contains one or more substrings separated by token characters.|
| string_of_token_chars | yes  | string      | The string that contains one or more token characters that separate substrings within the composite string.|
| substring_index | yes | integer      | The integer indicates the index of the substring to return from the composite string.  Note that the first substring is denoted by using the ‘0’ (zero) integer value.|

## Grammar

{% highlight yaml %}
token: [ <string_with_tokens>, <string_of_token_chars>, <substring_index> ]
{% endhighlight %}

## Example

The following example shows how to define an attribute using concat function:

{% highlight yaml %}

outputs:
   webserver_port:
     description: the port provided at the end of my server’s endpoint’s IP address
     value: { token: [ get_attribute: [ my_server, data_endpoint, ip_address ],
                       ":",
                       1 ] }
{% endhighlight %}
