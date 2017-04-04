---
layout: post
title:  Supported platforms
categories: DOCUMENTATION-1.3.0
root: ../../
parent: [admin, intallation_configuration]
node_name: supported_platforms
weight: 10
---

## Client

Alien supports these different web browsers :

{: .table .table-bordered}
| Name | Version |
|:----------------|:----------------|
| ![Firefox](../../images/admin_guide/browsers_logo_firefox.png){: .inline} **Firefox** | 31 and higher |
| ![Chrome](../../images/admin_guide/browsers_logo_chrome.png){: .inline} **Chrome** | 37 and higher |

{%warning%}
Other browsers like _Safari_ or the lasted _IE_ version may work but **are not automatically tested**.
{%endwarning%}

## Server

### Java virtual machine

Alien 4 Cloud is written in java for the backend and requires a **JVM 8** or higher (Oracle or OpenJDK).

### Orchestrators and deployment artefacts

Cloudify 3.4 is alien 1.3.0 primary supported orchestrator. For pure docker users we also support Marathon as an orchestrator but due to marathon design it is not possible to support execution of classical TOSCA workflows on top of it.

{: .table .table-bordered}
| Orchestrators | Deployment artefacts |
|:----------------|:----------------|
| _Cloudify 3_ | **.bat** (_alien.artifacts.BatchScript_), **.sh** (_tosca.artifacts.ShellScript_), Ansible playbooks, Docker images (via (Kubernetes)[#/documentation/1.3.0/orchestrators/cloudify3_driver/kubernetes.html] support since 1.3.1) |
| _Marathon_ | Docker images |


{%info%}
Some Alien users deployed also **Puppet artifact** through scripts.
{%endinfo%}
