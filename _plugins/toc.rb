require 'kramdown'

module Jekyll
  class TocTag < Liquid::Tag
    include Liquid::StandardFilters

    def initialize(tag_name, text, tokens)
      super
        # default value
        @minlevel = 1
        @maxlevel = 6
        #@location = 'top' # top bottom both # done
        @type = 'list' # flat list # done
        #@separator = 'pipe' # brackets brace parens pipe # lets ignore this since we are using bootstrap
        #@style = 'square' # lets ignore this since we are using bootstrap

        unless text.nil? # default value
          markups = text.split("|")

          minlevel  = markups.select {|x| x =~ /minLevel/}[0]
          maxlevel  = markups.select {|x| x =~ /maxLevel/}[0]
          #location  = markups.select {|x| x =~ /location/}[0]
          type      = markups.select {|x| x =~ /type/}[0]
          #separator = markups.select {|x| x =~ /separator/}[0]
          #style     = markups.select {|x| x =~ /style/}[0]

          @minlevel  = minlevel.sub("minLevel=", '').to_i if minlevel
          @maxlevel  = maxlevel.sub("maxLevel=", '').to_i if maxlevel
          #@location  = location.sub("location=", '') if location
          @type      = type.sub("type=", '') if type
          #@separator = separator.sub("separator=", '') if separator
          #@style     = style.sub("style=", '') if style

        end
      end

      def render(context)
        add_toc(context, super)
      end

      def add_toc(context, content)

        random_id = rand(10000000).to_s
        output = "<div id='#{random_id}'>"
        if @type == 'flat'
          top_added_html = "<ul class='nav nav-pills' id='toczone-top#{random_id}'></ul>"
          bot_added_html = "<ul class='nav nav-pills' id='toczone-bot#{random_id}'></ul>"
        else
          top_added_html = "<ul class='nav nav-pills nav-stacked' id='toczone-top#{random_id}'></ul>"
          bot_added_html = "<ul class='nav nav-pills nav-stacked' id='toczone-bot#{random_id}'></ul>"
        end

        #if @location == 'top'
          output << top_added_html + Kramdown::Document.new(content).to_html
        #elsif @location == 'bottom'
        #  output << Kramdown::Document.new(content).to_html + bot_added_html
        #else
        #  output << top_added_html + Kramdown::Document.new(content).to_html + bot_added_html
        #end

        tocheaders = (@minlevel..@maxlevel).to_a.map {|x|'h' + x.to_s}.join(',')

        output << "</div>"
        output << <<-javascript1
<script type='text/javascript'>
  tocheadersz["#{random_id}"] = "#{tocheaders}";
</script>

javascript1
      end
    end
  end


Liquid::Template.register_tag('toc', Jekyll::TocTag)
