---
layout: post
title: Artifact repositories
root: ../../
categories: DOCUMENTATION-1.3.0
parent: [user_guide, tosca_catalog]
node_name: tosca_catalog_artifact_repositories
weight: 400
---

IS THIS TRUE ? WHAT IS PREMIUM AND WHAT IS NOT ? THERE IS A REPOSITORY MENU IN OPENSOURCE!!!!!! IS HTTP REPO an OPENSOURCE feature ?

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

An repository artifact is way to used a remote artifact. In the components view you can define new repositories artifact configuration. This configuration offer you the possibily to add credentials for your artifact resolver (who is in charge to fetch your remote artifact). Note : the repository can directly define on the CSARs definition, you can found more informations [here](#/documentation/1.3.0/devops_guide/tosca_grammar/repository_definition.html).

# EXPLAIN HOW REPOSITORIES ARE MANAGED

=> On archive side what do I have can users reference a repositoty ?
=> What are the validation(s) performed by alien when an artifact reference a repository ?
=> How does alien store the repository info from the archive ? In the CSAR? In every artifacts in node types and/or templates ?

=> How you can define a repo in Alien4cloud to define password and other settings ?
=> How is it stored in alien (not secured yet ?)
=> Which users can do that ? View that ? View what ?

=> How is performed the matching between a repo defined in my archive and a repo in alien ?
  - Can I use Id of the repo to even change the URL (for proxy kind of use ?)
  - Current status and limitations section to be planned.

# WHAT IS SPECIFIC TO PREMIUM Edition ?

MAVEN ?
GIT ?
OTHERS ?

HOW DO THEY WORK ?
 - Define artifact in the archive ?
 - Reference the repo in premium ?
