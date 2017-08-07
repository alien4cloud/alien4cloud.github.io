---
layout: post
title: Artifact repositories
root: ../../
categories: DOCUMENTATION-1.3.0
parent:
  - user_guide
  - tosca_catalog
node_name: tosca_catalog_artifact_repositories
weight: 400
published: true
---

{% summary %}{% endsummary %}


# How the repositories are managed

When you upload a CSARs with a repository inside, Alien try to fetch the artifact from the remote repository. If this type is not supported or if
the artifact is not available (wrong URL or wrong credential), an error is throw during the parsing. In a CSAR, I can reference a repository by this URL.


In the components view you can define new repositories artifact configuration. This configuration offer you the possibility to add credentials for your artifact resolver (who is in charge to fetch your remote artifact).
Credentials are stored in Alien 4 cloud database. Only the user of a repository can see his repositories credentials in Alien but a person with an access to the database can found it. The credentials are not use in the deployment blueprint. Indeed, if I have a repository in Alien with an URL and an other repository in an CSAR with the same URL, Alien will used the credentials of the repository create in Alien to resolve the artifact contains in the archive. Furthermore, the repository informations are stocked in the artifact definition.

{% warning %}
<h5>Tosca support</h5>
To use repositories in your CSARs use [tosca definitions version](#/documentation/1.3.0/devops_guide/dev_ops_guide.html) **alien_dsl_1_3_0** or greater.
{% endwarning %}

[![components repository view](../../images/1.3.0/user_guide/components-repository-view.png)](../../images/1.3.0/user_guide/components-repository-view.png)

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
        file: alien4cloud/alien4cloud-cloudify3-provider/1.3.0-SM2/alien4cloud-cloudify3-provider-1.3.0-SM2.zip
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

In maven, you need to use the following syntax to refer to your artifact file : `<maven-group-id>:<artifact-id>:<artifact-version>@<file-extension>`.

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
