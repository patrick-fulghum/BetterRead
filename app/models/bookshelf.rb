class Bookshelf < ApplicationRecord
  validates :type, :owner_id, presence: true
  
  has_many :bookshelf_items,
  primary_key: :id,
  foreign_key: :bookshelf_id,
  class_name: "BookshelfItem"

  has_many :books,
  through: :bookshelf_items,
  source: :books

  belongs_to :user,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: "User"
end
