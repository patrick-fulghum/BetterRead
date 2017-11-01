class CreateBookshelf < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelves do |t|
      t.string :type, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
  end
end
