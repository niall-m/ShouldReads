require 'rails_helper'

RSpec.describe Api::ShelvingsController, type: :controller do
    let(:test_user) { User.create!(username: 'guy', email: 'g@u.y', password: 'password') }
    let(:test_book) { Book.create(title: 'title', author: 'me', description: 'none', cover_img: 'none' )}
    let(:test_shelf) { Bookshelf.create(shelf_name: 'fake', user_id: test_user.id)}

    before do
        allow(controller).to receive(:current_user) { test_user }
    end

    describe 'POST #create' do
        context 'with invalid params' do 
            it 'validates the presence of book_id and shelf_id' do
                post :create, params: { shelving: { book_id: '', shelf_id: '' } }
                expect(response).to have_http_status(422)
            end
        end
        
        context 'with valid params' do
            it 'creates a shelving' do
                post :create, format: :json, params: { shelving: { book_id: test_book.id, shelf_id: test_shelf.id } }
                expect(response).to have_http_status(200)
            end
        end
    end
end
