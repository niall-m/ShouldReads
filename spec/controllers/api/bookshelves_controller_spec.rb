require 'rails_helper'

RSpec.describe Api::BookshelvesController, type: :controller do
    let(:test_user) { User.create!(username: 'guy', email: 'g@u.y', password: 'password') }
    let(:test_shelf) { Bookshelf.create!(user_id: test_user.id, shelf_name: 'test_shelf') }

    before do
        allow(controller).to receive(:current_user) { test_user }
    end

    describe 'GET #index' do
        context 'when logged in as the bookshelf\'s owner' do
            it 'renders the JBuilder index view' do
                get :index, format: :json, params: { id: test_shelf.id }
                expect(response).to render_template(:index)
            end

            it 'responds with a 200 status' do
                expect(response).to have_http_status(200)
            end
        end
    end

    describe 'GET #show' do
        context 'when logged in as the bookshelf\'s owner' do
            it 'renders the JBuilder show view' do
                get :show, format: :json, params: { id: test_shelf.id }
                expect(response).to render_template(:show)
            end
        end
    end

    describe 'POST #create' do
        context 'with invalid params' do 
            it 'validates the presence of user_id and shelf_name' do
                post :create, params: { bookshelf: { shelf_name: '' } }
                expect(response).to have_http_status(422)
            end
        end
        
        context 'with valid params' do
            it 'creates a bookshelf' do
                post :create, format: :json, params: { bookshelf: { shelf_name: 'example' } }
                expect(response).to have_http_status(200)
            end
        end
    end
end