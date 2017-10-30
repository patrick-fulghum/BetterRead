class AddAttachmentCoverToBooks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :books do |t|
      t.attachment :cover
    end
  end

  def self.down
    remove_attachment :books, :cover
  end
end
