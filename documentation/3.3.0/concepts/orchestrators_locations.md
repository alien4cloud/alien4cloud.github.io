---
layout: post
title: Orchestrators and locations
root: ../../
categories: DOCUMENTATION-3.3.0
parent:
  - concepts
node_name: concepts-orchestrators-locations
weight: 100
published: true
---

Orchestrator and locations are the fundamental concepts that allows alien 4 cloud to bring deployment's portability across various technologies (orchestrators) and targets (locations).

## Orchestrators

An orchestrator is a deployment technology that will orchestrate (and eventually maintain) the deployment and undeployment of a topology. There is various orchestrators on the market and Alien 4 Cloud can easily integrate with them through a plugin mechanism.

Every deployment in alien 4 cloud is done through an orchestrator on a *Location* configured for and managed by an *orchestrator*.

## Locations

In Alien 4 Cloud every deployment is done on what we call a *Location*. Locations are used to describe a logical deployment target that offers a set of resources (e.g. machines, storage, network, firewalls etc.). A location may refer to a _cloud_, to a specific _tenant on a cloud_, to a _set of physical machines_ (BYON), or even _docker_ containers.

For example a location can refer to an Amazon configuration using a specific account while another location could be configured to work on a specific Tenant on an OpenStack cloud.

To make it simple a location is a logical set of available resources that Alien 4 Cloud can use to deploy applications. In order to do so A4C relies on orchestration technologies that are easily pluggable.

{% info %}
You can create and configure as many locations as you like to have as many deployment targets (environments) as required.
{% endinfo %}

### Location's supported resources

As we stated a location may refer to some very different targets from clouds to containers or physical machines. This means that you may have differences in the resources supported by theses locations. More the configuration of this resources may not be the same from one location to another.

Alien 4 Cloud has been designed to allow portability of a given application or to be precise to a given topology to deploy. However we never wanted to limit the user because of portability. The location's defined resources are there exactly for this purpose.

Every location now exposes their own and specific definitions of the generic components (or nodes) that lies into TOSCA. They can also expose some components that are not at all in relation with the normative nodes so people can choose to create non-portable topologies if they feel that they will get more benefits from it that portability.



Here a list of supported resources with Yorc:

{: .table .table-bordered}
| Infrastructure type | OS type | Supported artifact
|:----------------|:----------------|:----------------|
| OpenStack | linux | **.sh** (_tosca.artifacts.ShellScript_) |
| AWS | linux | **.sh** (_tosca.artifacts.ShellScript_) |
| Google Cloud | linux | **.sh** (_tosca.artifacts.ShellScript_) |
| HPC | linux | **.sh** (_tosca.artifacts.ShellScript_) - use of Slurm |
| Bare metal | linux | **.sh** (_tosca.artifacts.ShellScript_) - named HostPool |

{%info%}
Some Alien users deployed also **Puppet artifact** through Groovy script.
{%endinfo%}



{%info%}
<h5>Role and security</h5>
Only a user with the global ADMIN role can define, configure, enable and grant deployment role to other users or groups on a locations.
{%endinfo%}

To find more on locations and how to configure them in Alien 4 Cloud please look at the [Getting started](#/documentation/3.0.0/getting_started/new_getting_started.html) guide if you don't already have an Alien instance running.
