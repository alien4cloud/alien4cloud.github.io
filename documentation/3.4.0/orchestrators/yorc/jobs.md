---
layout: post
title:  Working with jobs
root: ../../../../
categories: DOCUMENTATION-3.4.0
parent: [orchestrators, yorc]
node_name: Working with jobs
weight: 4000
---

## What's a Job?

By opposite to a service which is a long running application, a Job is an application that runs to completion.

TOSCA life-cycle (install -> configure  -> start ....... then finally stop  -> delete) was designed to handle services. There is no concept of Jobs life-cycle within normative TOSCA.
But, as per our experience in HPC and emerging container scheduling within Container as a Service solutions like Kubernetes, we are convinced that supporting Job scheduling is fundamental for any orchestration solution.

So we decided in collaboration with the Alien4Cloud team to extend TOSCA to support Jobs!

##  Extending TOSCA to support Jobs

First was the life-cycle! In TOSCA the core concept is the life-cycle. So, based on our experience we defined a life-cycle for Jobs.

![Jobs Life Cycle](../../../../images/3.4.0/yorc/JobsRunLifeCycle.png)

Translated in TOSCA, we defined a new interface **tosca.interfaces.node.lifecycle.Runnable** this interface defines three operations:

-   **submit**: Submit is this operation that *submits* a job to a Job Scheduler, generally at the end of the **submit** we got a **job identifier**
-   **run**: Run is an asynchronous operation that will be called periodically to check the **job status**.
-   **cancel**: Cancel allows to *cancel* a **submitted job**.

## Supported Jobs Schedulers

### Slurm

Slurm is an HPC scheduler. Unsurprisingly, it was our first builtin support for Jobs scheduling. Our Slurm support allows to run single jobs made of several jobs. Moreover, Yorc supports the execution of jobs as Singularity jobs. Several TOSCA types are available for each of these use cases.

Let's see how to define in a TOSCA component to run a Slurm job.

You have to define a node type derived from **yorc.nodes.slurm.Job** type. Different node properties are available in order to configure your Slurm job component. For example :

-   **credentials** property can be used to provide user credentials for slurm (used to connect to the slurm client node)
-   **name** property can be used to provide a job name
-   **account** property can be used to charge resources used by this job to specified account.

The complete list with detailed description can be found in the Alien4Cloud catalog ; search for **Job** component having **yorc.nodes.slurm.Job** type, after having created a Slurm location for your Yorc orchestrator.

The TOSCA component must provide an implementation for the **tosca.interfaces.node.lifecycle.Runnable** interface.

Example of a job component. Here the **submit** operation definition provides the submission script **submit.sh**.

{% highlight yaml %}
node_types:
  org.ystia.yorc.samples.job.simple.Component:
  derived_from: yorc.nodes.slurm.Job
  tags:
    icon: /images/slurm.png
  artifacts:
    - bin:
      type: tosca.artifacts.File
      file: bin
  interfaces: tosca.interfaces.node.lifecycle.Runnable:
    submit:
      implementation:
        file: bin/submit.sh
        type: yorc.artifacts.Deployment.SlurmJobBatch
{% endhighlight %}

To run a Singularity job, users can provide in the component definition the docker image to be run by Singularity.

{% highlight yaml %}
repositories:
  docker:
    url: <https://hpda-docker-registry:5000/>
    type: a4c_ignore

node_types:
  org.ystia.yorc.samples.job.singularity.Component:
    derived_from: yorc.nodes.slurm.SingularityJob
    description: Sample component to show how to run a job via singularity run
    tags:
      icon: /images/singularity.png
    interfaces:
      tosca.interfaces.node.lifecycle.Runnable:
        submit:
          implementation:
            file: docker://godlovedc/lolcow:latest
            repository: docker
            type: yorc.artifacts.Deployment.SlurmJobImage
{% endhighlight %}

### Kubernetes

Over the years Kubernetes became the de-facto standard of Containers As A Service (CaaS).

Kubernetes has a special builtin *Controller* for jobs called *Jobs - Run to Completion*.

### The one you want!

Yorc also support Jobs defined in pure-TOSCA. That means that you are able to write using YAML and Python, Shell or Ansible scripts your own interaction with any scheduler.

All you need to do is to provide implementation for at least the **submit** operation of the job life-cycle. If you do not provide implementation for the **run** operation, your job will run in *fire and forget* mode, you will not be able to get information about its completion. Similarly, if you do not provide an implementation for the **cancel** operation then your Job will simply not being cancellable.

To allow Yorc to manage your job properly some conventions:

-   at the end of the **submit** operation you should export a fact or environment variable named **TOSCA_JOB_ID** containing the **submitted job identifier**.
-   Yorc automatically injects this **TOSCA_JOB_ID** as an input of the **run** and **cancel** operations.
-   The **run** operation should be designed to be **non-blocking** and **called several times**. Its primary role is to check the job status. It should export a fact or environment variable named **TOSCA_JOB_STATUS** containing one of the following values:

    -   **COMPLETED**: meaning that the job is done successfully.
    -   **FAILED**: meaning that the job is done but in error.
    -   **RUNNING**: meaning that the job is still running.
    -   **QUEUED**: meaning that the job is submitted but didn't started yet.

    Internally **RUNNING** and **QUEUED** statuses are handled the same way by Yorc that will recall the **run** operation after a delay to refresh the status.

-   The **run** operation can also be used to retrieve logs or perform some cleanup after the job completion.

You can find an example of a pure-TOSCA implementation of jobs in the official *CSARs public library* with an implementation of a [Spark Job](https://github.com/alien4cloud/csar-public-library/tree/develop/org/alien4cloud/spark/job-linux-sh)

## Specific workflows for Jobs

When your application contains Jobs (meaning node templates which implements the **tosca.interfaces.node.lifecycle.Runnable** interface) then Alien4Cloud will automatically generate two workflows:

-   **run**: a workflow that submits and monitor jobs
-   **cancel**: a workflow that cancels jobs

{%warning%}
The cancel workflow is a kind of temporary work around. It allows to cancel jobs but do not take care if the job is submitted or not. The recommended way to cancel a **run** workflow is to cancel the associated task in Yorc using either the CLI or the Rest API. This is temporary and we will provide soon a way to cancel workflows directly from Alien4Cloud.
{%endwarning%}

The **run** workflow allows to orchestrate Jobs. That means that if for instance, **jobB** depends on **jobA** using a TOSCA **dependsOn** or **connectsTO** relationship then Alien4Cloud will generate a workflow that first submit and wait for the completion of **jobA** before submitting **jobB**.

## Jobs cancellation

The proper way to cancel Jobs that were submitted by a TOSCA workflow is to cancel the associated Yorc Task/Execution of this workflow. This way Yorc will automatically call **cancel** operations for nodes that implement it and which have successfully executed their **submit** operation. Currently those automatic cancellation steps do not appear in Alien4Cloud. We will work soon on making them visible.
