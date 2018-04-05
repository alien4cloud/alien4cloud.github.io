![Alien4Cloud](https://raw.githubusercontent.com/alien4cloud/alien4cloud.github.io/sources/images/alien4cloud-banner.png)

This repository contains the documentation for Application LIfecycle ENabler for Cloud AKA ALIEN. The documentation is based on Jekyll, a Ruby-based static site generator that uses Markdown as markup language.

##  Working with the documentation

This section guides you on how to run and browse the documentation website locally.

 * The first step is to install **Jekyll 2.5.3** on your machine. Instructions can be found [here](http://jekyllrb.com/docs/installation/) for linux and MacOS users and [here](http://forresst.github.io/2012/03/20/Installer-Jekyll-Sous-Windows/) for windows users.

 * Second step is to install the [Kramdown markdown converter](http://kramdown.gettalong.org/installation.html) that jekyll will leverage to generate the site.

 * Third step is to install the [Nokogiri HTML, XML, SAX, and Reader parser](http://www.nokogiri.org/tutorials/installing_nokogiri.html)

 * Next clone ALIEN's documentation sources branch (if not done already) and go to the **sources** branch.

 * You can now run the site using `jekyll serve` command to start the site. If you want to update the doc you can run `jekyll serve -w` that will automatically refresh the site when you update the markup.

Feel free to improve the documentation!
If you modified the sources, please, don't forget to push the contents of **_site** folder into the master branch.

## Adding a section ##
Follow the following steps to add a documentation section. The example will be based on the *ALIEN user guide* section.
### Category name ###
* First of all, pick a name for a category, and create at the project root a folder in which you'll put your mardown files. In this case, our category will be **GETTING_STARTED**, and the related folder will be named ***getting_started***.
* Go to the project root folder and edit the *_config.yml* file to add your category

```yaml
categories-list: ["OTHERS_CAT...", **"GETTING_STARTED"**, ... ]
```

### Nav Bar menu ###
* Go to the *_includes* folder, edit the *navbar.html* file to your menu, and if needed your sub-menu
```html
<li>
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">ALIEN user guide <b class="caret"></b></a>
  <ul class="dropdown-menu">
    <li><a href="{{root}}getting_started/">Getting Started (tutorials)</a></li>
  </ul>
</li>
```

* In the *_plugin* folder, edit the file *docutils.rb* to add a title to display in the cumbar for your section

```ruby
elsif sectionPath == "getting_started"
        "Getting Started"
```

### Files ###
Now you can create your files in the previously created folder. We recommend to create an index.markdown file which will serve as the index page for the menu. Check the *getting_started* folder and files to see how to write your own. Note the followings parameters:
* weight: specify the position of the page in the side menu. The smallest value means the page will appear before the others in the menu.
* parent: will define which file is the parent. This will help in the generation of the side menu
