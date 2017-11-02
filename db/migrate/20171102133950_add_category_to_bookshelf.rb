class AddCategoryToBookshelf < ActiveRecord::Migration[5.1]
  def change
    add_column :bookshelves, :category, :string
  end
end
