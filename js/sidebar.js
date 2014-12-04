---
layout: null
---

var sidebarTree = {};
var node, children;

{% for cat in site.categories-list %}
  sidebarTree["{{ cat }}"] = {
    'name': "{{cat}}",
    'children': [],
    'collapsed': true
  };

  {% for page in site.pages %}
    {% if page.categories == cat && page.parent != null %}
      var parent = sidebarTree["{{cat}}"];
      {% if page.node_name != "index" %}
        {% for nextParentName in page.parent %}
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === '{{nextParentName}}') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': '{{nextParentName}}',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        {% endfor %}

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '{{page.node_name}}') {
            node = children[i];
          }
        }
        if(node === null) {
          node = {
            'children': [],
            'collapsed': true
          };
          children.push(node);
        }
      {% else %}
        node = parent;
      {% endif %}

      node.name = "{{page.node_name}}";
      node.title = "{{ page.title }}";
      node.url = "{{ page.url | remove_first:'/' }}";
      node.weight = {% if page.weight != null %} {{ page.weight }}{% else %} 0{% endif %};
      node.root = "{{page.root}}";
    {% endif %}
  {% endfor %}
{% endfor %}

function doSort(tree) {
  tree.sort(function(a,b) {
    return(a.weight - b.weight);
  });
  for(var i=0; i<tree.length; i++) {
    if(tree[i].children && tree[i].children.length > 0) {
      doSort(tree[i].children);
    }
  }
}

{% for cat in site.categories-list %}
  doSort(sidebarTree["{{ cat }}"].children);
{% endfor %}

function makeSideBar(categoryName, currentNodeName) {
  var categoryTree = sidebarTree[categoryName];
  var root = getRoot(categoryTree, currentNodeName);
  if(root === null) {
    root = categoryTree.root;
  }
  return treeToDom(categoryTree.children, "/");
}

function getRoot(tree, currentNodeName) {
  for(var i=0; i<tree.children.length; i++) {
    var child = tree.children[i];
    if(child.name === currentNodeName) {
      return child.root;
    } else if(child.children) {

      var root = getRoot(child, currentNodeName);
      if(root !== null) {
        return root;
      }
    }
  }
  return null;
}

function treeToDom(tree, root) {
  var rootUl = document.createElement("ul");
  $("#sidebar_menu").append(rootUl);
  treeCurrent(tree, root);
  appendChildrenToDom(rootUl, tree, root, false);
}

function treeCurrent(tree, root) {
  var hasCurrent = false;
  for (var i=0; i<tree.length; i++) {
    var treeNode = tree[i];
    if (treeNode.children) {
      var isCurrent = treeCurrent(treeNode.children, root);
      if(isCurrent) {
        hasCurrent = true;
        treeNode.collapsed = false;
      }
      treeNode.isCurrent = isCurrent;
    }
    var hashUrl = '#'+root + treeNode.url;
    if(location.hash === hashUrl) {
      hasCurrent = true;
      treeNode.isCurrent = true;
    }
  }
  return hasCurrent;
}

function appendChildrenToDom(currentDomElement, tree, root, hidden) {
  for (var i=0; i<tree.length; i++) {
    var treeNode = tree[i];
    var li = document.createElement("li");
    if (treeNode.children && treeNode.children.length > 0) {
      li.className="parent_li";
      var icon = document.createElement("i");
      if(treeNode.collapsed) {
        icon.className= "fa fa-plus-square-o";
        icon.title="Expand this branch";
      } else {
        icon.className= "fa fa-minus-square-o";
        icon.title="Collapse this branch";
      }
      icon.dataTree = treeNode;
      icon.onclick = function() {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (this.dataTree.collapsed) {
          this.dataTree.collapsed = false;
          children.show('fast');
          $(this).attr('title', 'Collapse this branch').addClass('fa-minus-square-o').removeClass('fa-plus-square-o');
        } else {
          this.dataTree.collapsed = true;
          children.hide('fast');
          $(this).attr('title', 'Expand this branch').addClass('fa-plus-square-o').removeClass('fa-minus-square-o');
        }
      };
      li.appendChild(icon);
    }
    var a = document.createElement("a");
    a.href = '#' + root + treeNode.url;
    var titleNode = document.createTextNode(' ' + treeNode.title);
    if(treeNode.isCurrent) {
      var b = document.createElement("b");
      b.appendChild(titleNode);
      a.appendChild(b);
    } else {
      a.appendChild(titleNode);
    }
    li.appendChild(a);
    if(hidden) {
      li.style.display = "none"
    }
    currentDomElement.appendChild(li);
    if (treeNode.children) {
      var innerUl = document.createElement("ul");
      li.appendChild(innerUl);
      appendChildrenToDom(innerUl, treeNode.children, root, treeNode.collapsed);
    }
  }
}

function createBreadcrumbs(category, currentSection) {
  return;
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
