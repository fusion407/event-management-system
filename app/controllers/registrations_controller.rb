class RegistrationsController < ApplicationController

    def index
        render json: Registration.all
    end
    
    def create
        registration = Registration.create!(reg_params.merge(user_id: @current_user.id))
        render json: registration, status: :created
    end


    def update
        registration = find_reg
        registration.update(reg_params.merge(user_id: @current_user.id))
        render json: registration
    end
    
    def destroy
        registration = find_reg
        registration.destroy
        head :no_content
    end

    private

    def find_reg
        Registration.find_by(id: params[:id])
    end

    def reg_params
        params.permit(:event_id, :participants)
    end
end
