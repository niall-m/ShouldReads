require 'rails_helper'

RSpec.describe Api::ReviewsController, type: :controller do
    let(:test_user) { User.create!(username: 'guy', email: 'g@u.y', password: 'password') }
    let(:fake_user) { User.create(username: 'imposter', email: 'bad@guy.com', password: 'password')}
    let(:test_book) { Book.create(title: 'title', author: 'me', description: 'none', cover_img: 'none' )}

    before do 
        allow(controller).to receive(:current_user) { test_user }
    end

    describe 'POST #create' do 
        context 'with invalid params' do 
            it 'validates the presence of book_id, body and rating' do
                post :create, format: :json, params: { review: { book_id: '', body: '', rating: '' } }
                expect(response).to have_http_status(401)
            end
        end

        context 'with valid params' do 
            it 'creates a review' do 
                post :create, format: :json, params: { review: { book_id: test_book.id, body: 'body', rating: '5' } }
                expect(response).to have_http_status(200)
            end
        end
    end

    describe 'DELETE #destroy' do 
        let(:review) { Review.create!(user_id: test_user.id, book_id: test_book.id, body: 'body', rating: '5') }

        context 'when logged in as the review\'s owner' do 
            it 'deletes the review' do 
                delete :destroy, format: :json, params: { id: review.id }
                expect(Review.exists?(review.id)).to be false 
            end
        end

        context 'when logged in as a different user' do
            before do
                allow(controller).to receive(:current_user) { fake_user }
            end
            
            it 'does not delete the review' do 
                begin
                    delete :destroy, format: :json, params: { id: review.id }
                rescue ActiveRecord::RecordNotFound
                end
                expect(Review.exists?(review.id)).to be true
            end
        end
    end
end