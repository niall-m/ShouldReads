class Api::BooksController < ApplicationController
  def index
    @books = Book.all
    render :index
  end

  def show
    @book = Book.find(params[:id])
    if @book
      render :show
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author, :description, :cover_img)
  end
end
