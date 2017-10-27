class Book < ApplicationRecord
  validates :title,
            :description,
            :genre,
            :author,
            :isbn,
            :image_url,
            presence: true
end
