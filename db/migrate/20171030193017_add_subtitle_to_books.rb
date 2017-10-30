class AddSubtitleToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :subtitle, :string
  end
end
