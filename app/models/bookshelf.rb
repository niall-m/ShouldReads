# == Schema Information
#
# Table name: bookshelves
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  shelf_name :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookshelf < ApplicationRecord
    validates :shelf_name, :user_id, presence: true
    validates :shelf_name, uniqueness: { scope: :user_id }     

    belongs_to :user
    has_many :shelvings
    has_many :books, through: :shelvings
end
