---
layout: post
title: 'Data purge'
categories: DOCUMENTATION-3.2.0
root: ../../
parent:
  - admin
node_name: data_purge
weight: 150
published: true
---

{% summary %}{% endsummary %}

Some elasticsearch indexes are regularly purged by A4C in order to avoid infinite indexes expansion with useless data.

# Index purge

Some indexes are configured to be automatically purged by A4C.

The purge is achieved by a thread that detects expiration date of data and perform a Bulk Delete ES query onto selected data.

The default period is one day and can be changed by configuration :

{% highlight yaml %}
ttl
  # in seconds, the period of TTL detection trigger
  period: 86400
{% endhighlight %}

## Audit logs

For the moment, only one index is purged by this mechanism : the index that stores audit logs.

By default, all audit data older than 30 days are deleted. You can change this by configuration (use [elasticsearch interval](https://www.elastic.co/guide/en/elasticsearch/reference/current/sql-functions-datetime.html) to setup this parameter) :

{% highlight yaml %}
audit
  # set the audit log TTL to 1 year
  ttl: 1y
{% endhighlight %}

This setup means that all audit data older than one year will be purged.

# Deployment purge

A specific purge mechanism is in charge of cleaning all indexes related to obsolete deployments. An obsolete deployment is a deployment related to an environment that is UNDEPLOYED (it's endDate is set since a given TTL).

When an environment is UNDEPLOYED, all data related to it but *not necessary to end user* are immediately purged (events ...). This has no impact onto what enduser can see about UNDEPLOYED environment (browse logs, see executions ...).

Additionally, a purge process is scheduled to cleanup all data about UNDEPLOYED environments to erase all data. After this purge has been processed, the obsolete deployments are no more displayable into A4C (executions, logs and so on ...).

Here is the default settings that can be changed by configuration :

{% highlight yaml %}
purge:
  # In hours, time to wait between the end of an execution and the start of the next execution
  period: 1
  # Maximum number of deployments to purge at each purge execution
  threshold: 1000
  # TTL in hours : the TTL since the endDate of the deployment (when endDate is defined).
  # 240h=10d
  ttl: 240
  # The maximum number of IDs to delete a each bulk delete request
  batch: 1000
{% endhighlight %}

This default configuration means thats :

* each hour, the full purge mechanism is triggered
* it will consider a maximum of 1000 UNDEPLOYED environments with end date older than 10 days
* all data stored in all indexes related to those deployment will be deleted using delete bulk requests with maximum of 1000 items per request.

{% warning %}
Before version 3.0.0-M3 data was not correctly deleted, so you can have some indexes with old useless data.

If you set the `purge.period` to 0, it will be triggered each second (can be useful to trigger quasi infinite loop to perform a long purge process if many old data is stored in your system).

You shouldn't let this parameter to 0 except for an initial startup to fix this situation.
{% endwarning %}

{% info %}
You can disable the purge by setting `purge.threshold` to 0 or `purge.ttl` to a very large value (`Integer.MAX_VALUE` so 2147483647 is a good candidate). You should also set `purge.period` to a large value to avoid useless CPU consuming.
{% endinfo %}
