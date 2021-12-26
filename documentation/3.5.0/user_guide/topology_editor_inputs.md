---
layout: post
title: Setting inputs with editor
root: ../../../
categories: DOCUMENTATION-3.5.0
parent: [user_guide, topology_editor]
node_name: topology_editor_inputs
weight: 160
---
{% summary %}{% endsummary %}


#Inputs defined through Tosca grammar
Inputs can be defined when designing the application topology. Generally, they are used to customize the deployment of the topology on different environments. The deployer should then, fill them up, according to some information such as the context, the environment type, the location, etc. You can have many of them, and it can sometimes be a burden for the deployer to fill them up, especially when they do not change that much between deployments and environments.


Inputs are added by clicking in the arrow button on a node property, capability or relation.

![Inputs / variables](../../images/3.4.0/user_guide/topology_editor/topology_editor_input1.png)

It displays **get_input: comment**, where **comment** is the input name (by default, it is set to the node property name)

![Inputs / variables](../../images/3.4.0/user_guide/topology_editor/topology_editor_input2.png)


The topology inputs can be displayed on the UI by clicking on the **Inputs** tab on the right :

![Inputs / variables](../../images/3.4.0/user_guide/topology_editor/topology_editor_input7.png)

It displays input name, type and constraints.
The inputs can be there renamed or deleted.

The topology yaml editor displays the **get_input** syntax :

{% highlight yaml %}
topology_template:
  inputs:
    comment:
      type: string
      required: false
      description: "A simple comment."
  node_templates:
    MiniBashMock:
      type: org.alien4cloud.mock.bash.nodes.MiniBashMock
      properties:
        duration: 1
        variation: 20
        log_length: 2000
        comment: { get_input: comment }
{% endhighlight %}

{%note%}
When a node has a complex property, it is not possible to add with the UI a subproperty as an input.
It can be done in the YAML editor with the **get_input**

{% highlight yaml %}
topology_template:
  inputs:
    inputComplex:
      type: string
      required: false
      description: "A simple description."
  node_templates:
    BashMockComplex:
      metadata:
        a4c_edit_x: "-4"
        a4c_edit_y: "-22"
      type: org.alien4cloud.mock.bashComplex.nodes.BashMockComplex
      properties:
        complex_prop: 
          nested: { get_input: inputComplex }
        duration: 3
        variation: 20
        log_length: 2000
{% endhighlight %}
{%endnote%}


#Implicit inputs defined with a hashtag

Since version 3.0.0, it is possible to specify an implicit input with a hashtag like this **#{inputname}**
It can be very useful when a node has a complex property for instance.
If the input specified already exists, it will be used. If not, it will be dynamiquely created when preparing the deployment.

It can be set in the editor : ![Inputs / variables](../../images/3.4.0/user_guide/topology_editor/topology_editor_input3.png)

It is also possible to concat static and input datas directly in the property editor like this :
![Inputs / variables](../../images/3.4.0/user_guide/topology_editor/topology_editor_input4.png)

In this example **comment** is a predefined input but **paramnested** is not
![Inputs / variables](../../images/3.4.0/user_guide/topology_editor/topology_editor_input5.png)

In the deployment preparation, **paramnested** is automaticly displayed :
![Inputs / variables](../../images/3.4.0/user_guide/topology_editor/topology_editor_input6.png)

{%note%}

It can be applied to node properties, capabilities and relations.

Variables can be used in this case only if they are already defined.

It is possible to disable the implicit input mode if you wish to set properties without this mode. If **#{inputname}** is set in a node property, capability or relation property, it will be set to this value in the deployment.
To disable, the parameter **features.auto_inputs** has to be set to **false**
If this parameter is not set, the implicit input will be enabled by default, e.g. **features.auto_inputs** set to true.

{%endnote%}

It is also possible to use [internal variables](#/documentation/3.0.0/user_guide/topology_editor_global_variables.html). defined in location or application with this syntax.
For instance, an application metaproperty can be set on a node property with the syntax **#{app_meta_MYAPP_META1}**.

Subpart of complex inputs can be used in other properties as inputs.
For instance, if a complex input, named **complex_prop** has a subproperty **description**, it can be used in an other node property with the syntax **#{complex_prop.description}**

