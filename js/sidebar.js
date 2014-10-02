---
layout: null
---

var sidebar = {};
var root={};

{% for cat in site.categories-list %}
sidebar["{{ cat }}"] = [];
root["{{ cat }}"] = "";
{% for page in site.pages %}{% if page.categories == cat %}{% if page.parent != null %}
sidebar["{{ cat }}"].push({relativeurl:"{{ page.url }}", url:"{{page.root}}{{ page.url | remove_first:'/' }}", parent: "{{ page.parent }}", weight:{% if page.weight != null %} {{ page.weight }}{% else %} 0{% endif %}, title: "{{ page.title }}"});
root["{{ cat }}"] = "{{page.root}}";
{% endif %}{% endif %}{% endfor %}{% endfor %}


function addChildren(categoryName, categoryPages, categoryRoot, parentUrl) {
  var tree = [];
  var children = categoryPages.filter(function(x) {
    return (parentUrl == x.parent) ||
    (parentUrl == (categoryRoot + categoryName.toLowerCase() + "/" + x.parent));
  });
  if (children == null || children.length == 0) return null;
  for (var i=0; i<children.length; i++) {
    tree.push({"title":children[i].title, "url":children[i].url, "weight":children[i].weight,
     "children":addChildren(categoryName, categoryPages, categoryRoot, children[i].url)});
  }
  tree.sort(function(a,b) {
    return(a.weight - b.weight);
  });
  return tree;
}

function makeSideBar(categoryName) {
  var tree = addChildren(categoryName, sidebar[categoryName], root[categoryName], 'none');
  return treeToDom(tree);
}

function treeToDom(tree) {
  var rootUl = document.createElement("ul");
  $("#sidebar_menu").append(rootUl);
  appendChildrenToDom(rootUl, tree);
}

function appendChildrenToDom(currentDomElement, tree) {
  for (var i=0; i<tree.length; i++) {
    var li = document.createElement("li");
    if (tree[i].children) {
      li.className="parent_li";
      var icon = document.createElement("i");
      icon.className= "fa fa-minus-square-o";
      icon.title="Collapse this branch";
      icon.onclick=function() {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
          children.hide('fast');
          $(this).attr('title', 'Expand this branch').addClass('fa-plus-square-o').removeClass('fa-minus-square-o');
        } else {
          children.show('fast');
          $(this).attr('title', 'Collapse this branch').addClass('fa-minus-square-o').removeClass('fa-plus-square-o');
        }
      };
      li.appendChild(icon);
    }
    var a = document.createElement("a");
    a.href=tree[i].url;
    a.appendChild(document.createTextNode(' '+tree[i].title));
    li.appendChild(a);
    currentDomElement.appendChild(li);
    if (tree[i].children) {
      var innerUl = document.createElement("ul");
      li.appendChild(innerUl);
      appendChildrenToDom(innerUl, tree[i].children);
    }
  }
}

function createBreadcrumbs(category, currentSection) {
  var pageRoot = root[category];
  if (sidebar[category]) {
    var locations = [];
    var currentPath = location.pathname;
    var currentCrumb = sidebar[category].filter(function(x) {return x.relativeurl == currentPath})[0]
    while (currentCrumb) {
      locations.unshift(currentCrumb);
      if (currentCrumb.parent == "none") break;
      currentPath = "/" + category.toLowerCase() + "/" + currentCrumb.parent;
      currentCrumb = sidebar[category].filter(function(x) {return x.relativeurl == currentPath})[0]
    }
  }

  var breadcrumbsHtml = "<ol class='breadcrumb'>";
  breadcrumbsHtml += "<li><a href='" + pageRoot + "'>Home</a></li>";
  breadcrumbsHtml += "<li><a href='" + pageRoot + category.toLowerCase() + "/'>" + currentSection + "</a></li>";
  if (locations.length > 0) {
    for (var i=0; i<locations.length; i++) {
      breadcrumbsHtml += "<li><a href='" + locations[i].url +"'>" + locations[i].title + "</a></li>";
    }
  }
  breadcrumbsHtml += "</ol>";
  $("#breadcrumbs").append(breadcrumbsHtml);
}
