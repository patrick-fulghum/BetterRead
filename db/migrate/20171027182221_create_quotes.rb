class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.string :author, null: false
      t.string :content, null: false
      t.string :portrait, null: false
      t.timestamps
    end
  end
end
