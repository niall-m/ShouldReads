# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  description :text             not null
#  cover_img   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Book < ApplicationRecord
    validates :title, :author, :description, :cover_img, presence: true
    validates :title, uniqueness: true

    has_many :shelvings
    has_many :reviews

    def self.top_five_results(query_param)
        param= '%' + query_param.downcase + '%'
        Book.where('lower(title) LIKE ?', param).limit(5)
    end
end

# # in controller:
# class Api::BookSearchesController < ApplicationController
#     def index
#         @books = Book.top_five_results(search_params[:query])
#         render :index
#     end

#     private
#     def search_params
#         params.require(:search).permit(:query, :book_id)
#     end
# end

# # in: views/api/book_searches/index.json.jbuilder
# @books.each do |book|
#     json.set! book.id do
#         json.set! :type, 'book'
#         json.partial! 'api/books/book', book: book
#     end
# end