---
layout: post
title:  Operations outputs
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [cloudify_2_index, cloudify_2_tosca]
node_name: cloudify_2_outputs
weight: 104
---

Operations can also expose values at the end of their execution, called outputs.  
According to TOSCA norm, these so called operations outputs should be exposed as environment variables by the implementation script of the related operation.

## Export the output

Export the outputs as environment variable using the good way depending on the file type.  

 - For **shell**:

{% highlight sh %}
export OUTPUT_NAME="value"
{% endhighlight %}

 - For **bat/cmd**:
{% highlight bat %}
set OUTPUT_NAME="value"
{% endhighlight %}

 - For **groovy**: Here we will export it as a property, as there is no way to modify environment in this case
{% highlight groovy %}
OUTPUT_NAME = "value"
// or
setProperty("OUTPUT_NAME", "value")

//
//but definitely NOT
def OUTPUT_NAME = "value" //this will create a local variable instead
{% endhighlight %}


## Use the output

see [get_operation_output][get_operation_output_ref] for more details.

{%warning%}
Be aware that use of the **get_operation_output** function on relationships operations **add[remove]_source[target]** input parameters might result with null or wrong computed inputs values.  
The **best practice** would be to define an attribute on the node that will hold the useful output, and then using it as an input for the relationships operation with **get_attribute** function.  
</br>
On the other side, the usage on the node template interfaces operations is fully supported.
{%endwarning%}




[get_operation_output_ref]: #/documentation/1.1.0/devops_guide/tosca_grammar/get_operation_output_definition.html  "get_operation_output usage"
