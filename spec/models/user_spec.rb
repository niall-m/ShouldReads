require 'rails_helper'

RSpec.describe User, type: :model do
    describe "password encryption" do
        
        it "does not save passwords to the database" do
            User.create!({
                username: 'anastassia',
                email: 'anastassias@fake.email',
                password: 'nunyabusiness'
            })
            user = User.find_by_username('anastassia')
            expect(user.password).not_to be('nunyabusiness')
        end

        # Add more tests here!

    end
end