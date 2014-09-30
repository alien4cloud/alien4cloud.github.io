---
layout: post
title:  Lifecycles specifics for Cloudify
categories: CLOUDIFY2_DRIVER
parent: tosca_archive.html
weight: 200
root: ../
---

There are some specifics concerning some lifecycle events when developing a Cloudify recipe for the ALIEN driver.

## Supported lifecycles events ##
This plugin does not yet support the implentation of all of the Cloudify livecycle events, but it is constantly evolving.
The events supported are:

{: .table .table-bordered}
| Archive Interface | operation |
|:-----|:---------|
| *lifecycle*  | `Install`, `Start`, `Stop`| 
| *fastconnect.cloudify.extensions* | `StartDetection`, `StopDetection`, `locator`|

### StartDetection ###
You can provide a start detection routine, and it should be written in a groovy file, and must return a boolean: True if the routine ended well, and false if not.  
The routine will be executed as a Cloudify closure, in the service descriptor file. Therefore, as stated in the Cloudify documentation, you shouldn't use the ***ServiceContextFactory*** class to get the service context. The context has been injected automatically so that you can directly use it via the variable ***context***. 

#### Example: ####
{% highlight groovy %}
def config = new ConfigSlurper().parse(new File("${context.serviceDirectory}/scripts/tomcat-service.properties").toURL())
def result = ServiceUtils.arePortsOccupied([config.port, config.ajpPort])
return result
{% endhighlight %}


{% note %}
In general, when you want to provide a script to be executed as a closure in Cloudify service descriptor file, you **MUST NOT** use the **ServiceContextFactory** class. Directly use the injected variable **context**
{% endnote %}

### StopDetection ###
Similar to the case of start detection, written in a groovy file, the stopDetection routine will be executed as a closure must and return a boolean value.

#### Example: ####
{% highlight groovy %}
def config = new ConfigSlurper().parse(new File("${context.serviceDirectory}/scripts/tomcat-service.properties").toURL())
def result = ServiceUtils.arePortsFree([config.port, config.ajpPort])
return result
{% endhighlight %}

### Locators ###
The locator allows you to specify the proccesses that Cloudify should monitor to determine if the application is stopped, and therefore perform some actions for the failover.
Written in a groovy file, the locator will be executed as a closure, and must return a list of processes Pids to monitor.

#### Example: ####
{% highlight groovy %}
import org.cloudifysource.dsl.utils.ServiceUtils

def myPids = ServiceUtils.ProcessUtils.getPidsWithQuery("State.Name.eq=java,Args.*.eq=org.apache.catalina.startup.Bootstrap")
return myPids
{% endhighlight %}