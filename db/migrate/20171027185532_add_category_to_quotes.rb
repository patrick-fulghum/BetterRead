class AddCategoryToQuotes < ActiveRecord::Migration[5.1]
  def change
    add_column :quotes, :category, :string
  end
end
