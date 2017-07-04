---
layout: post
title: Ansible support
root: ../../../
categories: "DOCUMENTATION-1.4.0"
parent:
  - orchestrators
  - cloudify_4
  - cloudify_4_install
node_name: ansible_support
weight: 1001
published: true
---

{% info %}
<h5>Premium feature</h5>
This section refers to a premium feature.
{% endinfo %}

Ansible support for cloudify 4 orchestrator needs Ansible to be installed on the manager.

You need to install version 2.0.1.0 of ansible:

<pre>
sudo yum install python-cffi
sudo yum install gcc
sudo yum install python-devel
sudo yum install openssl-devel
sudo pip install ansible==2.0.1.0
sudo pip install --upgrade setuptools
</pre>

Change this config in ansible configuration file:

<pre>
[defaults]
callback_whitelist = tree
</pre>

Or simply add a cfg file:

<pre>
sudo bash -c "mkdir /etc/ansible && echo '[defaults]' > /etc/ansible/ansible.cfg && echo 'callback_whitelist = tree' >> /etc/ansible/ansible.cfg"
</pre>

For the moment we need to hack the tree plugin. Here is the patch:

<pre>
@@ -19,6 +19,7 @@
 __metaclass__ = type

 import os
+import json

 from ansible.plugins.callback import CallbackBase
 from ansible.utils.path import makedirs_safe
@@ -39,26 +40,28 @@
     def __init__(self):
         super(CallbackModule, self).__init__()

-        self.tree = TREE_DIR
+        self.tree = os.environ['TREE_DIR']
         if not self.tree:
             self.tree = os.path.expanduser("~/.ansible/tree")
             self._display.warning("The tree callback is defaulting to ~/.ansible/tree, as an invalid directory was provided: %s" % self.tree)

-    def write_tree_file(self, hostname, buf):
+    def write_tree_file(self, hostname, name, buf):
         ''' write something into treedir/hostname '''

-        buf = to_bytes(buf)
+        buf = {'task_name': "{}".format(name), 'result': json.loads(buf)}
+        #buf = to_bytes(buf)
+        buf = json.dumps(buf)
         try:
             makedirs_safe(self.tree)
             path = os.path.join(self.tree, hostname)
-            with open(path, 'wb+') as fd:
-                fd.write(buf)
+            with open(path, 'ab+') as fd:
+                fd.write("{}\n".format(buf))
         except (OSError, IOError) as e:
             self._display.warning("Unable to write to %s's file: %s" % (hostname, str(e)))

     def result_to_tree(self, result):
         if self.tree:
-            self.write_tree_file(result._host.get_name(), self._dump_results(result._result))
+            self.write_tree_file(result._host.get_name(), result._task, self._dump_results(result._result))

     def v2_runner_on_ok(self, result):
         self.result_to_tree(result)
</pre>

Paste this into a patch file, eg. tree.py.patch and patch the original file:

<pre>
sudo yum install patch
cp /usr/lib/python2.7/site-packages/ansible/plugins/callback/tree.py tree.py.back
sudo patch /usr/lib/python2.7/site-packages/ansible/plugins/callback/tree.py tree.py.patch
</pre>

You will need to install specific packages if you want to use some extra ansible modules. For example, in order to use ec2 module, you will need to install boto :

<pre>
sudo pip install boto
</pre>
