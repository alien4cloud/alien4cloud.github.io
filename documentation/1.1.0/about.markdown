---
layout: post
title: 1.1.0 About
root: ../
categories: DOCUMENTATION-1.1.0
parent: []
node_name: about
weight: 50
---

Alien4Cloud means Application LIfecycle ENablement for Cloud. It is a project started by [FastConnect](http://www.fastconnect.fr){:target="_blank"} in order to help enterprises adopting the cloud for their new or even existing applications in an Open way meaning with Open-Source model and standardization support in mind.

{%summary%}{%endsummary%}

# Why
Cloud Computing is becoming prime development and deployment model for a number of applications.

New applications being developed want to benefit from the agility and sometimes cost reduction implied by usage of Cloud technologies.
Existing applications want to benefit as well from this model to be able to allow development and operations teams, managing the applications, to accelerate new features or maintenance pace.

This requires to implement agility principles and leverage proper tools, not only in development, but as well on the deployment phase along all the application lifecycle.
As well agility is reached when proper collaboration between Dev and Ops teams, and their business sponsor, is achieved.

Even if a large number of solutions exist in the Cloud ecosystem, the ecosystem is not consolidated. Architectures, APIs, technologies and infrastructures are still evolving a lot.
It leaves a lot of choice to the one willing to develop and deploy applications in the Cloud, but very often, the will to reach agility creates a lock-in to the choosen provider at some level : SaaS, PaaS or IaaS.

Knowing the investment term in the Applications from development to deployment (usually several years), and the legacy, it is important to protect the investment in the Application lifecycle, from moving parts, at any level possible.

# What
<p>
{%info%}
  <h5>Alien4Cloud aims at addressing some of these problems by providing the following capabilities :</h5>
* Ease the design and portability of Applications by leveraging TOSCA (an emerging standard driven by OASIS foundation)
* Isolate the application evolution from deployment technologies and infrastructures, allowing to integrate with any deployment layer and infrastructure
* Accelerate Application Infrastructure Design and improve reusability by providing a Components and Blueprints catalog
* Ease collaboration between Development and Deployment teams across the Application lifecycle in creating the Components and Blueprints to fill the catalog
* Integrate with existing Enterprise systems (Dev and Ops) through REST API and pluggable strategies
{%endinfo%}
</p>

Check [current roadmap](../../roadmap) for details on where we are and where we go.

# Standard support
Alien4Cloud supports [OASIS TOSCA](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=tosca){:target="_blank"} an emerging standard addressing applications portability in the cloud.

We believe that applications cloud enablement should be done in an open way, free of any lock-in.
No lock-in meaning that the application should freely move from one environment to the other with smallest effort possible. Therefore, it needs to abstract itself from the underlying infrastructure technical adherence, and define its infrastructure requirements and architecture, independently from each Cloud Provider's Infrastructure Catalog.
If not done, even if, technical compability between vendors could exist in theory (yet to be confirmed by reality), Infrastructure Catalog alignment between providers is very unlikely to happen as each provider is focusing in delivering best value to its customers and does not spend time aligning with others, especially when they may be competitors.
As an analogy, can you easily compare your Telecom providers offerings ?
We bet that the same will happen with Cloud providers, and it has already started.

TOSCA enables the expression of Application Requirements on the Infrastructure and its QOS/SLA, in an open way, opening the door to optimized placement of Applications in the Cloud Infrastructures based on customer choice at its heart.

We know about Infrastructure As Code, with TOSCA, we enter in to the era of "Application Requirements as Code" easing Application lifecycle management across several Cloud infrastructures.

By increasing service and application portability in a vendor-neutral ecosystem, TOSCA will enable :

* Portable deployment to any compliant cloud

* Smoother migration of existing applications to the cloud

* Flexible bursting (consumer choice)

* Dynamic, multi-cloud provider applications

{% warning %}
_Note: TOSCA Simple profile is a working draft and is not released yet to public. Current Alien 4 Cloud version is using a Alien 4 Cloud's specific DSL that is really close to the latest TOSCA Simple Profile in YAML TC work._
{% endwarning %}

# Open-Source
We decided to build Alien4Cloud and give it to the community in order to allow  Application Requirements modelling in a TOSCA format, in a collaborative way, between all participants involved in Application Infrastructure Requirements definition.

It is provided with an [Apache 2 license](http://www.apache.org/licenses/LICENSE-2.0.html){:target="_blank"} in order to favour contributions from external teams or individuals.
Please check our [Contribute](#/developer_guide/index.html) page to see how you can help.

# What it is not
Alien4Cloud focuses on Design, Collaboration, Application Lifecycle Management and later Governance, but leverages other existing open source projects that help orchestrating cloud applications and which focus on runtime aspects such as [Cloudify](http://getcloudify.org){:target="_blank"}.

{%warning%}
<h5>Alien4Cloud does not aim to provide applications deployment runtime.</h5>
{%endwarning%}

We believe that there are already a number of viable options there (some of them not being TOSCA compliant, btw) and we want to integrate more than replace.
We do it in an open way through [plug-in approach](../developer_guide/plugin.html){:target="_blank"} to allow you to leverage your best tools or skills.

# Status
1.1.0 version is being developped but still can be used for all new projects and POCs.

{%info%}
<h5>Which version to choose ?<user_guide/deployment-select-location.png/h5>
Basically the question depends on your timeframe, on the features you are looking from and on the support level you need.
* 1.0.0 is our most stable version and is the latest version that we support.
* 1.1.0 is still in development and things can change if you start using it. On the other hand all new features are developed in 1.1.0 so you may get more by choosing to start working with this version. We especially recommend that new POCs or project that will really start after we released the 1.1.0 (check our [roadmap](../../roadmap).
{%endinfo%}

{%warning%}
<h5>Supported platforms</h5>
To get more informations about the supported platforms, please refer to [this section](#/documentation/1.1.0/admin_guide/supported_platforms.html).
{%endwarning%}

# Features

[![Alien features](../images/alien-features-1-1.png)](../images/alien-features-1-1.png)
