class Api::BooksController < ApplicationController
  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find(params[:id])
    render :show
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :description, :cover_img)
  end
end
