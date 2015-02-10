---
layout: post
title:  Getting started
root: ../../
categories: DOCUMENTATION
parent: []
node_name: getting_started
weight: 100
---

In order to start using alien 4 cloud you have to download Alien. Two versions are available:

* [standalone](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v=LATEST&p=war&c=standalone): starts an embedded jetty server.
* [deployable](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-ui&v=LATEST&p=war): war file that can be deployed within a war container.

{% note %}
We recommend using the standalone version.
{% endnote %}

## Starting Alien 4 Cloud standalone

Once downloaded you can start alien 4 cloud using the following command.

{% highlight sh %}
java -jar alien4cloud-ui-VERSION-standalone.war
{% endhighlight %}

Once started you can access alien 4 cloud using your browser at [http://localhost:8088/](http://localhost:8088/).

{% info %}
Default administrator user is *admin* and password *admin*.
{% endinfo %}

{% warning %}
For production settings we recommend you to read the [advanced configuration](#/documentation/admin/advanced_configuration.html) section.
{% endwarning %}
