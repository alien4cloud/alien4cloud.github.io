module Jekyll
  class MinusTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      "<i class='icon-minus-sign' style='color:#D04437;'></i>"
    end
  end
end

Liquid::Template.register_tag('minus', Jekyll::MinusTag) 
