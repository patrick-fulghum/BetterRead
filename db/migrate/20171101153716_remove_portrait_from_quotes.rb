class RemovePortraitFromQuotes < ActiveRecord::Migration[5.1]
  def change
    remove_column :quotes, :portrait, :string
  end
end
