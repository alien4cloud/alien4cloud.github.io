---
layout: post
title:  Nodes
root: ../../
categories: DOCUMENTATION
parent: [tosca_ref_root, tosca_ref, tosca_ref_types_normative]
node_name: tosca_ref_types_normative_nodes
weight: 200
---

{% warning %}The nodes on this page follow the exact TOSCA normative types except the added tags section that we use in ALIEN to specify additional tags on a components. One of them being a specific tag that we use to package the icon that will be used in the UI for a given component.{% endwarning %}

{% summary %}Normatives node types in TOSCA{% endsummary %}

# tosca.nodes.Root

This is the Root TOSCA Node Type that other nodes extends from. This allows to have a consistent set of features for modeling and management (e.g., consistent definitions for requirements, capabilities and lifecycle interfaces).

{% info %}All Node Type definitions SHOULD extends from the TOSCA Root Node Type. This allows your custom nodes to be included in the default lifecycle generation (based on the root node lifecycle interface).{% endinfo %}

## Interfaces

The Root node uses the lifecycle interface. See more informations on normative types lifecycle.

## Definition

{% highlight yaml %}
node_types:

    tosca.nodes.Root:
    abstract: true
    description: >
      This is the default (root) TOSCA Node Type that all other TOSCA nodes should extends.
      This allows all TOSCA nodes to have a consistent set of features for modeling and management
      (e.g, consistent definitions for requirements, capabilities, and lifecycle interfaces).
    tags:
      calm_icon: /images/root.png
    requirements:
      dependency:
        type: tosca.capabilities.Root
        lower_bound: 0
        upper_bound: unbounded
    interfaces:
      lifecycle:
        description: Default lifecycle for nodes in TOSCA.
        operations:
          create:
            description: Basic lifecycle create operation.
          configure:
            description: Basic lifecycle configure operation.
          start:
            description: Basic lifecycle start operation.
          stop:
            description: Basic lifecycle stop operation.
          delete:
            description: Basic lifecycle delete operation.
{% endhighlight %}

# tosca.nodes.Compute

Represents a real or virtual machine or 'server'. Informations specified on the Compute node will be used to find the machine that fits the given requirements in the cloud available machines. If no sizing informations are specified the cloud's provider default machine will be used.
It is strongly recommended to specify the required cpus and memory at least.

## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| num_cpus | no | integer | >= 1 | Number of (actual or virtual) CPUs associated with the Compute node. |
| disk_size | no | integer | >=0 | Size of the loal disk, in Gigabytes (GB), available to applications running on the Compute node. |
| mem_size | no | integer | >=0 | Size of memory, in Megabytes (MB), available to applications running on the Compute node. |
| os_arch | yes | string | none | The host Operating System (OS) architecture. Example of valid values includes: x86_32, x86_64, etc. |
| os_type | yes | string | none | The hots Operating System (OS) type. Example of valid values includes: linux, windows, aix, macos, etc. |
| os_distribution | no | string | none | The host Operating System (OS) distribution. Example of valid values includes: debian, fedora, rhel, and ubuntu |
| os_version | no | string | none | The host Operating System (OS) version. |


## Attributes

{: .table .table-bordered}
| Name | Required | Type | Description |
|:-----|:---------|:-----|:------------|
| ip_address | no | string | The primary IP address assigned by the cloud provider that applications may use to access the Compute node. |

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.Compute:
    derived_from: tosca.nodes.Root
    description: >
      Represents a real or virtual machine or ‘server’. Informations specified on the Compute
      node will be used to find the machine that fits the given requirements in the cloud
      available machines. If no sizing informations are specified the cloud’s provider default
      machine will be used. It is strongly recommended to specify the required cpus and memory
      at least.
    properties:
      num_cpus:
        type: integer
        constraints:
          -  greater_than: 0
        description: Number of (actual or virtual) CPUs associated with the Compute node.
      mem_size:
        type: integer
        constraints:
          - greater_than: 0
        description: Size of memory, in Megabytes (MB), available to applications running on the Compute node.
      disk_size:
        type: integer
        constraints:
          - greater_than: 0
        description: Size of the local disk, in Gigabytes (GB), available to applications running on the Compute node.
      os_arch:
        type: string
        required: true
        constraints:
          - valid_values: ["x86_32", "x86_64"]
        description: The host Operating System (OS) architecture.
      os_type:
        type: string
        required: true
        constraints:
          - valid_values: ["linux", "aix", "mac os", "windows"]
        description: The host Operating System (OS) type.
      os_distribution:
        type: string
        description: The host Operating System (OS) distribution.
      os_version:
        type: string
        description: The host Operating System version.
    attributes:
      ip_address:
        type: string
        description: >
          The primary IP address assigned by the cloud provider that applications may use to access the Compute node.
          Note: This is used by the platform provider to convey the primary address used to access the compute node.  Future working drafts will address implementations that support floating or multiple IP addresses.
    capabilities:
      host:
        type: tosca.capabilities.Container
        properties:
          valid_node_types: [tosca.nodes.SoftwareComponent]
{% endhighlight %}

# tosca.nodes.BlockStorage

The TOSCA BlockStorage node currently represents a server-local block storage device (i.e., not shared) offering evenly sized blocks of data from which raw storage volumes can be created.

## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| size | no | string | None | The requested storage size in MegaBytes (MB). |
| volume_id | no | integer | >0 | ID of an existing volume (that is in the accessible scope of the requesting application). |
| snapshot_id | no | integer | >0 | Some identifier that represents an existing snapshot that should be used when creating the block storage (volume). |

## Attributes

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| volume_id | no | integer | >0 | ID provided  by the orchestrator for newly created volumes. |

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.BlockStorage:
    derived_from: tosca.nodes.Root
    description: >
      The TOSCA BlockStorage node currently represents a server-local block storage device (i.e., not shared)
      offering evenly sized blocks of data from which raw storage volumes can be created.
    tags:
      calm_icon: /images/volume.png
    properties:
      size:
        type: integer
        constraints:
          - greater_than: 0
        description: The requested storage size in MegaBytes (MB).
      volume_id:
        type: string
        description: ID of an existing volume (that is in the accessible scope of the requesting application).
      snapshot_id:
        type: string
        description: Some identifier that represents an existing snapshot that should be used when creating the block storage (volume).
    attributes:
      volume_id:
        type: string
        description: ID provided  by the orchestrator for newly created volumes.
    requirements:
      attachment:
        type: tosca.capabilities.Attachment
{% endhighlight %}

# tosca.nodes.ObjectStorage

The TOSCA ObjectStorage node represents storage that provides the ability to store data as objects (or BLOBs of data) without consideration for the underlying filesystem or devices.

## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| store_name | yes | string | None | The logical name of the object store (or container). |
| store_size | no | integer | >=0 | The requested initial storage size in Gigabytes (GB). |
| store_maxsize | no | integer | >=0 | The requested maximum storage size in Gigabytes (GB). |

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.ObjectStorage:
    abstract: true
    derived_from: tosca.nodes.Root
    description: >
      The TOSCA ObjectStorage node represents storage that provides the ability to store data as objects (or BLOBs of data)
      without consideration for the underlying filesystem or devices.
    tags:
      calm_icon: /images/objectstore.png
    properties:
      store_name:
        type: string
        required: true
        description: The logical name of the object store (or container).
      store_size:
        type: integer
        constraints:
          - greater_or_equal: 0
        description: The requested initial storage size in Gigabytes.
      store_maxsize:
        type: integer
        constraints:
          - greater_than: 0
        description: The requested maximum storage size in Gigabytes.

{% endhighlight %}

# tosca.nodes.SoftwareComponent

The TOSCA SoftwareComponent node represents a generic software component that can be managed and run by a TOSCA Compute Node Type.

## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| version | no | version | None | The software component's version. |

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.SoftwareComponent:
    abstract: true
    derived_from: tosca.nodes.Root
    description: >
      The TOSCA SoftwareComponent Node Type represents a generic software component
      that can be managed and run by a TOSCA Compute Node Type.
    requirements:
      host:
        type: tosca.nodes.Compute
        relationship_type: tosca.relationships.HostedOn
    tags:
      calm_icon: /images/software.png
{% endhighlight %}

# tosca.nodes.WebServer

The TOSCA WebServer Node Type represents an abstract software component or service that is capable of hosting and providing management operations for one or more WebApplication nodes.

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.WebServer:
    abstract: true
    derived_from: tosca.nodes.SoftwareComponent
    description: >
      The TOSCA WebServer Node Type represents an abstract software component or service that is capable of hosting and providing management operations for one or more WebApplication nodes
    capabilities:
      http_endpoint:
        type: tosca.capabilities.Endpoint
      https_endpoint:
        type: tosca.capabilities.Endpoint
      host:
        type: tosca.capabilities.Container
        properties:
          valid_node_types: [ tosca.nodes.WebApplication ]
{% endhighlight %}

# tosca.nodes.WebApplication

The TOSCA WebApplication node represents a software application that can be managed and run by a TOSCA WebServer node.  Specific types of web applications such as Java, etc. could be derived from this type.

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.WebApplication:
    derived_from: tosca.nodes.Root
    description: >
      The TOSCA WebApplication node represents a software application that can be managed and run by a TOSCA WebServer node.  Specific types of web applications such as Java, etc. could be derived from this type.
    requirements:
      host:
        type: tosca.nodes.WebServer
        relationship_type: tosca.relationships.HostedOn
{% endhighlight %}

# tosca.nodes.DBMS

The TOSCA DBMS node represents a typical relational, SQL Database Management System software component or service.

## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| dbms_port | yes | integer | None | The port the DBMS service will listen to for data and requests. |
| dbms_root_password | no | string | None | The user account used for the DBMS administration. |

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.DBMS:
    abstract: true
    derived_from: tosca.nodes.SoftwareComponent
    description: >
      The TOSCA DBMS node represents a typical relational, SQL Database Management System software component or service.
    tags:
      calm_icon: /images/relational_db.png
    properties:
      dbms_root_password:
        type: string
        description: the root password for the DBMS service.
      dbms_port:
        type: integer
        description: the port the DBMS service will listen to for data and requests
    capabilities:
      host:
        type: tosca.capabilities.Container
        properties:
          valid_node_types: [tosca.nodes.Database]
{% endhighlight %}

# tosca.nodes.Database

Base type for the schema and content associated with a DBMS.
The TOSCA Database node represents a logical database that can be managed and hosted by a TOSCA DBMS node.

## Properties

{: .table .table-bordered}
| Name | Required | Type | Constraints | Description |
|:-----|:---------|:-----|:------------|:------------|
| db_user | yes | string | None | The special user account used for database administration. |
| db_password | yes | string | None | The password associated with the user account provided in the ‘db_user’ property. |
| db_port | yes | integer | None | The port the database service will use to listen for incoming data and requests. |
| db_name | yes | string | None | The logical database name. |

## Definition

{% highlight yaml %}
node_types:

  tosca.nodes.Database:
    derived_from: tosca.nodes.Root
    description: >
      Base type for the schema and content associated with a DBMS.
      The TOSCA Database node represents a logical database that can be managed and hosted by a TOSCA DBMS node.
    tags:
      calm_icon: /images/relational_db.png
    properties:
      db_user:
        type: string
        required: true
        description: The special user account used for database administration.
      db_password:
        type: string
        required: true
        description: The password associated with the user account provided in the ‘db_user’ property.
      db_name:
        type: string
        required: true
        description: The logical name of the database.
{% endhighlight %}
