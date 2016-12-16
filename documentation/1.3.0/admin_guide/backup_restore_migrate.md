---
layout: post
title: 'Backup, restore and migrate data'
categories: DOCUMENTATION-1.3.0
root: ../../
parent:
  - admin
node_name: backup_restore_migrate
weight: 200
published: true
---

{% summary %}{% endsummary %}

Find here informations about how to perform backup / restore your alien4cloud, and also, migrate from `alien4cloud 1.2.1` to `alien4cloud 1.3.0`.  

Alien4Cloud uses several places to store it's data.

- Cloud service archives
- Artifacts that may have been uploaded to build topologies
- Indexed data (stored in elastic-search)
- Plugins binaries
- Eventually you should make sure to backup also your alien4cloud yaml configuration file as well as your elastic search configuration file

# Backup & Restore

In order to backup / restore Alien4Cloud you must download the [ backup/restore tool ](http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=fastconnect-snapshot&g=alien4cloud&a=alien4cloud-backup-restore-tools&v=LATEST&p=zip&c=distrib) and copy it on the machine where Alien is running (or anywhere else having access to Alien's data folders).
After unzipping the archive, the tool can be configured by editing the file ***path_to_unzipped_tool/config/config.yml***

{% highlight yaml %}
elasticsearch:
# Name of your elasticsearch cluster
  cluster_name: alien4cloud
# Addresses of elasticsearch cluster nodes
  addresses: localhost:9300,129.185.67.26:9300

# Where Alien4Cloud's backup files are stored
backup.files_dir: /opt/alien4cloud/backups/files

# Where Alien4Cloud's files are stored, backup operation will copy data from alien4cloud.dir to backup.files_dir and restore will do inversely
alien4cloud.dir: /opt/alien4cloud/data
{% endhighlight %}

{% note %}
In order to perform backup:

* Configure 'path.repo' on all your elasticsearch cluster nodes. Elasticsearch index snapshots will be saved at this location.

{% highlight yaml %}
path.repo: /home/elasticsearch/backups
{% endhighlight %}

Restart elasticsearch so that the new configuration is taken into account :

{% highlight sh %}
sudo /etc/init.d/elasticsearch restart
{% endhighlight %}

* Mount shared file system between all your elasticsearch cluster nodes. Here's an example with sshfs :

{% highlight sh %}
# On the file server machine where elasticsearch backups will be hosted
sudo adduser elasticsearch
# Copy key file that enable ssh login for this user
sudo -u elasticsearch mkdir /home/elasticsearch/.ssh
sudo -u elasticsearch cp authorized_keys /home/elasticsearch/.ssh
# Create the shared remote folder that will be used for elasticsearch backups
sudo -u elasticsearch mkdir /home/elasticsearch/backups

# On elasticsearch machines
# Install sshfs
sudo apt-get install sshfs
# Create backup folders
sudo -u elasticsearch mkdir -p /home/elasticsearch/backups
# Mount the remote folder
sudo sshfs -o allow_other -o uid=$(id -u elasticsearch) -o gid=$(id -g elasticsearch) -o IdentityFile=/home/elasticsearch/key.pem elasticsearch@192.168.1.4:/home/elasticsearch/backups /home/elasticsearch/backups
# Test that elasticsearch can write to the backups folder
sudo -u elasticsearch touch /home/elasticsearch/backups/test.txt
sudo -u elasticsearch rm /home/elasticsearch/backups/test.txt
{% endhighlight %}
{% endnote %}

## Perform backup

To backup Alien4Cloud, from the root directory of the unzipped tool, perform the command:

{% highlight sh %}
./backup-restore-tool.sh -backup -n backup121
{% endhighlight %}

For more commands and options, you can have the help doc displayed:

{% highlight sh %}
./backup-restore-tool.sh -help
{% endhighlight %}


## Perform restore

{% warning %}
<h5>Alien4Cloud and ElasticSearch states</h5>
We recommend to stop Alien4Cloud before performing the restore. **ElasticSearch MUST be up and running**. Alien4Cloud should be restarted once the restoration process is completed.  This is quite trivial to do when running in a classical production setup where elasticsearch process is independant from Alien4Cloud ( See [advanced configuration](#/documentation/1.3.0/admin_guide/advanced_configuration.html) for more details ).  
However, if running in an embedded configuration, you can't stop Alien4Cloud without stopping ElasticSearch. Then, just make sure the plateform is not used during the process.
<br/>
Anyway, if you 100% sure that restore operation has no impact on clouds or plugins configuration you can perform a 'hot restore' and don't need to stop Alien4Cloud.
{% endwarning %}

To restore Alien4Cloud, from the root directory of the unzipped tool, perform the command:

{% highlight sh %}
./backup-restore-tool.sh -restore -n backup121
{% endhighlight %}

Once data is restored, you can restart Alien4Cloud server if needed.

# Migrate
{% warning %}
Before migrating data, please make sure to backup your data before. This guide can only used for migration from __`1.2.1`__ to __`1.3.0`__.
{% endwarning %}

{% warning %}
<h5> Plugins migration </h5>
Please beware that if you have custom plugins imported in your alien4cloud instance, they will be discarded after migration. Therefore, you should re-upload them after the process is over.  
We do not guarantee the compatibility of those with the new Alien4cloud version.
{% endwarning %}

The migration tool takes as input old data, and transform them to be complient with the new alien4cloud version.  
Concerning either Alien4Cloud or elasticsearch data, no copy or transfert is made, meaning the existing data are really transformed and modified. Therefore, to be able to run the new version of the product with the migrated data, **make sure the two instances of Alien4Cloud are configured to use the same and identical data path**.

In addition, **they have to be bind to the same elasticsearch cluster**, or, if running in an embedded mode, **the elasticsearch configurations must be the same in term of data paths**.

{% warning %}
<h5>Alien4Cloud and ElasticSearch states</h5>
We recommend to stop Alien4Cloud before performing the migration. **ElasticSearch MUST be up and running**. Alien4Cloud should be restarted once the process is completed.  This is quite trivial to do when running in a classical production setup where elasticsearch process is independant from Alien4Cloud ( See [advanced configuration](#/documentation/1.3.0/admin_guide/advanced_configuration.html) for more details ).  
However, if running in an embedded configuration, you can't stop Alien4Cloud without stopping ElasticSearch. Then, just make sure the plateform is not used during the process.  
{% endwarning %}

In order to migrate Alien4Cloud you must download the [ migration tool ](http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=fastconnect-snapshot&g=alien4cloud&a=alien4cloud-migration&v=LATEST&p=zip&c=distrib) and copy it on the machine where Alien is running (or anywhere which has access to Alien's data folders).  
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

transform:
# Application's Id has changed from 1.2.1 to 1.3.0
#Provide here a tag name that, if present on an application, will be use as base for its Id.
#If not, an Id will be auto-generate from the application's name
  application_tag: testTag

alien4cloud:
# alien4cloud runtime directory. See "directories.alien" option in your alien4cloud config
  dir: /opt/alien4cloud/data
# directory in which alien4cloud stores Cloud Service Archives. See "directories.csar_repository" option in your alien4cloud config
  csar_repository: csar
{% endhighlight %}

## Orchestrators migration

Orchestrators in alien4cloud are bound to Orchestrators' plugins. If you are using a custom orchestrator plugin, as stated above, it will discarded after the migration.  
However you can edit the ***mappings.yml*** and provides some new values to set for the orchestrator's migration to be completed. Note that if a value of a property is not mapped here, it will be kept as is.  
Make sure to not forget (when needed) the quotes '""' as this is a yaml file, and some character are specifics, such as the colon ':'.  
Here is a sample:

***mappings.yml***

{% highlight yaml %}
##
# mapping of your orchestrators' plugins.
# "OldPluginId:oldVersion" : "NewPluginId:newVersion"
##
plugins_id:
  "alien-cloudify-3-orchestrator-premium:1.2.1": "alien-cloudify-3-orchestrator-premium:1.3.0"

##
# mapping of your orchestrator's config url.
# "OldUrl":"newUrl"
##
orchestrator_url:
  "http://oldmanagerIP": "http://newManagerIP"

##
# Write here a mapping of your orchestrator config location's imports.
# "OldImportValue":"newImportValue"
##
location_import:
  "http://www.getcloudify.org/spec/cloudify/3.3.1/types.yaml": "http://www.getcloudify.org/spec/cloudify/3.4/types.yaml"

{% endhighlight %}

 * Place your zipped plugin into the ***init/plugins*** directory of your Alien4cloud 1.3.0, so that it will be loaded on start.

## perform migration

* From the root directory of the unzipped tool, perform the command:
{% highlight sh %}
./migration-tool.sh -migrate -v 1.2.0
{% endhighlight %}

For more commands and options, you can have the help doc displayed:
{% highlight sh %}
./migration-tool.sh -help
{% endhighlight %}

* Start your new Alien4cloud configured properly, after migration
{% highlight sh %}
cd /opt/alien4cloud/alien4cloud-premium/
./alien4cloud.sh
{% endhighlight %}

* Verify that all plugins (excepts custom ones) have been re-uploaded properly else re-upload them.  

* Refresh your browser by emptying its cache so that new plugins' UI can be loaded.

Normally with this procedure, you should have your Alien functional with new version 1.3.0.
