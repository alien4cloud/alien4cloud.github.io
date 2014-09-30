require 'kramdown'
module Jekyll
  module Tags
    class Bgcolor < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @bgcolor = 'black'
        unless markup.nil?
          @bgcolor = markup.strip
        end
      end

      def render(context)
        add_bgcolor(context, super)
      end

      def add_bgcolor(context, content)
        output = "<span style=\"background-color:#{@bgcolor}\">"
        output << content
        #output << Kramdown::Document.new(content).to_html
        output << "</span>"
      end
    end
  end
end

Liquid::Template.register_tag('bgcolor', Jekyll::Tags::Bgcolor)