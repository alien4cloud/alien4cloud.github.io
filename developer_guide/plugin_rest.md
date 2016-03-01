---
layout: post
title: REST plugins
root: ../
categories: DEVELOPER_GUIDE
parent: [plugins]
node_name: rest_plugins
weight: 100
---

As explained in the main plugin section an alien 4 cloud plugin is a spring context that is a child of the core alien4cloud context.

In addition our plugin loading mechanism allows to dynamically add new REST controllers. The limitation however is that they currently won't be added to the generated swagger Rest API documentation.

All the rest is basic spring and you should read more on the spring documentation or check out our plugin sample example that expose a new RestController and internal Service.

<div data-gist="https://gist.github.com/lucboutier/a26e381c84433d8f80a0.js"></div>

{% info %}
<h5>RequestMapping url</h5>
We currently don't have internal constraints on the RequestMapping that you provide, however to avoid any issues with other plugins we recommend you to use a mapping that follows the pattern _/rest/{plugin-id}/{version}/{custom-url}_
{% endinfo %}

# Save your data using alien's ElasticSearch



# Expose your beans for other plugins
