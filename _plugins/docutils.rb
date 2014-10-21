module DocUtils

  def self.get_current_section(sectionPath)
    if !sectionPath.nil?
      if sectionPath == "admin_guide"
        "Admin Guide"
      elsif sectionPath == "documentation"
        "Documentation"
      elsif sectionPath == "components_guide"
        "Components Guide"
      elsif sectionPath == "app_guide"
        "Application Guide"
      elsif sectionPath == "getting_started"
        "Getting Started"
      elsif sectionPath == "release_notes"
        "Release Notes"
      elsif sectionPath == "developer_guide"
        "Developer Guide"
      elsif sectionPath == "alien_about"
        "About ALIEN 4 Cloud"
      elsif sectionPath == "cloudify2_driver"
        "Cloudify 2 driver"
      else
        ""
      end
    else
      ""
    end
  end
end
