# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :text             not null
#  cover_img   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
    validates :title, :author, :description, :cover_img, presence: true
    validates :title, uniqueness: true

    has_many :shelvings
    has_many :reviews
end
