class RegistrationsController < ApplicationController
    def index
        render json: Registration.all
    end
    
    def create
        registration = Registration.create!(reg_params)
        render json: registration, status: :created
    end

    def destroy
        registration = Registration.find_by(id: params[:id])
        registration.destroy
        head :no_content
    end

    private

    def reg_params
        params.permit(:user_id, :event_id)
    end
end
