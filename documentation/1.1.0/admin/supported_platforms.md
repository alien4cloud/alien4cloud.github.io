---
layout: post
title:  Supported platforms
categories: DOCUMENTATION-1.1.0
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
| ![Firefox](../../images/admin_guide/browsers_logo_firefox.png){: .inline} **Firefox** | 31 and higher |
| ![Chrome](../../images/admin_guide/browsers_logo_chrome.png){: .inline} **Chrome** | 37 and higher |

{%warning%}
Other browsers like _Safari_ or the lasted _IE_ version may work but **are not automatically tested**.
{%endwarning%}

## Server

### Java virtual machine

Alien 4 Cloud is written in java for the backend and requires a **JVM 7** or higher (Oracle or OpenJDK).

### Orchestrators and deployment artefacts

{: .table .table-bordered}
| Orchestrators | Deployment artefacts |
|:----------------|:----------------|
| _Cloudify 2_ | **.bat** (_alien.artifacts.BatchScript_), **.sh** (_tosca.artifacts.ShellScript_), **.groovy** (_tosca.artifacts.GroovyScript_) |
| _Cloudify 3_ | **.bat** (_alien.artifacts.BatchScript_), **.sh** (_tosca.artifacts.ShellScript_) |


{%info%}
Some Alien users deployed also **Puppet artifact** through grooving script.
{%endinfo%}
