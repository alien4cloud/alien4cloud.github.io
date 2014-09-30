module Jekyll
  class RemoveTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      "<i class='icon-remove-sign' style='color:#D04437;'></i>"
    end
  end
end

Liquid::Template.register_tag('remove', Jekyll::RemoveTag) 
