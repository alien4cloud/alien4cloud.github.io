---
layout: post
title:  Sizing consideration
categories: DOCUMENTATION-1.3.0
root: ../../
parent: [admin]
node_name: sizing
weight: 150
---

Before moving to production it is important that you configure a correct amount of memory, especially for Alien's Elasticsearch instance.

In general the indices that are going to consume the most memory are the one related to deployments and especially, by far, the deployment logs.

As deployment logs may depends of the amount of logs produced by the component you deploy it is important to perform an estimation of their size that fits your use-case.

# How to estimate log consumption

In order to perform an estimation of the log consumption you should deploy a representative topology on a test environment, dump the logs index out of elasticsearch and then insert the logs again in a test elasticsearch with a different deployment id for every concurrent deployment logs that you may keep.

Basically this means number of deployment expected per day * time to leave of the deployment. Configured through below property

{% highlight yaml %}
paas_monitor:
  events_lifetime: "1d"
{% endhighlight %}

After writing the logs data you can check elasticsearch memory consumption and ensure that there is still enough memory for requests and aggregation processing.
