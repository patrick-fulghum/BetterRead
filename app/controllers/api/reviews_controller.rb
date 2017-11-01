class Api::ReviewsController < ApplicationController

  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      render "api/books/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = current_user.reviews.all
  end

  def destroy
    @review = current_user.reviews.find(param[:id])
    render "api/books/show"
    @review.destroy!
  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_params)
      render "api/books/show"
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def review_params
    params.require(:review).permit(:body, :author_id, :book_id, :rating)

  end
end
