---
layout: post
title:  Create TOSCA archive with alien4cloud
root: ../../
categories: DOCUMENTATION-2.2.0
parent: [devops, tosca_custom_types]
node_name: new_with_alien
weight: 100
---

While alien4cloud has a TOSCA topology editor it does not ship yet a TOSCA type editor. Therefore you will have to write TOSCA types in an external editor.

In order to perform validation of your types when writing it you should first have an alien4cloud server (either local or have a remote one available). Then you can use the following script that will package a given directory in a zip file, upload it into alien and display the validation result (out of the API response json).

<div data-gist="https://gist.github.com/lucboutier/b6536c4fe633c0d295df6b7fa995a1aa.js"></div>

As long as your archive is a SNAPSHOT archive you can re-upload it as much as you like. You can then use it in a topology and launch it to perform the actual deployment on the cloud you like!
