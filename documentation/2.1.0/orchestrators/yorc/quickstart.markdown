---
layout: post
title:  Quick Start - Deploy your first application
root: ../../../../
categories: DOCUMENTATION-2.1.0
parent: [orchestrators, yorc]
node_name: Quick Start - Deploy your first application
weight: 2000
---

## Import Samples

To get started, you can upload sample application from the [Forge](https://github.com/ystia/forge/tree/v2.0.0/org/ystia) and and deploy the Welcome application on one of the supported types of infrastructures as described below.

Now we have the Welcome template ready to use, we can create an application based on it. To do this, go to the ![applications](../../../../images/2.1.0/yorc/application-btn.png){: height="26px" .inline} section. Click on the ![new application](../../../../images/2.1.0/yorc/new-application-btn.png){: height="26px" .inline} button and select the welcome-basic in the table at the bottom of the popup.

![Create Application](../../../../images/2.1.0/yorc/new-welcome-app.png)

The application creation should redirect you on the application information page. To see your application topology, go to ![application topology](../../../../images/2.1.0/yorc/app-topo-btn.png){: height="26px" .inline} page, you will see the following screen.

![Welcome Application topology](../../../../images/2.1.0/yorc/welcome-app-topo.png)

## Setup and deploy your application

To deploy this new application, go on the ![application deployment](../../../../images/2.1.0/yorc/application-deployment-btn.png){: height="26px" .inline} sub-menu and :

- Select your location
- Go to the Deploy tab
- And click on ![deploy button](../../../../images/2.1.0/yorc/app-deploy-btn.png)

![Select a location](../../../../images/2.1.0/yorc/app-location.png)

> **note**
>
> To understand all configuration available for the deployment page, please refer to the  
> [Alien4Cloud application management section](http://alien4cloud.github.io/#/documentation/2.0.0/user_guide/application_management.html) .
>

## Check that your application is up and running


On the runtime view, you can have the detailed deployment progress. Click on the side bar sub-menu ![runtime button](../../../../images/2.1.0/yorc/app-runtime-btn.png){: height="26px" .inline}

![Application runtime view](../../../../images/2.1.0/yorc/app-runtime-dep.png)

When all nodes are deployed, go back in the ![information](../../../../images/2.1.0/yorc/app-info-btn.png){: height="26px" .inline} sub-menu to get the Welcome application url and test it !

![Application information view](../../../../images/2.1.0/yorc/app-info-outprop.png)

## Next Steps: Define your own components

Please refer to [the Alien4Cloud dev guide](http://alien4cloud.github.io/community/index.html#/documentation/2.0.0/devops_guide/dev_ops_guide.html) to write your own components.
