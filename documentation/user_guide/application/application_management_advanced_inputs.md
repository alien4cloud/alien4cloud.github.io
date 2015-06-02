---
layout: post
title:  Advanced inputs
root: ../../
categories: DOCUMENTATION
parent: [user_guide, application_management]
node_name: application_management_advanced_inputs
weight: 410
---

{% summary %}{% endsummary %}

This section describe how you can use internal variables defined in __cloud__, __application__ or __environment__. Those parameters
could be used as inputs for nodetemplate properties.

Our target for this feature is to allow internal prefixes to target meta-properties over different elements :


{: .table .table-bordered}
| Targeted element | Implemented Internal prefix | Incoming Internal prefix | Description |
|:------------|:-----------|:------------|:------------|
|*cloud*      | `cloud_meta_` | cloud_tags_ | Target *meta-properties* or *tags* defined on a cloud |
|*application*| `app_meta_` , `app_tags_` |           | Target *meta-properties* or *tags* defined on an application |
|*environment*|   | env_meta_ , env_tags_| Target *meta-properties* or *tags* defined on an environment  |

{%warning%}
<h5>Internal input prefixes</h5>
This list could change regarding A4C user needs and use cases.
{%endwarning%}

# Define a property as an internal input

When you define a topology, you may want to define some node properties as inputs. An input is
by default a value required to the user in order complete the topology and deploy.

![Compute properties](../../images/user_guide/user_guide_topology_template_properties.png)<br>

You can define any property as input and then set its value in the deployment page or indicate
that the input is using a internal variable defined on *cloud*, *application* or *environment* for example.

Here, in our example let's say that we want to use one of the meta property defined on our cloud instance :

- **MYMETACLOUD_1**
- **MYMETACLOUD_2**

![Compute properties input on cloud metaproperties](../../images/user_guide/user_guide_topology_template_properties_input.png)<br>

The way to do that is to prefix the cloud meta property name by one of the internal prefixes define above
and give the good name to have the good targeted value :

- `cloud_meta_`**MYMETACLOUD_1**
- `cloud_meta_`**MYMETACLOUD_2**

If you have some tags or meta-properties defined on your application, same syntax :

- `app_tags_`**MYAPP_TAG1**
- `app_tags_`**MYAPP_TAG2**
- `app_meta_`**MYAPP_META1**
- `app_meta_`**MYAPP_META2**

{%info%}
<h5>Meta property naming</h5>
**Note :** avoid dot __.__ caracter in you meta-property name (e.g. my.meta.1)
{%endinfo%}

{%warning%}
<h5>Missing values</h5>
We have two possible cases regarding an input and the targeted meta-property :

- **requirted** property : if the provided value doesn't exist as input the property will stay marked as __missing__ and the topology not deployable
- **optional** property : if the provided value doesn't exist you will have a `warning` but the deployment will still be possible
{%endwarning%}

In fact, the deploying page will handle *warnings* and *tasks* list to help you in having a good deployment setup.
