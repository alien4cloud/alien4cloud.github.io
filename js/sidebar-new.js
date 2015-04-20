var sidebarTree = {};
var node, children;


  sidebarTree["DOCUMENTATION"] = {
    'name': "DOCUMENTATION",
    'children': [],
    'collapsed': true
  };

  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'about') {
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
      

      node.name = "about";
      node.title = "About";
      node.url = "documentation/about.html";
      node.weight =  100;
      node.root = "../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'admin') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'admin',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'advanced_configuration') {
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
      

      node.name = "advanced_configuration";
      node.title = "Advanced configuration";
      node.url = "documentation/admin/advanced_configuration.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'application_management') {
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
      

      node.name = "application_management";
      node.title = "Application(s) management";
      node.url = "documentation/user_guide/application_management.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'concepts-applications') {
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
      

      node.name = "concepts-applications";
      node.title = "Applications";
      node.url = "documentation/concepts/applications.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_artifact_definition') {
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
      

      node.name = "tosca_ref_types_artifact_definition";
      node.title = "Artifact definition";
      node.url = "documentation/devops_guide/tosca_grammar/artifact_definition.html";
      node.weight =  700;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_artifact_type') {
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
      

      node.name = "tosca_ref_types_artifact_type";
      node.title = "Artifact type";
      node.url = "documentation/devops_guide/tosca_grammar/artifact_type.html";
      node.weight =  100;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_attribute_definition') {
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
      

      node.name = "tosca_ref_types_attribute_definition";
      node.title = "Attribute definition";
      node.url = "documentation/devops_guide/tosca_grammar/attribute_definition.html";
      node.weight =  1200;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'admin') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'admin',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'backup_restore') {
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
      

      node.name = "backup_restore";
      node.title = "Backup and restore";
      node.url = "documentation/admin/backup_restore.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_blockstorage') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_blockstorage',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_blockstorage_default') {
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
      

      node.name = "cloudify_2_blockstorage_default";
      node.title = "Defaut Blockstorage";
      node.url = "documentation/cloudify2_driver/blockstorage.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_capability_definition') {
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
      

      node.name = "tosca_ref_capability_definition";
      node.title = "Capability definition";
      node.url = "documentation/devops_guide/tosca_grammar/capability_definition.html";
      node.weight =  600;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_capability_type') {
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
      

      node.name = "tosca_ref_types_capability_type";
      node.title = "Capability type";
      node.url = "documentation/devops_guide/tosca_grammar/capability_type.html";
      node.weight =  200;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloud_management') {
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
      

      node.name = "cloud_management";
      node.title = "Cloud(s) management";
      node.url = "documentation/user_guide/cloud_management.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_csar') {
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
      

      node.name = "tosca_ref_csar";
      node.title = "Cloud Service Archive";
      node.url = "documentation/devops_guide/cloud_service_archive.html";
      node.weight =  100;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_prerequisites') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_prerequisites',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_customizing_cloudify') {
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
      

      node.name = "cloudify_2_customizing_cloudify";
      node.title = "Customizing Cloudify";
      node.url = "documentation/cloudify2_driver/cloudify.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'concepts-clouds') {
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
      

      node.name = "concepts-clouds";
      node.title = "Clouds";
      node.url = "documentation/concepts/clouds.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'concepts-components') {
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
      

      node.name = "concepts-components";
      node.title = "Components";
      node.url = "documentation/concepts/components.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'components_repo') {
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
      

      node.name = "components_repo";
      node.title = "Components catalog";
      node.url = "documentation/user_guide/components/components_catalog.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'components_repo') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'components_repo',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'components_upload') {
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
      

      node.name = "components_upload";
      node.title = "Managing components";
      node.url = "documentation/user_guide/components/components_management.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'components_repo') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'components_repo',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'components_search') {
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
      

      node.name = "components_search";
      node.title = "Searching components";
      node.url = "documentation/user_guide/components/components_search.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'concepts') {
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
      

      node.name = "concepts";
      node.title = "Concepts";
      node.url = "documentation/concepts/concepts.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_constraints') {
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
      

      node.name = "tosca_ref_types_constraints";
      node.title = "Constraint clause";
      node.url = "documentation/devops_guide/tosca_grammar/constraints.html";
      node.weight =  1400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_blockstorage') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_blockstorage',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_blockstorage_custom') {
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
      

      node.name = "cloudify_2_blockstorage_custom";
      node.title = "Customised Blockstorage";
      node.url = "documentation/cloudify2_driver/custom_blockstorage.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_definitions') {
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
      

      node.name = "tosca_ref_definitions";
      node.title = "Definitions document";
      node.url = "documentation/devops_guide/tosca_grammar/definitions_file.html";
      node.weight =  300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'devops') {
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
      

      node.name = "devops";
      node.title = "Dev Ops Guide";
      node.url = "documentation/devops_guide/dev_ops_guide.html";
      node.weight =  500;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_function_definition') {
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
      

      node.name = "tosca_ref_types_function_definition";
      node.title = "Function definition";
      node.url = "documentation/devops_guide/tosca_grammar/function_definition.html";
      node.weight =  1100;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_types_function_definition') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_types_function_definition',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_get_attribute_definition') {
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
      

      node.name = "tosca_ref_get_attribute_definition";
      node.title = "get_attribute";
      node.url = "documentation/devops_guide/tosca_grammar/get_attribute_definition.html";
      node.weight =  200;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_types_function_definition') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_types_function_definition',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_get_input') {
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
      

      node.name = "tosca_ref_get_input";
      node.title = "get_input";
      node.url = "documentation/devops_guide/tosca_grammar/get_input.html";
      node.weight =  100;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_types_function_definition') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_types_function_definition',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_get_property_definition') {
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
      

      node.name = "tosca_ref_get_property_definition";
      node.title = "get_property";
      node.url = "documentation/devops_guide/tosca_grammar/get_property_definition.html";
      node.weight =  100;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'getting_started') {
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
      

      node.name = "getting_started";
      node.title = "Getting started";
      node.url = "documentation/getting_started/getting_started.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_3_index') {
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
      

      node.name = "cloudify_3_index";
      node.title = "Cloudify 3 PaaS Provider";
      node.url = "documentation/cloudify3_driver/index.html";
      node.weight =  1000;
      node.root = "../../";
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_index') {
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
      

      node.name = "cloudify_2_index";
      node.title = "Cloudify 2 PaaS Provider";
      node.url = "documentation/cloudify2_driver/index.html";
      node.weight =  1000;
      node.root = "../../";
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        node = parent;
      

      node.name = "index";
      node.title = "ALIEN 4 Cloud - Documentation";
      node.url = "documentation/index.html";
      node.weight =  0;
      node.root = "../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'admin') {
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
      

      node.name = "admin";
      node.title = "Administration Guide";
      node.url = "documentation/admin_guide/index.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_tosca') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_tosca',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_inputs') {
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
      

      node.name = "cloudify_2_inputs";
      node.title = "Inputs and others variables";
      node.url = "documentation/cloudify2_driver/inputs_env_vars.html";
      node.weight =  101;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_install') {
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
      

      node.name = "cloudify_2_install";
      node.title = "Installing and configuring";
      node.url = "documentation/cloudify2_driver/install_config.html";
      node.weight =  2000;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_3_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_3_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_3_install') {
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
      

      node.name = "cloudify_3_install";
      node.title = "Installing and configuring";
      node.url = "documentation/cloudify3_driver/install_config.html";
      node.weight =  2000;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'admin') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'admin',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'intallation_configuration') {
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
      

      node.name = "intallation_configuration";
      node.title = "Installation and configuration";
      node.url = "documentation/admin_guide/installation_configuration.html";
      node.weight =  10;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_interface_definition') {
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
      

      node.name = "tosca_ref_types_interface_definition";
      node.title = "Interface definition";
      node.url = "documentation/devops_guide/tosca_grammar/interface_definition.html";
      node.weight =  800;
      node.root = "../../../";
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'lamp_stack') {
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
      

      node.name = "lamp_stack";
      node.title = "LAMP Stack Tutorial";
      node.url = "documentation/devops_guide/lamp_stack_tutorial/lamp_stack.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'lamp_stack') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'lamp_stack',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'lamp_stack_apache') {
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
      

      node.name = "lamp_stack_apache";
      node.title = "Component Apache HTTP";
      node.url = "documentation/devops_guide/lamp_stack_tutorial/lamp_stack_apache.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'lamp_stack') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'lamp_stack',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'lamp_stack_application') {
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
      

      node.name = "lamp_stack_application";
      node.title = "Stack Application Topology";
      node.url = "documentation/devops_guide/lamp_stack_tutorial/lamp_stack_application.html";
      node.weight =  800;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'lamp_stack') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'lamp_stack',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'lamp_stack_blockstorage') {
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
      

      node.name = "lamp_stack_blockstorage";
      node.title = "Component BlockStorage";
      node.url = "documentation/devops_guide/lamp_stack_tutorial/lamp_stack_blockstorage.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'lamp_stack') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'lamp_stack',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'lamp_stack_mysql') {
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
      

      node.name = "lamp_stack_mysql";
      node.title = "Component MySQL";
      node.url = "documentation/devops_guide/lamp_stack_tutorial/lamp_stack_mysql.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'lamp_stack') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'lamp_stack',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'lamp_stack_php') {
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
      

      node.name = "lamp_stack_php";
      node.title = "Component PHP";
      node.url = "documentation/devops_guide/lamp_stack_tutorial/lamp_stack_php.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'lamp_stack') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'lamp_stack',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'lamp_stack_wordpress') {
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
      

      node.name = "lamp_stack_wordpress";
      node.title = "Component Wordpress";
      node.url = "documentation/devops_guide/lamp_stack_tutorial/lamp_stack_wordpress.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'admin') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'admin',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'advanced_configuration') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'advanced_configuration',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'ldap') {
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
      

      node.name = "ldap";
      node.title = "LDAP integration";
      node.url = "documentation/admin/ldap.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_tosca') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_tosca',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_lifecycle') {
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
      

      node.name = "cloudify_2_lifecycle";
      node.title = "Lifecycles specifics for Cloudify";
      node.url = "documentation/cloudify2_driver/lifecycle_spec.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_topology_template') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_topology_template',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_node_template') {
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
      

      node.name = "tosca_ref_node_template";
      node.title = "Node template";
      node.url = "documentation/devops_guide/tosca_grammar/node_template.html";
      node.weight =  300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_node_type') {
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
      

      node.name = "tosca_ref_types_node_type";
      node.title = "Node type";
      node.url = "documentation/devops_guide/tosca_grammar/node_type.html";
      node.weight =  300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_operation_definition') {
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
      

      node.name = "tosca_ref_types_operation_definition";
      node.title = "Operation definition";
      node.url = "documentation/devops_guide/tosca_grammar/operation_definition.html";
      node.weight =  900;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_tosca') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_tosca',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_tosca_interfaces_extentions') {
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
      

      node.name = "cloudify_2_tosca_interfaces_extentions";
      node.title = "Other specifics interfaces";
      node.url = "documentation/cloudify2_driver/other_interfaces.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_parameter_definition') {
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
      

      node.name = "tosca_ref_types_parameter_definition";
      node.title = "Parameter definition";
      node.url = "documentation/devops_guide/tosca_grammar/parameter_definition.html";
      node.weight =  1000;
      node.root = "../../../";
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'plugin_management') {
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
      

      node.name = "plugin_management";
      node.title = "Plugin(s) management";
      node.url = "documentation/user_guide/plugin_management.html";
      node.weight =  75;
      node.root = "../../";
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_3_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_3_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_3_prerequisites') {
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
      

      node.name = "cloudify_3_prerequisites";
      node.title = "Prerequisites";
      node.url = "documentation/cloudify3_driver/prerequisites.html";
      node.weight =  1000;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_prerequisites') {
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
      

      node.name = "cloudify_2_prerequisites";
      node.title = "Prerequisites";
      node.url = "documentation/cloudify2_driver/prerequisites.html";
      node.weight =  1000;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_property_definition') {
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
      

      node.name = "tosca_ref_types_property_definition";
      node.title = "Property definition";
      node.url = "documentation/devops_guide/tosca_grammar/property_definition.html";
      node.weight =  1300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_relationship_type') {
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
      

      node.name = "tosca_ref_types_relationship_type";
      node.title = "Relationship type";
      node.url = "documentation/devops_guide/tosca_grammar/relationship_type.html";
      node.weight =  400;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_requirement_definition') {
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
      

      node.name = "tosca_ref_requirement_definition";
      node.title = "Requirement definition";
      node.url = "documentation/devops_guide/tosca_grammar/requirement_definition.html";
      node.weight =  500;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'concepts-roles') {
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
      

      node.name = "concepts-roles";
      node.title = "Roles";
      node.url = "documentation/concepts/roles.html";
      node.weight =  1;
      node.root = "../../";
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tutorials') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tutorials',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'component_test') {
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
      

      node.name = "component_test";
      node.title = "Testing custom components";
      node.url = "documentation/devops_guide/design_tutorial/snapshot_topology_test.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tutorials') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tutorials',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'component_test_jenkins') {
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
      

      node.name = "component_test_jenkins";
      node.title = "Tests with jenkins plugin";
      node.url = "documentation/devops_guide/design_tutorial/snapshot_topology_test_jenkins_plugin.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_blockstorage') {
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
      

      node.name = "cloudify_2_blockstorage";
      node.title = "Storage volumes";
      node.url = "documentation/cloudify2_driver/storage.html";
      node.weight =  30000;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'concepts-topologies') {
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
      

      node.name = "concepts-topologies";
      node.title = "Topologies";
      node.url = "documentation/concepts/topologies.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'topology_management') {
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
      

      node.name = "topology_management";
      node.title = "Topology management";
      node.url = "documentation/user_guide/topology_management.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_definitions') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_definitions',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_topology_template') {
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
      

      node.name = "tosca_ref_topology_template";
      node.title = "Topology template";
      node.url = "documentation/devops_guide/tosca_grammar/topology_template.html";
      node.weight =  300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_tosca') {
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
      

      node.name = "cloudify_2_tosca";
      node.title = "TOSCA archive";
      node.url = "documentation/cloudify2_driver/tosca_archive.html";
      node.weight =  10000;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_index') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_index',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'cloudify_2_tosca') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'cloudify_2_tosca',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'cloudify_2_tosca_definitions') {
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
      

      node.name = "cloudify_2_tosca_definitions";
      node.title = "TOSCA definitions";
      node.url = "documentation/cloudify2_driver/tosca_archive_definitions.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_concepts') {
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
      

      node.name = "tosca_concepts";
      node.title = "TOSCA concepts";
      node.url = "documentation/devops_guide/tosca_concepts.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types') {
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
      

      node.name = "tosca_ref_types";
      node.title = "Writing custom types";
      node.url = "documentation/devops_guide/tosca_concepts_types_custom.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_normative') {
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
      

      node.name = "tosca_ref_types_normative";
      node.title = "Normative Types";
      node.url = "documentation/devops_guide/normative_types/tosca_concepts_types_normative.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_types_normative') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_types_normative',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_normative_capa') {
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
      

      node.name = "tosca_ref_types_normative_capa";
      node.title = "Capabilities";
      node.url = "documentation/devops_guide/normative_types/tosca_concepts_types_normative_capabilities.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_types_normative') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_types_normative',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_normative_nodes') {
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
      

      node.name = "tosca_ref_types_normative_nodes";
      node.title = "Nodes";
      node.url = "documentation/devops_guide/normative_types/tosca_concepts_types_normative_nodes.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_types_normative') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_types_normative',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_types_normative_relationships') {
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
      

      node.name = "tosca_ref_types_normative_relationships";
      node.title = "Relationships";
      node.url = "documentation/devops_guide/normative_types/tosca_concepts_types_normative_relationships.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_concepts') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_concepts',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_normative_lifecycle') {
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
      

      node.name = "tosca_ref_normative_lifecycle";
      node.title = "Normative Lifecycle";
      node.url = "documentation/devops_guide/tosca_normative_lifecycle.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tutorials') {
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
      

      node.name = "tutorials";
      node.title = "Create your own components";
      node.url = "documentation/devops_guide/design_tutorial/tutorials.html";
      node.weight =  500;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tutorials') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tutorials',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tutorial_component_design') {
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
      

      node.name = "tutorial_component_design";
      node.title = "Component design";
      node.url = "documentation/devops_guide/design_tutorial/tutorials_component_design.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'devops') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'devops',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tutorials') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tutorials',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tutorial_component_impl') {
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
      

      node.name = "tutorial_component_impl";
      node.title = "Component implementation";
      node.url = "documentation/devops_guide/design_tutorial/tutorials_component_implementation.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'user_guide') {
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
      

      node.name = "user_guide";
      node.title = "User Guide";
      node.url = "documentation/user_guide/user_guide.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'user_guide') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'user_guide',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'user_management') {
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
      

      node.name = "user_management";
      node.title = "User(s) and Roles management";
      node.url = "documentation/user_guide/user_management.html";
      node.weight =  50;
      node.root = "../../";
    
  

  sidebarTree["RELEASE_NOTES"] = {
    'name': "RELEASE_NOTES",
    'children': [],
    'collapsed': true
  };

  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '0.0.10') {
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
      

      node.name = "0.0.10";
      node.title = "ALIEN for Cloud 0.0.10";
      node.url = "release_notes/0.0.10.html";
      node.weight =  10000;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '0.0.11') {
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
      

      node.name = "0.0.11";
      node.title = "ALIEN for Cloud 0.0.11";
      node.url = "release_notes/0.0.11.html";
      node.weight =  9999;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '0.0.12') {
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
      

      node.name = "0.0.12";
      node.title = "ALIEN for Cloud 0.0.12";
      node.url = "release_notes/0.0.12.html";
      node.weight =  9998;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '0.0.13') {
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
      

      node.name = "0.0.13";
      node.title = "ALIEN for Cloud 0.0.13";
      node.url = "release_notes/0.0.13.html";
      node.weight =  9997;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '0.0.14') {
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
      

      node.name = "0.0.14";
      node.title = "ALIEN for Cloud 0.0.14";
      node.url = "release_notes/0.0.14.html";
      node.weight =  9996;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '0.0.15') {
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
      

      node.name = "0.0.15";
      node.title = "ALIEN for Cloud 0.0.15";
      node.url = "release_notes/0.0.15.html";
      node.weight =  9995;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '0.0.16') {
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
      

      node.name = "0.0.16";
      node.title = "ALIEN for Cloud 0.0.16";
      node.url = "release_notes/0.0.16.html";
      node.weight =  9994;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-M3') {
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
      

      node.name = "1.0.0-M3";
      node.title = "ALIEN for Cloud 1.0.0-M3";
      node.url = "release_notes/1.0.0-M3.html";
      node.weight =  9993;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-SM18') {
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
      

      node.name = "1.0.0-SM18";
      node.title = "ALIEN for Cloud 1.0.0-SM18";
      node.url = "release_notes/1.0.0-SM18.html";
      node.weight =  9992;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-SM19') {
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
      

      node.name = "1.0.0-SM19";
      node.title = "ALIEN for Cloud 1.0.0-SM19";
      node.url = "release_notes/1.0.0-SM19.html";
      node.weight =  9991;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-SM20') {
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
      

      node.name = "1.0.0-SM20";
      node.title = "ALIEN for Cloud 1.0.0-SM20";
      node.url = "release_notes/1.0.0-SM20.html";
      node.weight =  9990;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-SM21') {
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
      

      node.name = "1.0.0-SM21";
      node.title = "ALIEN for Cloud 1.0.0-SM21";
      node.url = "release_notes/1.0.0-SM21.html";
      node.weight =  9989;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-SM22') {
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
      

      node.name = "1.0.0-SM22";
      node.title = "ALIEN for Cloud 1.0.0-SM22";
      node.url = "release_notes/1.0.0-SM22.html";
      node.weight =  9988;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-SM23') {
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
      

      node.name = "1.0.0-SM23";
      node.title = "ALIEN for Cloud 1.0.0-SM23";
      node.url = "release_notes/1.0.0-SM23.html";
      node.weight =  9987;
      node.root = "../";
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'release_note') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'release_note',
              'title': '-',
              'children': [],
              'collapsed': true
            };
            parent.children.push(nextParent);
          }
          parent = nextParent;
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '1.0.0-SM24') {
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
      

      node.name = "1.0.0-SM24";
      node.title = "ALIEN for Cloud 1.0.0-SM24";
      node.url = "release_notes/1.0.0-SM24.html";
      node.weight =  9986;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["RELEASE_NOTES"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'release_note') {
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
      

      node.name = "release_note";
      node.title = "Release Notes";
      node.url = "release_notes/index.html";
      node.weight =  0;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  

  sidebarTree["DEVELOPER_GUIDE"] = {
    'name': "DEVELOPER_GUIDE",
    'children': [],
    'collapsed': true
  };

  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["DEVELOPER_GUIDE"];
      
        node = parent;
      

      node.name = "index";
      node.title = "Developer Guide";
      node.url = "developer_guide/index.html";
      node.weight =  0;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["DEVELOPER_GUIDE"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'internal_arch') {
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
      

      node.name = "internal_arch";
      node.title = "ALIEN internal architecture";
      node.url = "developer_guide/internal-architecture.html";
      node.weight =  100;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["DEVELOPER_GUIDE"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'plugin_paas_provider') {
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
      

      node.name = "plugin_paas_provider";
      node.title = "PaaS provider plugins";
      node.url = "developer_guide/plugin-paas-provider.html";
      node.weight =  400;
      node.root = "../";
    
  
    
      var parent = sidebarTree["DEVELOPER_GUIDE"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'plugins') {
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
      

      node.name = "plugins";
      node.title = "ALIEN plugins";
      node.url = "developer_guide/plugin.html";
      node.weight =  200;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  

  sidebarTree["ROADMAP"] = {
    'name': "ROADMAP",
    'children': [],
    'collapsed': true
  };

  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["ROADMAP"];
      
        node = parent;
      

      node.name = "index";
      node.title = "Roadmap";
      node.url = "roadmap/index.html";
      node.weight =  0;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["ROADMAP"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === '') {
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
      

      node.name = "";
      node.title = "Previous versions";
      node.url = "roadmap/past.html";
      node.weight =  0;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  


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


  doSort(sidebarTree["DOCUMENTATION"].children);

  doSort(sidebarTree["RELEASE_NOTES"].children);

  doSort(sidebarTree["DEVELOPER_GUIDE"].children);

  doSort(sidebarTree["ROADMAP"].children);


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
