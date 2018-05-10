require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
    let!(:test_user) { User.create!(username: 'guy', email: 'g@u.y', password: 'password') }

    describe 'POST #create' do
        context 'with invalid credentials' do
            it 'does not log in' do 
                post :create, params: { user: { username: '', email: '', password: '' } }
                expect(response).to have_http_status(401)
            end
        end
        
        context 'with valid credentials' do      
            it 'logs in the user' do
                post :create, format: :json, params: { user: { username: 'guy', password: 'password' } }
                user = User.find_by_username('guy')
                expect(session[:session_token]).to eq(user.session_token)
            end
        end
    end
end