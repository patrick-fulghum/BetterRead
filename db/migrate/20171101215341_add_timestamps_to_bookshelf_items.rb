class AddTimestampsToBookshelfItems < ActiveRecord::Migration[5.1]
  def change
    add_timestamps(:bookshelf_items)
  end
end
