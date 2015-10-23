---
layout: post
title:  ALIEN data model
root: ../
categories: DEVELOPER_GUIDE
parent: []
node_name: data_model
weight: 150
---

The following schema details the model that is manipulated in Alien 4 Cloud and the relations between the different objects manipulated.



From a code perspective we are working with denormalized schema and fetching related data should be done through dao queries when needed. From a performance perspective we don't have critical requirements and plan to leverage caching mechanisms rather than implementing ORM solutions on top of ElasticSearch.

# ElasticSearch indices
