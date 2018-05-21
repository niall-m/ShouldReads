require 'rails_helper'

RSpec.describe Shelving, type: :model do
    describe 'validations and associations' do
        subject { Shelving.create(book_id: "fakeBook", shelf_id: "fakeUser") }
        it { should validate_presence_of(:book_id) }
        it { should validate_presence_of(:shelf_id) }
        it { should validate_uniqueness_of(:book_id).scoped_to(:shelf_id) }
        it { should belong_to(:book) }
        it { should belong_to(:bookshelf) }
    end
end