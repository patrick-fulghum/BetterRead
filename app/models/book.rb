class Book < ApplicationRecord
  validates :title,
            :description,
            :genre,
            :author,
            :cover,
            :subtitle,
            presence: true
end
