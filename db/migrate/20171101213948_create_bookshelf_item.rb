class CreateBookshelfItem < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelf_items do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false
    end
  end
end
