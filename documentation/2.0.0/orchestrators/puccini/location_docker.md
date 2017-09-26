---
layout: post
title:  Docker
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [orchestrators, puccini_main_page, supported_locations]
node_name: location_docker
weight: 1000
---

The puccini orchestrator plugin allows you to deploy applications on Docker.

## Tosca mapped / location exposed types
The Docker location exposes some types to help you configure a deployment and map the native Tosca types. Theses nodes are exposed as `on demand resources` on the location management view.  

### Compute
The tosca type `tosca.nodes.Compute` is mapped to the Docker nodes:

 - `org.alien4cloud.puccini.docker.nodes.Container` for a docker container

Explanation to the properties:

* `image_id`: The image id for running the container
* `tag`: The tag for the docker image
* `interactive`:
* `exposed_ports`: Put the exposed port of the docker container
* `port_mappings`: Mapping the exposed port of the docker container to the port of the host.
  * `from`: Put the exposed port of the docker container
  * `to`: Put the mapped port of the host
* `pull_image`: If selected, it will pull the docker image from docker hub, else local image will be used.
* `puccini_concurrent_restriction`: The number of the task can be executed concurrently on the compute instance.

### Network
The tosca type `tosca.nodes.Network` can be mapped as `org.alien4cloud.puccini.docker.nodes.Network`:

Explanation to the properties:

* `network_name`: The name of the network
* `cidr`: The ip range of the network


### Volumes
{% warning %}
TODO
{% endwarning %}

### Deletable volumes
{% warning %}
TODO
{% endwarning %}
