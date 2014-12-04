// Define a sandbox in which to create the Gist loader jQuery plugin.
// This Gist loader only works with public gists. It will load all of
// the files (in a single request) and then return an array of loaded
// files (with the ability to access by file name).
(function( $, nativeWrite ){

  // When the Gist comes back, the first call to the write() method writes out the stylesheet.
  var writeStyleSheetLink = function( value ){
    // If the stylesheet has not been written before, then append it to the head. Since all the Gists use the same stylesheet, we only have to do this once per page.
    if (!stylesheetIsEmbedded){
      // Append the stylesheet Link tag.
      $( "head:first" ).append( value );
      // Flag the embed so we don't write the Link tag twice.
      stylesheetIsEmbedded = true;
    }

    // Change the write() method for gist content production.
    document.write = writeGistContent;
  };


  // The second write to the document will be for the complete gist content. At this point, we have to parse it out and organize it in a structure.
  var writeGistContent = function( value ){
    // Reset the files (container) we are about to compile.
    files = {};
    // We'll also want to list the files by Index, if the user wants that information.
    files.ordered = [];
    // Parse the Gist HTML in a local DOM tree.
    var gistContent = $( value );
    // Get all of the files in the gist.
    gistContent.find( "div.gist-file" ).each(
      function(){
        // Get a jQuery reference to the current gist node.
        var gistFile = $( this );
        // Get the name of the file. For this, we will return the content of the first Meta anchor that doesn't contain a syntactic link.
        var metaTags = gistFile.find( "div.gist-meta a" )
        .filter(
          function(){
            // Only keep this value if it doesn't
            // contain a useless value.
            return( $( this ).text().search( new RegExp( "^\\s*(view raw|this gist|github)", "i" ) ) === -1 );
          }
        );
        // Get the file name from the first filtered Meta anchor tag.
        var fileName = $.trim( metaTags.first().text() );
        // Get the content of the file. Each file will need to be re-wrapped in its own Gist div.
        var content = $( "<div class='gist'></div>" )
        .append( gistFile );

        // Add the file the collection, indexed by name.
        files[ fileName ] = {
          fileName: fileName,
          content: content
        };

        // Add this file to the "ordered" list as well.
        files.ordered.push( files[ fileName ] );
      }
    );

    // NOTE: At this point, the [files] value has been populated and will be used in the success() callback of the AJAX request.
    document.write = nativeWrite;
  };

  // I flag whether or not a stylesheet has been appending to the current document. Since all Gist requests share the same style, we can disregard all subsequent Link tags.
  var stylesheetIsEmbedded = false;
  // I am the active result for the gist content request.
  var files = null;

  // Define the actual script loader.
  $.getGist = function( gistID ){

    // Before the Script is requested, override the native write() method so that we can intercept the calls for the Gist stylesheet and content output.
    document.write = writeStyleSheetLink;

    // Create a deferred value for our Gist content.
    var result = $.Deferred();

    // Request the remote Script (that will write out the Gist content).
    $.ajax({
      url: (gistID),
      dataType: "script",
      success: function(){
        // Resolve the promise with the compiled Gist files.
        result.resolve( files );
      },
      error: function( jqXHR, status, error ){
        // Reject the promise.
        result.reject( status, error );
      }
    });

    // Return the promise of the gist.
    return( result.promise() );
  };

})( jQuery, document.write );

(function($) {
  "use strict";

  var sequenceProcess = function (containers, currentIndex) {
    if(containers.length <= currentIndex) {
      return;
    }
    var container = containers[currentIndex];
    var gistId = container.data("gist");
    // Get the gist with the given ID. This will come back as both a hash of file names and an ordered array.
    var gistResult = $.getGist(gistId);
    // When the gist has loaded, append the contents to the rendered DOM.
    gistResult.done(
      function( gist ) {
        // Get the ordered files.
        var ordered = gist.ordered;
        // Add each gist to the content.
        for (var i = 0 ; i < ordered.length; i++){
          // Add the gist content.
          container.append( ordered[ i ].content );
        }
        sequenceProcess(containers, currentIndex + 1);
      }
    );
  }

  $.fn.gist = function(options) {
    var containers = [];
    this.each(function() {
      var container = $(this);
      containers.push(container);
    });
    sequenceProcess(containers, 0);
  };
})(jQuery);
