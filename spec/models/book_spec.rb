require 'rails_helper'

RSpec.describe Book, type: :model do
    describe 'validations and associations' do
        subject { Book.create(
            title: "The Fakest Title",
            author: "Me",
            description: "Here is the description.",
            cover_img: "There is no cover image."
        )}
        it { should validate_presence_of(:title) }
        it { should validate_uniqueness_of(:title) }
        it { should validate_presence_of(:author) }
        it { should validate_presence_of(:description) }
        it { should validate_presence_of(:cover_img) }
        it { should have_many(:shelvings) }
        it { should have_many(:bookshelves).through(:shelvings) }
        it { should have_many(:reviews) }
    end
end