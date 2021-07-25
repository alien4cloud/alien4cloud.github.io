---
layout: post
title:  Quick Start - Deploy your first application
root: ../../../../
categories: DOCUMENTATION-3.4.0
parent: [orchestrators, yorc]
node_name: Quick Start - Deploy your first application
weight: 2000
---

## Import Samples

To get started, you can upload sample application from the [Samples](https://github.com/alien4cloud/samples) and deploy the Petclinic application on one of the supported types of infrastructures as described below.

Now we have the Petclinic template ready to use, we can create an application based on it. To do this, go to the ![applications](../../../../images/3.4.0/yorc/application-btn.png){: height="26px" .inline} section. Click on the ![new application](../../../../images/3.4.0/yorc/new-application-btn.png){: height="26px" .inline} button and select the **PetclinicTemplate** in the table at the bottom of the popup.

![Create Application](../../../../images/3.4.0/yorc/new-welcome-app.png)

The application creation should redirect you on the application details page. 

![Welcome Application topology](../../../../images/3.4.0/yorc/welcome-app-topo.png)

## Setup and deploy your application

To deploy this new application, go on Environment page

- Select your location
- Go to the Deploy tab
- And click on ![deploy button](../../../../images/3.4.0/yorc/app-deploy-btn.png){: height="26px" .inline}

![Select a location](../../../../images/3.4.0/yorc/app-location.png)

> **note**
>
> To understand all configuration available for the deployment page, please refer to the
> [Alien4Cloud application management section](/#/documentation/3.0.0/user_guide/application_management.html) .
>

## Check that your application is up and running


On the deployment info view, you can have the detailed deployment status and the output properties. 

![Application Deployment info](../../../../images/3.4.0/yorc/app-info-deployment.png)

The attribute **local_application_url** displays the Petclinic url
Click on this links and checks application is successfully deployed.

On the **Runtime view**, you can see node details deployment status with their different properties such as the private and public IP adresses of Computes.
![Application runtime view](../../../../images/3.4.0/yorc/app-runtime-view.png)


## Next Steps: Define your own components

Please refer to [the Alien4Cloud dev guide](#/documentation/3.0.0/devops_guide/dev_ops_guide.html) to write your own components.

