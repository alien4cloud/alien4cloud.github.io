---
layout: post
title:  Cloudify 3
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [orchestrators]
node_name: cloudify_3
weight: 1000
---

Cloudify 3 is an opensource orchestrator backed by GigaSpaces that aims to support deployment on various different locations.

This section gives a focus to Cloudify 3 orchestrator plugin for ALIEN, a plugin to manage deployment on various cloud using [Cloudify 3.x](http://getcloudify.org/ "cloudify").

## Alien 4 Cloud Cloudify 3 Support

The alien 4 cloud plugin for cloudify 3 exposes several nodes so that TOSCA templates can be deployed on Cloudify 3 to various locations, such as ***Amazon***, ***Openstack***, etc... . This allows full portability of topologies (or blueprints) that you have designed.  

See [Supported locations](#/documentation/1.4.0/orchestrators/cloudify3_driver/supported_locations.html) for more details.

<!-- The following tables shows the supported features of our plugin on the various clouds and how they are mapped to TOSCA.

### OpenStack

### Amazon

## Policies support in cloudify 3 -->

Cloudify 3 currently manages the deployment and un-deployment of blueprints and support the ability to trigger custom workflows that have been shipped within the blueprint at runtime.

Out of the box cloudify 3.3 doesn't support policies like auto-healing and have a very limited support for Scalability that causes issues in various scenarios.

{%info%}
Note that Cloudify guys are working on 3.4 that should provide much better support for both HA and Scalability concern.
{%endinfo%}

### Auto-healing

As stated previously cloudify 3.3 doesn't provide support for auto-healing of services. It provide a basic monitoring feature that we implement in the blueprint we generate from the TOSCA model. This basic monitoring is based on Machine status and not software status meaning that if one of the software in a blueprint crash it won't be detected by the cloudify 3.

We developed as part of Alien 4 Cloud the ability to generate a cron-based mecanism that check the monitoring data in order to trigger an auto-healing workflow. This implementation is quite naïve for now and is disabled by default on deployments but can be enabled per deployment through an orchestrator property.

### Scalability

Scalability behavior is currently not deeply specified in TOSCA. When scaling a node, all nodes that are hosted_on the given node are scaled. Also, nodes that are connected or attached to it, this includes block-storage and floating ips.  
As the new Cloudify 3.4 has improved his way of handling the scaling, we do not need anymore, as it was the case for the previous version Alien4Cloud 1.2.x, the workaround scaling plugin and configurations.  
However, refers to the table below to see IaaS limitations.

{%info%}
There is currently some missing details in the TOSCA specification on how relationships can be impacted in scaling scenarios and we are working with bot Cloudify and TOSCA to enhance the specification.
{%endinfo%}


#### IaaS limitations

Here is a table that shows the limitations about scaling per IaaS:

<!-- {: .table .table-bordered}
|       |  OpenStack  | Amazon  | BYON  | Azure (***`Premium`***) | vSphere (***`Premium`***) |
|:--------|:---------|:-------|:-------|:-------|:-------|
| Single Compute  | OK  | OK  | OK  | OK  | OK
| Compute + Network + Block Storage   | OK  | KO  | N/A   | KO  | KO  | -->

<table class="table table-bordered">
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>OpenStack</th>
      <th>Amazon</th>
      <th>BYON</th>
      <th>Azure (<em><code>Premium</code></em>)</th>
      <th>vSphere (<em><code>Premium</code></em>)</th>
    </tr>
  </thead>
  <tbody style="text-align: center;">
    <tr>
      <td>Single Compute</td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
    </tr>
    <tr>
      <td>Compute + Network + Block Storage</td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
      <td>N/A</td>
      <td><i class="text-success fa fa-check fa-2x"></i></td>
      <td ><i class="text-danger fa fa-remove fa-2x"></i></td>
    </tr>
  </tbody>
</table>

### Block storage recovery limitation

{%info%}
Block storage recovery is the ability to reuse an already created block storage.  
    
Imagine you have a topology containing a compute with a block storage attached on it. You deploy the topology, the VM is started, the block storage is provisionned and attached to the VM, and then some process write data to the disk. If you don't use a `DeletableBlockStorage`, this means that you want the data written to the disk to be persistent : if the topology is undeployed then deployed again, you want the block storage to be reused.  
  
To manage such feature, A4C will keep a trace of the volume ID and store it in the deployment topology. When the topology is deployed again, this volume id is used to find the volume in the the IaaS rather than provisoning another one.
{%endinfo%}

