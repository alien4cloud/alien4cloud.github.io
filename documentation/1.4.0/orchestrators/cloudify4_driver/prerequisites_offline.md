---
layout: post
title:  Offline configuration
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [orchestrators, cloudify_4, cloudify_4_prerequisites]
node_name: cloudify_4_offline_configuration
weight: 3000
---

Alien4Cloud wraps the create volume operation of some of the Cloudify's IaaS plugin to be able to handle existing volumes use cases. For instance, default plugins cannot deploy multiples instances of computes having each instances attached to a volume. 
The Alien4Cloud's provider takes advantage of the plugin mechanism of Cloudify to ship our customized wrapper embedded in the blueprint that we send to cloudify.

This embedded plugin has some python dependencies, therefore if your Cloudify Manager is bootstrapped on an isolated network (without internet) you need to perform a few configuration steps to be able to deploy volumes.


## Configure imports in the orchestrator ##

Go to the configuration tab of your orchestrator 

<a href="../../images/cloudify4_driver/a4c-orch-config.png" title="alien4cloud-cfy-orchestrator configuration-tab"><img src="../../images/cloudify4_driver/a4c-orch-config.png" alt="Orchestrator configuration" title="alien4cloud-cfy-orchestrator configuration-tab"></a>

Then click the target location and to the import field.
For instances: `locations > openstack > imports`
<a href="../../images/cloudify4_driver/a4c-orch-locations.png" title="alien4cloud-cfy-orchestrator locations"><img src="../../images/cloudify4_driver/a4c-orch-locations.png" alt="Orchestrator configuration" title="alien4cloud-cfy-orchestrator locations"></a>

{%warning%}
Update the value of `plugins/overrides/plugin-included.yaml` to `plugins/overrides/plugin-managed.yaml`.
{%endwarning%}

## Upload the plugin on the manager ##

Download the wagon corresponding to your target IaaS:

[Openstack](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=org.cloudify&a=a4c-overrides-openstack&v=1.3.1&p=wgn){: .btn}{: .btn-success}{: .download-button}{: .navbar-btn}

Then upload it on your manager:

{% highlight bash %}
cfy plugins upload a4c_overrides_openstack-1.3.1-py27-none-linux_x86_64.wgn
{% endhighlight %}

You can also upload it from the Cloudify's Webui.
