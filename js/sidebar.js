var sidebarTree = {};
var node, children;


  sidebarTree["DOCUMENTATION"] = {
    'name': "DOCUMENTATION",
    'children': [],
    'collapsed': true
  };

  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
          if(children[i].name === 'getting_started_add_components') {
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
      

      node.name = "getting_started_add_components";
      node.title = "Components catalog";
      node.url = "documentation/getting_started/adding_components.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

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
      node.url = "documentation/advanced_configuration/advanced_configuration.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/artifact_definition.html";
      node.weight =  700;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/artifact_type.html";
      node.weight =  100;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/attribute_definition.html";
      node.weight =  1200;
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
      node.title = "ALIEN Components repository";
      node.url = "documentation/tosca_ref/calm_components_repo.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
      node.title = "Components archive";
      node.url = "documentation/tosca_ref/calm_components_repo_uploadarchive.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/capability_definition.html";
      node.weight =  600;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/capability_type.html";
      node.weight =  200;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/cloud_service_archive.html";
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
      node.title = "Components browsing and searching";
      node.url = "documentation/tosca_ref/components_browse_search.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/constraints.html";
      node.weight =  1400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
          if(children[i].name === 'getting_started_create_cloud') {
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
      

      node.name = "getting_started_create_cloud";
      node.title = "Cloud(s) configuration";
      node.url = "documentation/getting_started/creating_cloud.html";
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/definitions_file.html";
      node.weight =  300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/function_definition.html";
      node.weight =  1100;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/get_attribute_definition.html";
      node.weight =  200;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/get_property_definition.html";
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
      node.weight =  100;
      node.root = "../../";
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'tosca_ref_root') {
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
      

      node.name = "tosca_ref_root";
      node.title = "Components and TOSCA ref.";
      node.url = "documentation/tosca_ref/index.html";
      node.weight =  100;
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/interface_definition.html";
      node.weight =  800;
      node.root = "../../../";
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/lamp_stack.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/lamp_stack_apache.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/lamp_stack_application.html";
      node.weight =  800;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/lamp_stack_blockstorage.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/lamp_stack_mysql.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/lamp_stack_php.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/lamp_stack_wordpress.html";
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/node_type.html";
      node.weight =  300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/operation_definition.html";
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/parameter_definition.html";
      node.weight =  1000;
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/property_definition.html";
      node.weight =  1300;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/relationship_type.html";
      node.weight =  400;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_grammar/requirement_definition.html";
      node.weight =  500;
      node.root = "../../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        

        children = parent.children;
        // try to find the node if exists already
        node = null;
        for (var i=0; i<children.length; i++) {
          if(children[i].name === 'roles') {
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
      

      node.name = "roles";
      node.title = "Role in Alien 4 Cloud";
      node.url = "documentation/advanced_configuration/roles.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/snapshot_topology_test.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/snapshot_topology_test_jenkins_plugin.html";
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
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
          if(children[i].name === 'tosca_ref') {
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
      

      node.name = "tosca_ref";
      node.title = "TOSCA concepts";
      node.url = "documentation/tosca_ref/tosca_concepts.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_concepts_types_custom.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/normative_types/tosca_concepts_types_normative.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/normative_types/tosca_concepts_types_normative_capabilities.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/normative_types/tosca_concepts_types_normative_nodes.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/normative_types/tosca_concepts_types_normative_relationships.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
  
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'tosca_ref_root') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref_root',
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
            if(children[i].name === 'tosca_ref') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'tosca_ref',
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
      node.url = "documentation/tosca_ref/tosca_normative_lifecycle.html";
      node.weight =  400;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/tutorials.html";
      node.weight =  300;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/tutorials_component_design.html";
      node.weight =  100;
      node.root = "../../";
    
  
    
      var parent = sidebarTree["DOCUMENTATION"];
      
        
          var nextParent = null;
          children = parent.children;
          for (var i=0; i<children.length; i++) {
            if(children[i].name === 'getting_started') {
              nextParent = children[i];
            }
          }
          if(nextParent === null) {
            nextParent = {
              'name': 'getting_started',
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
      node.url = "documentation/getting_started/tutorials_component_implementation.html";
      node.weight =  200;
      node.root = "../../";
    
  
    
  

  sidebarTree["ALIEN_ABOUT"] = {
    'name': "ALIEN_ABOUT",
    'children': [],
    'collapsed': true
  };

  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
      var parent = sidebarTree["ALIEN_ABOUT"];
      
        

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
      node.title = "About Alien4Cloud";
      node.url = "alien_about/index.html";
      node.weight =  0;
      node.root = "../";
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  
    
  

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

  doSort(sidebarTree["ALIEN_ABOUT"].children);

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
