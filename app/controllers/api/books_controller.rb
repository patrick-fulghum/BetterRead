class Api::BooksController < ApplicationController
  def create
    @book = Book.new(book_params)
    if @book.save
      render "api/books/show"
    else
      render json: ["Please complete all Fields."], status: 401
    end
  end

  def show
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])

    if @post.update(book_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    @books = Book.all
  end

  private

  def book_params
    params.require(:book).permit(
      :title,
      :description,
      :genre,
      :author,
      :cover
    )
  end
end
