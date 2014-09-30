require 'kramdown'

module Jekyll
  module Tags
    class Lozenge < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super

        @title = ""
        @link  = "/"
        @arrow = 'none'
        @color = 'white'
        @width = '100%'
        @icon  = '/attachment_files/add.gif'

        unless markup.nil?
          markups = markup.split("|")

          title = markups.select {|x| x =~ /title/}[0]
          link  = markups.select {|x| x =~ /link/}[0]
          arrow = markups.select {|x| x =~ /arrow/}[0]
          color = markups.select {|x| x =~ /color/}[0]
          width = markups.select {|x| x =~ /width/}[0]
          icon  = markups.select {|x| x =~ /icon/}[0]

          @title = title.sub("title=", '') if title
          @link  = link.sub("link=", '') if link
          @arrow = arrow.sub("arrow=", '') if arrow
          @color = color.sub("color=", '') if color
          @width = width.sub("color=", '') if width
          @icon  = icon.sub("icon=", '') if icon
        end
      end

      def render(context)
        add_lozenge(context, super)
      end

      def add_lozenge(context, content)

        output =  "<div class=\"bs-callout bs-callout-warning\">"
        output << "<div class=\"pull-left\">"
        output << "<a href=\"#{@link}\"><img src=\"#{@icon}\" alt=\"#{@title}\"></a>"
        output << "</div>"
        output << "<div>"
        output << "<a href=\"#{@link}\"><strong>#{@title}</strong></a>"
        output << content
        output << "</div>"
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('lozenge', Jekyll::Tags::Lozenge)

