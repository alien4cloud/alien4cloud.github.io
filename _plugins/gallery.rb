require 'kramdown'
module Jekyll
  module Tags
    class Gallery < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
        add_gallery(context, super)
      end

      def add_gallery(context, content)
        output = "<div id='gallery'>"
        output << Kramdown::Document.new(content).to_html
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('gallery', Jekyll::Tags::Gallery)