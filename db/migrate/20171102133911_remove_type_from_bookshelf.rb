class RemoveTypeFromBookshelf < ActiveRecord::Migration[5.1]
  def change
    remove_column :bookshelves, :type, :string
  end
end
