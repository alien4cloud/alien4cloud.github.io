---
layout: post
title: Topology portability
root: ../../
categories: "DOCUMENTATION-1.3.0"
parent:
  - user_guide
  - topology_management
node_name: topology_portability
weight: 200
published: true
---



{% summary %}{% endsummary %}

{%info%}
<h5>Premium feature</h5>
Portability insight is a Premium feature.
{%endinfo%}

Alien4Cloud holds a catalog of components, which are added by uploading archives (CSARS). Also, orchestrators plugins can provide the catalog with specific components they need to run, thus, rendering them accessible when browsing or editing a topology.  Using them in an abstract topology is a bad practice as they will lower the portability of the topology (only deployable on the location (or with the orchestrator) which provided them).
The purposes of the `portability` concept in this application are:

- Allowing the component's designer to specify the portability level of his components
- Informing users about the specificity of those components, and giving them the portability level of the topology they are creating.

# Components portability

There are few information describing the portability of a component. We should call them **Portability indicators** or simply **indicators** from now on.

## Portability indicators
The indicators depends on the type of the component we want to describe.

### Applicable for all components

- **`IAASS`**: List of IaaSs this component is linked to, meaning you can not deploy it on any other one.
- **`ORCHESTRATORS`**: List of orchestrators the component is linked to, meaning you can only deploy it using this orchestrator.

For example, you can add facets in the components view to show all components of a specific IAASS, like the following screen.

![Portability facets](../../images/1.3.0/user_guide/topology_portability/components_portability_facets.png)

And when you click on the ![Go to portability details](../../images/1.3.0/user_guide/topology_portability/portaiblity_icon.png){: .inline} icon of a component you can see more portability informations.

![Component details about portability](../../images/1.3.0/user_guide/topology_portability/components_details.png)

### Applicable only for a Compute
The followings indicators can only be defined on a Compute node:

- **`SUPPORTED_ARTIFACTS`**: List of artifacts types that the compute supports, such as `sh, bat, etc...`. Therefore, you might nor be able to host on it, a component which implementation scripts' artifact type is not one of these indicator's values.
- **`INSTALLED_PACKAGES`**: List of the packages that are pre-installed on the compute. This might serve when hosting a component which has a requirement on a specific package like `apt, yum, etc...`. Note that this particular indicator do not make any sense if provided for the basic Tosca Compute, as it is an abstract type. It would makes more sense on an implementation of that node (a template), for example, on a On demand resource of type Compute bound to a specific image.

### Applicable for others components (except the Compute):
- **`REQUIRED_PACKAGES`**: List of packages that the component needs to be deployed and run correctly. This will be match with the `INSTALLED_PACKAGES` indicator or the Compute component on whit the component will be linked.

## YAML providing
Alien4Cloud allows the component  and/or the orchestrator plugin designer to provides values for these indicators in the definition of the component type in the yaml file, using the above keys.  For example:

{% highlight yaml %}
alien.example.Node:
  derived_from: tosca.nodes.SoftwareComponent
  properties:
    [...]
  capabilities:
    [...]
  portability:
    ORCHESTRATORS: [Mock]
    IAASS: [ OpenStack ]
{% endhighlight %}

When working with plugins orchestrators, some indicators values are such as `IAASS` and `ORCHESTRATORS` are automatically registered, and merged (if defined in the yaml) with the existing one.

## UI edition
We also allow administrator to edit portability indicators on the user interface. This is only valid for orchestrator plugin's components, and it is done when creating and configuring on demand  location resources.

![On demand ressources](../../images/1.3.0/user_guide/topology_portability/on-demand-ressources.png)

# Topology portability

The topology portability level is defined by combining the portability level of all its components.
In the topology edition view, every component in the catalog has a portability information. So, the architect is be able to see progressively the impact of what he chose to add on the designed topology. To see this impact, go to portability view of the topology.

![Portability impacts](../../images/1.3.0/user_guide/topology_portability/topology_portability_infos.png)

The faster way to see the compatible locations with your current topology is the location support view.

![Location support](../../images/1.3.0/user_guide/topology_portability/location_support.png)
