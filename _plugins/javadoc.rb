module Jekyll
  class Javadoc < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @class_name = text.strip
    end   

    def render(context)
      create_link(context, super)
    end

    def create_link(context, content)
      current_release = DocUtils.get_current_version(context)

      base_javadoc_url = context.registers[:site].config["base_javadoc_url"] || 
                         "http://www.gigaspaces.com/docs/JavaDoc%{version}/index.html?%{fqcn}.html"

      fqcn = @class_name.gsub(/\./, "/")

      base_javadoc_url % {:version => current_release, :fqcn => fqcn}
    end
  end
end

Liquid::Template.register_tag('javadoc', Jekyll::Javadoc)