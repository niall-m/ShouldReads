class AddDefaultToBookshelves < ActiveRecord::Migration[5.1]
  def change
    add_column :bookshelves, :default_shelf, :boolean, default: false
  end
end
