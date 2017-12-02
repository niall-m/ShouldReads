class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(book_id: params[:bookId])
    render :index
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render :show
  end

  private
  def review_params
    params.require(:review).permit(:body, :book_id)
  end
end
