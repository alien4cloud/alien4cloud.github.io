require 'kramdown'
module Jekyll
  module Tags
    class Align < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        if markup.nil?
          @align = "left"
        else
          @align = markup.strip
        end
      end

      def render(context)
      	add_align(context, super)
      end

      def add_align(context, content)
      	output = "<div style=\"text-align:#{@align}\">"
        output << Kramdown::Document.new(content).to_html
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('align', Jekyll::Tags::Align)