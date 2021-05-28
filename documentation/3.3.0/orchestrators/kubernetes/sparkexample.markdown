---
layout: post
title:  Spark
root: ../../../../
categories: DOCUMENTATION-3.3.0
parent: [orchestrators, kubernetes, kubernetespluginconcretemode]
node_name: spark
weight: 2000
---
{% summary %}{% endsummary %}
# Prerequisites

{%info%}
In this page, we will use AWS features so you will need a Kubernetes cluster integrated with a AWS account.
However if you want to deploy a basic Kubernetes cluster you can use our TOSCA types based on kubeadm which can be found [here](https://github.com/alien4cloud/csar-public-library/tree/develop/org/alien4cloud/kubernetes/kubeadm)
{%endinfo%}

To deploy onto Kubernetes cluster through ALIEN, you will need:

- A Kubernetes cluster deployed on AWS with AWS extensions (ability to provision EBS) with at least 2 nodes
- An alien with:
  - the kubernetes plugin
  - the http repository plugin (the samples use an http repository)
  - the following archives imported from GIT:
    - https://github.com/alien4cloud/tosca-normative-types.git branch **3.0.x**
    - https://github.com/alien4cloud/alien4cloud-extended-types.git branch **3.0.x** folder **alien-base-types**
    - https://github.com/alien4cloud/docker-tosca-types.git **3.0.x** folder **docker-types**
- A runnable distribution of Spark 2.3 or above.
  - more information about Spark running on Kubernetes can be found [here](https://spark.apache.org/docs/latest/running-on-kubernetes.html)
- It is necessary to create in  the namepace where Spark jobs will be run the following assets : 
  - serviceaccount
  - role
  - rolebinding
The scripts to execute are available [here](https://github.com/alien4cloud/alien4cloud-k8s-spark-jobs/tree/3.0.x/src/main/resources/k8s)

## Topology modifiers

You'll need to setup modifiers on your location. On the location screen, in the **Topology Modifier** tab:


- add a **k8s-spark-jobs-modifier** at the phase `post-matched-node-setup` after the **kubernetes-adapter-modifier**


The modifier will generate types that are ready to be deployed and run onto a Kubernetes cluster.

## On demand resources

You will need to setup some Kubernetes On demand resources on the location. You will find them in the catalog (search for 'kube') :

- `org.alien4cloud.k8s.spark.jobs.PythonSparkJob` : it will be used to match and optionally configure and run Python Spark jobs.
- `org.alien4cloud.k8s.spark.jobs.JavaSparkJob` : it will be used to match and optionally configure and run Java Spark jobs.

For volumes, you can add the followings resources :

- `org.alien4cloud.kubernetes.api.types.volume.AWSElasticBlockStoreVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.EmptyDirVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.HostPathVolumeSource`
- `org.alien4cloud.kubernetes.api.types.volume.PersistentVolumeClaimSource`

We will explain these different kind of K8S volumes implementations.


# A simple Pi Spark job

Creation of a topology with 2 nodes :
- KubeCluster
- **org.alien4cloud.k8s.spark.jobs.PythonSparkJob**

![Topology](../../images/3.3.0/orchestrators/kubernetes/spark_1.png)


The following properties need to set:
- pythonVersion : usually set to 3
- containerName : url of a container spark.
- debugOperation : boolean. It can be selected to see debug operations

The application can be deployed.
The job spark can ba launching by execution the run workflow operation :
![Running spark job](../../images/3.3.0/orchestrators/kubernetes/spark_2.png)

During the execution, if the property **debugOperation**  has been set, the spark-submit command can be displayed in the deployment logs.



{%info%}
Since 1.15 Kubernetes version, it is necessary to use at least Spark 2.4.5 version.
Highest supported version by A4C is Spark 3.0.1.
{%endinfo%}








