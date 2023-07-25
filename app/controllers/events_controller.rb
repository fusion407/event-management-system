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
        event = find_event
        render json: event
    end

    def update
        event = find_event
        event.update(event_params)
        render json: event, status: :accepted
    end

    def destroy
        event = find_event
        event.destroy
        head :no_content
    end

    private

    def find_event
        Event.find_by(id: params[:id])
    end

    def event_params
        params.permit(:title, :description, :location, :start_date, :end_date)
    end
end
