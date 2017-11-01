class BookshelfItem < ApplicationRecord
  validates :book_id, :bookshelf_id, presence: true

  belongs_to :book,
  class_name: "Book",
  primary_key: :id,
  foreign_key: :book_id

  belongs_to :bookshelf,
  class_name: "Bookshelf",
  primary_key: :id,
  foreign_key: :bookshelf_id

  belongs_to :user,
  through: :bookshelf,
  source: :user

end
