class Api::QuotesController < ApplicationController

  def show
    @quote = Quote.find(params[:id])
  end

  def index
    @quotes = Quote.all
  end

end
