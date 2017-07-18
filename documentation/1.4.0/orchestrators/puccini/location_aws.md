---
layout: post
title:  AWS
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [orchestrators, puccini_main_page, supported_locations]
node_name: location_aws
weight: 1000
---

The puccini orchestrator plugin allows you to deploy the applications on AWS.

## Configuration
The configuration of the location needs to be done while configuring the orchestrator before its activation.

You need to fill in the informations with your AWS account. In the configuration of orchestrator, go to `locationConfiguration` -> `aws` -> `defaultConfiguration`.

* `accessKeyId`: Your access key id for AWS
* `accessKeySecret`: The content of your access key
* `region`: The name of your AWS region

## Tosca mapped / location exposed types
The Amazon location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` on the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the amazon nodes:

 - `org.alien4cloud.puccini.aws.nodes.Instance` for a compute

To configure a resource, you need to provide the information for the mandatory properties (with star):

* `image_id`: Image id for bootstrapping an instance of AWS
* `instance_type`: The type for instance of AWS
* `key_name`: The key pair name
* `security_groups`: Normally, it requires to put only one security group.
* `user_data`: We put the script needed to bootstrap an AWS instance. Normally with this script:
* `puccini_concurrent_restriction`: The number of the task can be executed concurrently on the compute instance.

{% highlight bash%}
#cloud-config
runcmd:
  - echo 'Defaults:ec2-user !requiretty' > /etc/sudoers.d/999-puccini-cloud-init-requiretty
{% endhighlight %}

* `user`: The user name for login on the instance.
* `key_content`: The private key of authentication for login on the instance. Pay attention when doing the copy paste. You need to select the multi-line mode before filling in the private key because the private key contains multiple line.


### Network
The tosca type `tosca.nodes.Network` can be mapped as the public network:

#### Public Network
Exposed as the location type a public network `org.alien4cloud.puccini.aws.nodes.PublicNetwork`, which will result to the attribution of an elastic ip to the linked resource (compute). Normally, we don't need to configure this resource.
