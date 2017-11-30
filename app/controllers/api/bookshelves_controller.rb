class Api::BookshelvesController < ApplicationController
  def index
    @bookshelves = User.find(params[:user_id]).bookshelves
    render :index
  end

  def show
    user = User.find(params[:user_id])
    @bookshelf = user.bookshelves.find_by(shelf_name: params[:shelf_name])
    render :show
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def update
    @bookshelf = Bookshelf.find(params[:id])
    @bookshelf.user_id = current_user.id
    if @bookshelf.update_attributes(bookshelf_params)
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])
    @bookshelf.destroy!
    render :show
  end

  private
  def bookshelf_params
    params.require(:bookshelf).permit(:shelf_name)
  end
end
 