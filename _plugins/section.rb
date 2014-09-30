require 'kramdown'
module Jekyll
  module Tags
    class Section < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
      	add_section(context, super)
      end

      def add_section(context, content)
        output = "<div class='container'><div class='row'>"
        output << Kramdown::Document.new(content).to_html
        output << "</div></div>"
      end
    end
  end
end

Liquid::Template.register_tag('section', Jekyll::Tags::Section)