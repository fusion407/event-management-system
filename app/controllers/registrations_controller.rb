class RegistrationsController < ApplicationController
    def index
        render json: Registration.all
    end
    
    def create
        registration = Registration.create!(reg_params)
        render json: registration, status: :created
    end


    private

    def reg_params
        params.permit(:user_id, :event_id)
    end
end
