require 'kramdown'
module Jekyll
  module Tags
    class Excerpt < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
        add_excerpt(context, super)
      end

      def add_excerpt(context, content)
        content
      end
    end
  end
end

Liquid::Template.register_tag('excerpt', Jekyll::Tags::Excerpt)