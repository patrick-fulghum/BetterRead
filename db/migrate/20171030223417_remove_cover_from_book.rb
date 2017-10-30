class RemoveCoverFromBook < ActiveRecord::Migration[5.1]
  def change
    remove_column :books, :cover, :string
  end
end
