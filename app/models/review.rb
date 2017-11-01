class Review < ApplicationRecord
  validates :author_id, :body, :book_id, :rating, presence: true

  belongs_to :author,
  class_name: "User",
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :book,
  class_name: "Book",
  primary_key: :id,
  foreign_key: :book_id

end
