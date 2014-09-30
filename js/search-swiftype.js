$(document).ready(function () {


    
    var config = {
        //https://api.swiftype.com/api/v1/engines/gigaspaces-docs/search.json' -H 'Content-Type: application/json' -d '{"auth_token":"iypuoKUJYuWKHyJs2oFp","per_page":2,"page":1,"q":"mongodb"}
        apiURL:'https://api.swiftype.com/api/v1/public/engines/search.json',
        params: {
            "engine_key":"vskywTXhmRpTsNEQ9nux",
            "per_page":10,
            "page":1
        }
    }

    
    $('#go-search').click(function () {        
        search();
        return false;
    });

    function displaySearch(settings, data) {
        var resultsDiv = $('#content');
        var results = data.records.page;
        if (results) {         
            //handle back / forward event 
            //currentContent = resultsDiv.html();
            resultsDiv.text('');
            var paginationButtons = "<ul class=\"pager\">" +
                                    "<li rel=\"prev\" class=\"previous disabled\"><a href=\"#\">&larr; Previous</a></li>" +
                                    "<li rel=\"next\" class=\"next disabled\"><a href=\"#\">Next &rarr;</a></li></ul>"
            resultsDiv.append("<h1 style=\"margin-top: 0px;\">Search Results</h1>");
            resultsDiv.append(paginationButtons);
            
            // If results were returned, add them to a content div
            resultsDiv.append("<ul id=\"results-ul\" style=\"padding-left:0px;\"/>");
            var ul = $("#results-ul");
            for (var i = 0; i < results.length; i++) {
                ul.append(new result(results[i]) + '');
            }

            ul.hide().appendTo(resultsDiv).fadeIn('slow');            
            resultsDiv.append(paginationButtons);

            
            if (settings.params.page > 1) {                
                $("[rel='prev']").attr("class", "previous enabled");
                $("[rel='prev']").click(function () {
                    search({params:{ page:settings.params.page - 1}});
                });
            } else {
                $("[rel='prev']").attr("class", "previous disabled");
                $("[rel='prev']").bind('click', false);
            }

            if (data.info.page.total_result_count > (settings.params.page) * settings.params.per_page) {
                $("[rel='next']").attr("class", "next enabled");
                $("[rel='next']").click(function () {
                    search({params:{page:settings.params.page + 1}});
                });
            } else {
                $("[rel='next']").attr("class", "next disabled");
                $("[rel='next']").bind('click', false);
            }
        }
        else {
            // No results were found for this search.
            resultsDiv.empty();
            $('<p>', {html:"<div style=\"height:500px\"><h3 class=\"searchNoResult\">Oops, we couldn't find what you were looking for. Try rephrasing your search</h3></div>"}).hide().appendTo(resultsDiv).fadeIn();        
        }
    }

    function search(settings) {

        var query = $('#q').val() || "";
        if (query.trim() == "") return; 

        // If no parameters are supplied to the function,
        // it takes its defaults from the config object above:
        settings = $.extend(true, {}, config, settings);

        settings.params.q = query; 
        
        
        try {            
            $.ajax({
                type:'GET',
                url:settings.apiURL,
                dataType:'jsonp',
                data: settings.params,
                success: function(data) {
                    displaySearch(settings, data);
                    /* //history handling, disabled for now 
                    var origLocation = document.location;                     
                    history.pushState({"settings":settings, "data":data}, "Search results for " + settings.term, 
                                      origLocation + "#search?q=" + settings.term + pageNum);
                    
                    window.addEventListener("popstate", function(e) {
                        // URL location
                        var location = document.location;

                        // state
                        var state = e.state;
                        
                        // return to last state
                        if (state != null && location.href.indexOf("#search?") != -1) {
                            displaySearch(state["settings"], state["data"]);
                        } else if (location.href == origLocation.href) {
                            $('#content').html(currentContent);    
                        }
                        
                    });
                    */
                },
                error: function(e) {
                    console.log(e +"");
                }
            });
        }
        catch (e) {
            console.log(e + '');
        }
        


    }

    function result(r) {

        // This is class definition. Object of this class are created for
        // each result. The markup is generated by the .toString() method.

        
        this.re = /http:\/\/.*\/(.*)\/.*/;

        this.endsWith = function(str, suffix) {
            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        }

        this.startsWith = function(str, prefix) {
            return str.indexOf(prefix) == 0;
        }

        this.getCategory = function(link) {
            var regexArray = this.re.exec(link);
            if (regexArray && regexArray.length > 1) {
                var path = regexArray[1]; 
                if (this.endsWith(path,"net")) return "[XAP.NET] ";
                else if (this.startsWith(path,"adm")) return "[XAP/Admin] ";
                else if (this.startsWith(path,"xap")) return "[XAP/Java] ";
                else if (path == "sbp") return "[Solution & Best Practices] ";
            }
            return "";
        }

        var title = r.highlight.title; 
        if (!title) title = r.title; 

        var snippet = r.highlight.body; 
        if (!snippet) snippet = r.body; 

        var arr = [
            '<li class="search-result">',
            '<h4><a href="',r.url,'">',this.getCategory(r.url),title,'</a></h4>',
            '<p>',
            r.highlight.body,'&nbsp;&nbsp;',
            '<a href="',r.url, '">Read More &raquo;</a>',
            '</p>',            
            '</li>'
        ];

        // The toString method.
        this.toString = function () {
            return arr.join('');
        }
        
    }    


});
