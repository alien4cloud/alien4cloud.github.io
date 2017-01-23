---
layout: post
title:  Mesos + Marathon
root: ../../../
categories: DOCUMENTATION-1.4.0
parent: [orchestrators]
node_name: marathon_driver
weight: 1000
---

[Mesos](http://mesos.apache.org) is like a kernel for the datacenter. It provides fine-grained abstraction of the datacenter resources, isolation and native support for Docker containers. [Marathon](https://mesosphere.github.io/marathon/) is an open-source meta-framework for Mesos dedicated to container orchestration. It is developed and maintained by Mesosphere. Marathon is a production-ready container orchestration platform for Mesos with fist-class Docker support. It features automated health-checks and failure recovery, allowing seamless execution of services or long-running jobs. Being a meta-framework, Marathon is also proficient in running other Mesos frameworks, such as Chronos.

Combined, Mesos and Marathon can turn any datacenter into a highly available, scalable and fault-tolerant PaaS for cloud applications. We developed a Marathon orchestrator plugin for Alien 4 Cloud, as part of our 1.4.0 roadmap to achieve Docker support.

{% warning %}
This project is at an alpha stage and still undergoing development. We might add, change, or delete any functionality described in this document. Any [feedback](https://github.com/alien4cloud/alien4cloud-marathon-plugin/issues) would be highly appreciated !
{% endwarning %}

## Alien 4 Cloud Marathon support

The plugin features deployment and management of complex topologies with containers in Marathon by leveraging [docker-tosca-types](https://github.com/alien4cloud/docker-tosca-types). Currently, we only support running Docker containers.

Topologies deployed with the plugin benefit from Marathon's fault-recovery features. This means that Marathon will gracefully re-schedule and restart (possibly, on a different agent) a failing container.

We made a [demonstration video](https://www.youtube.com/watch?v=kXrNanNMkhU) showcasing the deployment of Nodecellar using the plugin.

### Service discovery

**TL;DR**: Service discovery is pretty much automatic using the Marathon plugin with MesosDNS & MarathonLB running on your cluster.

Service discovery between containers launched by the plugin through Marathon is achieved using MesosDNS and [MarathonLB](https://github.com/mesosphere/marathon-lb), respectively a DNS service and a HAProxy load balancer that provides port-based service discovery. Both are running in the cluster as Marathon tasks.

Containers launched with Marathon are all resolvable through DNS resolution using the *app_name.marathon.mesos* pattern (but you will still need to know the containers' allocated port, which should be randomly assigned by Marathon), or using MarathonLB as a reverse proxy, using a well-know service port. When assigned a service port, containers running in Marathon can be accessed by reaching MarathonLB on the said service port. Because MarathonLB itself is running on Marathon, it's IP address is also resolvable through MesosDNS. This means that containers with service ports can be accessed using the pattern *<marathonlb_id>.marathon.mesos:<service_port>* where <marathonlb_id> is MarathonLB's app ID in Marathon.

This whole mechanism being relatively complex, the plugin will automatically assign a service port to containers that are targeted by a _ConnectsTo_ relationship from at least another container in the topology. Respectively, the plugin will also replace any reference to the target's endpoint port and ip_address attributes with the service port and MarathonLB DNS name, respectively.

### External Storage support

**TL;DR**: We added experimental support of the external storage feature from Marathon. We currently use [REX-Ray](https://rexray.readthedocs.io/en/stable/) as a Docker Volume Driver. The REX-Ray service needs IAAS credentials to operate.

{% warning %}
Please note that while REX-Ray is able to dynamically provision volumes on your provider, those will NOT be cleaned up upon undeployment. REX-Ray currently only supports AWS, although it is moving forward quite rapidly, and new features or providers are likely to be added in the near future. As of today, REX-Ray does not support high availability.
{% endwarning %}

REX-Ray is built on a client-server architecture, with clients operating as Docker Volume Drivers that use the [libStorage](http://libstorage.readthedocs.io/en/stable/) service. The libStorage service (which we also call RexRayServer for simplicity) runs alongside the Master(s) node(s) and is able to provision and mount storage resources on the fly. It needs to be configured and given proper credentials to manage storage providers. Storage providers configuration is best described in [libStorage's documentation](http://libstorage.readthedocs.io/en/stable/user-guide/storage-providers/).

### HTTP Health checks

In addition to Mesos tasks states, Marathon features automatic HTTP health checks against running containers. A health check is considered passing if its HTTP response code is between 200 and 399 inclusive, and its response is received within the a timeout period.

The plugin adds a default health check to all the containers in the topology.

### Known limitations and caveats
- It is not possible to scale Docker containers. This is due to Marathon only allowing singletons when using external volumes in conjunction with containers.
- We did not exactly follow the TOSCA model for Docker containers as it is still incubating.
- It not possible to stop the deployment of an application. Wait for it to be deployed then hit un-deploy.
- The connexion to Marathon is NOT secured.
- Health checks events are not parsed. However, the health of each instance is polled when refreshing the runtime view.
