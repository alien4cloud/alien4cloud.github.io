---
layout: post
title:  Node affinity label
root: ../../../../
categories: DOCUMENTATION-3.3.0
parent: [orchestrators, kubernetes, kubernetespluginabstractmode, Kubernetes_policies ]
node_name: node_affinity_label
weight: 1000
---

This policy ensure that a pod will be deployed on a specific node matching some label criteria.

The configuration is done in two part: Admin and Deployer.

{%info%}
  We will assume we have in our kubernetes cluster, at least one node with the label **tier**:**front**
{%endinfo%}

## Admin side: Create and configure the on-demand policy resource

On the location, add a policy resource of type `org.alien4cloud.kubernetes.api.policies.NodeAffinityLabel`.

![location node affinity add](../../../images/3.3.0/user_guide/policies/add_k8s_nodeAffinity_policy.png){: margin: 50}

This policy is derived from `org.alien4cloud.policies.LabelPlacement`, and have two properties:

- **labels**:
- **matchExpressions**: a list of node selector requirements. The requirements are ANDed.
          Note that the "labels" property value will be used mostly for matching the topology policy against this one.
          The value filled in this property will be the actual one in the final kubernetes blueprint.

![node affinity matchExpressions](../../../images/3.3.0/user_guide/policies/node_aff_matchExp_edit.png){: margin: 50}

The ___key___ sub-property refers to a label name in your kubernetes cluster. ___Values___ is a list of values elligible, according to the operator (___In___ in this case).

##Deployer: Make a portable topology and match policies

Build a topology and add the abstract tosca policy `tosca.policies.Placement`.

This example is the [02-simple-apache-affinity](https://github.com/alien4cloud/samples/blob/master/org/alien4cloud/doc/kube/topology/02-simple-apache-affinity/tosca.yaml) topology:

![node affinity matchExpressions](../../../images/3.3.0/user_guide/topology_editor/policies/node_aff_matchExp_edit.png){: margin: 50}

Configure the deployment on the kubernetes location. Once the location selected, yu should see logs like this:

![node affinity matchExpressions](../../../images/3.3.0/user_guide/policies/nodeAff_config_ok.png){: margin: 50}

Deploy and see the Deployment is effectively deployed on the node selected based on the _matchExpressions_ evaluation.
