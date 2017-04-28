---
layout: post
title: Dependencies
root: ../../..
categories: DOCUMENTATION-1.4.0
parent: [user_guide, topology_editor]
node_name: topology_editor_dependencies
weight: 190
---

{% summary %}{% endsummary %}

 Using `imports` keyword, importing an archive into a TOSCA definition allows usage of all types defined in the archive as if they were defined in the current document. These archives are called **dependencies**. An imported archive can itself have some imports declared: these will be the **transitive dependencies**.

Alien 4 Cloud's editor supports manual definition and simple auto-resolving of dependencies within a topology.

## Adding a type to a topology

When you drag and drop a component from the catalog into the editor canvas, Alien4Cloud automatically adds the component's archive into the topology's dependency set.  When several versions of the same dependency archive are available in the catalog, you can choose between versions by clicking on the button below the archive's name.

[![Choose dependency when adding a node](../../images/1.4.0/user_guide/topology_editor/dragndrop_dependency.png)](../../images/1.4.0/user_guide/topology_editor/dragndrop_dependency.png)

The same behavior applies when defining relationships between nodes, as shown below.

[![Choose dependency when adding a relationship](../../images/1.4.0/user_guide/topology_editor/relationship_dependency.png)](../../images/1.4.0/user_guide/topology_editor/relationship_dependency.png)

### Conflicts auto-resolving

{%info%}
It is not possible to use multiple versions of an archive in a topology. To prevent conflicts, when adding a node template (resp. a relationship) from an archive that is already used in a different version in the topology, Alien4Cloud will automatically resolve to importing the latest version of the archive between those two. This behavior also applies recursively to transitive dependencies. Note that the auto-resolving may cause transitive dependency conflicts, as detailed below.
{%endinfo%}

## The dependencies panel

To display a table of a topology's dependencies, unfold the **dependencies panel** from the right vertical bar. Each archive used in the topology as a dependency is shown as well as their versions.

### Manually changing a dependency version

You can change an archive version by clicking the change version button. Alien4Cloud will automatically launch the necessary recovery operations. If there are missing types in the new version that could affect the topology, then the change is not acknowledged and an error is raised.  
If needed, transitive dependencies may also be updated to match the newer version.

[![Manual changing of a dependency version](../../images/1.4.0/user_guide/topology_editor/dependencies_change.png)](../../images/1.4.0/user_guide/topology_editor/dependencies_change.png)

### Transitive dependency conflicts

Transitive dependency conflicts occur when two or more direct dependencies of the topology depend on the same transitive dependency, but with different versions. If so, conflicts are listed in the dependency panel. The topology should theoretically be deployable, but types compatibility is not guaranteed. You may resolve conflicts by manually changing dependency versions.

[![Transitive dependency conflict between jdk-type and tosca-normative-types](../../images/1.4.0/user_guide/topology_editor/dependency_conflict.png)](../../images/1.4.0/user_guide/topology_editor/dependency_conflict.png)

In the example above, the topology is composed of two node templates:

 - a tosca.nodes.Compute from the archive `tosca-normative-types:1.0.0-ALIEN12`
 - an alien.nodes.JDK from the archive `jdk-type:1.0.0-SNAPSHOT`.

The dependencies of the topology are therefore `tosca-normative-types:1.0.0-ALIEN12` and `jdk-type:1.0.0-SNAPSHOT`.
However, the `jdk-type:1.0.0-SNAPSHOT` depends also on `tosca-normative-types`, but in version **1.0.0-SNAPSHOT**.

This causes a conflict, which is resolved by using the **1.0.0-ALIEN12** version.
