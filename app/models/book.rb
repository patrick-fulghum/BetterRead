class Book < ApplicationRecord
  validates :title, :description, :genre, :author, presence: true
  has_attached_file :cover, default_url: "HP_cover_art_cropped.png"
  validates_attachment_content_type :cover, content_type: /\Aimage\/.*\z/

  has_many :reviews,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: "Review"

  has_many :bookshelf_items,
  primary_key: :id,
  foreign_key: :book_id,
  class_name: "BookshelfItem"

end
