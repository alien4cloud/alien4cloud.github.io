module Jekyll
  module Tags
    class NextTag < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super

        unless markup.nil?

         markups = markup.split("|")

         ur  = markups.select {|x| x =~ /ur/}[0]
         text = markups.select {|x| x =~ /text/}[0]
         @ur  = ur.sub("ur=", "") if ur
         @text = text.sub("text=", "") if text
         end
      end

      def render(context)
        add_next(context, super)
      end

      def add_next(context, content)
        output = "Next Step [![next](/attachment_files/navigation/next.bmp)]("
        output << @ur
        output << ")"
        output << @text
      end
    end
  end
end

Liquid::Template.register_tag('next', Jekyll::Tags::NextTag)
