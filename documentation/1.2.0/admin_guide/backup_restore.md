---
layout: post
title:  Backup and restore
categories: DOCUMENTATION-1.2.0
root: ../../
parent: [admin]
node_name: backup_restore
weight: 200
---

{% summary %}{% endsummary %}

Alien 4 Cloud uses several places to store it's data.

- Cloud service archives
- Artifacts that may have been uploaded to build topologies
- Indexed data (stored in elastic-search)
- Plugins binaries
- Eventually you should make sure to backup also your alien4cloud yaml configuration file as well as your elastic search configuration file

# Backup

In order to backup Alien 4 Cloud you must backup elastic search indexes as well as disk-based data. For more informations on how to backup an elasticsearch cluster please refer the elastic search [documentation](http://www.elasticsearch.org/guide/en/elasticsearch/reference/current/modules-snapshots.html)

The following bash script gives an example on how alien4cloud data should be backed-up. It assumes that you kept the defaut directory hierarchy for alien data.

{% highlight sh %}
# Directory in which alien stores it's disk base data.
export ALIEN_DIR=~/.alien
# Url to access ElasticSearch rest api.
export ES_URL="http://localhost:9200"

# Backup target directories
export BACKUP_DIR=~/tmp/alien_backups

export BACKUP_NAME=`date '+%d_%m_%Y_%H_%M'`

export ES_BACKUP_DIR=$BACKUP_DIR/elasticsearch
export FS_BACKUP_DIR=$BACKUP_DIR/filesystem/$BACKUP_NAME

# setup elastic search snapshot repository
curl -XPUT "$ES_URL/_snapshot/alien_backup" -d "{
  \"type\": \"fs\",
  \"settings\": {
    \"location\": \"$ES_BACKUP_DIR\",
    \"compress\": true
  }
}"

# trigger elastic search data backup (asynchronous)
RESULT=`curl -XPUT "$ES_URL/_snapshot/alien_backup/$BACKUP_NAME?wait_for_completion=false"`
SUCCESS=$(echo "$RESULT" | grep "{\"accepted\":true}")

if [ -z "$SUCCESS" ]; then
  echo "Failed to backup Elastic Search"
  echo $RESULT
else
  # Copy file system data
  mkdir -p $FS_BACKUP_DIR/artifacts
  mkdir -p $FS_BACKUP_DIR/csar
  mkdir -p $FS_BACKUP_DIR/plugins
  cp -r $ALIEN_DIR/artifacts $FS_BACKUP_DIR/artifacts
  cp -r $ALIEN_DIR/csar $FS_BACKUP_DIR/csar
  cp -r $ALIEN_DIR/plugins $FS_BACKUP_DIR/plugins

  # wait until elastic search backup is complete
  curl -XGET "$ES_URL/_snapshot/alien_backup/$BACKUP_NAME/_status"
fi
{% endhighlight %}

# Restore

{% info %}
We recommend users to stop alien 4 cloud but not ElasticSearch in order to perform the restore. Alien 4 Cloud should be restarted once restore is completed.

However, if you 100% sure that restore operation has no impact on clouds or plugins configuration you can perform a 'hot restore' and don't need to stop neither Alien 4 Cloud or ElasticSearch.
{% endinfo %}

{% note %}
In order to perform a restore with elasticsearch up and alien down you should be running in a classical production setup where elasticsearch process is independant from alien 4 cloud. See [advanced configuration](#/documentation/1.1.0/admin_guide/advanced_configuration.html) for more details.
{% endnote %}

To restore a snapshot you should restore the elaticsearch index and put back the actual files required for Alien 4 Cloud.

Before to run the script below you should make sure that alien 4 cloud is stopped and elastic-search is running.

{% highlight sh %}
# Name of the backup to restore
export BACKUP_NAME=$1

echo "Prepare to restore $BACKUP_NAME"

# Directory in which alien stores it's disk base data.
export ALIEN_DIR=~/.alien
# Url to access ElasticSearch rest api.
export ES_URL="http://localhost:9200"

# Backup target directories
export BACKUP_DIR=~/tmp/alien_backups
export FS_BACKUP_DIR=$BACKUP_DIR/filesystem/$BACKUP_NAME

# close indexes before restore operation
curl -XPOST "$ES_URL/_all/_close"

# trigger elastic search data restore
RESULT = `curl -XPOST "$ES_URL/_snapshot/alien_backup/$BACKUP_NAME/_restore"`

SUCCESS=$(echo "$RESULT" | grep "{\"accepted\":true}")

if [ -z "$SUCCESS" ]; then
  echo "Failed to restore Elastic Search"
  echo $RESULT
else
  # Copy file system data
  rm -r $ALIEN_DIR/artifacts
  rm -r $ALIEN_DIR/csar
  rm -r $ALIEN_DIR/plugins
  cp -r $FS_BACKUP_DIR/artifacts $ALIEN_DIR/artifacts
  cp -r $FS_BACKUP_DIR/csar $ALIEN_DIR/csar
  cp -r $FS_BACKUP_DIR/plugins $ALIEN_DIR/plugins
fi
{% endhighlight %}

Once data is restored you can restart alien 4 cloud server.
