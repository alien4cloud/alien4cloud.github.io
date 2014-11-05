---
layout: post
title:  Stack Application Topology
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_application
weight: 800
---
# Create the topology of our Wordpress application
We have explained all components of a LAMP stack. Now, we will use these components to deploy a Wordpress on a cloud. To begin, upload all recipes into Alien and create an empty application.

## Step 1 : The Compute
After this, drag and drop a compute into the plan. You need to specify two properties of the compute : her architecture and her type. Select the correct architecture of your image (probably x86_64) and the linux type.

[![Compute](../../images/developer_guide/wordpress-topology-step-1.png)](../../images/developer_guide/wordpress-topology-step-1.png)

## Step 2 : The BlockStorage
Now, drag and drop a BlockStorage into the plan. Select the new element to attach it to compute. Make sure to select the relation with 1..1 contraint. In these properties, set the size value to 1.

[![Compute, BlockStorage](../../images/developer_guide/wordpress-topology-step-2.png)](../../images/developer_guide/wordpress-topology-step-2.png)

## Step 2 : Apache, MySQL, PHP
Now, drag and drop a MySQL, a PHP and an Apache to the compute. Change the default value of MySQL or Apache if you want a custom install. On PHP, checked the two options to install the Apache 2 and PHP module.

[![Compute, BlockStorage, Apache, MySQL, PHP](../../images/developer_guide/wordpress-topology-step-3.png)](../../images/developer_guide/wordpress-topology-step-3.png)

## Step 3 : The Website
The last component is the website. Add it to the plan and create a WebSiteHostedOn
 relationship between Website and Apache. On the property, set the URL of the last zip of Wordpress.

[![Compute, BlockStorage, Apache, MySQL, PHP, Website](../../images/developer_guide/wordpress-topology-step-4.png)](../../images/developer_guide/wordpress-topology-step-4.png)


# Deploiement
Now you can deploy our topology into the cloud. To configure your Wordpress, open your web browser and go to IP_OF_YOUR_SERVER/wordpress
