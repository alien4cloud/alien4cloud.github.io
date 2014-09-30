require 'kramdown'
module Jekyll
  module Tags
    class Sub < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
        add_sub(context, super)
      end

      def add_sub(context, content)
        output = "<sub>"
        output << content
        output << "</sub>"
      end
    end
  end
end

Liquid::Template.register_tag('sub', Jekyll::Tags::Sub)