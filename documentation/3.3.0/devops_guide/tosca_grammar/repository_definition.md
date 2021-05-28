---
layout: post
title:  Repository definition
root: ../../../
categories: DOCUMENTATION-3.3.0
parent: [devops, tosca_grammar]
node_name: tosca_grammar_repository
weight: 10
---

A repository definition defines a named external repository which contains deployment and implementation artifacts that are referenced within the TOSCA Service Template.

## Keynames

{: .table .table-striped }
| Keyname         | Required | Type           | Description | tosca_definitions_version |
|:----------------|:---------|:---------------|:------------|:--------------------------|
| description     | no       | string         | The optional description for the repository. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| url             | yes      | string         | The URL or network address used to access the repository. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |
| type __(1)__            | no       | string         | Repository type is an optional string to find how to fetch elements from a repository. | alien_dsl_1_3_0 |
| credential      | no       | [credential](#/documentation/3.0.0/devops_guide/normative_types/data_types.html)     | The optional credential used to authorize access to the repository. | alien_dsl_1_3_0<br> tosca_simple_yaml_1_0 |

* __(1)__ type keyname is specific to alien 4 cloud and tells alien4cloud how to fetch artifacts besides the protocol information and how to use specific artifact notations that are more in line with the desired user point of view notation (like for maven artifacts). This keyname is optional and alien can also find this information based on configured repositories.

{% info %}
<h5>Repositories available in Alien 4 cloud</h5>
Alien 4 cloud premium support the following external repository : http, git maven.
{% endinfo %}

## Grammar

{% highlight yaml %}
# Simple definition is as follows:
<repository_name>: <repository_address>

# The full definition is as follows:
<repository_name>:
  description: <repository_description>
  url: <repository_address>
  credential: <authorization_credential>
{% endhighlight %}

See:

- [artifact_definitions](#/documentation/3.0.0/devops_guide/tosca_grammar/artifact_definition.html)

## Example

The following represents a repository definition:

{% highlight yaml %}

repositories:
  docker_hub: https://registry.hub.docker.com/
  script_repo:
    url: https://myCompany/script
    credential: good_user:real_secured_password
  nexus_artifact_repo:
    url: https://fastconnect.org/maven/content/repositories/fastconnect
    credential: bad_user:real_secured_password
  git_repo:
    url: https://github.com/myId/myRepo.git

{% endhighlight %}
