$(function () {
  $(".tabsection").each(function(index) {
    list = "";

    $(this).find(".tab-pane").each(function(index) {
      list_class = "";
      timestamp = parseInt(Date.now() * Math.random()) ;

      if(index === 0){
        list_class = "class='active'";
        $(this).prop("class", $(this).prop("class") + " active");
      }

      list += "<li " + list_class +"><a href='#" + timestamp + $(this).prop("id") +"'>" + $(this).prop("title") +"</a></li>";
      $(this).prop("id", timestamp + $(this).prop("id"));
    });
    $(this).find(".nav").html(list);
  });

  $('.tabsection ul.nav a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  summary_url = "";
  $('.col-md-9').children('h1').each(function(index, item) {
    summary_url += '<li><a href="#'+item.id+'">'+item.innerHTML+'</a></li>';
  });

  $("#summarypanel").html(summary_url);

  if ($("#childrentree").length !== 0) {
    var childrentreeid = $("a:contains('" + $("title").text() +"')");
    var childrens_li = childrentreeid.siblings("ul").children("li");
    $("#childrentree").append("<ul></ul>");
    childrentreeul = $("#childrentree").children("ul");
    childrens_li.each(function() {
      tmp = $(this).clone();
      childrentreeul.append(tmp);
    });
  }

  if ($("#gallery").length !== 0) {
    $("#gallery a").fancybox();
  }
})
