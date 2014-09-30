module Jekyll
  module Tags
    class Imagemap < Liquid::Block
      include Liquid::StandardFilters

      def initialize(tag_name, markup, tokens)
        super
        @image_name = markup.strip.gsub("name=[", "").gsub("]", "")
      end

      def render(context)
        add_imagemap(context, super)
      end

      def add_imagemap(context, code)
        random_id = rand(10000000).to_s
        output = "<div style=\"text-align:center\">"
        output << "<img border=\"0\" src=\"/attachment_files/#{@image_name}\" usemap=\"#MAP#{random_id}\" alt=\"#MAP#{random_id}\">"
        output << "<map name=\"MAP#{random_id}\">"
        output << Kramdown::Document.new(code).to_html
        output << "</map></div>"
      end
    end

  end

  class MapTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super

      markups = text.split("|")

      title  = markups.select {|x| x =~ /title/}[0]
      shape  = markups.select {|x| x =~ /shape/}[0]
      coords = markups.select {|x| x =~ /coords/}[0]
      link   = markups.select {|x| x =~ /link/}[0]

      @title  = title.sub("title=", "").strip if title
      @shape  = shape.sub("shape=", "").strip if shape
      @coords = coords.sub("coords=", "").strip if coords
      @link   = link.sub("link=", "").strip if link
    end

    def render(context)
      output = "<area "
      output << "shape=\"#{@shape}\" " if @shape
      output << "coords=\"#{@coords}\" href=\"#{@link}\" title=\"#{@title}\">"
    end
  end
end

Liquid::Template.register_tag('imagemap', Jekyll::Tags::Imagemap)
Liquid::Template.register_tag('map', Jekyll::MapTag)
