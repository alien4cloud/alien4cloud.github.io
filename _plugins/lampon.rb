module Jekyll
  class LamponTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      "<span class='icon-stack'><i class='icon-sun icon-stack-base'></i><i class='icon-lightbulb'></i></span>"
    end
  end
end

Liquid::Template.register_tag('lampon', Jekyll::LamponTag) 
