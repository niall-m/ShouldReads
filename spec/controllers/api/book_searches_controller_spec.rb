require 'rails_helper'

RSpec.describe Api::BookSearchesController, type: :controller do
    describe 'GET #index search' do 
        it 'returns search results' do 
            get :index, format: :json, params: { search: { query: '1984' } }
            expect(response).to have_http_status(200)
        end
    end
end
