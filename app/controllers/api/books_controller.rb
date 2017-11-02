class Api::BooksController < ApplicationController
  def create
    @book = Book.new(book_params)

    if @book.save
      render "api/books/show"
    else
      render json: @book.errors.full_messages, status: 422
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
    debugger
    params.require(:book).permit(
      :title,
      :description,
      :genre,
      :author,
      :cover
    )
  end
end
