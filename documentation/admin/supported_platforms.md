---
layout: post
title:  Supported platforms
categories: DOCUMENTATION
root: ../../
parent: [admin]
node_name: supported_platforms
weight: 200
---

## Client

Alien supports these different web browsers :

{: .table .table-bordered}
| Name | Version |
|:----------------|:----------------|
| Firefox | 31 and higher |
| Chrome | 37 and higher |

{%info%}
Other browsers like Safari or the lasted IE version may work but are not automatically tested.
{%endinfo%}

## Server

### Java virtual machine

Alien 4 Cloud is written in java for the backend and requires a JVM 7 or higher (Oracle or OpenJDK).

### Orchestrators and deployment artefacts

{: .table .table-bordered}
| Orchestrators | Deployment artefacts |
|:----------------|:----------------|
| Cloudify 2 | bat, sh, groovy |
| Cloudify 3 | bat, sh |


{%info%}
Some Alien users deoyed also Puppet artifact through grooving script.
{%endinfo%}
