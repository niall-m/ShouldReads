class Api::ShelvingsController < ApplicationController

  def create
    @shelving = Shelving.new(shelving_params)
    if @shelving.save
      render :show
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelving = Shelving.find_by(
      book_id: shelving_params[:book_id],
      shelf_id: shelving_params[:shelf_id]
    )
    @shelving.destroy!
    render json: @shelving
  end

  private
  def shelving_params
    params.require(:shelving).permit(:book_id, :shelf_id)
  end
end
