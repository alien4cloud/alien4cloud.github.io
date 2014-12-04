$(function(){
  // Bind the event.
  $(window).hashchange( function(){
    // console.log('{{root}}');
    var hash = location.hash.replace( /^#/, '' );
    if(hash && hash!== null && hash.match(/html$/)) {
      $("#content-parent").load(hash);
    }
  })
  // Trigger the event (useful on page load).
  $(window).hashchange();
});
