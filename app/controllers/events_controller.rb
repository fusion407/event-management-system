class EventsController < ApplicationController
    wrap_parameters format: []

    def index
        events = Event.all
        render json: events
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def show
        event = Event.find_by(id: params[:id])
        render json: event
    end

    def showEventsRegistrations
        registrations = Event.find_by(id: params[:id]).registrations
        render json: registrations
    end

    def update
        event = Event.find_by(id: params[:id])
        event.update(event_params)
        render json: event, status: :accepted
    end

    def destroy
        event = Event.find_by(id: params[:id])
        event.destroy
        head :no_content
    end

    private

    def event_params
        params.permit(:title, :description, :location, :start_date, :end_date, :created_by)
    end
end
