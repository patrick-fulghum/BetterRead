class RemoveIsbnFromBooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :isbn, :string
  end
end
