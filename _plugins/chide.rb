require 'kramdown'
module Jekyll
  module Tags
    class Chide < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
      	add_chide(context, super)
      end

      def add_chide(context, content)
      	output = ""
        output
      end
    end
  end
end

Liquid::Template.register_tag('c', Jekyll::Tags::Chide)