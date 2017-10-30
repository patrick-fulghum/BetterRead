class FixImageUrl < ActiveRecord::Migration[5.1]
  def change
    rename_column :books, :image_url, :cover
  end
end
