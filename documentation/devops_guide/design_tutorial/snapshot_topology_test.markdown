---
layout: post
title:  Testing custom components
root: ../../
categories: DOCUMENTATION
parent: [devops, tutorials]
node_name: component_test
weight: 300
---

ALIEN rest api provides methods to test your topology during development. In fact you can package a CSAR file with a topology test
and then run the deployment test on this archive.

## Prerequisites

### Prepare your archive

* You need first to correctly create your archive (more details about archive [here](/documentation/devops_guide/tosca_concepts_csar.html))
* Just add a specific **test** folder to this archive to have a tree as follow

{% highlight bash %}
├── Definitions
│   ├── java-types.yaml
│   └── tosca-base-types.yaml
├── images
│   ├── compute.png
│   └── ...
├── test
│   └── sample-application.yaml
└── TOSCA-Metadata
    └── ALIEN-META.yaml
{% endhighlight %}

* This **test** folder should contain at least one yaml file  topology description
  - Only the first found yaml file is tested
* In your topology written in yaml format, you can use components already integrated in ALIEN or put yours in the snapshot archive
  - Like for other CSAR file, yaml files under **Definitions** folder will be loaded into ALIEN at archive upload
  - For example, in this demo archive we bring our own *java-types* and *tosca-base-types* components (self-sufficient archive)

### Archive naming

Another important file in this test archive is the **ALIEN-META.yaml**. In fact in this file you have 2 informations used to run the topology deployment test :

* **name**
* **version**

{% highlight yaml %}
name: "topology-test"
version: "2.0-SNAPSHOT"
license: "Apache v2.0"
created_by: "FastConnect"
...
{% endhighlight %}

{% info %}
Only **SNAPSHOT** archive version can be used to run test. We suppose that in "development mode" we only handle snapshot version which we can override at anytime and then run other test.
{% endinfo %}

## How to test your topology

For this section we'll use our "hello world" topology archive test : [hello-world-topology.zip](../../files/hello-world-topology.zip)

This archive contains a yaml file corresponding to the following topology in test directory :

[![Hello world topology](../../images/developer_guide/hello-world-topology.png)](../../images/developer_guide/hello-world-topology.png)

1. You need first an actived cloud

    * A "cloud" is based on a plugin (driver), so first upload your plugin jar with the **ADMIN** role

    [![Manage plugins](../../images/developer_guide/plugin-management-admin.png)](../../images/developer_guide/plugin-management-admin.png)

    * Then you will have the following plugin administration page where you can create a **cloud** and activate it

    [![Manage clouds](../../images/developer_guide/cloud-management-admin.png)](../../images/developer_guide/cloud-management-admin.png)

    * From the cloud details page you want to target, you have to get the **cloud id**

2. Upload your snapshot archive

    * Just upload your snapshot archive in the **components** view

    [![Upload snapshot archive](../../images/developer_guide/components-snapshot-archive.png)](../../images/developer_guide/components-snapshot-archive.png)

    * After the upload you'll see all components contained in the snapshot archive listed in the components view

3. Run rest command to test

    *  Get any REST client or just go on the api document *http://localhost:8080/***api-doc/index.html** from where you can send request
      -  Look for **cloud-service-archive-controller** and the operation :
      [![Run REST command](../../images/developer_guide/apidosc-deployment-command.png)](../../images/developer_guide/apidosc-deployment-command.png)
    *  You need 3 parameters to run the test : **csarId**, **csarVersion**, **cloudId** (id recovered from cloud details page)
    *  Final request example : *http://localhost:8080/rest/csars/***topology-test***/version/***2.0-SNAPSHOT***/cloudid/***7ede236c-0456-478b-b68c-502474c45987**

4. Test the result

    *  From the step 3 you'll obtain a deployment id **only** if your deployment test is successful (UUID form, e.g : 391e5d07-e2b0-44ea-bf87-81cdc080a9e1)
      -  Errors from the deployment are not really "meaningful" in the version (to improve)
    *  You have 2 other services you must use during your topology test process in **deployment-controller**
    [![Deployment test](../../images/developer_guide/deployment-ctrl-operations.png)](../../images/developer_guide/deployment-ctrl-operations.png)
    * You can recover the **status** from your deployment id, the same way you've launched the test in step 3
      - Example : *http://localhost:8080/rest/deployments/***391e5d07-e2b0-44ea-bf87-81cdc080a9e1***/status*
      - Possible results : 'DEPLOYED' or 'UNDEPLOYED' or 'DEPLOYMENT_IN_PROGRESS' or 'UNDEPLOYMENT_IN_PROGRESS' or 'WARNING' or 'FAILURE' or 'UNKNOWN'
      - The status should be at state **DEPLOYED** for a correct deployment
      - To finish we advice you to clean your deployment "stack" **manually** with the **undeploy** request
      - Example : *http://localhost:8080/rest/deployments/***391e5d07-e2b0-44ea-bf87-81cdc080a9e1***/undeploy*
      -  Undeployment success : no result

{% info %}
You might have different states of your deployment regarding the moment you launch the **status** request.
{% endinfo %}
