module Jekyll
  class BookmarkTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      ""
    end
  end
end

Liquid::Template.register_tag('bookmarks', Jekyll::BookmarkTag) 
