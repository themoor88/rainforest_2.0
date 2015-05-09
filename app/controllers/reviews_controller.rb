class ReviewsController < ApplicationController
  before_filter :load_product

  def show
    @review = Review.find(params[:id])
  end

  def create

  end

  def destroy
  end
end
