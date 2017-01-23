---
layout: post
title:  Ports requirements
categories: DOCUMENTATION-1.4.0
root: ../../
parent: [admin, intallation_configuration]
node_name: ports_requirements
weight: 20
---

This section describes all the necessary ports for Alien4Cloud to work. Network traffic must be unrestricted on all of them for the involved servers.
Note : Cloudify ports are only written here as an indication. If you have any doubt about Cloudify required ports, or are using an unmentioned version of Cloudify, please check [the cloudify documentation](http://getcloudify.org/guide).

{: .table .table-bordered}
| Component - Port description                                       | Default port number/range   | Component Version      |
|--------------------------------------------------------------------|--------------------:|-----------------------:|
| Alien4Cloud - standalone GUI port                                  |         8088        | 1.0.0, 1.1.0, 1.4.0    |
| Alien Post-Deployment application                                  |   8089              |     1.4.0              |
| Cloudify - Management server ports                                 | 8099,8100,22,443,80 |     3.2, 3.3           |
| Cloudify - Management server ports for Agent/manager communication |   5672,8101,53229   |     3.2, 3.3           |
