require 'kramdown'
module Jekyll
  module Tags
    class Sup < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
        add_sup(context, super)
      end

      def add_sup(context, content)
        output = "<sup>"
        output << content
        output << "</sup>"
      end
    end
  end
end

Liquid::Template.register_tag('sup', Jekyll::Tags::Sup)