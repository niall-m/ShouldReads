require 'rails_helper'

RSpec.describe Api::BooksController, type: :controller do 
    let(:test_user) { User.create!(username: 'guy', email: 'g@u.y', password: 'password') }
    let(:test_book) { Book.create(title: 'title', author: 'me', description: 'none', cover_img: 'none' )}

    before do 
        allow(controller).to receive(:current_user) { test_user }
    end

    describe 'GET #index' do 
        context 'when logged in' do 
            it 'renders the JBuilder index view' do 
                get :index, format: :json
                expect(response).to render_template(:index)
            end
        end
    end

    describe 'GET #show' do 
        context 'when logged in' do 
            it 'renders the JBuilder show view' do 
                get :show, format: :json, params: { id: test_book.id }
                expect(response).to render_template(:show)
            end
        end
    end
end