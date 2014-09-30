require 'kramdown'
module Jekyll
  module Tags
    class Column < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @width = markup.strip.gsub("width=", "width:")
      end

      def render(context)
      	add_column(context, super)
      end

      def add_column(context, content)
        if @width.empty?
      	 output = "<div style='float:left;padding-left:0px;padding-right:15px;position:relative;margin-left:0px;margin-right:15px;'>"
        else
         output = "<div style='float:left;#{@width};padding-left:0px;padding-right:15px;position:relative;margin-left:0px;margin-right:15px;'>"
        end
        output << Kramdown::Document.new(content).to_html
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('column', Jekyll::Tags::Column)