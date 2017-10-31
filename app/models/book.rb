class Book < ApplicationRecord
  validates :title, :description, :genre, :author, :subtitle, presence: true
  has_attached_file :cover, default_url: "cicero_portrait.jpg"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/
end
