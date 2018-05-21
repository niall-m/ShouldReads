require 'rails_helper'

RSpec.describe Review, type: :model do
    describe 'validations and associations' do
        subject { Review.create(
            book_id: "fakeBook",
            user_id: "fakeUser",
            body: "This is the body",
            rating: "none"
        )}
        it { should validate_presence_of(:book_id) }
        it { should validate_presence_of(:user_id) }
        it { should validate_uniqueness_of(:user_id).scoped_to(:book_id) }
        it { should validate_presence_of(:body) }
        it { should validate_presence_of(:rating) }
        it { should belong_to(:book) }
        it { should belong_to(:user) }
    end
end