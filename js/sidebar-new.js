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
  appendChildrenToDom(rootUl, tree, root, false, 0);
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
      } else {
        treeNode.collapsed = true;
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

function appendChildrenToDom(currentDomElement, tree, root, hidden, margin) {
  for (var i=0; i<tree.length; i++) {
    var treeNode = tree[i];
    var li = document.createElement("li");
    $(li).attr('link', '#' + root + treeNode.url);
    li.onclick = function() {
      window.location = $(this).attr('link');
    };
    var titleNode = document.createTextNode(' ' + treeNode.title);
    li.appendChild(titleNode);
    if(treeNode.isCurrent) {
      $(li).addClass('selected');
    }
    if(hidden) {
      li.style.display = 'none';
    }
    li.style.marginLeft = margin+'px';
    currentDomElement.appendChild(li);
    if (treeNode.children) {
      // var innerUl = document.createElement("ul");
      // li.appendChild(innerUl);
      appendChildrenToDom(currentDomElement, treeNode.children, root, !treeNode.isCurrent, margin + 10);
    }
  }
}
