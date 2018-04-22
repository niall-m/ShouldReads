class Api::BookSearchesController < ApplicationController
    def index # AKA search
        @books = Book.top_five_results(search_params[:query])
        render :index
    end
    
    private
    def search_params
        params.require(:search).permit(:query, :book_id)
    end
end