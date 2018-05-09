require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

    describe 'POST #create' do
        context 'with invalid params' do
            it 'validates the presence of username, email and password' do
                post :create, params: { user: { username: '', email: '', password: '' } }
                expect(response).to have_http_status(422)
            end

            it 'validates that the password is at least 6 characters long' do
                post :create, params: { user: { username: 'a', email: 'b', password: 'c' } }
                expect(response).to have_http_status(422)
            end
        end

        context 'with valid params' do
            it 'creates and logs in the user' do
                post :create, format: :json, params: { user: { username: 'valid', email: 'email', password: 'password' } }
                user = User.find_by_username('valid')
                expect(session[:session_token]).to eq(user.session_token)
            end
        end
    end
end
