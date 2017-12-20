---
layout: post
title: Contextual/Global variables
root: ../../..
categories: DOCUMENTATION-2.0.0
parent: [user_guide, topology_editor]
node_name: topology_editor_global_variables
weight: 150
---
{%warning%}
<h5>Deprecated</h5>
This way of accessing global variables (provided variables) is deprecated.
Check [Variables and pre-configured inputs](#/documentation/2.0.0/user_guide/inputs_vars/topology_editor_variables_inputs.html) instead.
{%endwarning%}

Alien 4 cloud provide a very convenient system that allows to reference contextual (application/location) variables in a topology through the usage of TOSCA input functions. This section details how you can reference this variables in the topology and how they work.

# Advanced inputs

This section describe how you can use internal variables defined in __location__ or __application__. Those parameters
could be used as inputs for node template's or capabilities' properties.

Our target for this feature is to allow internal prefixes to target meta-properties over different elements :


{: .table .table-bordered}
| Targeted element | Internal prefix | Description |
|:------------|:-----------|:------------|
|*location*      | `loc_meta_`| Targets *meta-properties* defined on a location |
|*application*| `app_meta_` , `app_tags_` | Targets *meta-properties* or *tags* defined on an application |

## Define a property as an internal input

When you define a topology, you may want to define some node properties as inputs. An input is
by default a value required to the user in order complete the topology and deploy.

![Compute properties](../../images/user_guide/user_guide_topology_template_properties.png)<br>

You can define any property as input and then set its value in the deployment page or indicate
that the input is bound to an internal variable defined on a *location* or the *application* for example.The name syntax of an internal input is:  

`<INTERNAL_PREFIX><TARGET_PROPERTY>`  

where *TARGET_PROPERTY* can be a tag's or a meta property's name.

For example, let's say that we want to use one of the meta properties defined on our application : **target_client**
First, we set the wanted property as an input. This will leads to the creation of a new input named after the property's name.  
Then we have to rename the created input following the above syntax, and using the application meta prefix: `app_meta_`**target_client**

![Properties input on application metaproperties](../../images/user_guide/user_guide_topology_template_properties_input.png)<br>

If you have some tags or meta-properties defined on your location, same syntax :

- `loc_meta_`**MYAPP_META1**
- `loc_meta_`**MYAPP_META2**
- `app_tags_`**MYAPP_TAG1**
- `app_tags_`**MYAPP_TAG2**

{%warning%}
<h5>Meta property naming</h5>
**Note :** avoid dot `.` character in you meta-property name (e.g. my.meta.1)
<h5>Missing values</h5>
We have two possible cases regarding an input and the targeted meta-property :

- **requirted** property : if the provided value doesn't exist as input the property will stay marked as __missing__ and the topology not deployable
- **optional** property : if the provided value doesn't exist you will have a `warning` but the deployment will still be possible
{%endwarning%}

In fact, the deployment steps will help you handle *warnings* and *tasks* for a good deployment setup.
