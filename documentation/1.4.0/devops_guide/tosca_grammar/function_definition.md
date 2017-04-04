---
layout: post
title:  Function definition
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [devops, tosca_grammar]
node_name: tosca_ref_types_function_definition
weight: 1100
---
Work in progress, details the functions that can be applied to properties and function input parameters.

A function definition defines a named function to evaluate at runtime, and that can be used as property, attribute or input parameter. It is used to  dynamically retrieve a value from property definition defined on an entity.

## Reserved function keywords
The following keywords may be used in some  TOSCA function in place of a TOSCA Node or Relationship Template name. They will be interpreted when evaluation the function at runtime.

{: .table .table-striped }
| Keyword         | Valid context                | Description |
|:----------------|:--------------------|:------------|
| SELF            | Node Template or Relationship Template                   | Node or Relationship Template instance that contains the function at the time the function is evaluated. |
| SOURCE          | Relationship Template only |Node Template instance that  is at the source end of the relationship that contains the referencing function. |
| TARGET          | Relationship Template only |Node Template instance that  is at the target end of the relationship that contains the referencing function. |
| HOST            | Node Template only |Node that “hosts” the node using this reference (i.e., as identified by its HostedOn relationship). |

Supported functions in Alien4Cloud are: 

-  [get_property](#/documentation/1.4.0/devops_guide/tosca_grammar/get_property_definition.html)
-  [get_attribute](#/documentation/1.4.0/devops_guide/tosca_grammar/get_attribute_definition.html)
-  [get_operation_output](#/documentation/1.4.0/devops_guide/tosca_grammar/get_operation_output_definition.html)
-  [concat](#/documentation/1.4.0/devops_guide/tosca_grammar/concat_definition.html)