---
layout: post
title: 'Migration'
categories: DOCUMENTATION-2.2.0
root: ../../
parent:
  - admin
node_name: data_migration
weight: 200
published: true
---

{% summary %}{% endsummary %}


# Before anything else

{% warning %}
<h5> Before migrating data, please make sure to backup your data first. </h5>
[How to backup Alien4Cloud](#/documentation/2.2.0/admin_guide/backup_restore.html)
{% endwarning %}

## Warnings

### Compatibility
This guide can only used for migration from the __`{{ site.stable-version }}`__ to __`2.2.0`__.



### Plugins migration
Please beware that if you have custom plugins imported in your alien4cloud instance, they will be discarded after migration. Therefore, you should re-upload them after the process is over.
We do not guarantee the compatibility of those with the new Alien4cloud version.


### Orchestrators
Orchestrators in alien4cloud are bound to orchestrator plugins. If you are using a custom orchestrator plugin, as stated above, it will discarded after the migration.


# Migrate from the {{ site.stable-version }} to 2.2.0

The premium dist versions of Alien4Cloud 2.2.0 are packaged with the plugin alien4cloud-migration-plugin to perform an auto migration of datas contains in ES from the lasted {{ site.stable-version }} to 2.2.0 at the first boot.


## Standard migration procedure :

  * stop Alien4Cloud process.
  * install the new log application on each Cloudify manager machine.[ More informations.](#/documentation/2.2.0/orchestrators/cloudify4_driver/prerequisites_logs.html)
  * replace the old folder of Alien4Cloud Premium by the new version of Alien4Cloud Premium
  * update the **alien4Cloud-config.yaml**.
  * start Alien4Cloud


## Migration of an Alien4Cloud HA

In case of the migration of an [Alien4Cloud HA](#/documentation/2.2.0/admin_guide/ha.html):

  * stop backup computes then the master.
  * install the new log application on each Cloudify manager machine.[ More informations.](#/documentation/2.2.0/orchestrators/cloudify4_driver/prerequisites_logs.html)
  * copied your old Alien4Cloud folder. It’s necessary for your rollback and you will help to fill the new file configuration of Alien4Cloud.
  * don’t touch the folder that is mounted to shared runtime, just replace the old folder of Alien4Cloud Premium by the new version of Alien4Cloud Premium.
  * update the **alien4Cloud-config.yaml** on each Alien4Cloud.
  * start the Alien4Cloud master and wait the end of migration.
  * start the backup computes.

Note: migration plugin of Alien4Cloud checks that the migration is already done on the Alien4cloud master, so it’s normal if you notice that migration process is not launched on the backup computes.
