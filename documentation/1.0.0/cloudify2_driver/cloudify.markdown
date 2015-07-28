---
layout: post
title:  Customizing Cloudify
root: ../../
categories: DOCUMENTATION
parent: [cloudify_2_index, cloudify_2_prerequisites]
node_name: cloudify_2_customizing_cloudify
weight: 100
---

Before everything, you need a running instance of Cloudify. The instance can be launched wherever you want, but make sure to have access to the REST API's URL, which will be needed later on.

### Setup ###

1. Make sure you have installed a Java JDK 1.6 or higher and set your JAVA_HOME properly. The recommended version is [JDK 7u45][jdk7u45-link]
2. [Download][CDFY_archive-link] and unzip the Cloudify distribution file.  

Now for this driver to work, you have to customize your instaled Cloudify.

### Custom events ###
In order to handle Cloudify lifecycle events, and to emit our own events, we need the **alien4cloud-cloudify-custom-events**. This provides a REST API and uses the Gigaspace management space to store the events.

1. Download the zip archive and unzip it into the folder of your prefered cloud driver (e.g. `gigaspaces-cloudify-2.7.0-ga/clouds/openstack-havana`)
	* [last stable](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource&g=alien4cloud&a=alien4cloud-cloudify-events-assembly&c=distrib&v=LATEST&p=zip){: .btn}{: .btn-success}{: .download-button}{: .navbar-btn}  [last build](https://fastconnect.org/maven/service/local/artifact/maven/redirect?r=opensource-snapshot&g=alien4cloud&a=alien4cloud-cloudify-events-assembly&c=distrib&v=LATEST&p=zip){: .btn}{: .btn-warning}{: .download-button}{: .navbar-btn}
2. If working with a secured manager:

* create a file `events.properties` and place it either next or into the events folder
* Edit it with the following entries (replace “cdfy_username” and “cdfy_password” by proper values):  
{%highlight properties%}
cloudUsername=<cdfy_username>
cloudPassword=<cdfy_password>
{%endhighlight%}
3. In the `upload` folder, edit the `bootstrap-management.sh`:

* Locate the line
{%highlight sh%}
	cat <(crontab -l) <(echo "@reboot export EXT_JAVA_OPTIONS=$EXT_JAVA_OPTIONS; nohup ~/gigaspaces/tools/cli/cloudify.sh $START_COMMAND $START_COMMAND_ARGS") | crontab -
{%endhighlight%}
* Right after that line, add the following snippet
{%highlight sh%}
	if [ "$GSA_MODE" = "lus" ]; then
		cat <(crontab -l) <(echo "@reboot export LUS_IP_ADDRESS=$LUS_IP_ADDRESS; chmod +x ${WORKING_HOME_DIRECTORY}/../events/bin/gsDeployEventsWar.sh; nohup ${WORKING_HOME_DIRECTORY}/../events/bin/gsDeployEventsWar.sh ") | crontab -
	fi
{%endhighlight%}

* Locate the line
{%highlight sh%}
./cloudify.sh $START_COMMAND $START_COMMAND_ARGS
{%endhighlight%}
* Right after that line, add the following snippet
{%highlight sh%}
if [ "$GSA_MODE" = "lus" ]; then
  EVENTS_PATH="${WORKING_HOME_DIRECTORY}/.."
  chmod +x ${EVENTS_PATH}/events/bin/gsDeployEventsWar.sh
  ${EVENTS_PATH}/events/bin/gsDeployEventsWar.sh
fi
{%endhighlight%} 

A command `tree` on your cloud folder should look like this:
[![tree cloud folder](../../images/cloudify2_driver/tree_cloud_dir.png)](../../images/cloudify2_driver/tree_cloud_dir.png)

{%info%}
The `<cdfy_username>` and `<cdfy_password>` are the credentials to provide to the custom events application, used to connect via REST API to the manager. Make sure to provide good credentials if working with a secured manager. If not, they are optional. 
{%endinfo%}



### Persistence ###

If you want to use cloudify in a persistent mode, you should override the cloulify management space:

* in the configure section of your cloud (in the .groovy cloud configuration file)), set a value for the property `persistentStoragePath`  
	{%highlight groovy%}
  
	cloud{
	  name = "your_cloud_name"
	  ...
	  configuration {
	    ...
	    //for persistence of management space
	    persistentStoragePath "path/to/persist/data"
	  }
	}
	{%endhighlight%} 

* Under the `upload` folder of your prefered cloud driver, create (if not exists) the path `cloudify-overrides/tools/management-space`
* Download the [custom management space jar][custom_management_space_jar-link] and store it into the newly created folder. Rename it if needed into `management-space.jar`.  



### High Availability (HA) ###

Alien4Cloud has a feature which will allow him to manage HA deploiements: deploy an application on a cloud, but in more than one availability zone (AZ). Currently, it is not possible to generate cloudify compute templates customized with a particular AZ. Thus, you'll have to defined them explicetelly in the cloudCompute templates section of your cloud configuration file.  
First of all, you should make an inventory of all the AZ you want to be managed.  
Then, For every template defined in the cloudCompute section of of your cloud, define a HA equivalent for every managed AZ. To do so:  

1. copy & paste the template definition
2. rename it following the pattern: `_<TEMPLATE_NAME>_AZ_<AZ_name>`
3. modify (or add if not yet) the property "locationId" and set its value to the name of the AZ.

At the end of the operation, given you have ***n*** cloudify templates and ***m*** AZ to manage, you shoud have  ***n + (n x m)*** entries in the  cloudCompute templates section.

**Exemple**: with a template SMALL_LINUX and two AZ zone1 and zone2, we hould end up with 3 templates entries:

{%highlight groovy%}

cloud{
  name = "your_cloud_name"
  ...
  cloudCompute {
    templates ([
		SMALL_LINUX : computeTemplate {
			...
		},
		_SMALL_LINUX_AZ_zone1 : computeTemplate {
			...
			locationId zone1
			...
		},
		_SMALL_LINUX_AZ-zone2 : computeTemplate {
			...
			locationId zone2
			...
		}
	])
  }
}
{%endhighlight%} 
 

### Bootstraping ###
Bootstrap your cloud, and when done, note the REST API URL (Rest service bellow)
{%highlight console%}
Rest service is avalaible at: http://management_ip:8100
Webui service is avalaible at: http://management_ip:8099
{%endhighlight%}

Typing `http://management_ip:8081/events/test` in a web browser should display the message : `is running`

Now that you have a *JAVA_HOME* set and a customized running instance of Cloudify, you can move to the next step, [how to install and configure the driver](#/documentation/cloudify2_driver/install_config.html "install and configure").

{% warning %}
If you want to use the provider's blockStorage feature, in addition to the [storage configuration](http://getcloudify.org/guide/2.7/developing/storage.html "cloudify storage") of you cloud, you must make sure to have the property `privileged true` in all of your compute templates' definitions.
{% endwarning%}

<!-- Links -->

[jdk7u45-link]: http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase7-521261.html#jdk-7u45-oth-JPR "JDK7u45 Download"

[CDFY_archive-link]: http://getcloudify.org/downloads/get_cloudify_2x.html

[custom_management_space_jar-link]: https://fastconnect.org/confluence/download/attachments/24478788/management-space.jar?api=v2 "Custom management-space"


