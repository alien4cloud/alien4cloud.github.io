---
layout: post
title:  Getting Started
categories: GETTING_STARTED
root: ../
---

This section groups several resources to help you getting started with ALIEN for Cloud.

{%summary%}{%endsummary%}

# ALIEN for Cloud High level concept

ALIEN for Cloud (Application LIfecycle ENable for cloud) is a tool that aims to provide management for enterprise cloud and help enterprise to onboard their applications to a cloud, leverage it's benefits and, based on project constraints, reach continuous delivery.

As moving to the cloud for an enterprise is a structural change, ALIEN for Cloud leverage the TOSCA standard that is the most advanced and supported standard for the cloud.

The Goal of ALIEN for Cloud is to enable the benefits of a cloud migration in enterprise by easing the DevOps collaboration taking in account the capabilities of each of the IT expert in the enterprise. This is done by providing a single platform where every expert can contribute and share it's effort and feedback with others.

ALIEN provides three main features:

* Composable PaaS & DevOps collaboration
* Application lifecycle enablement
* Cloud governance

# Collaboration

Collaboration in ALIEN for cloud is done by giving the ability to each expert to work on it's field of expertise, and for other experts to benefits from his work and reuse it in a simple and declarative way. TOSCA standard is a great start point to enable such collaboration. ALIEN for Cloud add user roles management in order to increase the ability to easily collaborate on the platform.

# Composable PaaS

## Topology definition in ALIEN for cloud

The first aspect of ALIEN for cloud is related to the core of the cloud interoperability: defining an application topology that we can deploy on any cloud. It takes in account critical requirements for an enterprise:

* reusability
* extensibility
* flexibility
* consistency
* evolvability

## (Very) Quick introduction to TOSCA

In the TOSCA model, an Application Topology is created by declaration of some components (nodes) instances (templates) based on some existing types. The types defines the meta-model of a component (properties, operations, capabilities and requirements) and it's implementation artifacts.
A TOSCA container can then deploy the declared topology on a cloud and orchestrated it.

Collaboration in a TOSCA model is easy as someone that want's to build an application topology can reuse components created by the experts. Typically an application architect will be able to reuse software and cloud components defined by the operational teams in the enterprise.


# Application lifecycle enablement

Features related to lifecycle management are currently not implemented in ALIEN 4 cloud. We will soon pusblish some roadmap informations.

# Cloud governance

As ALIEN for cloud manages the topologies of applications as well as their deployments, it keeps many informations that will enable governance of your cloud, a better vision of your applications, their lifecycle, the ability of your projects to deliver fast etc.

It enables features like

* rationalisation of the SI
* capacity planning
* management of middleware support and expiration dates
* etc.
