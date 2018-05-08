class Api::BookSearchesController < ApplicationController
  def index
    @books = Book.top_five_results(search_params[:query])
    render :index
  end
  
  private
  def search_params
    params.require(:search).permit(:query)
  end
end