require 'kramdown'
module Jekyll
  class Tokenize < Liquid::Block
    include Liquid::StandardFilters

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      get_current_section(context, super)
    end

    def get_current_section(context, content)
      str = content.to_s
      if !str.nil?
        splittedStr = str.split(" ")
        splittedStr.map! {|x| 
          x = x.sub(" - ", "")
          x = x.sub("-", "")
          x = x.strip 
          "\"#{x}\""
        }
        splittedStr.join(",")
      else
        ""
      end
    end 
  end
end
Liquid::Template.register_tag('tokenize', Jekyll::Tokenize)