class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      debugger
      want_to_read_shelf = Bookshelf.create!(
        owner_id: @user.id,
        category: "to-read"
      )
      currently_reading_shelf = Bookshelf.create!(
        owner_id: @user.id,
        category: "currently-reading"
      )
      have_read_shelf = Bookshelf.create!(
        owner_id: @user.id,
        category: "read"
      )
      login(@user)
      render "api/users/show"
    else
      debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
