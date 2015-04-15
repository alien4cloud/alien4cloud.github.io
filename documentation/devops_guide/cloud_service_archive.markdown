---
layout: post
title:  Cloud Service Archive
root: ../../../
categories: DOCUMENTATION
parent: [devops, tosca_concepts]
node_name: tosca_ref_csar
weight: 100
---

Every elements in TOSCA must be contained into a Cloud Service Archive (CSAR). A Cloud Service Archive is a folder or a zip file that contains types and templates definitions and any other files required for elements implementations.

{% highlight bash %}
├── my-definition-file.yml
├── images
│   ├── component-icon.png
│   └── ...
├── scripts
│   └── install.sh
├── lib
│   └── tosca-normative-types.yml
{% endhighlight %}

The entry point for the Cloud Service Archive are the definitions files that are placed at the root of the Archive. Basically this is any .yaml or .yml file that can be found at the Archive root.

{% warning %}
Alien 4 Cloud currently supports only a single service definitions file at the root level. This definition file can however reference other definitions files within the archive through the imports feature.
{% endwarning %}
