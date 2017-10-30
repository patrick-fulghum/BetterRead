class Book < ApplicationRecord
  validates :title,
            :description,
            :genre,
            :author,
            :cover,
            presence: true
end
