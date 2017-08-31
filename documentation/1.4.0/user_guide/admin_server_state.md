---
layout: post
title:  Server state
root: ../../
categories: DOCUMENTATION-1.4.0
parent: [user_guide, admin]
node_name: admin_server_state
weight: 400
---

The server state page allows to an admin to get metrics on the current state of the alien4cloud server.

In addition to metrics visualizations (as garbage collection statistics and API response metrics) this page is also where an admin can enable alien4cloud maintenance mode.

Maintenance mode allows to block the REST API of alien4cloud to avoid any user operations to be triggered. Note that some internal process within the server may still be active like event fetching from orchestrators etc.

Switching maintenance mode allows to display a maintenance state page to your users with the progress and messages that you may want to dispatch to them on the current state of the server maintenance.
