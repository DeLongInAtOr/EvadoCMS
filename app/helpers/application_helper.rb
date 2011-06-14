module ApplicationHelper

  # Return a title on a per-page basis.
  def title
    base_title = "EvadoCMS"
    if @title.nil?
      base_title
    else
      "#{base_title} | #{@title}"
    end
  end
  
  def logo
    image_tag("stud-nowy-v.png", :alt => "AGH - logo")
  end
  
  def logo2
    image_tag("aghlogo-print.gif", :alt => "logo-print")
  end
  
  def footer_logo
    image_tag("logo.png", :alt => "logo")
  end
end

