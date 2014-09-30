require 'kramdown'
module Jekyll
  module Tags
    class Urhere < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
        add_urhere(context, super)
      end

      def add_urhere(context, content)
        output = "<div class='urhere'>"
        output << content
        #output << Kramdown::Document.new(content).to_html
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('urhere', Jekyll::Tags::Urhere)