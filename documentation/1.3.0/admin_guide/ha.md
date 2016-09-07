---
layout: post
title:  Alien High Availability
categories: DOCUMENTATION-1.3.0
root: ../../
parent: [admin]
node_name: ha
weight: 800
---

{% summary %}{% endsummary %}

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

When deploying A4C in a production environment, you may want to be sure it will be available 24/7, even in case of crashes. We provide a plugin that manages high availability for A4C using a primary/backup mode. 

{%warning%}
Note that this page focus only on A4C HA: we don't consider HA for orchestrators components (managers ...) in this page.
{%endwarning%}

# Architecture

Our HA solution is based on a primary/backup mecanism: you'll need to deploy several instances of A4C to ensure one will be available at a given time.

The _alien4cloud-premium-ha_ plugin leverages on [Consul](https://www.consul.io) features: 
- Key/Value Storage: a distrubuted key/value is used to determine which A4C instance is the leader. 
- Failure Detection: Consul is in charge of checking the liveness of A4C instances.

As a consequence, to use this plugin you will need a Consul server (but you'll probably use a consul cluster !). 

Since A4C use ElasticSearch as a backend server, you'll need to setup a remote server (instead of launching an embedded one), and you'll probably prefer to setup an ElasticSearch cluster with replicated nodes.

Since A4C use local file system to store stuffs (plugins, csars, images), you'll need a distibuted (and eventually replicated, or at least backed up) file system.

Finally, you'll probably want to setup a reverse proxy behind your A4C instances to have a single entry point for the application.

So the whole architecture could look like this:

[![HA Architecture](../../images/admin_guide/ha-architecture.png)](../../images/admin_guide/ha-architecture.png)

## How A4C works in HA mode

In a very first stage, A4C will start in backup mode, which is a limited mode, with only a ligthweight bootstrap context started:
- Not all REST endpoints will be avalaible. Basically, only the health check endpoint will be available.
- All plugins are disabled (for instance, orchestrator are not enabled, so no background threads will run).
At this early stage, A4C is not usable.

A4C will then open a session onto consul and try to acquire a lock onto a consul key. If the lock is already acquired (by another instance), it will still in this boostrap mode and will wait for changes on this key. A health check is associated with the sesssion, so consul will check for the liveness of this A4C instance.

When the lock is acquired, this means the current instance is elected as the leader. The whole application context is started, all REST endpoint are available and all the stuffs are waked up. This A4C instance is then fully usable. 

If the JVM or the machine crash (or event if an A4C instance can't reach ElasticSeach), the health check will fail, consul will disable the session, and the lock (if it is associated with this session) will be released. The primary will fall back in backup mode. Another instance will be elected.

## Sample topology

As part of our plugin, you'll find TOSCA types and topology that can help you to setup such kind of architecure. You can use it as an example but keep in mind it is not intended to be production ready.

{%warning%}
This topology is a sample topology that can help you to setup your own infrastructure but should'nt be considered  ready to use for production.
{%endwarning%}

[![HA Topology](../../images/admin_guide/ha-topology.png)](../../images/admin_guide/ha-topology.png)

Few notes concerning this topology:

- The _AlienCompute_ which hosts A4C is scalable and you should have at least 2 instances. Can be scaled at runtime.
- The _BackendCompute_ which hosts ElasticSearch is scalable and you should have at least 2 instances. Can't be scaled at runtime.
- The _ConsulCompute_ is scalable and a good number is 3 for the minimum instances count (for quorum requirements). Can be scaled at runtime.
- We use a local Consul agent on each A4C host. This agent is integrated in the Consul cluster (and so knows all the members), so A4C just need to talk to this agent (and don't have to manage fail over in case of crash of a member of the cluster servers).
- We use a [Samba](https://www.samba.org) server to manage a distributed file system. This is just an example, you can use whatever you want (NFS, sshfs ...) since you can mount it as if it was a local file system.
- We use [NGINX](https://www.nginx.com) as a reverse proxy behind this primary/backup architecture.
- We use [Consul Template](https://www.hashicorp.com/blog/introducing-consul-template.html) to drive the NGINX reverse proxy. When something changes concerning the distributed lock in consul, the config of NGINX is changed and NGINX is restarted.
- Only NGINX needs to be exposed with a public IP.

Security considerations:

- The gossip protocol (communication inside consul cluster) can be encrypted using a SHA key (provided in the topology).
- Communication between consul clients (A4C and ConsulTemplate) and Consul agents can be securized using SSL.
- NGINX can expose a HTTPS endpoint but redirect to a HTTP alien without SSL (if you trust your private network).

Known limitations:

- The samba server is not securized.
- The ElasticSearch cluster can not be securized *in this topology*. But of course, you can use your own securized ES cluster.
- We use a single CA certificate (provided in the topology) to generate all the keys used for SSL communications (HTTPS for NGINX, HTTPS for A4C, TLS for Consul).

# Configuration

We will detail here the different configuration items you can change in A4C config related to the usage of the HA plugin.

{: .table .table-bordered}
Property Name | Default value | Details |
 ------------ | :----------- | ----------- |
ha.ha_enabled | false | If true, enable HA and use the following properties. If false, the following properties are ignored. |
ha.consulAgentIp | localhost | The ip address of the consul agent (server or client) to connect to. | 
ha.consulAgentPort | 8500 | The port of the consul agent. |
ha.instanceIp | | The IP address of the alien instance (used for health check, so this address should be visible from the consul agent, can be localhost if the agent is on the same machine). |
ha.healthCheckPeriodInSecond | 5 | The delai in seconds between each health check query done by the consul agent. |
ha.consulSessionTTLInSecond | 60 | The duration in seconds of the consul session. This session will be renewed before this delai expire. |
ha.consulLockDelayInSecond | 0 | The delai between the session invalidation and the lock release. 0 is a good value since we want a new leader to be elected if the primary crash. |
ha.lockAcquisitionDelayInSecond | 20 | In second, the delai before trying to acquire a lock when after a failure (when consul is not reachable for example. |
ha.consul_tls_enabled | false | When true, use https to talk to consul (and then, need for a keystore and a truststore to be configured). |
ha.keyStorePath | | The key store for SSL connection to consul. |
ha.trustStorePath | | The truststore for SSL connection to consul. |
ha.keyStoresPwd | | The password for keystore and truststore. |
ha.serverProtocol | http | The protocol where the alien instance can be contacted (use to build the health check url). Just set to 'https' if alien ssl is on. |
ha.health_disk_space_threshold | 10 * 1024 * 1024 (10 Mo) | The health check endpoint will check the remaining disk space on the host of the A4C instance. Under this threshold, the health check will fail. |
ha.consulQueryTimeoutInMin | 3 | The HA plugin use this timeout when querying consul with blocking read. |
ha.consulConnectTimeoutInMillis | 1000 * 30 (30 seconds) | TCP connection timeout when querying consul. |
ha.consulReadTimeoutInMillis | 1000 * 60 * 5 (5 minutes) | TCP read timeout when querying consul. |

