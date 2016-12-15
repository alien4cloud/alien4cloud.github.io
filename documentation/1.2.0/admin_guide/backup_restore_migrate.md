---
layout: post
exclude_from_search: true
title:  Backup, restore and migrate data
categories: DOCUMENTATION-1.2.0
root: ../../
parent: [admin]
node_name: backup_restore_migrate
weight: 200
---

{% summary %}{% endsummary %}

Alien4Cloud uses several places to store it's data.

- Cloud service archives
- Artifacts that may have been uploaded to build topologies
- Indexed data (stored in elastic-search)
- Plugins binaries
- Eventually you should make sure to backup also your alien4cloud yaml configuration file as well as your elastic search configuration file

In order to backup / restore or migrate Alien4Cloud you must download the [administration tool](http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=fastconnect-snapshot&g=alien4cloud&a=alien4cloud-1_2_0-migration&v=LATEST&p=zip&c=distrib) and copy it to the machine where Alien's running (or anywhere which has access to Alien's data folders).
After unzipping the archive, the tool can be configured at path_to_admin_tool/config/admin-tool-config.yml

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

# Where migrated elasticsearch data will be exported
exporter.dir: /opt/alien4cloud/backups/export

# Where Alien4Cloud's backup files are stored
backup.files_dir: /opt/alien4cloud/backups/files

# Where Alien4Cloud's files are stored, backup operation will copy data from alien4cloud.dir to backup.files_dir and restore will do inversely
alien4cloud.dir: /opt/alien4cloud/data
{% endhighlight %}

# Backup

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

To backup Alien4Cloud :

{% highlight sh %}
./a4c-admin-tool.sh -backup 1.1.0 -n backup110
{% endhighlight %}

# Restore

{% info %}
We recommend users to stop Alien4Cloud but not ElasticSearch in order to perform the restore. Alien4Cloud should be restarted once restore is completed.

However, if you 100% sure that restore operation has no impact on clouds or plugins configuration you can perform a 'hot restore' and don't need to stop Alien4Cloud.
{% endinfo %}

{% note %}
In order to perform a restore with elasticsearch up and alien down you should be running in a classical production setup where elasticsearch process is independant from Alien4Cloud. See [advanced configuration](#/documentation/1.2.0/admin_guide/advanced_configuration.html) for more details.
{% endnote %}

Before to run the script below you should make sure that Alien4Cloud is stopped and elastic-search is running.

{% highlight sh %}
./a4c-admin-tool.sh -restore 1.1.0 -n backup110
{% endhighlight %}

Once data is restored you can restart Alien4Cloud server.

# Migrate
{% note %}
Before migrating data, please make sure to backup your data before. This guide can only used for migration from 1.1.0 to 1.2.0.
{% endnote %}

* Perform those following commands to migrate data

{% highlight sh %}
./a4c-admin-tool.sh -migrate 1.1.0
# As there are breaking changes between cloudify 3 plugin 1.1.0 and 1.2.0, you will be obliged to swap plugin code of old version with the new one
cp /opt/alien4cloud/alien4cloud-premium/init/plugins/alien4cloud-cloudify3-provider-1.2.0.zip .
unzip alien4cloud-cloudify3-provider-1.2.0.zip
# '112a6d4c-1744-496e-b837-76ac2199f7d1' is id of your cloudify 3 plugins, it will be different than the one in this guide
# Those commands swap old plugin's code with new version
rm -rf /opt/alien4cloud/data/work/plugins/content/112a6d4c-1744-496e-b837-76ac2199f7d1/*
mv * /opt/alien4cloud/data/work/plugins/content/112a6d4c-1744-496e-b837-76ac2199f7d1/
# Start Alien after migration
cd /opt/alien4cloud/alien4cloud-premium/
./alien4cloud.sh
{% endhighlight %}

* Once Alien is up, you should go to cloudify 3 orchestrator's configuration and fill in those keys then re-enable the orchestrator
{% highlight yaml %}
delayBetweenDeploymentStatusPolling: 30
delayBetweenInProgressDeploymentStatusPolling: 5
delayBetweenLogPolling: 2
{% endhighlight %}

* Verify that all plugins have been re-uploaded properly else re-upload them and refresh your browser by emptying its cache so that new plugins' UI can be loaded.

* As you could see, your old plugin which is marked as of version 1.1.0 is now using code of the version 1.2.0 after the swap operation. It works but it's a bad practice for maintainability (plugin 1.1.0 but in fact 1.2.0). We suggest that you create new orchestrator with the new version of the plugin, then migrate in an incremental manner all your applications to the new orchestrator.

Normally with this procedure, you should have your Alien functional with new version 1.2.0.
