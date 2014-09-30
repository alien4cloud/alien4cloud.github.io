require 'kramdown'
module Jekyll
  module Tags
    class Panel < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @title = ""

        unless markup.nil?
          markups = markup.split("|")

          title           = markups.select {|x| x =~ /title/}[0]
          backgroundcolor = markups.select {|x| x =~ /bgColor/}[0]
          borderstyle     = markups.select {|x| x =~ /borderStyle/}[0]
          bordercolor     = markups.select {|x| x =~ /borderColor/}[0]

          @title           = title.sub("title=", "") if title
          @backgroundcolor = backgroundcolor.sub("bgColor=", "") if backgroundcolor
          @borderstyle     = borderstyle.sub("borderStyle=", "") if borderstyle
          @bordercolor     = bordercolor.sub("borderColor=", "") if bordercolor
        end
      end

      def render(context)
      	add_panel(context, super)
      end

      def add_panel(context, content)
        style_string = ""
        style_string << "background-color:#{@backgroundcolor};" if @backgroundcolor
        style_string << "border-style:#{@borderstyle};" if @borderstyle
        style_string << "border-color:#{@bordercolor};" if @bordercolor

      	output = "<div class='well' style='#{style_string}'>"
        unless @title.empty?
          output << "<strong>"
          output << Kramdown::Document.new(@title).to_html
          output << "</strong>"
        end
        output << Kramdown::Document.new(content).to_html
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('panel', Jekyll::Tags::Panel)