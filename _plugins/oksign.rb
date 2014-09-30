module Jekyll
  class OksignTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      "<i class='icon-ok-sign' style='color:#14892C;'></i>"
    end
  end
end

Liquid::Template.register_tag('oksign', Jekyll::OksignTag) 
