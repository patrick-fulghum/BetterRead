class AddAttachmentPortraitToQuotes < ActiveRecord::Migration[5.1]
  def self.up
    change_table :quotes do |t|
      t.attachment :portrait
    end
  end

  def self.down
    remove_attachment :quotes, :portrait
  end
end
