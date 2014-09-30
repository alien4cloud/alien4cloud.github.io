require 'kramdown'
module Jekyll
  module Tags
    class Comment < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
      	add_comment(context, super)
      end

      def add_comment(context, content)
      	output = "<!--\n"
        output << Kramdown::Document.new(content).to_html
        output << "\n-->"
      end
    end
  end
end

Liquid::Template.register_tag('comment', Jekyll::Tags::Comment)