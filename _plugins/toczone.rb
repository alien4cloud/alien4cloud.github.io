require 'kramdown'

module Jekyll
  module Tags
    class Toczone < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        # default value
        @minlevel = 1
        @maxlevel = 6
        @location = 'top' # top bottom both # done
        @type = 'flat' # flat list # done
        #@separator = 'pipe' # brackets brace parens pipe # lets ignore this since we are using bootstrap

        unless markup.nil? # default value
          markups = markup.split("|")

          minlevel  = markups.select {|x| x =~ /minLevel/}[0]
          maxlevel  = markups.select {|x| x =~ /maxLevel/}[0]
          location  = markups.select {|x| x =~ /location/}[0]
          type      = markups.select {|x| x =~ /type/}[0]
          #separator = markups.select {|x| x =~ /separator/}[0]

          @minlevel  = minlevel.sub("minLevel=", '').to_i if minlevel
          @maxlevel  = maxlevel.sub("maxLevel=", '').to_i if maxlevel
          @location  = location.sub("location=", '') if location
          @type      = type.sub("type=", '') if type
          #@separator = minlevel.sub("separator=", '') if separator

        end
      end

      def render(context)
        add_toczone(context, super)
      end

      def add_toczone(context, content)

        random_id = rand(10000000).to_s
        output = "<div id='#{random_id}'>"
        if @type == 'flat'
          top_added_html = "<ul class='nav nav-pills' id='toczone-top#{random_id}'></ul>"
          bot_added_html = "<ul class='nav nav-pills' id='toczone-bot#{random_id}'></ul>"
        else
          top_added_html = "<ul class='nav nav-pills nav-stacked' id='toczone-top#{random_id}'></ul>"
          bot_added_html = "<ul class='nav nav-pills nav-stacked' id='toczone-bot#{random_id}'></ul>"
        end

        if @location == 'top'
          output << top_added_html + Kramdown::Document.new(content).to_html
        elsif @location == 'bottom'
          output << Kramdown::Document.new(content).to_html + bot_added_html
        else
          output << top_added_html + Kramdown::Document.new(content).to_html + bot_added_html
        end

        tocheaders = (@minlevel..@maxlevel).to_a.map {|x|'h' + x.to_s}.join(',')

        output << "</div>"
        output << <<-javascript1

<script type='text/javascript'>
  tocheaders["#{random_id}"] = "#{tocheaders}";
</script>

javascript1
      end
    end
  end
end

Liquid::Template.register_tag('toczone', Jekyll::Tags::Toczone)

