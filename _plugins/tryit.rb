module Jekyll
  module Tags
    class Try < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
      end

      def render(context)
        add_try(context, super)
      end

      def add_try(context, content)
        output = "Try it out [![Tryit](/attachment_files/navigation/tryit.jpg)]("
        output << content
        output << "){:target=\"_blank\"}"
      end
    end
  end
end

Liquid::Template.register_tag('try', Jekyll::Tags::Try)

