---
layout: post
title:  Tests with jenkins plugin
root: ../../
categories: DOCUMENTATION
parent: [getting_started, tutorials]
node_name: component_test_jenkins
weight: 400
---

We have seen [here](/documentation/getting_started/snapshot-topology-test.html) that we can use the ALIEN REST API to archive tests. Based on it, a jenkins plugin has been developed (and still being improved) to automate all the test routine.

The plugin is written in JAVA language, and can ca lunch a serie of  [BDD (Behaviour Driven Development)](http://fr.wikipedia.org/wiki/Behavior_Driven_Development "Behaviour Driven Development") tests with the help of [Cucumber](http://cukes.info/ "Cucumber") framework.

The tests are lunched via configurables Jenkins "FreeStyle" jobs. You can then configure the ALIEN instance on which to perform tests, the cloud, the credential to be used, and also specify whether or not to undeploy the test application before endind the job.

## Prerequisites

### Prepare your archive

Follow the same instructions as the ones explained [here](/documentation/getting_started/snapshot-topology-test.html). in addition, add in the "**test**" folder your cucumbr file (a .feature file). Your archive should look like:
{% highlight bash %}
├── Definitions
│   ├── java-types.yaml
│   └── tosca-base-types.yaml
├── images
│   ├── compute.png
│   └── ...
├── test
│   ├── sample-application.yaml
	└── tests.feature
└── TOSCA-Metadata
    └── ALIEN-META.yaml
{% endhighlight %}

### The cucumber (.feature) file

In this file, you will have to describe what you whant to test and the way the tests should be proceeded.
Currently, we only support a few steps:
{% highlight gherkin %}
Feature: Install Tomcat application and test status
  Scenario: I install an application
    Given a cloud "cloud" created
    When i deploy the test application
    Then i have application "deployed" within 10000 milliseconds
{% endhighlight %}

### Package and Install the plugin
Fist you need  to clone the repository and package the plugin to have a *.hpi* file. <br>
Then install the plugin in your running instance of Jenkins. (For more information, see the *Readme file* in the plugin repository).

## How to test your topology

### Archive and location
After preparing the archive, you have to put it at jenkins disposal. For now the solution is to upload the folder content (unzipped) on a git or svn.

{% info %}
For the next steps, you should make sure you have a running instance of Alien 4 Cloud (copy its URL), and a cloud created and activated (note its name)
{% endinfo %}

### Jenkins job
1. First you must create a "FreeStyle" job on jenkins.<br>
[![Jenkins freestyle job](../../images/developer_guide/a4c-jenkins-freestyleJob-creation.png  "Jenkins freestyle job")](../../images/developer_guide/a4c-jenkins-freestyleJob-creation.png)<br><br>

2. Configure the job. In the "***Source Code Management***" section, select your provider and fill in the repository URL where you've uploded the content of your archive.<br>
[![archive content repository](../../images/developer_guide/a4c-jenkins-freestyleJob-archiveUrl.png  "archive content repository")](../../images/developer_guide/a4c-jenkins-freestyleJob-archiveUrl.png)<br><br>

3. Next, configure the build environment, by checking the option Setup Alien4Cloud test environment. This will set up some variables for the tests. Also optionnaly check the sub-option if you want the job to automatically undeploy the test application at the end.<br>
[![build environment setup](../../images/developer_guide/a4c-jenkins-freestyleJob-buildEnv-step.png  "build environment setup")](../../images/developer_guide/a4c-jenkins-freestyleJob-buildEnv-step.png)<br><br>

4. Add a build step. From the lists, Select "ALIEN 4 Cloud arhives tests".
[![build step selction](../../images/developer_guide/a4c-jenkins-freestyleJob-build-select-step.png  "build step selction")](../../images/developer_guide/a4c-jenkins-freestyleJob-build-select-step.png)<br>
And configure the parameters. Note that some of them might be required for the job to run well.
[![build configuration](../../images/developer_guide/a4c-jenkins-freestyleJob-build-config-step.png  "build configuration")](../../images/developer_guide/a4c-jenkins-freestyleJob-build-config-step.png)<br>

5. You can now save the job config, and run it. Check for the job output to see how tests are going.


{% note %}
If you didn't check the option to automatically undeploy the application at the end, you might have to do it manually. Thus, you need the deployment Id, which you can find checking the job logs.
{% endnote %}

{% note %}
Actually, we only support deployment and checking of it status. More steps will be added later.
{% endnote %}
