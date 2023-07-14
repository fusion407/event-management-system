class UsersController < ApplicationController
    # before_action :authorize, only: [:show]
    skip_before_action :authorize, only: [:create]
    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
  
    def show
        user = find_user
        render json: user
    end

    def showMyRegs
      regs = find_user.registrations
      render json: regs
    end

    private
  
    def find_user
      User.find_by(id: session[:user_id])
    end

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end

  end
  