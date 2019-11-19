---
layout: post
title: Artifact repositories
root: ../../
categories: DOCUMENTATION-2.2.0
parent:
  - user_guide
  - admin
node_name: admin_artifact_repositories
weight: 350
---

{% summary %}{% endsummary %}

# How the repositories are managed

When you upload a CSARs with a repository inside, Alien try to fetch the artifact from the remote repository. If this type is not supported or if
the artifact is not available (wrong URL or wrong credential), an error is thrown during the parsing. In a CSAR, you can reference a repository by this URL.

In the Administration view you can define new artifacts repository by clicking on __Artifacts repositories__ . This configuration offers you the ability to add credentials to your artifact resolver (which is in charge to fetch your remote artifact).
By storing repositories artifact configuration (repository URL and credentials) into Alien4Cloud database this allow you to create a CSARs without hard-coding repositories password multiple times. Alien4Cloud will be able to retrieve the password using the repository URL.
But bear in mind the passwords are stored in plain text and can be seen by anyone accessing Alien4Cloud database.

{% warning %}
<h5>Tosca support</h5>
To use repositories in your CSARs use [tosca definitions version](#/documentation/2.2.0/devops_guide/dev_ops_guide.html) **alien_dsl_1_3_0** or greater.
{% endwarning %}

In the artifacts repositories view, you need to click on the button to create a new repository.

![components repository view](../../images/2.2.0/user_guide/admin/repository/administration_artifacts_repositories.png)
![new repository](../../images/2.2.0/user_guide/admin/repository/new_repository.png)


## Http

**HTTP** plugin resolver is the only one opensource plugin repository. The concat of the repository URL and the artifact file attribute should be the complete path to your file.

Example :
{% highlight yaml %}
repositories:
  fastconnect:
    url: https://fastconnect.org/maven/service/local/repositories/opensource/content
    type: http

[...]

node_types:
  alien.nodes.Example:
    artifacts:
    - http_artifact:
        file: alien4cloud/alien4cloud-cloudify3-provider/1.4.0-SM2/alien4cloud-cloudify3-provider-1.4.0-SM2.zip
        repository: fastconnect
        type: tosca.artifacts.File
{% endhighlight %}

# Repositories specific to the premium version

Two repositories plugins are premium : **git** and **maven**. All repositories plugins are package in the Alien 4 cloud premium dist.

## Git

In git, the reference of an artifact is this path inside the git project. If your repo as a new commit between two deployments, Alien will redownload your artifact. To refer to your artifact file, use the following syntax : `<branch or tag>:<file path>`. If you don't specific a branch or a tag, the default branch 'master' will be used.


Example :
{% highlight yaml %}
repositories:
  aliengithub:
    url: https://github.com/alien4cloud/samples.git
    type: git

[...]

node_types:
  alien.nodes.Example:
    artifacts:
    - git_artifact:
        file: master:demo-repository/artifacts/settings.properties
        repository: aliengithub
        type: tosca.artifacts.File
{% endhighlight %}

## Maven

In maven, you need to use the following syntax to refer to your artifact file : `<group>:<artifact>:<version>:<classifier>@<extension>`.

If your maven artifact as no SNAPSHOT maven classifier, Alien 4 cloud will download your file the first time and only this time. Conversely, if your artifact as a SNAPSHOT classifier and has changed between two deployments, Alien will redownload your artifact.

Example :
{% highlight yaml %}
repositories:
  fastconnect_nexus:
    url: https://fastconnect.org/maven/content/repositories/opensource
    type: maven

[...]

node_types:
  alien.nodes.Example:
    artifacts:
    - maven_artifact:
        file: alien4cloud:alien4cloud-cloudify3-provider:1.2.0@zip
        repository: fastconnect_nexus
        type: tosca.artifacts.File
{% endhighlight %}
