require 'rails_helper'

RSpec.describe Bookshelf, type: :model do
    describe 'validations and associations' do
        subject { Bookshelf.create(shelf_name: "fake", user_id: "fake")}
        it { should validate_presence_of(:user_id) }
        it { should validate_presence_of(:shelf_name) }
        it { should validate_uniqueness_of(:shelf_name).scoped_to(:user_id) }
        it { should belong_to(:user) }
        it { should have_many(:shelvings) }
        it { should have_many(:books).through(:shelvings)}
    end
end