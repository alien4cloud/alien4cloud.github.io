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

## Keynames

{: .table .table-bordered}
| Keyname         | Type           | Required | Description |
|:----------------|:---------------|:---------|:------------|
| description     | string         | no       | The optional description for the repository. |
| url             | string         | yes      | The URL or network address used to access the repository. |
| type            | string         | yes      | Repository type is a required string to find how to fetch elements from a repository. |
| credential      | string:string  | no       | The optional credential used to authorize access to the repository. |


## Grammar

{% highlight yaml %}
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
