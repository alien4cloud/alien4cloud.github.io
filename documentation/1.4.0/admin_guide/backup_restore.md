---
layout: post
title: 'Backup & restore'
categories: DOCUMENTATION-1.4.0
root: ../../
parent:
  - admin
node_name: backup_restore
weight: 200
published: true
---

# Scope of the tool

The purpose of this tool is to snapshot Alien4Cloud data and restore a previous snapshot.

The backup and restore tool is responsible to backup alien4cloud data:

- Alien4Cloud database (Elasticsearch)
- User uploaded content like CSAR, Artifacts, Plugins

But Alien4Cloud distribution binaries (excluding plugins) and configuration files won't be backed up.


# Dowbload 

[<i class="fa fa-download"></i> Backup / Restore tool][backup-restore-tool_url]{: .btn}{: .btn-success}{: .download-button}

# Configurations

Unzip the downloaded archive, and edit the file ***path_to_unzipped_tool/config/config.yml***.



***config.yml***

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


## Configure Elasticsearch

The backup relies on the snapshot capability of Elaticsearch. In order to be able to use this feature, Elasticsearch variable 'path.repo' must to be defined on all elasticsearch cluster nodes.

{% highlight yaml %}
path.repo: /home/elasticsearch/backups
{% endhighlight %}

Restart elasticsearch so that the new configuration is taken into account :

{% highlight bash %}
sudo /etc/init.d/elasticsearch restart
{% endhighlight %}

## Configure shared file system (optional)

* Mount shared file system between all your elasticsearch cluster nodes. Here's an example with sshfs :

{% highlight bash %}
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


# Backup

To backup Alien4Cloud, from the root directory of the unzipped tool, perform the command:

{% highlight bash %}
./backup-restore-tool.sh -backup -n yourBackupName
{% endhighlight %}

For more commands and options, you can have the help doc displayed:

{% highlight bash %}
./backup-restore-tool.sh -help
{% endhighlight %}

# Restore

{% warning %}
<h5>Alien4Cloud and ElasticSearch states</h5>
We recommend to stop Alien4Cloud before performing the restore. **ElasticSearch MUST be up and running**. Alien4Cloud should be restarted once the restoration process is completed.  This is quite trivial to do when running in a classical production setup where elasticsearch process is independant from Alien4Cloud ( See [advanced configuration](#/documentation/1.4.0/admin_guide/advanced_configuration.html) for more details ).  
However, if running in an embedded configuration, you can't stop Alien4Cloud without stopping ElasticSearch. Then, just make sure the plateform is not used during the process.
<br/>
Anyway, if you 100% sure that restore operation has no impact on clouds or plugins configuration you can perform a 'hot restore' and don't need to stop Alien4Cloud.
{% endwarning %}

To restore Alien4Cloud, from the root directory of the unzipped tool, perform the command:

{% highlight bash %}
./backup-restore-tool.sh -restore -n yourBackupName
{% endhighlight %}

Once data is restored, you can restart Alien4Cloud server if needed.


[backup-restore-tool_url]: http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=fastconnect&g=alien4cloud&a=alien4cloud-backup-restore-tools&v=LATEST&p=zip&c=distrib "backup-restore-tool"

[migration-tool_url]: http://fastconnect.org/maven/service/local/artifact/maven/redirect?r=fastconnect&g=alien4cloud&a=alien4cloud-migration&v=LATEST&p=zip&c=distrib "migration-tool"
