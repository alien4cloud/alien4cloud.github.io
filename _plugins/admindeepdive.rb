module Jekyll
  class AdmindeepdiveTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      output = <<-output
<embed src="http://blip.tv/play/AYGj6nUC" type="application/x-shockwave-flash" width="480" height="390" allowscriptaccess="always" allowfullscreen="true">
output
    end
  end
end

Liquid::Template.register_tag('admindeepdive', Jekyll::AdmindeepdiveTag)
