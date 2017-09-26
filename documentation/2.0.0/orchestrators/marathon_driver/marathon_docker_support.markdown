---
layout: post
title:  Docker support
root: ../../../
categories: DOCUMENTATION-2.0.0
parent: [orchestrators, marathon_driver]
node_name: docker_support
weight: 2000
---

We are not following the exact types from TOSCA as we are not fully inline with their current implementation. We plan anyway to provide compatibility with TOSCA types later.

Current TOSCA types for containers implies specific *Capabilities* and *Requirements*. We believe this to be a wrong approach and that the difference between a Docker-based component and a non-Docker component should be handled by the orchestrator. For instance, deploying a MongoDb via a Docker image in a container or through Scripts in a compute should in our opinion lead to a *MongoCapability* that derives from *tosca.capabilities.Endpoint* in both implementations.

In the future, this approach will lead to the ability to deploy topologies with both containers and non-container nodes (based on orchestrators support).

## Docker-types description
The node_type *tosca.nodes.Container.Application.DockerContainer* is derived_from the existing type *tosca.nodes.Container.Application*.

### Defining operations
- The implementation value of the *Create* operation takes the Docker image, as explained below. Other operations are not supported ATM.
- Technical configuration can be given to the container using the Create operation inputs.
  Inputs will be converted into environment variables, docker run arguments, or docker options depending on the input's prefix. Respectively :
  - **ENV_{INPUT_NAME}** will result in an environment variable inside the container named *INPUT_NAME*
  - **ARG_{INPUT_NAME}** will result in the input value being passed as an ENTRYPOINT argument (those are unamed)
  - **OPT_{INPUT_NAME}** will result in an arbitrary command-line option named *INPUT_NAME* for the docker run command.

  Inputs should be used for technical configuration (such as a port definition) or configuration that should be auto-resolved by the orchestrator. For user specific configuration, use the new *docker_options, docker_env_vars or docker_run_args* instead. See [Nodecellar sample](nodecellar-sample-types/nodecellar-types.yml) for an example.
- To provide the container with a custom command to run, use the *docker_run_cmd* property.

### Docker images
Docker images are defined using a new artifact type combined with a repository definition.
To specify which image a container use, you must defined the image as the implementation artifact of the container's **Create** operation, like this:
{% highlight yaml %}
create:
  implementation:
    file: mongo:latest
    repository: docker
    type: tosca.artifacts.Deployment.Image.Container.Docker
{% endhighlight %}

### Adding External Storage as Docker Volumes

You can add External Volumes to your containers by using the `alien.nodes.DockerExtVolume` type. You must however define a volume name (that must be unique in your provider) and a container mount point.

### Getting a property from a requirement target

To implement a dependency from a container to another component in a flexible way, we want to allow users to use either environment variables, docker run arguments or a custom command, as they see fit. To achieve this, we need a way to request a property of a requirement TARGET from within the SOURCE properties definition. see [Nodecellar sample](/examples/nodecellar_types_sample.yml) for an example.
This means that within a node definition, given a requirement name, we want to access a property defined in the *TARGET* of such requirement.  
For example : `{ get_property: [REQ_TARGET, mongo_db, port] }` should return the *port* property of the TARGET of the *mongo_db* requirement, which is a capability. If the property cannot be found, we will look for it in the TARGET node itself.

### Tuning the container

We added a set of properties to allow user configuration of the containers within the Alien editor.

#### Docker CLI arguments
It is possible to define arguments for the Docker CLI using the *docker_cli_args* property as a map of key/pairs. It is also possible
(and recommended) to create a custom datatype if specific CLI args are expected for the application ([see the Nodecellar example](nodecellar-sample-types/nodecellar-types.yml)).

#### Docker run command
To define a command to be executed inside the container, use the **docker_run_cmd** property. This will override a CMD statement in the container's Dockerfile. The value will be wrapped into `/bin/sh -c '${cmd}'`.

#### Docker run args
If your container's Dockerfile uses an ENTRYPOINT, you can specify arguments using the **docker_run_args** property. Those will be appended to the *docker run* command.

#### Docker env variables
To set environment variables inside the container, use the **docker_env_vars** property map.

### Defining capabilities

#### Modularity
We aim for topologies where Docker containers and non-docker apps can live together. As such, capabilities for Docker containers should inherit usual capabilities. For instance, in the [Nodecellar sample](nodecellar-sample-types/nodecellar-types.yml), we defined :

- The **alien.capabilities.endpoint.Mongo** capability, which inherits *tosca.capabilities.Endpoint* and is the generic ability to expose a Mongo database,
- The **alien.capabilities.endpoint.docker.Mongo** capability, which derives from the latter. This capability is exposed by the *mongo_db* capability of the *MongoDocker* Node-type.
Using inheritance, this means that any other Node-type requiring *alien.capabilities.endpoint.Mongo* can use the MongoDocker through a classic **ConnectsTo** relationship.

#### Bridging between container and host ports
To allow bridge networking between the container and it's host, we added the *docker_port_mapping* property to the *alien.capabilities.endpoint.docker.Mongo* relationship. This will be interpreted by the Orchestrator as the Host port, while the *port* property (which we inherited from the Endpoint capability) represents the port inside the container. If the value is 0, the Orchestrator will randomly allocate a port. If no value is specified, then Host networking will be used.

### Hosting requirements
As per the usual *host* requirement, we decided to use a *lower_bound* value of 0. This allows definition of topologies with containers only, which we will be able to deploy onto already provisioned clusters, like Mesos or Kubernetes.
