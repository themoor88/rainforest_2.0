class SessionsController < ApplicationController
  def new
  end

  # We don't use @user because this is not creating a new user.
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to root_url, notice: "Logged in!"
    else
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, alert: "Logged out!"
  end
end