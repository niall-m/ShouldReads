# == Schema Information
#
# Table name: shelvings
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  shelf_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelving < ApplicationRecord
    validates :book_id, :shelf_id, presence: true

    belongs_to :book
    belongs_to :bookshelf
end
