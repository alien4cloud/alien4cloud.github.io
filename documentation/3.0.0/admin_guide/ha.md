---
layout: post
title:  Alien High Availability
categories: DOCUMENTATION-3.0.0
root: ../../
parent: [admin]
node_name: ha
weight: 800
---

{% summary %}{% endsummary %}

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

# Installation

{% warning %}
This section describe deprecated manual HA settings. We strongly recommend you to automate your installation using [A4C Spray](https://github.com/alien4cloud/alien4cloud-spray/tree/develop) project that well manage HA setups.
{% endwarning %}

## Sample topology

As part of our plugin, you'll find TOSCA types and topology that can help you to setup such kind of architecure. You can use it as an example but keep in mind it is not intended to be production ready.

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

## Manual configuration

If you wish to use custom scripts in order to perform the installation you can find here how we configure the consul server and consul template element to perform re-configuration of the ngnix component.

### Consul server configuration

The configuration is performed in the configure.sh script and is detailed here. In order to configure the consul server we decided to split the configuration in multiple files all placed in __/etc/consul__. Consul will look for json files in this directory and process them in order.

The first file __01_basic_config.json__ contains the generic configuration of our consul agent and is used both for clients and server agents. It has the following content

{% highlight json %}
{
  "datacenter": "a4c",
  "data_dir": "%CONSUL_DATA_DIR%",
  "log_level": "trace",
  "node_name": "%INSTANCE%",
  "client_addr": "0.0.0.0",
  "bind_addr": "%CONSUL_BIND_ADDRESS%",
  "ports": {
    "http": %CONSUL_API_PORT%
  }
}
{% endhighlight %}

Where
* __%CONSUL_DATA_DIR%__ should be replaced with the path to the directory you want consul to store data in.
* __%INSTANCE%__ should be replaced with a unique name for the node
* __%CONSUL_BIND_ADDRESS%__ should be replaced with the ip of the NIC used for communication with the other consul agents (server and clients)
* __%CONSUL_API_PORT%__ should be replaced with the port of the consul API (default should be 8500)

__02_server_config.json__ contains the specific configuration for consul server nodes and has the following content:

{% highlight json %}
{
  "server": true,
  "bootstrap_expect" : %INSTANCES_COUNT%
}
{% endhighlight %}

Where __%INSTANCES_COUNT%__ should be the expected number of nodes in your consul server cluster (3 is a good number).

In case you want to specify a key to encrypt gossip exchanges into consul cluster you can add the __03_encrypt_config.json__ file with the following content:

{% highlight json %}
{
  "encrypt": "%ENCRYPT_KEY%"
}
{% endhighlight %}
Where %ENCRYPT_KEY% should be replaced with the desired string.


Finally to add SSL configuration to the API we add a __04_server_secured_config.json__ file with the following content:

{% highlight json %}
{
  "ports": {
    "dns" : -1,
    "http" : -1,
    "https": -1
  },
  "key_file": "/etc/consul/ssl/server-key.pem",
  "cert_file": "/etc/consul/ssl/server-cert.pem",
  "ca_file": "/etc/consul/ssl/ca.pem",
  "verify_incoming": true,
  "verify_outgoing": true
}
{% endhighlight %}

To start the server nodes you can use the following script:

{% highlight bash %}
#!/bin/bash -e
nohup sudo bash -c 'consul agent -ui -config-dir /etc/consul > /var/log/consul/consul.log 2>&1 &' >> /dev/null 2>&1 &

echo "Joining cluster by contacting following member ${CONSUL_SERVER_ADDRESS}"
sudo consul join ${CONSUL_SERVER_ADDRESS}
{% endhighlight %}

With a CONSUL_SERVER_ADDRESS environment variable that contains the comma separated list of IP adresses of the members of the consul cluster.

### Consul client configuration

The client nodes of consul are required to be installed on the machines of the alien4cloud server as well as the machine that host the ngnix load balancer/reverse proxy. Both of the consul clients have the same configuration as a server node with the critical difference that it does not contains the _02_server_config.json_ configuration file that is specific to the server configuration node. In addition, in our installation we rename the _04_server_secured_config.json_ file to _04_client_secured_config.json_ for better consistency in naming and should have the following content:

{% highlight json %}
{
  "client_addr": "127.0.0.1",
  "ports": {
    "dns" : -1,
    "http" : -1,
    "https": %CONSUL_API_PORT%
  },
  "key_file": "/etc/consul/ssl/client-key.pem",
  "cert_file": "/etc/consul/ssl/client-cert.pem",
  "ca_file": "/etc/consul/ssl/ca.pem",
  "verify_outgoing": true
}
{% endhighlight %}

Where __%CONSUL_API_PORT%__ should be replaced with the same port specified in the __01_basic_config.json__ server files.

To start the client nodes you can use the following script:

{% highlight bash %}
#!/bin/bash -e
nohup sudo bash -c 'consul agent -config-dir /etc/consul > /var/log/consul/consul.log 2>&1 &' >> /dev/null 2>&1 &

echo "Joining cluster by contacting following member ${CONSUL_SERVER_ADDRESS}"
sudo consul join ${CONSUL_SERVER_ADDRESS}
{% endhighlight %}

With a CONSUL_SERVER_ADDRESS environment variable that contains the comma separated list of IP adresses of the members of the consul server cluster.

### Consul template configuration for automatic ngnix update.

Consul template will be responsible for updating the ngnix configuration when the alien4cloud master node changes. In order to configure it we will create a __/etc/consul_template/consul_template.conf__ file with the following content:

{% highlight bash %}
consul = "127.0.0.1:%CONSUL_API_PORT%"

template {
  source      = "/etc/consul_template/nginx.conf.ctpl"
  destination = "/etc/nginx/sites-enabled/default"
  command = "sudo /etc/init.d/nginx reload"
}

ssl {
  enabled = %TLS_ENABLED%
  verify = true
  cert = "/etc/consul_template/ssl/client-cert.pem"
  key = "/etc/consul_template/ssl/client-key.pem"
  ca_cert = "/etc/consul_template/ssl/ca.pem"
}
{% endhighlight %}

Where %CONSUL_API_PORT% should be replaced with the actual port of the consul client agent running on the ngnix host. If you have enabled TLS please make sure that %TLS_ENABLED% is replaced by true (recommend setting).

Finally add a template file __/etc/consul_template/nginx.conf.ctpl__ so consul template can update the ngnix configuration with the following configuration (this configuration is for a secured alien4cloud server).

{% highlight bash %}
{% raw %}
{{ if key "service/a4c/leader" }}
server {
        listen %LISTEN_PORT% default ssl;
        server_name %SERVER_NAME%;

        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout 10m;
        ssl_certificate /etc/nginx/ssl/server-cert.pem;
        ssl_certificate_key /etc/nginx/ssl/server-key.pem;
        ssl_verify_client off;
        ssl_protocols SSLv3 TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers RC4:HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        location / {
                proxy_pass https://{{key "service/a4c/leader"}}/;
                proxy_ssl_session_reuse on;
                proxy_set_header                Host %SERVER_NAME%;
                proxy_pass_request_headers      on;
                # Force https
                proxy_redirect http:// https://;
        }
}
{{ else }}
server {
        listen %LISTEN_PORT% default_server;
        listen [::]:%LISTEN_PORT% default_server ipv6only=on;

        ssl on;
        ssl_certificate /etc/nginx/ssl/server-cert.pem;
        ssl_certificate_key /etc/nginx/ssl/server-key.pem;
        ssl_session_cache shared:SSL:10m;

        root /usr/share/nginx/html;
        index index.html index.htm;

        server_name %SERVER_NAME%;

        location / {
                try_files $uri $uri/ =404;
        }
}
{{ end }}
{% endraw %}
{% endhighlight %}

Where __%LISTEN_PORT%__ should be replaced with the port on which you want to expose the ngnix server and __%SERVER_NAME%__ should be replaced with the public ip address of the ngnix host.

Finally you can start the consul template process using the following script (note that ngnix installation must be done prior to consul template installation):

{% highlight bash %}
nohup sudo bash -c '/var/lib/consul_template/consul-template -config /etc/consul_template/consul_template.conf >> /var/log/consul_template/consul_template.log 2>&1' >> /dev/null 2>&1 &
{% endhighlight %}

# Alien Configuration

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
ha.keyStorePwd | | The password for keystore. |
ha.trustStorePath | | The truststore for SSL connection to consul. |
ha.trustStorePwd | | The password for truststore. |
ha.serverProtocol | http | The protocol where the alien instance can be contacted (use to build the health check url). Just set to 'https' if alien ssl is on. |
ha.health_disk_space_threshold | 10 * 1024 * 1024 (10 Mo) | The health check endpoint will check the remaining disk space on the host of the A4C instance. Under this threshold, the health check will fail. |
ha.consulQueryTimeoutInMin | 3 | The HA plugin use this timeout when querying consul with blocking read. |
ha.consulConnectTimeoutInMillis | 1000 * 30 (30 seconds) | TCP connection timeout when querying consul. |
ha.consulReadTimeoutInMillis | 1000 * 60 * 5 (5 minutes) | TCP read timeout when querying consul. |
