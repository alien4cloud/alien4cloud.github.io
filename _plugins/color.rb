require 'kramdown'
module Jekyll
  module Tags
    class Color < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @color = 'black'
        unless markup.nil?
          @color = markup.strip
        end
      end

      def render(context)
      	add_color(context, super)
      end

      def add_color(context, content)
      	output = "<span style=\"color:#{@color}\">"
        output << content
        output << "</span>"
      end
    end
  end
end

Liquid::Template.register_tag('color', Jekyll::Tags::Color)