class Quote < ApplicationRecord

  validates :author, :content, :portrait, :category, presence: true

end
