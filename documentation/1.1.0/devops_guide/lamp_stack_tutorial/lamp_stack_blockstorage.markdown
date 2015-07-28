---
layout: post
title:  Component BlockStorage
root: ../../
categories: DOCUMENTATION-1.1.0
parent: [devops, lamp_stack]
node_name: lamp_stack_blockstorage
weight: 200
---

This component represents a storage space / volume. This volume __has to be__ *attached* to a compute to be used.

For more details about this custom component : [BlockStorage](#/documentation/1.1.0/cloudify2_driver/blockstorage.html)

Used version for this tutorial (defined in normative types): [BlockStorage](https://github.com/alien4cloud/tosca-normative-types/blob/1.0.0.wd02/normative-types.yml){:target="_blank"}

# Definition

## Namming / description

<div data-gist="https://gist.github.com/cmourouvin/c6eb9df89eda149c41f5.js"></div>

{% note %}
Every component should at least inherite from *tosca.nodes.Root*. As a default normative type it's the case for *BlockStorage*.
{% endnote %}

## Properties

<div data-gist="https://gist.github.com/cmourouvin/561ca4ce50e1eb1f673b.js"></div>

Check details : [BlockStorage](#/documentation/1.1.0/cloudify2_driver/blockstorage.html)

{% info %}
For the application you will need **volume_id** or **size** to be defined.
{% endinfo %}

## Lifecycle and related scripts

There is no lifecycle operation for this component in the default version.
