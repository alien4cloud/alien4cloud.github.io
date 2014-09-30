require 'kramdown'
module Jekyll
  module Tags
    class Fontsize < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @size = ''
        unless markup.nil?
          @size = markup.strip
        end
      end

      def render(context)
      	add_fontsize(context, super)
      end

      def add_fontsize(context, content)
        if @size.empty?
          output = "<div>"
        else
          output = "<div style=\"font-size:#{@size}px\">"
        end

        output << Kramdown::Document.new(content).to_html
        output << "</div>"
      end
    end
  end
end

Liquid::Template.register_tag('fontsize', Jekyll::Tags::Fontsize)