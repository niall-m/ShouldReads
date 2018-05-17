require 'rails_helper'

RSpec.describe User, type: :model do
    describe 'validations and associations' do
        it { should validate_length_of(:password).is_at_least(6) }
        it { should validate_presence_of(:username) }
        it { should validate_presence_of(:password_digest) }
        it { should have_many(:bookshelves) }
        it { should have_many(:shelvings).through(:bookshelves) }
        it { should have_many(:books).through(:shelvings) }
        it { should have_many(:reviews) }
    end

    describe 'password encryption' do
        it 'does not save passwords to the database' do
            User.create!(
                username: 'fakeUser',
                email: 'fakeUser@fake.email',
                password: 'fakePassword'
            )
            user = User.find_by_username('fakeUser')
            expect(user.password).not_to be('fakePassword')
        end
        
        it 'encrypts the passwording using BCrypt' do 
            expect(BCrypt::Password).to receive(:create)
            User.new(
                username: 'fakeUser', 
                email: 'fakeUser@fake.email', 
                password: 'fakePassword'
            )
        end
    end

    describe 'session token' do
        it 'assigns a session token if one is not given' do
            fake = User.create(
                username: 'fakeUser',
                email: 'fakeUser@fake.email',
                password: 'fakePassword'
            )
            expect(fake.session_token).not_to be_nil
        end
    end
end