class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :body
      t.integer :author_id
      t.integer :book_id

      t.timestamps
    end
  end
end
