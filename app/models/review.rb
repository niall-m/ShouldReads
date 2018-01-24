# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :book_id, :user_id, :body, :rating, presence: true
    validates :user_id, uniqueness: { scope: :book_id }

    belongs_to :book
    belongs_to :user
end
