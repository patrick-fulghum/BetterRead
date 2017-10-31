class Book < ApplicationRecord
  validates :title, :description, :genre, :author, presence: true
  has_attached_file :cover, default_url: "HP_cover_art_cropped.png"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/
end
