class Quote < ApplicationRecord

  validates :author, :content, :category, presence: true
  has_attached_file :portrait, default_url: "lovecraft_portrait.jpeg"
  validates_attachment_content_type :portrait, content_type: /\Aimage\/.*\Z/

end
