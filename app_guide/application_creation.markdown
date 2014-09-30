---
layout: post
title:  Application creation
categories: APP_GUIDE
root: ../
parent: none
weight: 200
---

## How to create an application in **ALIEN**

When you create an application the main goal is to define an application topology. Your **achitect** can also create *topology template* on which
you can base your application.

### Application from scratch

{% info %}Only users with role **APPLICATION_MANAGER** can create application.{% endinfo %}

![Application search page](../images/app_guide/applications-search-page.png)
[Application search page](../images/app_guide/applications-search-page.png)

> Click on *[New Application]* > Enter application details then click on *[Create]*

![Application creation page](../images/app_guide/common-createapp-AlienApplication.png)
[Application creation page](../images/app_guide/common-createapp-AlienApplication.png)

### Application based on a topology template

If you've defined *topology templates*, in the application creation page, you will just have to select a topology template as :

![Application creation with template](../images/app_guide/application-with-topology-template.png)
[Application creation with template](../images/app_guide/application-with-topology-template.png)

You can then start modifying your application topology the same way the architect created the template.

![Application creation with template](../images/app_guide/application-template-based-edit.png)
[Application creation with template](../images/app_guide/application-template-based-edit.png)

{% info %}
Modify your application topology won't modify the template. A **simple topology *copy*** is done at application creation.
{% endinfo %}