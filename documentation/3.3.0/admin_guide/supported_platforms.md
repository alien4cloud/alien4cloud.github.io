---
layout: post
title:  Supported platforms
categories: DOCUMENTATION-3.3.0
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

Yorc 4.0.x is alien 3.0.0 primary supported orchestrator.

{: .table .table-bordered}
| Orchestrators | Deployment artefacts |
|:----------------|:----------------|
| _Yorc 4_ | **.sh** (_tosca.artifacts.ShellScript_), Ansible playbooks, Docker images (via Kubernetes) |
