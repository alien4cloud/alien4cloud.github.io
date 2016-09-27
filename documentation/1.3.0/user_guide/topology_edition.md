---
layout: post
title: Topology edition
root: ../../
categories: DOCUMENTATION-1.3.0
parent:
  - user_guide
  - topology_management
node_name: topology_edition
weight: 100
published: true
---

{% summary %}{% endsummary %}

# Edition menu

With the edition menu you can do/redo your operations on topology and save it. When you save the topology, your changes are save in Alien and you cannot undo the operation create before the save. 


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


# Topology substitution / composition

A topology template can be used in another template as a type. Topology substitution can make existing topology template re-useable. In order to do this, you must:

- Create a type that is inherited from your topology template.

For example, you have a topology template of an Apache server hosted on a compute as shown in this view. If you want to use this template as a type, you need to click `subsitution` panel, which is over the bottom-right corner in topology composer view.  

[![Apache topology template](../../images/user_guide/user_guide_apache_topology_template.png)](../../images/user_guide/user_guide_apache_topology_template.png){:target="_blank"}

- Choose the capabilities/requirements you want to expose.

After clicking `Subsitutions` panel, you can type `tosca.nodes.Root` in search bar in the panel. It will create empty `Capabilities` and `Requirements` fields. Then, you can select the components whose capabilities/requirements you want to expose. By clicking the `Expose` button next to capabilities/requirements element of the selected component, you can expose these capabilities/requirements, which will become the capabilities and requirements of the composed new type.  

[![Expose capabilities and requirements](../../images/user_guide/user_guide_expose_capa_substitution.png)](../../images/user_guide/user_guide_expose_capa_substitution.png){:target="_blank"}

- Eventually define inputs and outputs that will become respectively properties and attributes for the created type.

The inputs of your topology template will become properties of the composed type, and what you choose as outputs will be attributes of the new type.

The created type is named like the template and is usable in another template or an application topology. It's content will be wired at runtime stage.


# Topology version

In the *topology version* page you can create, edit or delete a version. As we already say in the application concept page, if you remove the ‘SNAPSHOT’ qualifier, your topology will be not editable.

[![*Topology version](../../images/user_guide/topology_version.png)](../../images/user_guide/topology_version.png){:target="_blank"}
