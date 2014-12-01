---
layout: post
title:  Component BlockStorage
root: ../../
categories: DOCUMENTATION
parent: [getting_started, lamp_stack]
node_name: lamp_stack_blockstorage
weight: 200
---

This component represents a storage space / volume. This volume __has to be__ *attached* to a compute to be used.

For more details about this custom component : [BlockStorage](../cloudify2_driver/blockstorage.html)

Used version for this tutorial (defined in normative types): [BlockStorage](https://github.com/alien4cloud/tosca-normative-types/blob/1.0.0.wd02/normative-types.yml){:target="_blank"}

<script src="https://gist.github.com/cmourouvin/ec7eb7b782e1da647cae.js"></script>

# Definition

## Namming / description

<script src="https://gist.github.com/cmourouvin/c6eb9df89eda149c41f5.js"></script>

{% note %}
Every component should at least inherite from *tosca.nodes.Root*. As a default normative type it's the case for *BlockStorage*.
{% endnote %}

## Properties

<script src="https://gist.github.com/cmourouvin/561ca4ce50e1eb1f673b.js"></script>

Check details : [BlockStorage](../cloudify2_driver/blockstorage.html)

{% info %}
For the application you will need **volume_id** or **size** to be defined.
{% endinfo %}

## Lifecycle and related scripts

There is no lifecycle operation for this component in the default version.
