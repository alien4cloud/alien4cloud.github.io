---
layout: post
title: 'Migrate from 1.3.x to 1.4.x'
categories: DOCUMENTATION-1.4.0
root: ../../
parent:
  - admin
node_name: data_migration
weight: 200
published: true
---

{% summary %}{% endsummary %}


# Before anything else

**Before migrating data, please make sure to backup your data first.**

[How to backup Alien4Cloud](#/documentation/1.4.0/admin_guide/backup_restore.md)

# Warnings

{% warning %}
<h5> Compatibility </h5>
This guide can only used for migration from __`1.3.x`__ to __`1.4.x`__.
{% endwarning %}

{% warning %}
<h5> Plugins migration </h5>
Please beware that if you have custom plugins imported in your alien4cloud instance, they will be discarded after migration. Therefore, you should re-upload them after the process is over.  
We do not guarantee the compatibility of those with the new Alien4cloud version.
{% endwarning %}

{% warning %}
<h5> Orchestrators </h5>
Orchestrators in alien4cloud are bound to orchestrator plugins. If you are using a custom orchestrator plugin, as stated above, it will discarded after the migration.
{% endwarning %}




# Migrate from 1.3.x to 1.4.0

## Download ##

[<i class="fa fa-download"></i> Migation tool][migration-tool_url]{: .btn}{: .btn-success}{: .download-button}

The migration tool takes as input old data, and transform them to be complient with the new alien4cloud version.  
Concerning either Alien4Cloud or elasticsearch data, no copy or transfert is made, meaning the existing data are really transformed and modified. Therefore, to be able to run the new version of the product with the migrated data, **make sure the two instances of Alien4Cloud are configured to use the same and identical data path**.

In addition, **they have to be bind to the same elasticsearch cluster**, or, if running in an embedded mode, **the elasticsearch configurations must be the same in term of data paths**.

{% warning %}
<h5>Alien4Cloud and ElasticSearch states</h5>
We recommend to stop Alien4Cloud before performing the migration. **ElasticSearch MUST be up and running**. Alien4Cloud should be restarted once the process is completed.  This is quite trivial to do when running in a classical production setup where elasticsearch process is independant from Alien4Cloud ( See [advanced configuration](#/documentation/1.4.0/admin_guide/advanced_configuration.html) for more details ).  
However, if running in an embedded configuration, you can't stop Alien4Cloud without stopping ElasticSearch. Then, just make sure the plateform is not used during the process.  
{% endwarning %}

In order to migrate Alien4Cloud you must download the [ migration tool ][migration-tool_url] and copy it on the machine where Alien is running (or anywhere which has access to Alien's data folders).  
After unzipping the archive, the tool can be configured by editing the files in ***path_to_unzipped_tool/config***

***config.yml***

{% highlight yaml %}

elasticsearch:
# Name of your elasticsearch cluster
  cluster_name: alien4cloud
# Addresses of elasticsearch cluster nodes
  addresses: 129.185.67.37:9300,129.185.67.26:9300

# The poller polls elasticsearch to export data for migration
poller:
# The poller's scroll lease and batch size see https://www.elastic.co/guide/en/elasticsearch/guide/1.x/scan-scroll.html
  scroll:
    lease: 120
    batch_size: 100

# Where elasticsearch data will be exported and store after transformation
exporter.dir: /tmp/alien4cloud/migration/1.3/exported
importer.dir: /tmp/alien4cloud/migration/1.3/toImport

alien4cloud:
# alien4cloud runtime directory. See "directories.alien" option in your alien4cloud config
  dir: /opt/alien4cloud/data

# Uncomment me if you'd like to change cloudify url during the migration
# new_cloudify_url: "https://1.1.1.1"

{% endhighlight %}



## perform migration

* From the root directory of the unzipped tool, perform a migration dry run with the command:
{% highlight bash %}
./migration-tool.sh -migrate_dry_run
{% endhighlight %}

The command above will migrate the data without making any changes on your elasticsearch data. It's a safe way to see if any error or warning happen during migration.

* If **no WARN or ERROR message** has been produced you can do the effective migration process.

{% highlight bash %}
./migration-tool.sh -migrate
{% endhighlight %}

* Start your new Alien4cloud configured properly, after migration
{% highlight bash %}
cd /opt/alien4cloud/alien4cloud-premium/
./alien4cloud.sh
{% endhighlight %}

* Verify that all plugins (excepts custom ones) have been re-uploaded properly else re-upload them.  

* Refresh your browser by emptying its cache so that new plugins' UI can be loaded.

Normally with this procedure, you should have your Alien functional with new version 1.4.0.



[backup-restore-tool_url]: http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=fastconnect&g=alien4cloud&a=alien4cloud-backup-restore-tools&v=LATEST&p=zip&c=distrib "backup-restore-tool"

[migration-tool_url]: http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=fastconnect&g=alien4cloud&a=alien4cloud-migration&v=LATEST&p=zip&c=distrib "migration-tool"


# Migrate from 1.4.x to 1.4.3.1

The premium dist versions of Alien4Cloud 1.4.3.1 are packaged with the plugin alien4cloud-migration-plugin to perform an auto migration of datas contains in ES from 1.4.0 to a more recent version at the first boot. Note : you need to disable services to make migration if you have used this feature before Alien 1.4.2.


## Standard migration procedure :

  * stop Alien4Cloud process.
  * install the new log application on each Cloudify manager machine.[ More informations.](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_logs.html)
  * replace the old folder of Alien4Cloud Premium by the new version of Alien4Cloud Premium
  * update the **alien4Cloud-config.yaml**.
  * start Alien4Cloud
  * on each orchestrator configuration, set the port of the new application log. [ More informations.](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_logs.html)
  * on each orchestrator configuration, add a new import for your location, **plugins/overrides/plugin-included.yaml** if online or **plugins/overrides/plugin-managed.yaml** if offline. [ More informations. ](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_offline.html)


## Migration of an Alien4Cloud HA

In case of the migration of an [Alien4Cloud HA](#/documentation/1.4.0/admin_guide/ha.html):

  * stop backup computes then the master.
  * install the new log application on each Cloudify manager machine.[ More informations.](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_logs.html)
  * copied your old Alien4Cloud folder. It’s necessary for your rollback and you will help to fill the new file configuration of Alien4Cloud.
  * don’t touch the folder that is mounted to shared runtime, just replace the old folder of Alien4Cloud Premium by the new version of Alien4Cloud Premium.
  * update the **alien4Cloud-config.yaml** on each Alien4Cloud.
  * start the Alien4Cloud master and wait the end of migration.
  * on each orchestrator configuration, set the port of the new application log. [ More informations.](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_logs.html)
  * on each orchestrator configuration, add a new import for your location, **plugins/overrides/plugin-included.yaml** if online or **plugins/overrides/plugin-managed.yaml** if offline. [ More informations. ](#/documentation/1.4.0/orchestrators/cloudify4_driver/prerequisites_offline.html)
  * start the backup computes.

Note: migration plugin of Alien4Cloud checks that the migration is already done on the Alien4cloud master, so it’s normal if you notice that migration process is not launched on the backup computes.
