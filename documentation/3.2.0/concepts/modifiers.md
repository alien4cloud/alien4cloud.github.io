---
layout: post
title: Modifiers
root: ../../
categories: DOCUMENTATION-3.2.0
parent: [concepts, concepts-deployment]
node_name: concepts-modifiers
weight: 100
---


#Need

A portable topology is designed to be deployable on any location the user wants to. In alien4cloud, it has to go through a number of configuration steps to be ready for deployment. These steps includes:

* Providing inputs
* Choosing the location
* node and eventually policies matching according to what is provided by the location (on-demande resources and policies)
* the deployment triggering itself.

That is for the most common cases.

However, there might be some cases when we need additional specific processing on the topology for it to be ready for deployment on a particular location, or simply, we want the application / topology deployed to behaves differently on certain point depending on the location on which it is deployed.

A concrete example is policies handling. Handling and implementing an affinity or auto-scaling policy on Amazon EC2 is different to the same on Kubernetes.

#topology modifiers

The concept of `topology modifiers` (commonly called _modifiers_) is to address the above need.

A modifier is a piece of code, which takes a topology as input, perform some processing and, at the end of the day, returns the modified topology.
The processing possibilities of the topology are really wide. The modifier can do almost everything it wants to:

* Adding nodes (for examples monitoring agents on all computes)
* Changing the types of the nodes (e.g: changing a container unit to a plain Kubernetes node)
* Adding properties to nodes,
* etc.

For now in alien4cloud, there are two types of modifiers:

* Location modifiers: associated to a location
* policy modifier: associated to a policy.

Either way, the modifier is to be plugged (call and executed) some were in the deployment configuration flow.

#Deployment configuration flow

As stated above, the main steps / phases of the deployment configuration are inputs providing, location Choosing, node matching and deployment triggering.

So basically, we can identify some intermediate phases, or rather states, between them:

* __pre-location-match__: Just before the location matching is performed

* __post-location-match__: Right after the location matching is performed

* __pre-inject-input__: Just before the inputs are injected

* __post-inject-input__: Right after input injection

* __pre-policy-match__: Just before policy matching is performed

* __post-policy-match__: Right after the policy matching is performed

* __pre-matched-policy-setup__: Just before matched policies are configured (properties edition)

* __post-matched-policy-setup__: Right after matched policies are configured

* __pre-node-match__: Just before node matching is performed

* __post-node-match__: Right after node matching is performed

* __pre-matched-node-setup__: Just before matched nodes are configured (node and capabilities properties edition)

* __post-matched-node-setup__: Right after matched nodes are configured


**TODO**: Flow diagram of deployment configuration


A modifier can be executed on one of the above phases. Thus a modifier plugged at _post-matched-policy-setup_ will be executed right after the properties of the matched policy template will be injected.

# Implementation and packaging

Defining a modifier results into providing an implementation of the interface [org.alien4cloud.alm.deployment.configuration.flow.ITopologyModifier.java](https://github.com/alien4cloud/alien4cloud/blob/3.0.0-RC1/alien4cloud-core/src/main/java/org/alien4cloud/alm/deployment/configuration/flow/ITopologyModifier.java)

As for the packaging, it is done as a [plugin](/#/developer_guide/plugin.html).
The modifier bean should be accessible in the plugin context once this one is loaded.

## Location modifier
For location modifiers, make sure to expose the component via the __component_descriptors__ of the plugin.yml file.

{%highlight yaml%}
component_descriptors:
  - bean_name: kubernetes-modifier
    name: Kubernetes modifier.
    description: >
      Topology modifier that transform a generic topology into a Kubernetes topology.
      Insert this modifier to post-location-match phase. Note that you MUST also insert the kubernetes-final-modifier to your location.
{%endhighlight%}

You then have to link it to a location, and specify the execution phase you want:

![Location modifiers](../../images/kubernetes_walkthrough/location_modifiers.png){: margin: 50}

## Policy modifier
For policies modifiers, it is a bit tricky (we will improve that as we go).
The concrete policy type (on-demand policy template) is shipped in alien4cloud either via a plugin archive, or via a simple common archive. Either way, you must add to the policy type a specific metadata tag `a4c_policy_impl` to express which modifier is linked to it, and on which deployment phase it should be injected:

___`pluginId:pluginBean:phase`___ where:

* __pluginId__: the id of the plugin in which the modifier is packaged
* __pluginBean__: The name of the modifier bean in the plugin context
* __phase__: The deployment phase on which the modifier is injected

for example the kubernetes AntiAffinity policy:

{%highlight yaml%}
policy_types:
  org.alien4cloud.kubernetes.api.policies.AntiAffinityLabel:
    derived_from: org.alien4cloud.policies.AntiAffinity
    metadata:
      # pluginId: alien4cloud-kubernetes-plugin
      # pluginBean: kubernetes-anti-affinity-modifier
      # phase: post-node-match
      a4c_policy_impl: alien4cloud-kubernetes-plugin:kubernetes-anti-affinity-modifier:post-node-match
{%endhighlight%}

When an abstract policy is matched against this concrete one, alien4cloud will look into that tag to see if a modifier has been specify. If so, it will load it from the related plugin and inject it in the proper flow phase.
