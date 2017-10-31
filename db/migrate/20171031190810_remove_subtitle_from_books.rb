class RemoveSubtitleFromBooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :subtitle, :string
  end
end
