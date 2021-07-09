---
layout: post
title: Concept
root: ../../../
categories: DOCUMENTATION-3.4.0
parent: [user_guide, topology_editor, topology_editor_var_inputs]
node_name: topology_editor_var_inputs_concept
weight: 100
---

{% summary %}{% endsummary %}

Here we will go through the ***variables*** and ***pre-configured inputs***.

#Variables

## What is a variable ?
A variable is key/value data.
Its value can be or is made from the following:

- **Static primitive value**: Integer, string, boolean (i.e: 10, "my string", true)

- **Another variable**: A variable value can just be a reference to another variable

- [**SpEL expression**](https://docs.spring.io/spring/docs/current/spring-framework-reference/core.html#expressions): SpEL expression can help accessing some objects automatically provided in the deployment configuration process. We will talk about that further in this documentation.

- **A concatenation of anything above**:  In that case the resulting value will be a String.

- **Static complex value**: A variable value can be a list or map of items. The item can also be built using variables.

## Alien4Cloud provided variables
Some variables are automatically injected by Alien4Cloud in the deployment configuration steps.
The name of such variables are ALWAYS prefixed with `a4c.`, and we call them ___A4C_VAR___.

{: .table .table-bordered}
|Name  | Value | Comment |
|:---------|:------------|:------------|
| **a4c.application** | The Java object (alien4cloud.model.application.Application) representing the application. | You can access properties of this only via SpEL expression |
| **a4c.application.id** | The ID of the application | ex: WordpressApp |
| **a4c.application.name** | The name of the application | ex: Wordpress App |
| **a4c.environment.type** | The type of the environment being configured | ex: OTHER, DEVELOPMENT, PRODUCTION, etc.|
| **a4c.environment.name** | The name of the environment being configured | ex: Dev_Env, Prod_Env|
| **a4c.application.tags.[*****TAG_NAME*****]** | The value of the tag named "TAG_NAME" on the application| Alien4Cloud inject for all tags defined on the application |
|**a4c.[*****META_DATA_NAME*****]** | The value of the Meta property named "META_DATA_NAME"| Remember Meta properties can be defined and apply on applications and locations. In this case, Alien4Cloud looks first for the Meta value on the application. If not found, the value provided for the location on which deployment is being configured will be injected|

{%info%}
<h5>TIPS</h5>
Would you like more variables to be automatically provided by Alien4Cloud? Let us know which ones
{%endinfo%}

## Levels hierarchy
A variable can be defined at (or come from) different levels in Alien4Cloud.
Here are, ordered by highest precedence, the different levels where variables can be provided:

- __Alien4Cloud context__ (_A4C_VAR_): Automatically injected by Alien4Cloud. These are, as  said above, application and environment data, as well as Tags and meta-data.

- __Environment__ (_ENV_VAR_): These variables will be global to a specific environment (Env_Dev, Env_Prod).

- __Environment type__ (_ENV_TYPE_VAR_): These variables will be global to all environments of a specific type (DEVELOPMENT, PRODUCTION,...).

- __Application__ (_APP_VAR_): These variables will be global to all versions and environments of the application.

If a variable is defined on more than one level, its value will be resolved to the one provided on the highest level (!!! IF PROVIDED of course!!! This means a value set to null on the highest level will be overridden if provided with a non null value on another level.).
To put it clearly ( ___>>>>___  ==>  overrides ):

`A4C_VAR` ___>>>>___ `ENV_VAR` ___>>>>___ `ENV_TYPE_VAR` ___>>>>___ `APP_VAR`

## Examples
The variables are stored and editable as YAML. Defining a variable is like to add an property into a YAML file:

{% highlight yaml %}
my_variable_name: "my variable of type text value"
my_int_var: 10
my_float_var: 3.14
{% endhighlight %}

Complex variables are also supported:

{% highlight yaml %}
complex_var:
    subfield1: "my variable of type text value"
    subfield2:
        subsubfield : 10
{% endhighlight %}

as well as list:

{% highlight yaml %}
list_var:
  - value1
  - value2
{% endhighlight %}

A variable can be built referencing other variables:

{% highlight yaml %}
 ###########
 ## referencing simple var
 ###########
my_variable_name: "my variable of type text value"
my_int_var: 10

complex_var:
    subfield1: ${my_variable_name)

 ###########
 ## concatenation of multiple vars
 ###########
 concat_var: "/tmp/${my_variable_name}/anotherone/${my_int_var}"

 ###########
 ## referencing complex var
 ###########
 my_subfield_var:
     subsubfield1 : "toto"
     subsubfield2 : "tata"

 complex_var:
     subfield1: "sub1"
     subfield2: ${my_subfield_var}

 ### will be resolved as:
 # complex_var:
 #   subfield1: "sub1"
 #   subfield2:
 #     subsubfield1 : "toto"
 #     subsubfield2 : "tata"

 ####
 ## referencing a specific field of a complex variable
 my_var_2: ${my_subfield_var.subsubfield1}

{% endhighlight %}


A variable can be built using SpEL expression:

{% highlight yaml %}
current_env: "DEV"
true_if_prod_var: "#{ 'PROD' == #current_env }"
security_mode: "#{'PROD' == #current_env ? '2FA' : 'none' }"
{% endhighlight %}

{%warning%}
<h5>SpEL expression must be quoted otherwise it will be processed as a comment</h5>
{%endwarning%}

{%info%}
<h5>SpEL expression</h5>
SpEL expression can be a very powerful tool that would allow the user to perform many operation, for example, dynamically setting a value to a variable depending on a specific context. <br/>
You can find more about with SpEL:

- [http://www.baeldung.com/spring-expression-language](http://www.baeldung.com/spring-expression-language){:target="_blank"}
- [https://docs.spring.io/spring/docs/current/spring-framework-reference/html/expressions.html](https://docs.spring.io/spring/docs/current/spring-framework-reference/html/expressions.html){:target="_blank"}
{%endinfo%}

Variables referencing others, with default values:

{%highlight yaml%}
num_cpus: ${my_missing_var:66}
{%endhighlight%}

Variables with units:

{%highlight yaml%}
disk_size: "555 MIB"
cpu_frequency: "1000 MHz"
{%endhighlight%}


#Pre-configured inputs

Previously we talked about variables. Variables are a convenient way to define reusable values. Those values can be used to configure inputs, defined in the topology.
An input property has a name and a value. Alien4Cloud allows the topology designer to pre-configure values for some inputs, thus removing some of that burden from the deployer user.

The pre-configured inputs are stored and editable as YAML. As there is only one file for the whole topology, the configured value will be the same for all environments.

#Variables Vs Pre-configured inputs

Managing pre-configured inputs is slightly the same as variables. Differences being:

- An input value cannot reference another input, variables can.

{%highlight yaml%}
 #######
 ## inputs mapping file

 #Given
one_input: "an input"

another_input: ${one_input}             ## won't work
another_input: "toto/${one_input}"      ##won't work

another_input: ${one_var}               ## Works fine as one_var is a variable and not an input
{%endhighlight%}

- Inputs are typed, variables ARE NOT. Inputs are converted into the corresponding type and constraints are checked.

- Variables are overridable, inputs ARE NOT (since they are not defined on multiple levels)

Now that we've been through the concept, let's see [how to manage variables inputs using Alien4Cloud GUI](#/documentation/3.0.0/user_guide/inputs_vars/topology_editor_manage_vars.html).
