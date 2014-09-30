module Jekyll
  class StarTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      "<i class='icon-star'></i>"
    end
  end
end

Liquid::Template.register_tag('star', Jekyll::StarTag) 
