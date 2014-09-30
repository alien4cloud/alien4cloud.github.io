module Jekyll
  class Netdoc < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @class_name = text.strip
    end

    def render(context)
      create_link(context, super)
    end

    def create_link(context, content)
      current_release = DocUtils.get_current_version(context)

      base_dotnetdoc_url = context.registers[:site].config["base_dotnetdoc_url"] || 
                           "http://www.gigaspaces.com/docs/dotnetdocs%{version}/html/T_%{fqcn}.htm"

      fqcn = @class_name.gsub(/\./, "_")

      base_dotnetdoc_url % {:version => current_release, :fqcn => fqcn} 

    end
  end
end

Liquid::Template.register_tag('dotnetdoc', Jekyll::Netdoc) 