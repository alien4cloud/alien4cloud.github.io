---
layout: post
title:  Repository definition
root: ../../../
categories: DOCUMENTATION-1.3.0
parent: [devops, tosca_concepts, tosca_ref_definitions]
node_name: tosca_ref_types_artifact_type
weight: 750
---

A repository definition defines a named external repository which contains deployment and implementation artifacts that are referenced within the TOSCA Service Template.

{% warning %}
To use repositories in your CSARs, use the appropriate [tosca definitions version](#/documentation/1.3.0/devops_guide/dev_ops_guide.html) (**alien_dsl_1_3_0** or greater).
{% endwarning %}

## Keynames

{: .table .table-bordered}
| Keyname         | Type           | Required | Description |
|:----------------|:---------------|:---------|:------------|
| description     | string         | no       | The optional description for the repository. |
| url             | string         | yes      | The URL or network address used to access the repository. |
| type            | string         | no       | Repository type is an optional string to find how to fetch elements from a repository. |
| credential      | string:string  | no       | The optional credential used to authorize access to the repository. |

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

- [artifact_definitions](#/documentation/1.3.0/devops_guide/tosca_grammar/artifact_definition.html)

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
