require 'kramdown'
module Jekyll
  module Tags
    class Indent < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @size = 1
        unless markup.nil?
          @size = markup.strip.to_i
        end
      end

      def render(context)
      	add_indent(context, super)
      end

      def add_indent(context, content)
      	output = "<div class=\"indent#{@size}\">"
        output << Kramdown::Document.new(content).to_html
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('indent', Jekyll::Tags::Indent)